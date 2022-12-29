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
			chord.spacesAfter =
				chord.isInSubBeatGroup && !isLastSubBeatChord(chord)
					? symbols.spacesAfterSubBeatDefault
					: symbols.spacesAfterDefault;
			chord.spacesWithin = 0;
		});
	});

	return chordLine;
}

function isLastSubBeatChord(chord) {
	return chord.subBeatChordIndex === chord.subBeatChordCount - 1;
}
