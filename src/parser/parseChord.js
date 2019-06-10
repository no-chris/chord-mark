import { parseChord } from 'chord-symbol';

/**
 * @param chordString
 * @returns {Chord}
 */
export default function parseChordWrapper(chordString) {
	return parseChord(chordString);
}
