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
 * @property {Boolean} [isRepeated] - if this automatically repeated (section repeat, auto repeat chords...)
 */

/**
 * @typedef {Object} SongChordLine extends SongLine
 * @type {Object}
 * @property {ChordLine} model
 */

/**
 * @typedef {Object} SongTextLine extends SongLine
 * @type {Object}
 */

/**
 * @typedef {Object} SongSectionLabelLine extends SongLine
 * @type {Object}
 * @property {SectionLabel} model
 * @property {Number} index - index of the section for a given label
 * @property {String} id
 */

export default function songLinesFactory() {
	const allLines = [];
	const allSectionLabels = [];

	let currentTimeSignature = parseTimeSignature(defaultTimeSignature);
	let currentSectionLabel;
	let currentSectionIndex;

	let previousChordLine;
	let previousSectionLabelLine;

	let blueprint = [];
	let blueprintIndex = 0;
	let blueprintLine = '';

	let isRepeatingChords = false;
	let shouldRepeatSection = false;

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
		currentSectionIndex = getSectionIndex(currentSectionLabel.label, allSectionLabels);

		const line = {
			string,
			type: lineTypes.SECTION_LABEL,
			model: currentSectionLabel,
			index: currentSectionIndex,
			id: currentSectionLabel.label + currentSectionIndex,
		};

		allSectionLabels.push(currentSectionLabel);

		shouldRepeatSection = (currentSectionLabel.repeatTimes > 0);
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
			const model = parseChordLine(string, { timeSignature: currentTimeSignature });
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
		return (previousChordLine) ? _cloneDeep(previousChordLine) : getTextLine(string);
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

	function repeatLinesFromBlueprint(line) {
		if (isRepeatingChords && line.type !== lineTypes.SECTION_LABEL) {
			blueprintLine = blueprint[blueprintIndex];
			while (shouldRepeatLineFromBlueprint(blueprintLine, line)) {
				if (blueprintLine.type === lineTypes.CHORD) {
					previousChordLine = _cloneDeep(blueprintLine);
				}
				allLines.push(_cloneDeep(blueprintLine));
				blueprintIndex++;
				blueprintLine = blueprint[blueprintIndex];
			}
			blueprintIndex++;
		}
	}

	function repeatSection(lineIndex, allSrcLines) {
		if (shouldRepeatSection && isLastLineOfSection(lineIndex, allSrcLines)) {
			const toRepeat = getNthOfLabel(allLines, currentSectionLabel.label, currentSectionIndex);
			let sectionLabelLine;
			for (let i = 1; i < currentSectionLabel.repeatTimes; i++) {
				sectionLabelLine = {
					..._cloneDeep(previousSectionLabelLine),
					index: ++currentSectionIndex,
					id: currentSectionLabel.label + currentSectionIndex,
					isRepeated: true,
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
		}
	};
}


function getSectionIndex(currentLabel, allSectionLabels) {
	return allSectionLabels.filter(sectionLabel => sectionLabel.label === currentLabel ).length + 1;
}

function isFirstOfLabel(currentLabel, allLines) {
	return allLines.every(line =>
		(line.type === 'sectionLabel' && line.model.label !== currentLabel.label)
	);
}

function shouldRepeatLineFromBlueprint(blueprintLine, currentLine) {
	return blueprintLine
		&& blueprintLine.type !== 'text'
		&& blueprintLine.type !== 'emptyLine'
		&& blueprintLine.type !== currentLine.type
		&& currentLine.type !== 'emptyLine';
}

function isLastLineOfSection(lineIndex, allSrcLines) {
	const nextLine = allSrcLines[lineIndex + 1];
	return typeof nextLine === 'undefined' || isSectionLabel(nextLine);
}
