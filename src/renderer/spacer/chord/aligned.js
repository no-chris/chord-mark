import _ from 'lodash';

const spacesAfterDefault = 2;
const emptyBeatSpaces = 1;

export default function space(chordLineInput, maxBeatsWidth) {
	const chordLine = _.cloneDeep(chordLineInput);

	let beatMaxWidth;

	chordLine.allBars.forEach((bar, barIndex) => {
		bar.allChords.forEach(chord => {
			chord.spacesWithin = maxBeatsWidth[barIndex][chord.beat] - chord.symbol.length;
			chord.spacesAfter = 0;

			if (chord.beat !== bar.timeSignature.beatCount) {
				chord.spacesAfter = spacesAfterDefault;

				for (let i = (chord.beat + 1); i < (chord.beat + chord.duration); i++) {
					beatMaxWidth = maxBeatsWidth[barIndex][i];

					chord.spacesAfter += (beatMaxWidth)
						? beatMaxWidth
						: emptyBeatSpaces;

					if (i !== bar.timeSignature.beatCount && beatMaxWidth) {
						chord.spacesAfter += spacesAfterDefault;
					}
				}
			}
		});
	});

	return chordLine;
}