import { chordParserFactory } from 'chord-symbol';

export default function isChord(potentialChord) {
	const parseChord = chordParserFactory();
	const parsed = parseChord(potentialChord);
	return !parsed.error;
}
