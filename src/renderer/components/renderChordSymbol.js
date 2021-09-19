import chordSymbolTpl from './tpl/chordSymbol.hbs';
import symbols from '../symbols';

/**
 * @param {ChordLineChord} chord
 * @param {Boolean} shouldPrintChordsDuration
 * @returns {String} rendered html
 */
export default function renderChordSymbol(
	chord,
	shouldPrintChordsDuration = false
) {
	return chordSymbolTpl({
		chordSymbol: chord.symbol,
		chordDuration: shouldPrintChordsDuration
			? symbols.chordBeat.repeat(chord.duration)
			: false,
	});
}
