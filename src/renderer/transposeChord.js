import _ from 'lodash';

const notes = [
	'C',
	'C#',
	'D',
	'D#',
	'E',
	'F',
	'F#',
	'G',
	'G#',
	'A',
	'A#',
	'B',
];

const sharpsToFlats = {
	'C#': 'Db',
	'D#': 'Eb',
	'F#': 'Gb',
	'G#': 'Ab',
	'A#': 'Bb',
};

const flatsToSharps = _.invert(sharpsToFlats);

function convertToSharp(note) {
	return flatsToSharps[note] || note;
}

function transposeNote(note, value, useFlats) {
	const noteIndex = notes.indexOf(note);
	const transposedIndex = noteIndex + value;

	const octaves = Math.floor(transposedIndex / 12);
	const correctedTransposedIndex = transposedIndex - (octaves * 12);

	const transposed = notes[correctedTransposedIndex];

	return (useFlats)
		? sharpsToFlats[transposed] || transposed
		: transposed;
}

export default function transposeChord(chord, value, useFlats) {
	const transposedChord = _.cloneDeep(chord); // check immutability

	const root = transposedChord.symbol.rootNote;
	const bass = transposedChord.symbol.bassNote;

	const rootSharp = convertToSharp(root);
	transposedChord.symbol.rootNote = transposeNote(rootSharp, value, useFlats);

	if (bass) {
		const bassSharp = convertToSharp(bass);
		transposedChord.symbol.bassNote = transposeNote(bassSharp, value, useFlats);
	}

	return transposedChord;
}