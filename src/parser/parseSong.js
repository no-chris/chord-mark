import _isArray from 'lodash/isArray';
import _cloneDeep from 'lodash/cloneDeep';

import escapeHTML from '../core/dom/escapeHTML';
import stripTags from '../core/dom/stripTags';

import isChordLine from './matchers/isChordLine';
import isSectionLabel from './matchers/isSectionLabel';
import isTimeSignature from './matchers/isTimeSignatureString';

import parseChordLine from './parseChordLine';
import parseSectionLabel from './parseSectionLabel';
import parseTimeSignature from './parseTimeSignature';

import getAllChordsInSong from './getAllChordsInSong';
import { getNthOfLabel } from './helper/songs';

/**
 * @typedef {Object} SongLine
 * @type {Object}
 * @property {String} string - original line in source file
 * @property {String} type - chord|text|timeSignature|sectionLabel...
 * @property {ChordLine|TimeSignature|SectionLabel} model
 * @property {Number} [index] - if sectionLabel, index of the section for a given label
 * @property {Number} [id] - if sectionLabel, section id
 */

/**
 * @typedef {Object} Song
 * @type {Object}
 * @property {SongLine[]} allLines
 * @property {SongChord[]} allChords
 */

/**
 * @typedef {Object} SongChord
 * @type {Object}
 * @property {ChordDef} model
 * @property {number} occurrences - number of times the chord appears in the song
 */

/**
 * @type {string}
 */
const defaultTimeSignature = '4/4';

/**
 * @param {string|array} song
 * @returns {Song}
 */
export default function parseSong(song) {
	const songLines = (!_isArray(song)) ? song.split('\n') : song;

	let sectionLabel = '';
	let sectionIndex = 0;
	let sectionBlueprint = [];
	let blueprintIndex = 0;
	let blueprintLine;
	let isRepeatingChords = false;

	let timeSignature = parseTimeSignature(defaultTimeSignature);

	const allSectionLabels = [];
	const allLines = [];

	/**
	 * @type {SongLine[]}
	 */
	songLines
		.map(escapeHTML)
		.map(stripTags)
		.map(string => ({ string }))
		.forEach((line) => {
			if (isTimeSignature(line.string)) {
				timeSignature = parseTimeSignature(line.string);

				line.type = 'time-signature';
				line.model = timeSignature;

			} else if (isSectionLabel(line.string)) {
				sectionLabel = parseSectionLabel(line.string);
				sectionIndex = getSectionIndex(sectionLabel.label, allSectionLabels);

				line.type = 'sectionLabel';
				line.model = sectionLabel;
				line.index = sectionIndex;
				line.id = sectionLabel.label + sectionIndex;

				allSectionLabels.push(sectionLabel);

				if (!isFirstOfType(sectionLabel, allLines)) {
					sectionBlueprint = getNthOfLabel(allLines, sectionLabel.label, 1);
					isRepeatingChords = true;
					blueprintIndex = 0;
				} else {
					isRepeatingChords = false;
				}

			} else if (isChordLine(line.string)) {
				try {
					line.type = 'chord';
					line.model = parseChordLine(line.string, { timeSignature });

				} catch (e) {
					line.type = 'text';
				}

			} else {
				line.type = 'text';
			}

			if (isRepeatingChords && line.type !== 'sectionLabel') {
				blueprintLine = sectionBlueprint[blueprintIndex];
				while (blueprintLine && blueprintLine.type !== 'text' && blueprintLine.type !== line.type) {
					allLines.push(_cloneDeep(blueprintLine));
					blueprintIndex++;
					blueprintLine = sectionBlueprint[blueprintIndex];
				}
				blueprintIndex++;
			}

			allLines.push(line);
		});


	const allChords = getAllChordsInSong(allLines);

	return {
		allLines,
		allChords
	};
}

function getSectionIndex(currentLabel, allSectionLabels) {
	return allSectionLabels.filter(sectionLabel => sectionLabel.label === currentLabel ).length + 1;
}

function isFirstOfType(currentLabel, allLines) {
	return allLines.filter(line =>
		(line.type === 'sectionLabel' && line.model.label === currentLabel.label)
	).length === 0;
}
