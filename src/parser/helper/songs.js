import _cloneDeep from 'lodash/cloneDeep';

/**
 * @param {SongLine[]} allLines
 * @param {Function} fn - to execute on each chord
 * @returns {SongLine[]}
 */
export function forEachChordInSong(allLines, fn) {
	const newLines = _cloneDeep(allLines);

	newLines.forEach(line => {
		if (line.type === 'chord') {
			line.model.allBars.forEach(bar => {
				bar.allChords.forEach(chord => {
					fn(chord);
				});
			});
		}
	});
	return newLines;
}

/**
 * @param {ChordLine[]} chordLine
 * @param {Function} fn - to execute on each chord
 * @returns {ChordLine[]}
 */
export function forEachChordInChordLine(chordLine, fn) {
	const newChordLine = _cloneDeep(chordLine);

	newChordLine.allBars.forEach(bar => {
		bar.allChords.forEach(chord => {
			fn(chord);
		});
	});

	return newChordLine;
}
