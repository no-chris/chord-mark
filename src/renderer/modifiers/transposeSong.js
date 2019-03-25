import _cloneDeep from 'lodash/cloneDeep';
import transposeChord from './transposeChord';
import getMainAccidental from '../helpers/getMainAccidental';

import { forEachChordInSong } from '../../parser/helper/songs';

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
	let transposed = _cloneDeep(allLines);

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
