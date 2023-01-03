import clearSpaces from '../helper/clearSpaces';

import syntax from '../syntax';
import isChord from './isChord';
import isTimeSignatureString from './isTimeSignatureString';

const chordBeatCountSymbols = new RegExp(syntax.chordBeatCount + '*$', 'g');
const barRepeatSymbols = new RegExp('^' + syntax.barRepeat + '+$');

/**
 * Check if the given line only contains chords and allowed characters.
 * The parsing might still fail at a later stage if some rules are not properly enforced,
 * like having proper chord durations or matching sub-beat openers/closers
 * @param {String} line
 * @returns {Boolean}
 */
export default function isChordLine(line = '') {
	return clearSpaces(getParseableChordLine(line))
		.split(' ')
		.every((potentialChordToken, index) => {
			const clean = cleanToken(potentialChordToken);

			return (
				isChord(clean) ||
				(potentialChordToken.match(barRepeatSymbols) && index > 0) ||
				clean === syntax.noChord ||
				(isTimeSignatureString(potentialChordToken) && index > 0)
			);
		});
}

const getParseableChordLine = (chordLine) => {
	return chordLine.replaceAll('add ', 'add');
};

const cleanToken = (token) => {
	return removeSubBeatDelimiters(removeBeatCount(token));
};

const removeBeatCount = (token) => {
	return token.replace(chordBeatCountSymbols, '');
};

const removeSubBeatDelimiters = (token) => {
	let clean = token;
	if (token.startsWith(syntax.subBeatOpener)) {
		clean = clean.substring(syntax.subBeatOpener.length);
	}
	if (token.endsWith(syntax.subBeatCloser)) {
		clean = clean.substring(0, clean.length - syntax.subBeatCloser.length);
	}
	return clean;
};

export { getParseableChordLine, cleanToken };
