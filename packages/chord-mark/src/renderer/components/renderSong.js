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

import songTpl from './tpl/song.js';
import getChordSymbol from '../helpers/getChordSymbol';
import getMainAccidental from '../helpers/getMainAccidental';
import renderAllSectionsLabels from '../helpers/renderAllSectionLabels';

import { chordRendererFactory } from 'chord-symbol';

import lineTypes from '../../parser/lineTypes';
import replaceRepeatedBars from '../replaceRepeatedBars';

import { defaultTimeSignature } from '../../parser/syntax';

/**
 * @param {Song} parsedSong
 * @param {('auto'|'flat'|'sharp')} accidentalsType
 * @param {Boolean} alignBars
 * @param {Boolean} alignChordsWithLyrics
 * @param {Boolean} autoRepeatChords
 * @param {('all'|'lyrics'|'chords'|'chordsFirstLyricLine')} chartType
 * @param {Function|Boolean} chordSymbolRenderer - must be an instance of a ChordSymbol renderer, returned by chordRendererFactory()
 * @param {Function|Boolean} customRenderer
 * @param {Boolean} expandSectionCopy
 * @param {Boolean} expandSectionMultiply
 * @param {Boolean} harmonizeAccidentals
 * @param {Boolean|('none'|'max'|'core')} simplifyChords
 * @param {('never'|'uneven'|'always')} printChordsDuration
 * @param {('never'|'grids'|'always')} printBarSeparators - mainly useful when converting a ChordMark file to a format that
 * do not allow bar separators to be printed (e.g. Ultimate Guitar)
 * @param {Boolean} printSubBeatDelimiters - mainly useful when converting a ChordMark file to a format that
 * do not allow sub-beat groups to be printed (e.g. Ultimate Guitar)
 * @param {Boolean} printInlineTimeSignatures - mainly useful when converting a ChordMark file to a format that
 * do not allow inline time signatures to be printed (e.g. Ultimate Guitar)
 * @param {Number} transposeValue
 * @param {Boolean} useShortNamings
 * @returns {String} rendered HTML
 */
// eslint-disable-next-line max-lines-per-function
export default function renderSong(
	parsedSong,
	{
		accidentalsType = 'auto',
		alignBars = true,
		alignChordsWithLyrics = true,
		autoRepeatChords = true,
		chartType = 'all',
		chordSymbolRenderer = false,
		customRenderer = false,
		expandSectionCopy = true,
		expandSectionMultiply = false,
		harmonizeAccidentals = true,
		printChordsDuration = 'uneven',
		printBarSeparators = 'always',
		printSubBeatDelimiters: shouldPrintSubBeatDelimiters = true,
		printInlineTimeSignatures: shouldPrintInlineTimeSignatures = true,
		simplifyChords = 'none',
		transposeValue = 0,
		useShortNamings = true,
	} = {}
) {
	let { allLines, allChords } = parsedSong;

	let isFirstLyricLineOfSection = false;
	let contextTimeSignature = defaultTimeSignature.string;
	let previousTimeSignature = defaultTimeSignature.string;

	allLines = renderChords()
		.map(addPrintChordsDurationsFlag)
		.map(addPrintBarTimeSignatureFlag)
		.filter(shouldRenderLine)
		.map((line) => {
			return replaceRepeatedBars(line, { alignChordsWithLyrics });
		});

	const maxBeatsWidth = getMaxBeatsWidth(
		allLines,
		shouldAlignChordsWithLyrics,
		shouldPrintSubBeatDelimiters
	);

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
		const renderChord = getChordSymbolRenderer();

		return forEachChordInSong(allLines, (chord) => {
			chord.symbol = getChordSymbol(chord.model, renderChord);
		});
	}

	function getChordSymbolRenderer() {
		if (typeof chordSymbolRenderer === 'function') {
			return chordSymbolRenderer;
		}
		const accidental =
			accidentalsType === 'auto'
				? getMainAccidental(allChords)
				: accidentalsType;

		return chordRendererFactory({
			simplify: simplifyChords,
			useShortNamings,
			transposeValue,
			harmonizeAccidentals,
			useFlats: accidental === 'flat',
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

	function addPrintBarTimeSignatureFlag(line) {
		if (line.type === lineTypes.TIME_SIGNATURE) {
			contextTimeSignature = line.string;
		} else if (line.type === lineTypes.CHORD) {
			line.model.allBars.forEach((bar, barIndex) => {
				bar.shouldPrintBarTimeSignature =
					(barIndex === 0 &&
						bar.timeSignature.string !== contextTimeSignature) ||
					(barIndex > 0 &&
						bar.timeSignature.string !== previousTimeSignature);
				previousTimeSignature = bar.timeSignature.string;
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
				alignBars && !shouldAlignChordsWithLyrics(line)
					? alignedChordSpacer(
							line.model,
							maxBeatsWidth,
							shouldPrintBarSeparators(line.model),
							shouldPrintSubBeatDelimiters
					  )
					: simpleChordSpacer(line.model);

			const nextLine = allLines[lineIndex + 1];
			if (shouldAlignChordsWithLyrics(line)) {
				const { chordLine, lyricsLine } = chordLyricsSpacer(
					spaced,
					nextLine.model,
					{
						shouldPrintBarSeparators: shouldPrintBarSeparators(
							line.model
						),
						shouldPrintSubBeatDelimiters,
						shouldPrintInlineTimeSignatures,
					}
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
					rendered = renderChordLineModel(line.model, {
						shouldPrintBarSeparators: shouldPrintBarSeparators(
							line.model
						),
						shouldPrintSubBeatDelimiters,
						shouldPrintInlineTimeSignatures,
					});
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

	function shouldAlignChordsWithLyrics(line) {
		return (
			chartType === 'all' &&
			alignChordsWithLyrics &&
			line.model.hasPositionedChords
		);
	}

	/**
	 * @param {ChordLine} line
	 * @returns {boolean}
	 */
	function shouldPrintBarSeparators(line) {
		return (
			printBarSeparators === 'always' ||
			(printBarSeparators === 'grids' && !line.hasPositionedChords)
		);
	}
}
