import { isChordLine, chordLineRe } from '../helpers/chordMatchers';
import getSpaceLength from '../helpers/getSpaceLength';
import insertAt from '../helpers/insertAt';
import getSectionLabel from '../helpers/getSectionLabel';

const chordsOverLyrics2ChordMark = (allLines) => {
	const cmOutput = [];
	let chordPositions = [];

	allLines.forEach((line) => {
		if (isChordLine(line)) {
			cmOutput.push(getAllChordsInLine(line));
			chordPositions = getChordsPositions(line);
		} else {
			if (isSectionLabel(line)) {
				cmOutput.push(extractSectionLabel(line));
			} else if (chordPositions.length && line.trim() !== '') {
				cmOutput.push(getLineWithPositionMarkers(line, chordPositions));
			} else {
				cmOutput.push(line);
			}
			chordPositions = [];
		}
	});

	return cmOutput.join('\n');
};

const sectionLabelRe = /^\[([^\]]+)]$/;

const isSectionLabel = (line) => {
	const found = line.trim().match(sectionLabelRe);
	return found !== null && found[1].trim() !== '';
};

const extractSectionLabel = (line) => {
	const rawLabel = line.trim().match(sectionLabelRe)[1];
	return getSectionLabel(rawLabel);
};

function getAllChordsInLine(line) {
	return line.match(chordLineRe).join(' ');
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
		const at = Math.min(position + markersLength, withMarkers.length + 1);
		withMarkers = insertAt(withMarkers, marker, at);
		markersLength += marker.length;
	});

	return withMarkers.replace(/[\s]+/g, ' ').trim();
};

export default chordsOverLyrics2ChordMark;
