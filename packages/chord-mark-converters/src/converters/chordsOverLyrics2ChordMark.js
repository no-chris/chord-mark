import { chordParserFactory } from 'chord-symbol';
import getSpaceLength from '../helpers/getSpaceLength';

const chordsOverLyrics2ChordMark = (input) => {
	const cmOutput = [];
	let chordPositions = [];

	input.split('\n').forEach((line) => {
		if (isChordLine(line)) {
			cmOutput.push(getAllChordsInLine(line));
			chordPositions = getChordsPositions(line);
		} else {
			if (chordPositions.length && line.trim() !== '') {
				cmOutput.push(getLineWithPositionMarkers(line, chordPositions));
			} else {
				cmOutput.push(line);
			}
			chordPositions = [];
		}
	});

	return cmOutput.join('\n');
};

const isChordLine = (line) => {
	return clearSpaces(line)
		.split(' ')
		.every((potentialChordToken) => isChord(potentialChordToken));
};

function clearSpaces(string) {
	return (string.match(/([^\s]+)/g) || []).join(' ');
}

function isChord(potentialChord) {
	const parsed = chordParserFactory()(potentialChord);
	return !parsed.error;
}

function getAllChordsInLine(line) {
	return clearSpaces(line);
}

function getChordsPositions(line) {
	const chordPositions = [];
	let lastPosition = 0;

	const allSpaces = line.match(/([\s])+/g) || [];
	const allChords = line.match(/([^\s])+/g);

	if (!startWithSpace(line)) {
		allSpaces.unshift('');
	}

	if (endWithSpace(line)) {
		allSpaces.pop();
	}

	allSpaces.forEach((spaces, i) => {
		const chordPosition = getSpaceLength(' '.repeat(lastPosition) + spaces);
		chordPositions.push(chordPosition);
		lastPosition = chordPosition + allChords[i].length;
	});

	return chordPositions;
}

const startWithSpace = (line) => {
	return isSpace(line.charAt(0));
};

const endWithSpace = (line) => {
	return isSpace(line.charAt(line.length - 1));
};

const isSpace = (char) => {
	return char.match(/[\s]/);
};

const getLineWithPositionMarkers = (line, chordPositions) => {
	const marker = '_';
	let withMarkers = line;
	let markersLength = 0;

	chordPositions.forEach((position) => {
		withMarkers = insertAt(withMarkers, marker, position + markersLength);
		markersLength += marker.length;
	});

	return withMarkers;
};

const insertAt = (insertInto, toInsert, at) => {
	return at > insertInto.length
		? insertInto + ' ' + toInsert
		: insertInto.slice(0, at) + toInsert + insertInto.slice(at);
};

export default chordsOverLyrics2ChordMark;
