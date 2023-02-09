import { chordParserFactory } from 'chord-symbol';

/**
 * @param {String} chordString
 * @param {KeyDeclaration} key
 * @returns {Chord}
 */
export default function parseChordWrapper(chordString, key = {}) {
	const parseChord = chordParserFactory({ key: key.string });
	return parseChord(chordString);
}
