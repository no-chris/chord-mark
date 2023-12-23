import _cloneDeep from 'lodash/cloneDeep';
import _findIndex from 'lodash/findIndex';
import _invert from 'lodash/invert';

const allNotesSharp = 'A,A#,B,C,C#,D,D#,E,F,F#,G,G#'.split(',');
const allFlats = 'Ab,Bb,Db,Eb,Gb'.split(',');
const allNotes = [...allNotesSharp, ...allFlats];
const allKeys = [...allNotes, ...allNotes.map((note) => note + 'm')];

const flatsToSharps = {
	Ab: 'G#',
	Bb: 'A#',
	Db: 'C#',
	Eb: 'D#',
	Gb: 'F#',
};
const sharpsToFlats = _invert(flatsToSharps);

/**
 * Check if the given string is a valid key
 * @param {String} keyString
 * @returns {Boolean}
 */
export function isKey(keyString) {
	return allKeys.includes(keyString);
}

/**
 * Returns the accidental of a given key
 * @param {string} keyString
 * @returns {('flat'|'sharp')}
 */
export function getKeyAccidental(keyString) {
	const sharpKeys = [
		'G', // 1 sharp
		'Em',
		'D', // 2 sharps
		'Bm',
		'A', // 3 sharps
		'F#m',
		'E', // 4 sharps
		'C#m',
		'B', // 5 sharps
		'G#m',
		'F#', // 6 sharps
		'D#m',
		'C#', // 7 sharps
		'A#m',

		// Theoretical keys
		'G#', // 8 sharps
		'D#', // 9 sharps
		'A#', // 10 sharps
	];

	return sharpKeys.includes(keyString) ? 'sharp' : 'flat';
}

/**
 * Transpose a key, trying to avoid theoretical keys when `accidentalsType` is 'auto'.
 * Otherwise, the transposed key will use the given `accidentalsType`, e.g. 'sharp' or 'flat'.
 * @param {KeyDeclaration} keyModel
 * @param {number} transposeValue
 * @param {('auto'|'sharp'|'flat')} accidentalsType
 * @returns {KeyDeclaration}
 */
export function transposeKey(keyModel, transposeValue, accidentalsType) {
	const theoreticalKeys = {
		'G#': 'Ab',
		'D#': 'Eb',
		'A#': 'Bb',
		Dbm: 'C#m',
		Gbm: 'F#m',
	};

	let keyTemp;

	if (transposeValue === 0 && accidentalsType === 'auto') {
		keyTemp = keyModel.string;
	} else {
		const accidental =
			accidentalsType === 'auto'
				? transposeValue < 0
					? 'flat'
					: 'sharp'
				: accidentalsType;
		keyTemp = doTranspose(keyModel.string, transposeValue, accidental);
	}

	const transposedKey =
		accidentalsType === 'auto' && theoreticalKeys[keyTemp]
			? theoreticalKeys[keyTemp]
			: keyTemp;

	return {
		string: transposedKey,
		accidental: getKeyAccidental(transposedKey),
	};
}

function doTranspose(key, value, accidental) {
	const isMinor = key.endsWith('m');
	const note = key.replace('m', '');

	const noteSharp = flatsToSharps[note] || note;
	const noteIndex = allNotesSharp.indexOf(noteSharp);

	let transposedIndex = noteIndex + value;

	if (transposedIndex < 0) {
		transposedIndex += allNotesSharp.length;
	} else if (transposedIndex >= allNotesSharp.length) {
		transposedIndex -= allNotesSharp.length;
	}

	const transposedSharp = allNotesSharp[transposedIndex];

	const transposed =
		accidental === 'flat'
			? sharpsToFlats[transposedSharp] || transposedSharp
			: transposedSharp;

	return isMinor ? transposed + 'm' : transposed;
}

/**
 * Try to guess the key of a song based on its chords
 * @param {SongChord[]} allChords
 * @returns {(KeyDeclaration|undefined)}
 */
export function guessKey(allChords) {
	const keyString = inferKeyFromChords(allChords);

	return keyString
		? {
				string: keyString,
				accidental: getKeyAccidental(keyString),
			}
		: undefined;
}

function inferKeyFromChords(allChords) {
	const mostUsedChords = getMostUsedChordKeys(allChords);

	if (mostUsedChords.length === 0) return;
	if (mostUsedChords.length === 1) return mostUsedChords[0].keyString;

	const lastSongChord = mostUsedChords.find((chord) => chord.isLast === true);
	if (lastSongChord) return lastSongChord.keyString;

	const firstSongChord = mostUsedChords.find(
		(chord) => chord.isFirst === true
	);
	if (firstSongChord) return firstSongChord.keyString;

	return mostUsedChords[0].keyString; // we give up!
}

function getMostUsedChordKeys(allChords) {
	let maxFoundDuration = 0;
	let mostUsedChordKeys = [];

	const allChordsKey = [];

	_cloneDeep(allChords)
		.map((chord) => {
			chord.keyString = chord2Key(chord);
			return chord;
		})
		.forEach((chord) => {
			const i = _findIndex(
				allChordsKey,
				(o) => o.keyString === chord.keyString
			);
			if (i === -1) {
				allChordsKey.push(chord);
			} else {
				allChordsKey[i].duration += chord.duration;
				if (chord.isLast) allChordsKey[i].isLast = true;
			}
		});

	allChordsKey
		.map((chord) => {
			// give more weight to first and last chords
			if (chord.isLast) {
				chord.duration *= 1.25;
			}
			if (chord.isFirst) {
				chord.duration *= 1.25;
			}
			return chord;
		})
		.forEach((chord) => {
			if (chord.duration > maxFoundDuration) {
				mostUsedChordKeys = [chord];
				maxFoundDuration = chord.duration;
			} else if (chord.duration === maxFoundDuration) {
				mostUsedChordKeys.push(chord);
			}
		});

	return mostUsedChordKeys;
}

function chord2Key(chord) {
	const chordModel = _cloneDeep(chord.model);

	// chord-symbol's qualities: https://github.com/no-chris/chord-symbol/blob/master/packages/chord-symbol/src/dictionaries/qualities.js
	const majorQualities = [
		'major',
		'major6',
		'major7',
		'dominant7',
		'augmented',

		'power', // duh!
		'bass', // re-duh!
	];

	let keyString = chordModel.formatted.rootNote;

	if (!majorQualities.includes(chordModel.normalized.quality)) {
		keyString += 'm';
	}

	return keyString;
}

/**
 * Return the number of semitones between two keys notes
 * @param {string} key1
 * @param {string} key2
 * @returns {Number}
 */
export function getSemitonesBetweenKeys(key1, key2) {
	if (!key1 || !key2) return 0;

	return getSemitonesBetweenNotes(
		key1.replace('m', ''),
		key2.replace('m', '')
	);
}

function getSemitonesBetweenNotes(note1, note2) {
	const noteSharp1 = flatsToSharps[note1] || note1;
	const noteSharp2 = flatsToSharps[note2] || note2;

	const indexNote1 = allNotesSharp.indexOf(noteSharp1);
	const indexNote2 = allNotesSharp.indexOf(noteSharp2);

	if (indexNote1 === -1 || indexNote2 === -1) return 0;

	const semitones = indexNote2 - indexNote1;

	return semitones < 0 ? semitones + 12 : semitones;
}
