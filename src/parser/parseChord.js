import { Chords } from 'momo-chords';

const chords = new Chords();

/**
 * @see https://github.com/mdanka/momo-chords/blob/master/src/types.ts
 */

/**
 * @typedef {Object} ChordDef
 * @type {Object}
 * @property {ChordSymbol} symbol
 * @property {Object} structure - whether each degree (1, 2, 3... 11) is present (true/false) in the chord
 */

/**
 * @typedef {Object} ChordSymbol
 * @type {Object}
 * @property {String} rootNote
 * @property {String} [bassNote]
 * @property {String} quality
 * @property {Object} addeds
 * @property {Object} suspended
 * @property {String} [alteredFifth]
 * @property {String} [seventh]
 * @property {String} [ninth]
 * @property {String} [eleventh]
 * @property {String} [thirteenth]
 */

/**
 * @param chordString
 * @returns {ChordDef}
 */
export default function parseChord(chordString) {
	return chords.parse(chordString);
}
