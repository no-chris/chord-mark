/*eslint-disable max-lines-per-function */
import _cloneDeep from 'lodash/cloneDeep';
import lineTypes from './lineTypes';

import isTimeSignature from './matchers/isTimeSignatureString';
import isSectionLabel from './matchers/isSectionLabel';
import isChordLine from './matchers/isChordLine';
import isChordLineRepeater from './matchers/isChordLineRepeater';
import isEmptyLine from './matchers/isEmptyLine';

import parseTimeSignature from './parseTimeSignature';
import parseChordLine from './parseChordLine';
import parseSectionLabel from './parseSectionLabel';
import parseLyricLine from './parseLyricLine';

import { forEachChordInChordLine, getNthOfLabel } from './helper/songs';

const defaultTimeSignature = '4/4';

/**
 * @typedef {Object} SongLine
 * @type {Object}
 * @property {String} string - original line in source file
 * @property {String} type - chord|lyric|timeSignature|sectionLabel...
 * @property {Boolean} [isFromSectionRepeat] - line created by a section repeat directive (x3...)
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
 * @property {Number} indexWithoutRepeats - idem, but not taking repeats into account (#v, #v x2, #v => 1, 2, 3)
 * @property {String} id
 */

export default function songLinesFactory() {
	const allLines = [];
	const sectionsStats = {};

	let currentTimeSignature = parseTimeSignature(defaultTimeSignature);
	let currentSection;
	let currentSectionStats;

	let previousChordLine;
	let previousSectionLabelLine;

	let blueprint = [];
	let blueprintIndex = 0;
	let blueprintLine = '';

	let isRepeatingChords = false;
	let shouldRepeatSection = false;
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
			indexWithoutRepeats: currentSectionStats.withoutRepeats,
			id: currentSection.label + currentSectionStats.count,
		};

		shouldCopySection =
			isCurrentSectionEmpty(lineIndex, allSrcLines) &&
			currentSectionStats.count > 1;
		if (shouldCopySection) {
			line.isFromSectionCopy = true;
		}

		shouldRepeatSection = currentSection.repeatTimes > 0;
		previousSectionLabelLine = _cloneDeep(line);

		if (!isFirstOfLabel(currentSection, allLines)) {
			blueprint = getNthOfLabel(allLines, currentSection.label, 1);
			blueprintIndex = 0;
			isRepeatingChords = true;
		} else {
			isRepeatingChords = false;
		}
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
		try {
			const model = parseChordLine(string, {
				timeSignature: currentTimeSignature,
			});
			line = {
				string,
				type: lineTypes.CHORD,
				model,
			};
			previousChordLine = line;
		} catch (e) {
			line = getLyricLine(string);
		}
		return line;
	}

	/**
	 * @returns {SongChordLine|SongLyricLine}
	 */
	function getPreviousChordLine(string) {
		if (previousChordLine) {
			return {
				..._cloneDeep(previousChordLine),
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

	function increaseSectionStats(label, isRepeated = false) {
		if (!sectionsStats[label]) {
			sectionsStats[label] = {
				count: 1,
				withoutRepeats: 1,
			};
		} else {
			sectionsStats[label].count++;
			if (!isRepeated) {
				sectionsStats[label].withoutRepeats++;
			}
		}
	}

	function getSectionCount(label) {
		return sectionsStats[label];
	}

	function repeatLinesFromBlueprint(line) {
		if (isRepeatingChords && line.type !== lineTypes.SECTION_LABEL) {
			blueprintLine = blueprint[blueprintIndex];
			let repeatedLine;

			while (shouldRepeatLineFromBlueprint(blueprintLine, line)) {
				if (blueprintLine.type === lineTypes.CHORD) {
					previousChordLine = _cloneDeep(blueprintLine);
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
			.filter((line) => !(isTimeSignature(line) || isEmptyLine(line)));

		return currentSectionContent.length === 0;
	}

	function repeatSection(lineIndex, allSrcLines) {
		if (
			shouldRepeatSection &&
			isLastLineOfSection(lineIndex, allSrcLines)
		) {
			const toRepeat = getNthOfLabel(
				allLines,
				currentSection.label,
				currentSectionStats.count
			).map((line) => ({
				..._cloneDeep(line),
				isFromSectionRepeat: true,
			}));
			let sectionLabelLine;

			for (let i = 1; i < currentSection.repeatTimes; i++) {
				increaseSectionStats(currentSection.label, true);
				currentSectionStats = getSectionCount(currentSection.label);

				sectionLabelLine = {
					..._cloneDeep(previousSectionLabelLine),
					index: currentSectionStats.count,
					indexWithoutRepeats: currentSectionStats.withoutRepeats,
					id: currentSection.label + currentSectionStats.count,
					isFromSectionRepeat: true,
				};
				allLines.push(sectionLabelLine);
				allLines.push(..._cloneDeep(toRepeat));
			}
		}
	}

	return {
		addLine(lineSrc, lineIndex, allSrcLines) {
			let line;
			if (isTimeSignature(lineSrc)) {
				line = getTimeSignatureLine(lineSrc);
			} else if (isSectionLabel(lineSrc)) {
				line = getSectionLabelLine(lineSrc, lineIndex, allSrcLines);
			} else if (isChordLine(lineSrc)) {
				line = getChordLine(lineSrc);
			} else if (isChordLineRepeater(lineSrc)) {
				line = getPreviousChordLine(lineSrc);
			} else if (isEmptyLine(lineSrc)) {
				line = getEmptyLine(lineSrc);
			} else {
				line = getLyricLine(lineSrc);
			}

			repeatLinesFromBlueprint(line);

			allLines.push(line);

			copySection();
			repeatSection(lineIndex, allSrcLines);
		},

		/**
		 * returns {SongLine[]}
		 */
		asArray() {
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

function isFirstOfLabel(currentLabel, allLines) {
	return allLines.every(
		(line) =>
			line.type === lineTypes.SECTION_LABEL &&
			line.model.label !== currentLabel.label
	);
}

function shouldRepeatLineFromBlueprint(blueprintLine, currentLine) {
	return (
		blueprintLine &&
		blueprintLine.type !== lineTypes.LYRIC &&
		blueprintLine.type !== lineTypes.EMPTY_LINE &&
		blueprintLine.type !== currentLine.type &&
		currentLine.type !== lineTypes.EMPTY_LINE
	);
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
