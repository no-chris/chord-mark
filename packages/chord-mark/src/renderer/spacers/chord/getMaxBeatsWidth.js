import { getBeatString } from './getBeatString';

import lineTypes from '../../../parser/lineTypes';

/**
 * @param {SongLine[]} allLines
 * @param {Function} shouldAlignChords
 * @param {Boolean} shouldPrintSubBeatDelimiters
 * @returns {Array}
 */
export default function getMaxBeatsWidth(
	allLines,
	shouldAlignChords,
	shouldPrintSubBeatDelimiters = true
) {
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
							!chord.isInSubBeatGroup || chord.isLastOfSubBeat
					)
					.forEach((chord) => {
						const beatString = getBeatString(
							bar,
							chord.beat,
							shouldPrintSubBeatDelimiters
						);
						maxBeatsWidth[barIndex][chord.beat] = Math.max(
							maxBeatsWidth[barIndex][chord.beat],
							beatString.length
						);
					});
			});
		});

	return maxBeatsWidth;
}
