/*eslint-disable max-lines-per-function,max-lines */
import _cloneDeep from 'lodash/cloneDeep';
import lineTypes from './lineTypes';

import isChordLine from './matchers/isChordLine';
import isChordLineRepeater from './matchers/isChordLineRepeater';
import isEmptyLine from './matchers/isEmptyLine';
import isSectionLabel from './matchers/isSectionLabel';
import isTimeSignature from './matchers/isTimeSignature';

import parseChordLine from './parseChordLine';
import parseKeyDeclaration from './parseKeyDeclaration';
import parseLyricLine from './parseLyricLine';
import parseSectionLabel from './parseSectionLabel';
import parseTimeSignature from './parseTimeSignature';

import clearSpaces from './helper/clearSpaces';

import { forEachChordInChordLine, getNthOfLabel } from './helper/songs';
import isKeyDeclaration from './matchers/isKeyDeclaration';

const defaultTimeSignature = '4/4';

/**
 * @typedef {Object} SongLine
 * @type {Object}
 * @property {String} string - original line in source file
 * @property {String} type - chord|lyric|timeSignature|sectionLabel...
 * @property {Boolean} [isFromSectionMultiply] - line created by a section multiply directive (#chorus x3, for ex)
 * @property {Boolean} [isFromSectionCopy] - line created by a section copy (eg empty # section)
 * @property {Boolean} [isFromAutoRepeatChords] - line created by auto repeats of chords from a section to another
 */

/**
 * @typedef {SongLine} SongChordLine
 * @type {Object}
 * @property {ChordLine} model
 * @property {Boolean} [isFromChordLineRepeater] - line created by the chordLine repeat symbol
 */

/**
 * @typedef {SongLine} SongTimeSignatureLine
 * @type {Object}
 * @property {TimeSignature} model
 */

/**
 * @typedef {SongLine} SongLyricLine
 * @type {Object}
 * @property {LyricLine} model
 */

/**
 * @typedef {SongLine} SongSectionLabelLine
 * @type {Object}
 * @property {SectionLabel} model
 * @property {Number} index - index of the section for a given label (#v, #v x2, #v => 1, 2, 3, 4)
 * @property {Number} indexWithoutMultiply - idem, but not taking repeats into account (#v, #v x2, #v => 1, 2, 3)
 * @property {String} id
 */

/**
 * @typedef {SongLine} SongKeyDeclarationLine
 * @type {Object}
 * @property {KeyDeclaration} model
 * @property {String} [symbol] - rendering property
 */

