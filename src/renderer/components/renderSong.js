import getMaxBeatsWidth from '../spacers/chord/getMaxBeatsWidth';

import simpleChordSpacer from '../spacers/chord/simple';
import alignedChordSpacer from '../spacers/chord/aligned';
import chordLyricsSpacer from '../spacers/chord/chordLyrics';

import { forEachChordInSong } from '../../parser/helper/songs';

import renderChordLineModel from './renderChordLine';
import renderEmptyLine from './renderEmptyLine';
import renderLine from './renderLine';
import renderSectionLabel from './renderSectionLabel';
import renderLyricLine from './renderLyricLine';
import renderTimeSignature from './renderTimeSignature';

import songTpl from './tpl/song.hbs';
import getChordSymbol from '../helpers/getChordSymbol';
import getSectionsStats from '../helpers/getSectionsStats';
import getMainAccidental from '../helpers/getMainAccidental';

import { chordRendererFactory } from 'chord-symbol';

import lineTypes from '../../parser/lineTypes';
import replaceRepeatedBars from '../replaceRepeatedBars';

/**
 * @param {Song} parsedSong
 * @param {Boolean} alignBars
 * @param {Boolean} alignChordsWithLyrics
 * @param {('all'|'lyrics'|'chords'|'chordsFirstLyricLine')} chordsAndLyricsDisplay
 * @param {Number} transposeValue
 * @param {('auto'|'flat'|'sharp')} accidentalsType
 * @param {Boolean} harmonizeAccidentals
 * @param {Boolean} expandSectionRepeats
 * @param {Boolean} autoRepeatChords
 * @param {Boolean|('none'|'max'|'core')} simplifyChords
 * @param {Boolean} useShortNamings
 * @param {('never'|'uneven'|'always')} printChordsDuration
 * @returns {String} rendered HTML
 */
// eslint-disable-next-line max-lines-per-function
export default function renderSong(
	parsedSong,
	{
		alignBars = false,
		alignChordsWithLyrics = false,
		chordsAndLyricsDisplay = 'all',
		transposeValue = 0,
		accidentalsType = 'auto',
		harmonizeAccidentals = true,
		expandSectionRepeats = true,
		autoRepeatChords = true,
		simplifyChords = 'none',
		useShortNamings = true,
		printChordsDuration = 'never',
	} = {}
) {
	let { allLines, allChords } = parsedSong;

	let shouldSkipRepeatedSectionLine = false;
	let isFirstLyricLineOfSection = false;

	allLines = renderChords()
		.map(addPrintChordDurationsFlag)
		.filter(shouldRenderLine)
		.map((line) => {
			return replaceRepeatedBars(line, { alignChordsWithLyrics });
		});

	const sectionsStats = getSectionsStats(allLines);
	const maxBeatsWidth = getMaxBeatsWidth(allLines);

	const song = renderAllLines().join('\n');

	return songTpl({ song });

	function renderChords() {
		const accidental =
			accidentalsType === 'auto'
				? getMainAccidental(allChords)
				: accidentalsType;

		const renderChord = chordRendererFactory({
			simplify: simplifyChords,
			useShortNamings,
			transposeValue,
			harmonizeAccidentals,
			useFlats: accidental === 'flat',
		});

		return forEachChordInSong(allLines, (chord) => {
			chord.symbol = getChordSymbol(chord.model, renderChord);
		});
	}

	function addPrintChordDurationsFlag(line) {
		if (line.type === lineTypes.CHORD) {
			line.model.allBars.forEach((bar) => {
				bar.shouldPrintChordsDuration = shouldPrintChordsDuration(bar);
			});
		}
		return line;
	}

	function shouldPrintChordsDuration(bar) {
		return (
			bar.allChords.length > 1 &&
			((printChordsDuration === 'uneven' &&
				bar.hasUnevenChordsDurations) ||
				printChordsDuration === 'always')
		);
	}

	function shouldRenderLine(line) {
		return shouldRepeatLines(line) && !isFiltered(line);
	}

	function shouldRepeatLines(line) {
		if (line.type === lineTypes.SECTION_LABEL) {
			shouldSkipRepeatedSectionLine =
				line.isFromSectionRepeat === true && !expandSectionRepeats;
		}
		const shouldSkipAutoRepeatChordLine =
			line.isFromAutoRepeatChords && !autoRepeatChords;

		return !shouldSkipRepeatedSectionLine && !shouldSkipAutoRepeatChordLine;
	}

	function isFiltered(line) {
		if (chordsAndLyricsDisplay === 'chordsFirstLyricLine') {
			if (line.type === lineTypes.SECTION_LABEL) {
				isFirstLyricLineOfSection = true;
				return false;
			}
			if (isFirstLyricLineOfSection && line.type === lineTypes.LYRIC) {
				isFirstLyricLineOfSection = false;
				return false;
			}
		}

		return (
			(['chords', 'chordsFirstLyricLine'].includes(
				chordsAndLyricsDisplay
			) &&
				line.type === lineTypes.LYRIC) ||
			(chordsAndLyricsDisplay === 'lyrics' &&
				line.type === lineTypes.CHORD)
		);
	}

	function renderAllLines() {
		return allLines
			.map((line, lineIndex, allFilteredLines) => {
				let rendered;

				if (line.type === lineTypes.CHORD) {
					let spaced = alignBars
						? alignedChordSpacer(line.model, maxBeatsWidth)
						: simpleChordSpacer(line.model);

					const nextLine = allFilteredLines[lineIndex + 1];
					if (shouldAlignChords(line)) {
						const { chordLine, lyricsLine } = chordLyricsSpacer(
							spaced,
							nextLine.model
						);
						allFilteredLines[lineIndex + 1].model = lyricsLine;
						spaced = chordLine;
					}

					rendered = renderChordLineModel(spaced);
				} else if (line.type === lineTypes.EMPTY_LINE) {
					rendered = renderEmptyLine();
				} else if (line.type === lineTypes.SECTION_LABEL) {
					rendered = renderSectionLabel(line, {
						sectionsStats,
						expandSectionRepeats,
					});
				} else if (line.type === lineTypes.TIME_SIGNATURE) {
					rendered = renderTimeSignature(line);
				} else {
					rendered = renderLyricLine(line, {
						alignChordsWithLyrics,
						chordsAndLyricsDisplay,
					});
				}
				return renderLine(rendered, {
					isFromSectionRepeat: line.isFromSectionRepeat,
					isFromAutoRepeatChords: line.isFromAutoRepeatChords,
					isFromChordLineRepeater: line.isFromChordLineRepeater,
				});
			})
			.filter(Boolean);
	}

	function shouldAlignChords(line) {
		return (
			chordsAndLyricsDisplay === 'all' &&
			alignChordsWithLyrics &&
			line.model.hasPositionedChords
		);
	}
}
