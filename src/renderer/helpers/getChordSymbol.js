import syntax from '../../parser/syntax';
import { chordRendererFactory } from 'chord-symbol';

const noChordSymbol = 'NC';
const renderChord = chordRendererFactory({ useShortNamings: true});

/**
 * @param {Chord|String} model
 * @returns {string}
 */
export default function(model) {
	return (model === syntax.noChord) ? noChordSymbol : renderChord(model);
}
