import chordSymbolTpl from './tpl/chordSymbol.hbs';

/**
 * @param {String} chordSymbol
 * @returns {String} rendered html
 */
export default function renderChordSymbol(chordSymbol) {
	return chordSymbolTpl({ chordSymbol });
}
