import _cloneDeep from 'lodash/cloneDeep';
import symbols from '../../symbols';

export default function space(chordLineInput, maxBeatsWidth) {
	const chordLine = _cloneDeep(chordLineInput);

	let beatMaxWidth;

	chordLine.allBars.forEach((bar, barIndex) => {
		bar.allChords.forEach((chord) => {
			let symbolLength = chord.symbol.length;
			if (bar.shouldPrintChordsDuration) {
				symbolLength += symbols.chordBeat.repeat(chord.duration).length;
			}

			chord.spacesWithin =
				maxBeatsWidth[barIndex][chord.beat] - symbolLength;
			chord.spacesAfter = 0;

			if (chord.beat !== bar.timeSignature.beatCount) {
				chord.spacesAfter = symbols.spacesAfterDefault;

				for (
					let i = chord.beat + 1;
					i < chord.beat + chord.duration;
					i++
				) {
					beatMaxWidth = maxBeatsWidth[barIndex][i];

					chord.spacesAfter += beatMaxWidth
						? beatMaxWidth
						: symbols.emptyBeatSpaces;

					if (i !== bar.timeSignature.beatCount && beatMaxWidth) {
						chord.spacesAfter += symbols.spacesAfterDefault;
					}
				}
			}
		});
	});

	return chordLine;
}
