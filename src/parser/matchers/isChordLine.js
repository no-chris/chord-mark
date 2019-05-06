import clearSpaces from '../helper/clearSpaces';

import syntax from '../syntax';
import isChord from './isChord';

const chordBeatCountSymbols = new RegExp(syntax.chordBeatCount + '*$', 'g');

export default function isChordLine(line = '') {
	return clearSpaces(line)
		.split(' ')
		.every((potentialChordToken, index) => {
			const withoutBarRepeat = potentialChordToken.replace(chordBeatCountSymbols, '');
			return isChord(withoutBarRepeat) || (potentialChordToken === syntax.barRepeat && index > 0);
		});
}
