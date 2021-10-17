import syntax from '../syntax';
import clearSpaces from '../helper/clearSpaces';

export default function isChordLineRepeater(string) {
	const candidate = clearSpaces(string);
	return (
		candidate === syntax.chordLineRepeat ||
		candidate === syntax.chordLineRepeat.repeat(2)
	);
}
