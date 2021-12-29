import { chordParserFactory } from 'chord-symbol';

const chordLineRe = /([^\s]+)/g;
const chordLyricsRe = /\[([^\]]*)]/g;

const isChordLine = (line) => {
	const allChords = line.trim().match(chordLineRe);
	if (allChords) {
		return allChords.every(isChord);
	}
	return false;
};

const isChordLyricsLine = (line) => {
	const allChords = line.trim().match(chordLyricsRe);
	if (allChords) {
		return allChords
			.map((potentialChord) => potentialChord.replace(/[[\]]/g, ''))
			.every(isChord);
	}
	return false;
};

function isChord(potentialChord) {
	const parsed = chordParserFactory()(potentialChord);
	return !parsed.error;
}

export { chordLineRe, chordLyricsRe, isChordLine, isChordLyricsLine };
