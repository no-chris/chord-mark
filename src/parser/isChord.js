import _isString from 'lodash/isString';

import { Chords } from 'momo-chords';

const chords = new Chords();

export default function isChord(potentialChord) {
	return _isString(potentialChord) && chords.isChord(potentialChord);
}
