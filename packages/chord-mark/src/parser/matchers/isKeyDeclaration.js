import _escapeRegExp from 'lodash/escapeRegExp';
import syntax from '../syntax';
import clearSpaces from '../helper/clearSpaces';
import { chordParserFactory } from 'chord-symbol';

export const keyDeclarationRegexp = new RegExp(
	'^' + _escapeRegExp(syntax.keyDeclarationPrefix) + '([ABCDEFG].*)$'
);

export default function isKeyDeclaration(string) {
	const found = clearSpaces(string).match(keyDeclarationRegexp);
	if (found === null) return false;

	// We use chord symbol to manipulate key declarations even though they are not chords per se
	// But we benefit from the chord symbol parser to validate the key declaration
	const parseChord = chordParserFactory({ notationSystems: ['english'] });
	const chord = parseChord(found[1]);

	if (chord.error) return false;

	const chordIntervals = chord.normalized.intervals;

	return (
		chordIntervals.length === 3 &&
		['b3', '3'].includes(chordIntervals[1]) &&
		chordIntervals[2] === '5' &&
		chordIntervals[0] === '1'
	);
}
