import chordSymbolTpl from './tpl/chordSymbol.js';
import symbols from '../symbols';

/**
 * @param {ChordLineChord} chord
 * @param {Boolean} shouldPrintChordsDuration
 * @param {Boolean} shouldPrintSubBeatOpener
 * @param {Boolean} shouldPrintSubBeatCloser
 * @returns {String} rendered html
 */
export default function renderChordSymbol(
	chord,
	shouldPrintChordsDuration = false,
	shouldPrintSubBeatOpener = false,
	shouldPrintSubBeatCloser = false
) {
	return chordSymbolTpl({
		chordSymbol: chord.symbol,
		chordDuration: shouldPrintChordsDuration
			? symbols.chordBeat.repeat(chord.duration)
			: false,
		subBeatGroupOpener: shouldPrintSubBeatOpener
			? symbols.subBeatGroupOpener
			: '',
		subBeatGroupCloser: shouldPrintSubBeatCloser
			? symbols.subBeatGroupCloser
			: '',
	});
}
