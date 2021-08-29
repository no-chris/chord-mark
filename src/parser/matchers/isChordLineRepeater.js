import syntax from '../syntax';
import clearSpaces from '../helper/clearSpaces';

export default function isChordLineRepeater(string) {
	return clearSpaces(string) === syntax.chordLineRepeat;
}
