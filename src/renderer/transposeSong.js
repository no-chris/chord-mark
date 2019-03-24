import _ from 'lodash';
import transposeChord from './transposeChord';
import getMainAccidental from './getMainAccidental';

import { forEachChordInSong } from './helper/songs';

/**
 * @param {SongLine[]} allLines
 * @param {SongChord[]} allChords
 * @param transposeValue
 * @param accidentalsType
 * @param harmonizeAccidentals
 * @returns {SongLine[]} - with added transposedModel property on each chord if needed
 */
export default function transposeSong(allLines, allChords, {
	transposeValue = 0,
	accidentalsType = 'auto',
	harmonizeAccidentals = true
} = {}) {
	let transposed = _.cloneDeep(allLines);

	let accidental = (accidentalsType === 'auto')
		? getMainAccidental(allChords)
		: accidentalsType;

	if (harmonizeAccidentals || transposeValue !== 0) {
		transposed = forEachChordInSong(transposed, (chord) => {
			chord.transposedModel = transposeChord(
				chord.model,
				transposeValue,
				accidental === 'flat'
			);
		});
	}

	return transposed;
}
