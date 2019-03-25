import { Chords } from 'momo-chords';

const chords = new Chords();

/**
 * @param {ChordDef} chordDef
 * @returns {string}
 */
export default function(chordDef) {
	return chords.print(chordDef.symbol);
}