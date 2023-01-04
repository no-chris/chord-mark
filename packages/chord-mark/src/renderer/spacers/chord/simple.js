import _cloneDeep from 'lodash/cloneDeep';
import symbols from '../../symbols';

/**
 * Simple spacer: simply happens default spaces value after each chord.
 * @param {ChordLine} chordLineInput
 */
export default function space(chordLineInput) {
	const chordLine = _cloneDeep(chordLineInput);

	chordLine.allBars.forEach((bar) => {
		spaceBar(bar);
	});

	return chordLine;
}

export function spaceBar(bar) {
	bar.allChords.forEach((chord) => {
		chord.spacesAfter =
			chord.isInSubBeatGroup && !chord.isLastOfSubBeat
				? symbols.spacesAfterSubBeatDefault
				: symbols.spacesAfterDefault;
		chord.spacesWithin = 0;
	});
}
