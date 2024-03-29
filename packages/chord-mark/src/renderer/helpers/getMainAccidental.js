import syntax from '../../parser/syntax';

/**
 * Returns the most used accidental of a song.
 *
 * @param {SongChord[]} allChords
 * @returns {('flat'|'sharp')}
 */
export default function getMainAccidental(allChords) {
	let rootNote = '';
	let flatCount = 0;
	let sharpCount = 0;

	allChords
		.filter((chord) => chord.model !== syntax.noChord)
		.forEach((chord) => {
			rootNote = chord.model.formatted.rootNote;

			if (rootNote.length === 2) {
				let accidental = rootNote[1];

				if (accidental === 'b') {
					flatCount += chord.occurrences;
				} else {
					sharpCount += chord.occurrences;
				}
			}
		});

	return flatCount > sharpCount ? 'flat' : 'sharp';
}
