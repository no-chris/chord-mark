import syntax from '../../parser/syntax';
import symbols from '../symbols';
import { chordRendererFactory } from 'chord-symbol';

const defaultRenderChord = chordRendererFactory();

/**
 * @param {Chord|String} model
 * @param {Function} renderChord
 * @returns {string}
 */
export default function (model, renderChord = defaultRenderChord) {
	switch (model) {
		case syntax.noChord:
			return symbols.noChordSymbol;
		case symbols.barRepeat:
			return symbols.barRepeat;
		default:
			return renderChord(model);
	}
}
