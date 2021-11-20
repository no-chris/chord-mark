import _cloneDeep from 'lodash/cloneDeep';
import symbols from '../../symbols';

/**
 * Simple spacer: simply happens default spaces value after each chord.
 * @param {ChordLine} chordLineInput
 */
export default function space(chordLineInput) {
	const chordLine = _cloneDeep(chordLineInput);

	chordLine.allBars.forEach((bar) => {
		bar.allChords.forEach((chord) => {
			chord.spacesAfter = symbols.spacesAfterDefault;
		});
	});

	return chordLine;
}
