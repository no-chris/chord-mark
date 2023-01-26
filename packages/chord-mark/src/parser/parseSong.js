import _isArray from 'lodash/isArray';

import escapeHTML from '../core/dom/escapeHTML';
import stripTags from '../core/dom/stripTags';

import songLinesFactory from './songLinesFactory';

import getAllChordsInSong from './getAllChordsInSong';
import getAllKeysInSong from './getAllKeysInSong';

/**
 * @typedef {Object} Song
 * @type {Object}
 * @property {SongLine[]} allLines
 * @property {SongChord[]} allChords
 * @property {SongKeys} allKeys
 */

/**
 * @typedef {Object} SongChord
 * @type {Object}
 * @property {ChordDef} model
 * @property {number} occurrences - number of times the chord appears in the song
 * @property {number} duration - in beats, cumulated duration of the chord
 */

/**
 * @typedef {Object} SongKeys
 * @type {Object}
 * @property {KeyDeclaration} auto - automatically detected key
 * @property {KeyDeclaration[]} explicit - explicitly declared keys
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

	songLines.flagPositionedChords();

	const allLines = songLines.asArray();
	const allChords = getAllChordsInSong(allLines);
	const allKeys = getAllKeysInSong(allLines, allChords);

	return {
		allLines,
		allChords,
		allKeys,
	};
}
