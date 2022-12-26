import _escapeRegExp from 'lodash/escapeRegExp';
import clearSpaces from '../helper/clearSpaces';

import syntax from '../syntax';
import isChord from './isChord';

const chordBeatCountSymbols = new RegExp(syntax.chordBeatCount + '*$', 'g');
const barRepeatSymbols = new RegExp('^' + syntax.barRepeat + '+$');

const getParseableChordLine = (chordLine) => {
	return chordLine.replaceAll('add ', 'add');
};

export default function isChordLine(line = '') {
	if (hasUnmatchedEnclosureSymbols(line)) return false;

	return clearSpaces(getParseableChordLine(line))
		.split(' ')
		.every((potentialChordToken, index) => {
			const clean = cleanToken(potentialChordToken);

			return (
				isChord(clean) ||
				(potentialChordToken.match(barRepeatSymbols) && index > 0) ||
				clean === syntax.noChord
			);
		});
}

const cleanToken = (token) => {
	return removeSubBeatEnclosure(removeBeatCount(token));
};

const removeBeatCount = (token) => {
	return token.replace(chordBeatCountSymbols, '');
};

const removeSubBeatEnclosure = (token) => {
	let clean = token;
	if (token.startsWith(syntax.subBeatOpener)) {
		clean = clean.replace(syntax.subBeatOpener, '');
	}
	if (token.endsWith(syntax.subBeatCloser) && hasExtraCloseSymbol(token)) {
		clean = clean.substring(0, clean.length - syntax.subBeatCloser.length);
	}
	return clean;
};

const hasExtraCloseSymbol = (token) => {
	return (
		countOccurrences(token, syntax.subBeatCloser) >
		countOccurrences(token, syntax.subBeatOpener)
	);
};

const hasUnmatchedEnclosureSymbols = (token) => {
	return (
		countOccurrences(token, syntax.subBeatCloser) !==
		countOccurrences(token, syntax.subBeatOpener)
	);
};

const countOccurrences = (token, target) => {
	const regex = new RegExp(_escapeRegExp(target), 'g');
	return (token.match(regex) || []).length;
};

export { getParseableChordLine };
