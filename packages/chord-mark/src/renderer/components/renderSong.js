import getMaxBeatsWidth from '../spacers/chord/getMaxBeatsWidth';

import simpleChordSpacer from '../spacers/chord/simple';
import alignedChordSpacer from '../spacers/chord/aligned';
import chordLyricsSpacer from '../spacers/chord/chordLyrics';

import { forEachChordInSong } from '../../parser/helper/songs';

import renderChordLineModel from './renderChordLine';
import renderEmptyLine from './renderEmptyLine';
import renderLine from './renderLine';
import renderSectionLabelLine from './renderSectionLabel';
import renderLyricLine from './renderLyricLine';
import renderTimeSignature from './renderTimeSignature';

import songTpl from './tpl/song.hbs';
import getChordSymbol from '../helpers/getChordSymbol';
import getMainAccidental from '../helpers/getMainAccidental';
import renderAllSectionsLabels from '../helpers/renderAllSectionLabels';

import { chordRendererFactory } from 'chord-symbol';

import lineTypes from '../../parser/lineTypes';
import replaceRepeatedBars from '../replaceRepeatedBars';

/**
 * @param {Song} parsedSong
 * @param {Boolean} alignBars
 * @param {Boolean} alignChordsWithLyrics
 * @param {('all'|'lyrics'|'chords'|'chordsFirstLyricLine')} chartType
 * @param {Number} transposeValue
 * @param {('auto'|'flat'|'sharp')} accidentalsType
 * @param {Boolean} harmonizeAccidentals
 * @param {Boolean} expandSectionMultiply
 * @param {Boolean} expandSectionCopy
 * @param {Boolean} autoRepeatChords
 * @param {Boolean|('none'|'max'|'core')} simplifyChords
 * @param {Boolean} useShortNamings
 * @param {('never'|'uneven'|'always')} printChordsDuration
 * @param {Function|Boolean} customRenderer
 * @returns {String} rendered HTML
 */
// eslint-disable-next-line max-lines-per-function
export default function renderSong(
	parsedSong,
	{
		alignBars = true,
		alignChordsWithLyrics = true,
		chartType = 'all',
		transposeValue = 0,
		accidentalsType = 'auto',
		harmonizeAccidentals = true,
		expandSectionMultiply = false,
		expandSectionCopy = true,
		autoRepeatChords = true,
		simplifyChords = 'none',
		useShortNamings = true,
		printChordsDuration = 'uneven',
		customRenderer = false,
	} = {}
) {
	let { allLines, allChords } = parsedSong;

	let isFirstLyricLineOfSection = false;

	allLines = renderChords()
		.map(addPrintChordsDurationsFlag)
		.filter(shouldRenderLine)
		.map((line) => {
			return replaceRepeatedBars(line, { alignChordsWithLyrics });
		});

	const maxBeatsWidth = getMaxBeatsWidth(allLines, shouldAlignChords);

	allLines = renderAllSectionsLabels(allLines, {
		expandSectionMultiply,
	});
	allLines.forEach(spaceChordLine);

	const allRenderedLines = renderAllLines();

	if (customRenderer) {
		return customRenderer(allLines, allRenderedLines, {
			alignChordsWithLyrics,
			alignBars,
		});
	} else {
		return songTpl({ song: allRenderedLines.join('') });
	}

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

	function addPrintChordsDurationsFlag(line) {
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
		const shouldSkipAutoRepeatChordLine =
			line.isFromAutoRepeatChords && !autoRepeatChords;

		const shouldSkipSectionMultiplyLine =
			line.isFromSectionMultiply && !expandSectionMultiply;

		const shouldSkipSectionCopyLine =
			line.type !== lineTypes.SECTION_LABEL &&
			line.isFromSectionCopy &&
			!expandSectionCopy;

		return (
			!shouldSkipSectionMultiplyLine &&
			!shouldSkipAutoRepeatChordLine &&
			!shouldSkipSectionCopyLine
		);
	}

	function isFiltered(line) {
		if (chartType === 'chordsFirstLyricLine') {
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
			(['chords', 'chordsFirstLyricLine'].includes(chartType) &&
				line.type === lineTypes.LYRIC) ||
			(chartType === 'lyrics' && line.type === lineTypes.CHORD)
		);
	}

	function spaceChordLine(line, lineIndex) {
		if (line.type === lineTypes.CHORD) {
			let spaced =
				alignBars && !shouldAlignChords(line)
					? alignedChordSpacer(line.model, maxBeatsWidth)
					: simpleChordSpacer(line.model);

			const nextLine = allLines[lineIndex + 1];
			if (shouldAlignChords(line)) {
				const { chordLine, lyricsLine } = chordLyricsSpacer(
					spaced,
					nextLine.model
				);
				allLines[lineIndex + 1].model = lyricsLine;
				spaced = chordLine;
			}
			allLines[lineIndex].model = spaced;
		}
	}

	function renderAllLines() {
		return allLines
			.map((line) => {
				let rendered;

				if (line.type === lineTypes.CHORD) {
					rendered = renderChordLineModel(line.model);
				} else if (line.type === lineTypes.EMPTY_LINE) {
					rendered = renderEmptyLine();
				} else if (line.type === lineTypes.SECTION_LABEL) {
					rendered = renderSectionLabelLine(line);
				} else if (line.type === lineTypes.TIME_SIGNATURE) {
					rendered = renderTimeSignature(line);
				} else {
					rendered = renderLyricLine(line, {
						alignChordsWithLyrics,
						chartType,
					});
				}
				return renderLine(rendered, {
					isFromSectionMultiply: line.isFromSectionMultiply,
					isFromAutoRepeatChords: line.isFromAutoRepeatChords,
					isFromChordLineRepeater: line.isFromChordLineRepeater,
					isFromSectionCopy: line.isFromSectionCopy,
				});
			})
			.filter(Boolean);
	}

	function shouldAlignChords(line) {
		return (
			chartType === 'all' &&
			alignChordsWithLyrics &&
			line.model.hasPositionedChords
		);
	}
}
