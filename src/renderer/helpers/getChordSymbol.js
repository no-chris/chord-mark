import syntax from '../../parser/syntax';
import { chordRendererFactory } from 'chord-symbol';

const noChordSymbol = 'NC';
const defaultRenderChord = chordRendererFactory();

/**
 * @param {Chord|String} model
 * @param {Function} renderChord
 * @returns {string}
 */
export default function(model, renderChord = defaultRenderChord) {
	return (model === syntax.noChord) ? noChordSymbol : renderChord(model);
}
