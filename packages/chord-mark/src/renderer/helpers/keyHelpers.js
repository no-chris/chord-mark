import _cloneDeep from 'lodash/cloneDeep';
import _findIndex from 'lodash/findIndex';

import { chordParserFactory, chordRendererFactory } from 'chord-symbol';

const sharpKeys = [
	'G', // 1 sharp
	'Emi',
	'D', // 2 sharps
	'Bmi',
	'A', // 3 sharps
	'F#mi',
	'E', // 4 sharps
	'C#mi',
	'B', // 5 sharps
	'G#mi',
	'F#', // 6 sharps
	'D#mi',
	'C#', // 7 sharps
	'A#mi',

	// Theoretical keys
	'G#', // 8 sharps
	'D#', // 9 sharps
	'A#', // 10 sharps
];

/**
 * Returns the accidental of a given key
 *
 * @param {KeyDeclaration} keyModel
 * @returns {('flat'|'sharp')}
 */
export function getKeyAccidental(keyModel) {
	return sharpKeys.includes(keyModel.string) ? 'sharp' : 'flat';
}

/**
 *
 * @param {KeyDeclaration} keyModel
 * @param {number} transposeValue
 * @param {boolean} avoidTheoreticalKeys
 * @returns {KeyDeclaration}
 */
export function transposeKey(keyModel, transposeValue, avoidTheoreticalKeys) {
	const theoreticalKeys = {
		'G#': 'Ab',
		'D#': 'Eb',
		'A#': 'Bb',
		Dbmi: 'C#mi',
		Gbmi: 'F#mi',
	};

	const parseKeyChord = chordParserFactory();
	const keyRenderer = chordRendererFactory({
		transposeValue,
		accidentals:
			transposeValue === 0
				? 'original'
				: transposeValue < 0
				? 'flat'
				: 'sharp',
	});

	const tempKey = keyRenderer(keyModel.chordModel);
	const transposedKey =
		avoidTheoreticalKeys && theoreticalKeys[tempKey]
			? theoreticalKeys[tempKey]
			: tempKey;

	return {
		string: transposedKey,
		chordModel: parseKeyChord(transposedKey),
	};
}

/**
 * Try to guess the key of a song based on the chords
 *
 * @param {SongChord[]} allChords
 * @returns {(KeyDeclaration|undefined)}
 */
export function guessKey(allChords) {
	const keyString = inferKeyFromChords(allChords);
	const parseChord = chordParserFactory();

	return keyString
		? {
				string: keyString,
				chordModel: parseChord(keyString),
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

	allChords
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
