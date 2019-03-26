import _isArray from 'lodash/isArray';

import escapeHTML from '../core/dom/escapeHTML';
import stripTags from '../core/dom/stripTags';

import isChordLine from './isChordLine';
import isTimeSignature from './isTimeSignatureString';

import parseTimeSignature from './parseTimeSignature';
import parseChordLine from './parseChordLine';

import getAllChordsInSong from './getAllChordsInSong';

/**
 * @typedef {Object} SongLine
 * @type {Object}
 * @property {String} string - original line in source file
 * @property {String} type - chord|text|time-signature|...
 * @property {ChordLine|TimeSignature} model
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

	let timeSignature = parseTimeSignature(defaultTimeSignature);

	const allLines = songLines
		.map(escapeHTML)
		.map(stripTags)
		.map(string => ({ string }))
		.map(line => {
			if (isTimeSignature(line.string)) {
				timeSignature = parseTimeSignature(line.string);

				line.type = 'time-signature';
				line.model = timeSignature;

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
			return line;
		});


	const allChords = getAllChordsInSong(allLines);

	return {
		allLines,
		allChords
	};
}
