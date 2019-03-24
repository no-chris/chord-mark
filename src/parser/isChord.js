import _ from 'lodash';

import { Chords } from 'momo-chords';

const chords = new Chords();

export default function isChord(potentialChord) {
	return _.isString(potentialChord) && chords.isChord(potentialChord);
}