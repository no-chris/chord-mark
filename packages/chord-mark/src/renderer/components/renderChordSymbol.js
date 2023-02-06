import chordSymbolTpl from './tpl/chordSymbol.js';
import symbols from '../symbols';

/**
 * @param {ChordLineChord} chord
 * @param {Object} options
 * @param {Boolean} options.shouldPrintChordsDuration
 * @param {Boolean} options.shouldPrintSubBeatOpener
 * @param {Boolean} options.shouldPrintSubBeatCloser
 * @param {String} options.symbolType
 * @returns {String} rendered html
 */
export default function renderChordSymbol(
	chord,
	{
		shouldPrintChordsDuration = false,
		shouldPrintSubBeatOpener = false,
		shouldPrintSubBeatCloser = false,
		symbolType = 'chord',
	}
) {
	const shouldPrintChordSymbol =
		symbolType === 'chord' ||
		chord.model === symbols.barRepeat ||
		chord.model === symbols.noChordSymbol;

	const chordSymbol = shouldPrintChordSymbol
		? chord.symbol
		: chord.model.numeral.symbol;

	return chordSymbolTpl({
		chordSymbol,
		chordDuration: shouldPrintChordsDuration
			? symbols.chordBeat.repeat(chord.duration)
			: false,
		subBeatGroupOpener: shouldPrintSubBeatOpener
			? symbols.subBeatGroupOpener
			: '',
		subBeatGroupCloser: shouldPrintSubBeatCloser
			? symbols.subBeatGroupCloser
			: '',
		numeralType: !shouldPrintChordSymbol ? chord.model.numeral.type : '',
	});
}
