import _ from 'lodash';

import { forEachChordInSong } from './helper/songs';

/**
 * @param {SongLine[]} allLines
 * @returns {SongChord[]}
 */
export default function getAllChordsInSong(allLines) {
	const allChords = [];
	let i;

	forEachChordInSong(allLines, chord => {
		i = _.findIndex(allChords, o => _.isEqual(o.model, chord.model));

		if (i === -1) {
			allChords.push({
				model: _.cloneDeep(chord.model),
				occurrences: 1
			});
		} else {
			allChords[i].occurrences++;
		}
	});

	return allChords;
}
