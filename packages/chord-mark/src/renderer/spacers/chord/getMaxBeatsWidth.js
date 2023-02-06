import { getBeatString } from './getBeatString';

import lineTypes from '../../../parser/lineTypes';

/**
 * @param {SongLine[]} allLines
 * @param {Object} options
 * @param {Function} options.shouldAlignChordsWithLyrics
 * @param {Boolean} options.shouldPrintSubBeatDelimiters
 * @param {('chord'|'roman')} options.symbolType
 * @returns {Array}
 */
export default function getMaxBeatsWidth(
	allLines,
	{
		shouldAlignChordsWithLyrics,
		shouldPrintSubBeatDelimiters = true,
		symbolType = 'chord',
	} = {}
) {
	const maxBeatsWidth = [];

	allLines
		.filter((line) => line.type === lineTypes.CHORD)
		.filter((line) => !shouldAlignChordsWithLyrics(line))
		.forEach((line) => {
			line.model.allBars
				.filter((bar) => !bar.lineHadTimeSignatureChange)
				.forEach((bar, barIndex) => {
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
							const beatString = getBeatString(bar, chord.beat, {
								shouldPrintSubBeatDelimiters,
								symbolType,
							});
							maxBeatsWidth[barIndex][chord.beat] = Math.max(
								maxBeatsWidth[barIndex][chord.beat],
								beatString.length
							);
						});
				});
		});

	return maxBeatsWidth;
}
