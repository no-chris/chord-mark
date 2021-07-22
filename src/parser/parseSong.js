import _isArray from 'lodash/isArray';

import escapeHTML from '../core/dom/escapeHTML';
import stripTags from '../core/dom/stripTags';

import songLinesFactory from './songLinesFactory';

import getAllChordsInSong from './getAllChordsInSong';

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
 * @param {string|array} songSrc
 * @returns {Song}
 */
export default function parseSong(songSrc) {
	const songArray = !_isArray(songSrc) ? songSrc.split('\n') : songSrc;

	const songLines = songLinesFactory();

	/**
	 * @type {SongLine[]}
	 */
	songArray.map(escapeHTML).map(stripTags).forEach(songLines.addLine);

	const allLines = songLines.asArray();
	const allChords = getAllChordsInSong(allLines);

	return {
		allLines,
		allChords,
	};
}
