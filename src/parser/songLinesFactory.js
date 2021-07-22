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

import { getNthOfLabel } from './helper/songs';

const defaultTimeSignature = '4/4';

/**
 * @typedef {Object} SongLine
 * @type {Object}
 * @property {String} string - original line in source file
 * @property {String} type - chord|text|timeSignature|sectionLabel...
 * @property {Boolean} [isFromSectionRepeat] - line created by a section repeat directive (x3...)
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
 * @typedef {SongLine} SongTextLine
 * @type {Object}
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
	let currentSectionLabel;
	let currentSectionStats;

	let previousChordLine;
	let previousSectionLabelLine;

	let blueprint = [];
	let blueprintIndex = 0;
	let blueprintLine = '';

	let isRepeatingChords = false;
	let shouldRepeatSection = false;

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
	function getSectionLabelLine(string) {
		currentSectionLabel = parseSectionLabel(string);

		increaseSectionStats(currentSectionLabel.label);
		currentSectionStats = getSectionCount(currentSectionLabel.label);

		const line = {
			string,
			type: lineTypes.SECTION_LABEL,
			model: currentSectionLabel,
			index: currentSectionStats.count,
			indexWithoutRepeats: currentSectionStats.withoutRepeats,
			id: currentSectionLabel.label + currentSectionStats.count,
		};

		shouldRepeatSection = currentSectionLabel.repeatTimes > 0;
		previousSectionLabelLine = _cloneDeep(line);

		if (!isFirstOfLabel(currentSectionLabel, allLines)) {
			blueprint = getNthOfLabel(allLines, currentSectionLabel.label, 1);
			blueprintIndex = 0;
			isRepeatingChords = true;
		} else {
			isRepeatingChords = false;
		}
		return line;
	}

	/**
	 * @returns {SongTextLine}
	 */
	function getEmptyLine(string) {
		return {
			string,
			type: lineTypes.EMPTY_LINE,
		};
	}

	/**
	 * @returns {SongChordLine|SongTextLine}
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
			line = getTextLine(string);
		}
		return line;
	}

	/**
	 * @returns {SongChordLine|SongTextLine}
	 */
	function getPreviousChordLine(string) {
		if (previousChordLine) {
			return {
				..._cloneDeep(previousChordLine),
				isFromChordLineRepeater: true,
			};
		}
		return getTextLine(string);
	}

	/**
	 * @returns {SongTextLine}
	 */
	function getTextLine(string) {
		return {
			string,
			type: lineTypes.TEXT,
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

	function repeatSection(lineIndex, allSrcLines) {
		if (
			shouldRepeatSection &&
			isLastLineOfSection(lineIndex, allSrcLines)
		) {
			const toRepeat = getNthOfLabel(
				allLines,
				currentSectionLabel.label,
				currentSectionStats.count
			).map((line) => ({
				..._cloneDeep(line),
				isFromSectionRepeat: true,
			}));
			let sectionLabelLine;

			for (let i = 1; i < currentSectionLabel.repeatTimes; i++) {
				increaseSectionStats(currentSectionLabel.label, true);
				currentSectionStats = getSectionCount(
					currentSectionLabel.label
				);

				sectionLabelLine = {
					..._cloneDeep(previousSectionLabelLine),
					index: currentSectionStats.count,
					indexWithoutRepeats: currentSectionStats.withoutRepeats,
					id: currentSectionLabel.label + currentSectionStats.count,
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
				line = getSectionLabelLine(lineSrc);
			} else if (isChordLine(lineSrc)) {
				line = getChordLine(lineSrc);
			} else if (isChordLineRepeater(lineSrc)) {
				line = getPreviousChordLine(lineSrc);
			} else if (isEmptyLine(lineSrc)) {
				line = getEmptyLine(lineSrc);
			} else {
				line = getTextLine(lineSrc);
			}

			repeatLinesFromBlueprint(line);

			allLines.push(line);

			repeatSection(lineIndex, allSrcLines);
		},

		/**
		 * returns {SongLine[]}
		 */
		asArray() {
			return _cloneDeep(allLines);
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
		blueprintLine.type !== lineTypes.TEXT &&
		blueprintLine.type !== lineTypes.EMPTY_LINE &&
		blueprintLine.type !== currentLine.type &&
		currentLine.type !== lineTypes.EMPTY_LINE
	);
}

function isLastLineOfSection(lineIndex, allSrcLines) {
	const nextLine = allSrcLines[lineIndex + 1];
	return typeof nextLine === 'undefined' || isSectionLabel(nextLine);
}
