import lineTypes from '../../../parser/lineTypes';
import symbols from '../../symbols';

/**
 * @param {SongLine[]} allLines
 * @param {Boolean} alignChordsWithLyrics
 * @returns {Array}
 */
export default function getMaxBeatsWidth(allLines, alignChordsWithLyrics) {
	const maxBeatsWidth = [];

	allLines
		.filter((line) => line.type === lineTypes.CHORD)
		.filter(
			(line) => !(alignChordsWithLyrics && line.model.hasPositionedChords)
		)
		.forEach((line) => {
			line.model.allBars.forEach((bar, barIndex) => {
				if (!maxBeatsWidth[barIndex]) {
					maxBeatsWidth[barIndex] = {};

					for (let i = 1; i <= bar.timeSignature.beatCount; i++) {
						maxBeatsWidth[barIndex][i] = 0;
					}
				}

				bar.allChords.forEach((chord) => {
					let symbolLength = chord.symbol.length;
					if (bar.shouldPrintChordsDuration) {
						symbolLength += symbols.chordBeat.repeat(
							chord.duration
						).length;
					}
					maxBeatsWidth[barIndex][chord.beat] = Math.max(
						maxBeatsWidth[barIndex][chord.beat],
						symbolLength
					);
				});
			});
		});

	return maxBeatsWidth;
}
