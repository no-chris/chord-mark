import { chordParserFactory } from 'chord-symbol';

/**
 * @param chordString
 * @returns {Chord}
 */
export default function parseChordWrapper(chordString) {
	const parseChord = chordParserFactory();
	return parseChord(chordString);
}
