import _isString from 'lodash/isString';

import { Chords } from 'momo-chords/lib/index';

const chords = new Chords();

export default function isChord(potentialChord) {
	return _isString(potentialChord) && chords.isChord(potentialChord);
}
