import getMaxBeatsWidth from '../spacers/chord/getMaxBeatsWidth';

import simpleChordSpacer from '../spacers/chord/simple';
import alignedChordSpacer from '../spacers/chord/aligned';
import chordLyricsSpacer from '../spacers/chord/chordLyrics';

import renderChordLineModel from './renderChordLine';
import renderEmptyLine from './renderEmptyLine';
import renderKeyDeclaration from './renderKeyDeclaration';
import renderLine from './renderLine';
import renderLyricLine from './renderLyricLine';
import renderSectionLabelLine from './renderSectionLabel';
import renderTimeSignature from './renderTimeSignature';

import songTpl from './tpl/song.js';
import getChordSymbol from '../helpers/getChordSymbol';
import renderAllSectionsLabels from '../helpers/renderAllSectionLabels';
import { transposeKey } from '../../parser/helper/keyHelpers';

import { chordRendererFactory } from 'chord-symbol';

import lineTypes from '../../parser/lineTypes';
import replaceRepeatedBars from '../replaceRepeatedBars';

import { defaultTimeSignature } from '../../parser/syntax';

/**
 * @param {Song} parsedSong
 * @param {Object} options
 * @param {('auto'|'flat'|'sharp')} options.accidentalsType
 * @param {Boolean} options.alignBars
 * @param {Boolean} options.alignChordsWithLyrics
 * @param {Boolean} options.autoRepeatChords
 * @param {('all'|'lyrics'|'chords'|'chordsFirstLyricLine')} options.chartType
 * @param {Function|Boolean} options.chordSymbolRenderer - must be an instance of a ChordSymbol renderer, returned by chordRendererFactory()
 * @param {('chord'|'roman')} options.symbolType
 * @param {Function|Boolean} options.customRenderer
 * @param {Boolean} options.expandSectionCopy
 * @param {Boolean} options.expandSectionMultiply
 * @param {Boolean|('none'|'max'|'core')} options.simplifyChords
 * @param {('never'|'uneven'|'always')} options.printChordsDuration
 * @param {('never'|'grids'|'always')} options.printBarSeparators - mainly useful when converting a ChordMark file to a format that
 * do not allow bar separators to be printed (e.g. Ultimate Guitar)
 * @param {Boolean} options.printSubBeatDelimiters - mainly useful when converting a ChordMark file to a format that
 * do not allow sub-beat groups to be printed (e.g. Ultimate Guitar)
 * @param {Boolean} options.printInlineTimeSignatures - mainly useful when converting a ChordMark file to a format that
 * do not allow inline time signatures to be printed (e.g. Ultimate Guitar)
 * @param {Number} options.transposeValue
 * @param {Boolean} options.useShortNamings
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
		printChordsDuration = 'uneven',
		printBarSeparators = 'always',
		printSubBeatDelimiters: shouldPrintSubBeatDelimiters = true,
		printInlineTimeSignatures: shouldPrintInlineTimeSignatures = true,
		simplifyChords = 'none',
		symbolType = 'chord',
		transposeValue = 0,
		useShortNamings = true,
	} = {}
) {
	let { allLines, allKeys } = parsedSong;

	let isFirstLyricLineOfSection = false;
	let contextTimeSignature = defaultTimeSignature.string;
	let previousBarTimeSignature;

	let currentKey;

	if (allKeys.auto) {
		currentKey = transposeKey(
			allKeys.auto,
			transposeValue,
			accidentalsType
		);
	}
	let renderChord = getChordSymbolRenderer();

	allLines = allLines
		.map(renderChords)
		.map(addPrintChordsDurationsFlag)
		.map(addPrintBarTimeSignatureFlag)
		.filter(shouldRenderLine)
		.map((line) => {
			return replaceRepeatedBars(line, { alignChordsWithLyrics });
		});

	const maxBeatsWidth = getMaxBeatsWidth(allLines, {
		shouldAlignChordsWithLyrics,
		shouldPrintSubBeatDelimiters,
		symbolType,
	});

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

	function renderChords(line) {
		if (line.type === lineTypes.KEY_DECLARATION) {
			currentKey = transposeKey(
				line.model,
				transposeValue,
				accidentalsType
			);

			renderChord = getChordSymbolRenderer();
			line.symbol = currentKey.string;
		} else if (line.type === lineTypes.CHORD) {
			line.model.allBars.forEach((bar) => {
				bar.allChords.forEach((chord) => {
					chord.symbol = getChordSymbol(chord.model, renderChord);
				});
			});
		}
		return line;
	}

	function getChordSymbolRenderer() {
		if (typeof chordSymbolRenderer === 'function') {
			return chordSymbolRenderer;
		}
		const accidentals =
			accidentalsType === 'auto'
				? currentKey
					? currentKey.accidental
					: 'sharp'
				: accidentalsType;

		return chordRendererFactory({
			simplify: simplifyChords,
			useShortNamings,
			transposeValue,
			accidentals,
		});
	}

	function getSectionWrapperClasses(line) {
		return [
			'cmSection',
			'cmSection-' + line.model.rendered.label.replace(/[\d\s]/gi, ''),
		];
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
						bar.timeSignature.string !== previousBarTimeSignature);
				previousBarTimeSignature = bar.timeSignature.string;
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

	function isLastLine(i) {
		return allLines.length - 1 === i;
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
					? alignedChordSpacer(line.model, maxBeatsWidth, {
							shouldPrintBarSeparators: shouldPrintBarSeparators(
								line.model
							),
							shouldPrintSubBeatDelimiters,
							symbolType,
					  })
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
						symbolType,
					}
				);
				allLines[lineIndex + 1].model = lyricsLine;
				spaced = chordLine;
			}
			allLines[lineIndex].model = spaced;
		}
	}

	function renderAllLines() {
		let lineIsInASection = false;

		return allLines
			.map((line, i) => {
				let rendered;
				let shouldOpenSection = false;
				let sectionWrapperClasses = [];
				let shouldClosePriorSection;

				if (line.type === lineTypes.CHORD) {
					rendered = renderChordLineModel(line.model, {
						symbolType,
						shouldPrintBarSeparators: shouldPrintBarSeparators(
							line.model
						),
						shouldPrintSubBeatDelimiters,
						shouldPrintInlineTimeSignatures,
					});
				} else if (line.type === lineTypes.EMPTY_LINE) {
					rendered = renderEmptyLine();
				} else if (line.type === lineTypes.SECTION_LABEL) {
					shouldOpenSection = true;
					shouldClosePriorSection = lineIsInASection;
					lineIsInASection = true;

					sectionWrapperClasses = getSectionWrapperClasses(line);
					rendered = renderSectionLabelLine(line);
				} else if (line.type === lineTypes.TIME_SIGNATURE) {
					rendered = renderTimeSignature(line);
				} else if (line.type === lineTypes.KEY_DECLARATION) {
					rendered = renderKeyDeclaration(line);
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
					shouldOpenSection,
					shouldClosePriorSection,
					shouldCloseFinalSection: isLastLine(i) && lineIsInASection,
					sectionWrapperClasses,
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
