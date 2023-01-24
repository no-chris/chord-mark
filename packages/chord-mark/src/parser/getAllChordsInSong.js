import _findIndex from 'lodash/findIndex';
import _isEqual from 'lodash/isEqual';
import _cloneDeep from 'lodash/cloneDeep';

import { forEachChordInSong } from './helper/songs';
import syntax from './syntax';

/**
 * @param {SongLine[]} allLines
 * @returns {SongChord[]}
 */
export default function getAllChordsInSong(allLines) {
	const allChords = [];
	let i;

	forEachChordInSong(allLines, (chord) => {
		if (chord.model !== syntax.noChord) {
			i = _findIndex(allChords, (o) => _isEqual(o.model, chord.model));

			if (i === -1) {
				allChords.push({
					model: _cloneDeep(chord.model),
					occurrences: 1,
					duration: chord.duration,
				});
				i = allChords.length - 1;
			} else {
				allChords[i].occurrences++;
				allChords[i].duration += chord.duration;
			}
		}
	});

	if (allChords.length) {
		allChords[0].isFirst = true;
		allChords[i].isLast = true;
	}

	return allChords;
}
