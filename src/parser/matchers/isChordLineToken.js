import _isString from 'lodash/isString';

import { Chords } from 'momo-chords/lib/index';

import syntax from '../syntax';
const chords = new Chords();

export default function isChordLineToken(potentialChord) {
	return _isString(potentialChord)
		&& (
			potentialChord === syntax.barRepeat
			|| chords.isChord(potentialChord)
		);
}