export default function songLinesFactory() {
	const allLines = [];
	const sectionsStats = {};

	let currentTimeSignature = parseTimeSignature(defaultTimeSignature);
	let currentSection;
	let currentSectionStats;

	let currentKey = {};

	const MAX_PREVIOUS_CHORD_LINES = 2;
	let previousChordLines = [];
	let previousSectionLabelLine;

	let pendingBarContext = null;
	let pendingSplitLineIndex = null;
	let splitLyricLineCount = 0;

	function invalidatePendingSplit() {
		if (pendingSplitLineIndex !== null) {
			const splitLine = allLines[pendingSplitLineIndex];
			allLines[pendingSplitLineIndex] = getLyricLine(splitLine.string);
		}
		pendingBarContext = null;
		pendingSplitLineIndex = null;
		splitLyricLineCount = 0;
	}

	let blueprintPendingBeatCount = null;
	let blueprint = [];
	let blueprintIndex = 0;

	let shouldMultiplySection = false;
	let shouldCopySection = false;

	/**
	 * @returns {SongTimeSignatureLine}
	 */
	function getTimeSignatureLine(string) {
		currentTimeSignature = parseTimeSignature(string);

		return {
			string,
			type: lineTypes.TIME_SIGNATURE,
			model: currentTimeSignature,
		};
	}

	/**
	 * @returns {SongKeyDeclarationLine}
	 */
	function getKeyDeclarationLine(string) {
		currentKey = parseKeyDeclaration(string);
		return {
			string,
			type: lineTypes.KEY_DECLARATION,
			model: _cloneDeep(currentKey),
		};
	}

	/**
	 * @returns {SongSectionLabelLine}
	 */
	function getSectionLabelLine(string, lineIndex, allSrcLines) {
		currentSection = parseSectionLabel(string);

		increaseSectionStats(currentSection.label);
		currentSectionStats = getSectionCount(currentSection.label);

		const line = {
			string,
			type: lineTypes.SECTION_LABEL,
			model: currentSection,
			index: currentSectionStats.count,
			indexWithoutMultiply: currentSectionStats.withoutMultiply,
			id: currentSection.label + currentSectionStats.count,
		};

		shouldCopySection =
			isCurrentSectionEmpty(lineIndex, allSrcLines) &&
			currentSectionStats.count > 1;
		if (shouldCopySection) {
			line.isFromSectionCopy = true;
		}

		shouldMultiplySection = currentSection.multiplyTimes > 0;
		previousSectionLabelLine = _cloneDeep(line);

		blueprint =
			currentSectionStats.count > 1
				? getNthOfLabel(allLines, currentSection.label, 1)
				: [];
		blueprintIndex = 0;
		blueprintPendingBeatCount = null;

		return line;
	}

	/**
	 * @returns {SongLyricLine}
	 */
	function getEmptyLine(string) {
		return {
			string,
			type: lineTypes.EMPTY_LINE,
		};
	}

	/**
	 * @returns {SongChordLine|SongLyricLine}
	 */
	function getChordLine(string) {
		let line;
		if (pendingBarContext !== null && splitLyricLineCount === 0) {
			invalidatePendingSplit();
		}
		try {
			const lineModel = parseChordLine(string, {
				timeSignature: currentTimeSignature,
				originalKey: currentKey,
				continueBar: pendingBarContext,
			});
			line = {
				string,
				type: lineTypes.CHORD,
				model: lineModel,
			};
			if (lineModel.hasContinuation) {
				pendingBarContext = lineModel.pendingBar;
				pendingSplitLineIndex = allLines.length; // will be pushed next
				splitLyricLineCount = 0;
			} else {
				const wasContinuation = pendingBarContext !== null;
				pendingBarContext = null;
				pendingSplitLineIndex = null;
				splitLyricLineCount = 0;
				if (!wasContinuation) {
					addPreviousChordLine(line);
				}
			}
		} catch {
			invalidatePendingSplit();
			line = getLyricLine(string);
		}
		return line;
	}

	function addPreviousChordLine(line) {
		if (previousChordLines.length >= MAX_PREVIOUS_CHORD_LINES) {
			previousChordLines.shift();
		}
		previousChordLines.push(line);
	}

	/**
	 * @returns {SongChordLine|SongLyricLine}
	 */
	function getRepeatedChordLine(string) {
		const repeatString = clearSpaces(string);
		const sliceStart = -repeatString.length;
		const sliceEnd = sliceStart < -1 ? sliceStart + 1 : undefined;

		if (previousChordLines.length >= repeatString.length) {
			return {
				..._cloneDeep(
					...previousChordLines.slice(sliceStart, sliceEnd)
				),
				isFromChordLineRepeater: true,
			};
		}
		return getLyricLine(string);
	}

	/**
	 * @returns {SongLyricLine}
	 */
	function getLyricLine(string) {
		return {
			string,
			type: lineTypes.LYRIC,
			model: parseLyricLine(string),
		};
	}

	function increaseSectionStats(label, isMultiplied = false) {
		if (!sectionsStats[label]) {
			sectionsStats[label] = {
				count: 1,
				withoutMultiply: 1,
			};
		} else {
			sectionsStats[label].count++;
			if (!isMultiplied) {
				sectionsStats[label].withoutMultiply++;
			}
		}
	}

	function getSectionCount(label) {
		return sectionsStats[label];
	}

	function handleBlueprintChordLine(blueprintLine) {
		const bpModel = blueprintLine.model;
		const isSplitLine = bpModel.hasContinuation;
		const isContinuationLine =
			bpModel.allBars?.length > 0 && bpModel.allBars[0].isContinuation;

		// Check continuation first — a chained split is both continuation AND split
		if (isContinuationLine) {
			const isCompatible =
				pendingBarContext !== null &&
				pendingBarContext.currentBeatCount ===
					blueprintPendingBeatCount;
			if (!isCompatible) {
				invalidatePendingSplit();
				return 'skip';
			}
			pendingBarContext = null;
			pendingSplitLineIndex = null;
			splitLyricLineCount = 0;
		}
		if (isSplitLine) {
			blueprintPendingBeatCount =
				bpModel.pendingBar?.currentBeatCount;
			pendingBarContext = _cloneDeep(bpModel.pendingBar);
			pendingSplitLineIndex = allLines.length;
			splitLyricLineCount = 0;
			return 'repeat';
		}
		if (isContinuationLine) {
			// Continuation-only (not a split) — already validated above
			return 'repeat';
		}
		addPreviousChordLine(_cloneDeep(blueprintLine));
		return 'repeat';
	}

	function repeatLinesFromBlueprint(line) {
		if (blueprint.length && line.type !== lineTypes.SECTION_LABEL) {
			let blueprintLine = blueprint[blueprintIndex];
			let repeatedLine;

			while (shouldRepeatLineFromBlueprint(blueprintLine, line)) {
				if (blueprintLine.type === lineTypes.CHORD) {
					const action =
						handleBlueprintChordLine(blueprintLine);
					if (action === 'skip') {
						blueprintIndex++;
						blueprintLine = blueprint[blueprintIndex];
						continue;
					}
				}
				repeatedLine = {
					..._cloneDeep(blueprintLine),
					isFromAutoRepeatChords: true,
				};
				allLines.push(repeatedLine);
				blueprintIndex++;
				blueprintLine = blueprint[blueprintIndex];
			}
			blueprintIndex++;
		}
	}

	function shouldRepeatLineFromBlueprint(blueprintLine, currentLine) {
		const nonRepeatableLinesTypes = [lineTypes.LYRIC, lineTypes.EMPTY_LINE];
		return (
			blueprintLine &&
			!nonRepeatableLinesTypes.includes(blueprintLine.type) &&
			blueprintLine.type !== currentLine.type &&
			currentLine.type !== lineTypes.EMPTY_LINE
		);
	}

	function copySection() {
		if (shouldCopySection) {
			const toCopy = getNthOfLabel(
				allLines,
				currentSection.label,
				currentSection.copyIndex
			).map((line) => ({
				..._cloneDeep(line),
				isFromSectionCopy: true,
			}));

			if (!toCopy.length) return;

			if (endsWithEmptyLine(toCopy)) {
				toCopy.pop();
			}

			allLines.push(..._cloneDeep(toCopy));

			shouldCopySection = false;
		}
	}

	function isCurrentSectionEmpty(lineIndex, allSrcLines) {
		const remainingLines = allSrcLines.slice(lineIndex + 1);

		let nextSectionIndex = remainingLines.findIndex((line) =>
			isSectionLabel(line)
		);

		if (nextSectionIndex === 0) {
			return true;
		}

		const currentSectionContent = remainingLines
			.slice(0, nextSectionIndex !== -1 ? nextSectionIndex : undefined)
			.filter(
				(line) =>
					!(
						isTimeSignature(line) ||
						isKeyDeclaration(line) ||
						isEmptyLine(line)
					)
			);

		return currentSectionContent.length === 0;
	}

	function multiplySection(lineIndex, allSrcLines) {
		if (
			shouldMultiplySection &&
			isLastLineOfSection(lineIndex, allSrcLines)
		) {
			const toMultiply = getNthOfLabel(
				allLines,
				currentSection.label,
				currentSectionStats.count
			).map((line) => ({
				..._cloneDeep(line),
				isFromSectionMultiply: true,
			}));
			let sectionLabelLine;

			for (let i = 1; i < currentSection.multiplyTimes; i++) {
				increaseSectionStats(currentSection.label, true);
				currentSectionStats = getSectionCount(currentSection.label);

				sectionLabelLine = {
					..._cloneDeep(previousSectionLabelLine),
					index: currentSectionStats.count,
					indexWithoutMultiply: currentSectionStats.withoutMultiply,
					id: currentSection.label + currentSectionStats.count,
					isFromSectionMultiply: true,
				};
				allLines.push(sectionLabelLine);
				allLines.push(..._cloneDeep(toMultiply));
			}
		}
	}

	return {
		addLine(lineSrc, lineIndex, allSrcLines) {
			let line;
			if (isTimeSignature(lineSrc)) {
				invalidatePendingSplit();
				line = getTimeSignatureLine(lineSrc);
			} else if (isSectionLabel(lineSrc)) {
				invalidatePendingSplit();
				line = getSectionLabelLine(lineSrc, lineIndex, allSrcLines);
			} else if (isChordLine(lineSrc)) {
				line = getChordLine(lineSrc);
			} else if (isChordLineRepeater(lineSrc)) {
				invalidatePendingSplit();
				line = getRepeatedChordLine(lineSrc);
			} else if (isEmptyLine(lineSrc)) {
				invalidatePendingSplit();
				line = getEmptyLine(lineSrc);
			} else if (isKeyDeclaration(lineSrc)) {
				invalidatePendingSplit();
				line = getKeyDeclarationLine(lineSrc);
			} else {
				line = getLyricLine(lineSrc);
			}

			repeatLinesFromBlueprint(line);

			if (
				line.type === lineTypes.LYRIC &&
				pendingSplitLineIndex !== null
			) {
				splitLyricLineCount++;
				if (splitLyricLineCount > 1) {
					invalidatePendingSplit();
				}
			}

			allLines.push(line);

			copySection();
			multiplySection(lineIndex, allSrcLines);
		},

		/**
		 * returns {SongLine[]}
		 */
		asArray() {
			invalidatePendingSplit();
			return _cloneDeep(allLines);
		},

		flagPositionedChords() {
			let nextLine;
			let lineChordCount;

			allLines.forEach((line, lineIndex) => {
				nextLine = allLines[lineIndex + 1];

				if (shouldPositionChords(line, nextLine)) {
					lineChordCount = 0;
					line.model.hasPositionedChords = true;
					line.model = forEachChordInChordLine(
						line.model,
						(chord) => {
							chord.isPositioned =
								lineChordCount <
								nextLine.model.chordPositions.length;
							lineChordCount++;
						}
					);
				} else if (line.type === lineTypes.CHORD) {
					line.model.hasPositionedChords = false;
					line.model = forEachChordInChordLine(
						line.model,
						(chord) => {
							chord.isPositioned = false;
						}
					);
				}
			});
		},
	};
}

function isLastLineOfSection(lineIndex, allSrcLines) {
	const nextLine = allSrcLines[lineIndex + 1];
	return typeof nextLine === 'undefined' || isSectionLabel(nextLine);
}

function shouldPositionChords(line, nextLine) {
	return (
		line.type === lineTypes.CHORD &&
		nextLine &&
		nextLine.type === lineTypes.LYRIC &&
		nextLine.model.chordPositions.length > 0
	);
}

function endsWithEmptyLine(allLines) {
	const lastLine = allLines[allLines.length - 1];
	return lastLine.type === lineTypes.EMPTY_LINE;
}
