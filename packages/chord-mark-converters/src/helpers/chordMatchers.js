import { chordParserFactory } from 'chord-symbol';

const chordLineRe = /([^\s]+)/g;
const chordsLyricsRe = /\[([^\]]*)]/g;

const isChordLine = (line) => {
	const allChords = line.trim().match(chordLineRe);
	if (allChords) {
		return allChords.every(isChord);
	}
	return false;
};

const isChordsLyricsLine = (line) => {
	const allChords = line.trim().match(chordsLyricsRe);
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

export { chordLineRe, chordsLyricsRe, isChordLine, isChordsLyricsLine };
