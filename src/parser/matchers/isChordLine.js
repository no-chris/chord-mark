import clearSpaces from '../helper/clearSpaces';

import syntax from '../syntax';
import isChord from './isChord';

const chordBeatCountSymbols = new RegExp(syntax.chordBeatCount + '*$', 'g');
const barRepeatSymbols = new RegExp('^' + syntax.barRepeat + '+$');

export default function isChordLine(line = '') {
	return clearSpaces(line)
		.split(' ')
		.every((potentialChordToken, index) => {
			const withoutBarRepeat = potentialChordToken.replace(chordBeatCountSymbols, '');
			return isChord(withoutBarRepeat) || (potentialChordToken.match(barRepeatSymbols) && index > 0);
		});
}
