import chordSymbolTpl from './tpl/chordSymbol.js';
import symbols from '../symbols';

/**
 * @param {ChordLineChord} chord
 * @param {Boolean} shouldPrintChordsDuration
 * @param {Boolean} isFirstChordOfSubBeatGroup
 * @param {Boolean} isLastChordOfSubBeatGroup
 * @returns {String} rendered html
 */
export default function renderChordSymbol(
	chord,
	shouldPrintChordsDuration = false,
	isFirstOfSubBeat = false,
	isLastOfSubBeat = false
) {
	return chordSymbolTpl({
		chordSymbol: chord.symbol,
		chordDuration: shouldPrintChordsDuration
			? symbols.chordBeat.repeat(chord.duration)
			: false,
		subBeatGroupOpener: isFirstOfSubBeat ? symbols.subBeatGroupOpener : '',
		subBeatGroupCloser: isLastOfSubBeat ? symbols.subBeatGroupCloser : '',
	});
}
