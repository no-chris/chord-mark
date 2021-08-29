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

/**
 * @param {Song} parsedSong
 * @param {Boolean} alignBars
 * @param {Boolean} alignChordsWithLyrics
 * @param {Number} transposeValue
 * @param {('auto'|'flat'|'sharp')} accidentalsType
 * @param {Boolean} harmonizeAccidentals
 * @param {Boolean} expandSectionRepeats
 * @param {Boolean} autoRepeatChords
 * @param {Boolean|('max'|'core')} simplifyChords
 * @param {Boolean} useShortNamings
 * @returns {String} rendered HTML
 */
export default function renderSong(
	parsedSong,
	{
		alignBars = false,
		alignChordsWithLyrics = true,
		transposeValue = 0,
		accidentalsType = 'auto',
		harmonizeAccidentals = true,
		expandSectionRepeats = true,
		autoRepeatChords = true,
		simplifyChords = 'none',
		useShortNamings = true,
	} = {}
) {
	let { allLines, allChords } = parsedSong;

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

	allLines = forEachChordInSong(allLines, (chord) => {
		chord.symbol = getChordSymbol(chord.model, renderChord);
	});

	const sectionsStats = getSectionsStats(allLines);
	const maxBeatsWidth = getMaxBeatsWidth(allLines);

	let shouldSkipRepeatedSectionLine = false;

	const song = allLines
		.filter(shouldRenderLine)
		.map((line, lineIndex, allFilteredLines) => {
			let rendered;

			if (line.type === lineTypes.CHORD) {
				let spaced = alignBars
					? alignedChordSpacer(line.model, maxBeatsWidth)
					: simpleChordSpacer(line.model);

				const nextLine = allFilteredLines[lineIndex + 1];
				if (shouldAlignChords(alignChordsWithLyrics, nextLine)) {
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
				rendered = renderLyricLine(line);
			}
			return renderLine(rendered, {
				isFromSectionRepeat: line.isFromSectionRepeat,
				isFromAutoRepeatChords: line.isFromAutoRepeatChords,
				isFromChordLineRepeater: line.isFromChordLineRepeater,
			});
		})
		.filter(Boolean)
		.join('\n');

	function shouldRenderLine(line) {
		if (line.type === lineTypes.SECTION_LABEL) {
			shouldSkipRepeatedSectionLine =
				line.isFromSectionRepeat === true && !expandSectionRepeats;
		}
		const shouldSkipAutoRepeatChordLine =
			line.isFromAutoRepeatChords && !autoRepeatChords;

		return !shouldSkipRepeatedSectionLine && !shouldSkipAutoRepeatChordLine;
	}

	return songTpl({ song });
}

function shouldAlignChords(alignChordsWithLyrics, nextLine) {
	return (
		alignChordsWithLyrics && nextLine && nextLine.type === lineTypes.LYRIC
	);
}
