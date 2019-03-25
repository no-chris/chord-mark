/**
 * @param {SongLine[]} allLines
 * @returns {Array}
 */
export default function getMaxBeatsWidth(allLines) {
	const maxBeatsWidth = [];

	allLines
		.filter(line => line.type === 'chord')
		.forEach(line => {
			line.model.allBars.forEach((bar, barIndex) => {
				if (!maxBeatsWidth[barIndex]) {
					maxBeatsWidth[barIndex] = {};

					for (let i = 1; i <= bar.timeSignature.beatCount; i++) {
						maxBeatsWidth[barIndex][i] = 0;
					}
				}
				bar.allChords.forEach(chord => {
					maxBeatsWidth[barIndex][chord.beat] = Math.max(
						maxBeatsWidth[barIndex][chord.beat],
						chord.symbol.length
					);
				});
			});
		});

	return maxBeatsWidth;
}
