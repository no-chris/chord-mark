import chordSymbolTpl from './chordSymbol.hbs';

export default {
	render(chordSymbol) {
		return chordSymbolTpl({ chordSymbol });
	}
};