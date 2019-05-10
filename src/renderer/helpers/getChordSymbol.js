import syntax from '../../parser/syntax';
import { Chords } from 'momo-chords';

const noChordSymbol = 'NC';
const chords = new Chords();

/**
 * @param {ChordDef|String} model
 * @returns {string}
 */
export default function(model) {
	return (model === syntax.noChord) ? noChordSymbol : chords.print(model.symbol);
}
