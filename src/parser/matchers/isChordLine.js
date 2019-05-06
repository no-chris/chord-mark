import clearSpaces from '../helper/clearSpaces';

import syntax from '../syntax';
import isChordLineToken from './isChordLineToken';

const chordBeatCountSymbols = new RegExp(syntax.chordBeatCount + '*$', 'g');

export default function isChordLine(line = '') {
	return clearSpaces(line)
		.split(' ')
		.map(potentialChord => potentialChord.replace(chordBeatCountSymbols, ''))
		.every(potentialChord => isChordLineToken(potentialChord));
}
