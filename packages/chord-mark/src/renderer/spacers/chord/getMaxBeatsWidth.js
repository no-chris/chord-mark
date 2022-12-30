import getBeatString from './getBeatString';

import lineTypes from '../../../parser/lineTypes';

/**
 * @param {SongLine[]} allLines
 * @param {Function} shouldAlignChords
 * @returns {Array}
 */
export default function getMaxBeatsWidth(allLines, shouldAlignChords) {
	const maxBeatsWidth = [];

	allLines
		.filter((line) => line.type === lineTypes.CHORD)
		.filter((line) => !shouldAlignChords(line))
		.forEach((line) => {
			line.model.allBars.forEach((bar, barIndex) => {
				if (!maxBeatsWidth[barIndex]) {
					maxBeatsWidth[barIndex] = {};

					for (let i = 1; i <= bar.timeSignature.beatCount; i++) {
						maxBeatsWidth[barIndex][i] = 0;
					}
				}

				bar.allChords
					.filter(
						(chord) =>
							!chord.isInSubBeatGroup ||
							isLastChordOfSubBeat(chord)
					)
					.forEach((chord) => {
						const beatString = getBeatString(bar, chord.beat);
						maxBeatsWidth[barIndex][chord.beat] = Math.max(
							maxBeatsWidth[barIndex][chord.beat],
							beatString.length
						);
					});
			});
		});

	return maxBeatsWidth;
}

const isLastChordOfSubBeat = (chord) => {
	return (
		chord.isInSubBeatGroup &&
		chord.subBeatChordIndex === chord.subBeatChordCount - 1
	);
};
