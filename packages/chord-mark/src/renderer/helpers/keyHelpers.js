import _cloneDeep from 'lodash/cloneDeep';
import _findIndex from 'lodash/findIndex';
import syntax from '../../parser/syntax';

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

/**
 * Returns the accidental of a given key
 *
 * @param {String} key
 * @returns {('flat'|'sharp')}
 */
export function getKeyAccidental(key) {
	return sharpKeys.includes(key) ? 'sharp' : 'flat';
}

/**
 * Try to guess the key of a song based on the chords
 *
 * @param {SongChord[]} allChords
 * @returns {undefined|String}
 */
export function guessKey(allChords) {
	const mostUsedChords = getMostUsedChordKeys(allChords);

	if (mostUsedChords.length === 0) return;
	if (mostUsedChords.length === 1) return mostUsedChords[0].key;

	const lastSongChord = mostUsedChords.find((chord) => chord.isLast === true);
	if (lastSongChord) return lastSongChord.key;

	const firstSongChord = mostUsedChords.find(
		(chord) => chord.isFirst === true
	);
	if (firstSongChord) return firstSongChord.key;

	return mostUsedChords[0].key; // we give up!
}

function getMostUsedChordKeys(allChords) {
	let maxFoundDuration = 0;
	let mostUsedChordKeys = [];

	const allChordsKey = [];

	allChords
		.map((chord) => {
			chord.key = chord2Key(chord);
			return chord;
		})
		.forEach((chord) => {
			const i = _findIndex(allChordsKey, (o) => o.key === chord.key);
			if (i === -1) {
				allChordsKey.push(chord);
			} else {
				allChordsKey[i].duration += chord.duration;
				if (chord.isFirst) allChordsKey[i].isFirst = true;
				if (chord.isLast) allChordsKey[i].isLast = true;
			}
		});

	allChordsKey.forEach((chord) => {
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
	if (chord.model === syntax.noChord) return chord.model;

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

	if (!chordModel.formatted) {
		console.log(chordModel);
	}
	let key = chordModel.formatted.rootNote;

	if (!majorQualities.includes(chordModel.normalized.quality)) {
		key += 'm';
	}

	return key;
}
