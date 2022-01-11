import clearSpaces from '../helper/clearSpaces';

import syntax from '../syntax';
import isChord from './isChord';

const chordBeatCountSymbols = new RegExp(syntax.chordBeatCount + '*$', 'g');
const barRepeatSymbols = new RegExp('^' + syntax.barRepeat + '+$');

const getParseableChordLine = (chordLine) => {
	return chordLine.replace('add #', 'add#').replace('add b', 'addb');
};

export default function isChordLine(line = '') {
	return clearSpaces(getParseableChordLine(line))
		.split(' ')
		.every((potentialChordToken, index) => {
			const withoutBeatCount = potentialChordToken.replace(
				chordBeatCountSymbols,
				''
			);
			return (
				isChord(withoutBeatCount) ||
				(potentialChordToken.match(barRepeatSymbols) && index > 0) ||
				withoutBeatCount === syntax.noChord
			);
		});
}

export { getParseableChordLine };
