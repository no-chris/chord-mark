import _findIndex from 'lodash/findIndex';
import _isEqual from 'lodash/isEqual';
import _cloneDeep from 'lodash/cloneDeep';

import { forEachChordInSong } from './helper/songs';

/**
 * @param {SongLine[]} allLines
 * @returns {SongChord[]}
 */
export default function getAllChordsInSong(allLines) {
	const allChords = [];
	let i;

	forEachChordInSong(allLines, (chord) => {
		i = _findIndex(allChords, (o) => _isEqual(o.model, chord.model));

		if (i === -1) {
			allChords.push({
				model: _cloneDeep(chord.model),
				occurrences: 1,
			});
		} else {
			allChords[i].occurrences++;
		}
	});

	return allChords;
}
