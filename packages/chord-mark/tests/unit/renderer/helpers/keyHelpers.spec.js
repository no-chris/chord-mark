import {
	getKeyAccidental,
	guessKey,
} from '../../../../src/renderer/helpers/keyHelpers';
import parseSong from '../../../../src/parser/parseSong';

describe('keyHelpers', () => {
	test('API', () => {
		expect(typeof getKeyAccidental).toBe('function');
		expect(typeof guessKey).toBe('function');
	});
});

describe.each([
	[
		'returns chord with the longest duration (no ambiguity)',
		'C %%%\nF % C %\nG F C %',
		'C',
	],
	[
		'returns chord with the longest duration (1 beat difference)',
		'C.. G..\nC. G.. D.',
		'G',
	],
	[
		'duration equality: return the last chord of the song, if candidate',
		'C.. G..\nF.. D..',
		'D',
	],
	[
		'duration equality: return the first chord of the song, if candidate',
		'C.. G..\nF.. D. E.',
		'C',
	],
	[
		'duration equality: return the first occurring chord, if first and last are not candidate',
		'C. A. G..\nF.. D. E.',
		'G',
	],
	[
		'alterations: do not take into account when finding the most used chord',
		'C. CM7. C7. C+.\nC9.. F..',
		'C',
	],
	[
		'alterations: properly detects the first chord',
		'C9. CM7. C7. C+.\nG\nD.. F..',
		'C',
	],
	['alterations: properly detects the last chord', 'F\nC. CM7. C7. C+.', 'C'],

	['no chords!', 'a song with no chords', undefined],

	['chord2key: A', 'A', 'A'],
	['chord2key: A6', 'A6', 'A'],
	['chord2key: A69', 'A69', 'A'],
	['chord2key: AM7', 'AM7', 'A'],
	['chord2key: A7', 'A7', 'A'],
	['chord2key: A7(b9)', 'A7(b9)', 'A'],
	['chord2key: A7(b5)', 'A7(b5)', 'A'],
	['chord2key: A7+', 'A7+', 'A'],
	['chord2key: A9', 'A9', 'A'],
	['chord2key: A11', 'A11', 'A'],
	['chord2key: A13', 'A13', 'A'],
	['chord2key: A(bass)', 'A(bass)', 'A'],
	['chord2key: A5', 'A5', 'A'],

	['chord2key: Amin', 'Am', 'Am'],
	['chord2key: Am6', 'Am6', 'Am'],
	['chord2key: Am7', 'Am7', 'Am'],
	['chord2key: AmM7', 'AmM7', 'Am'],
	['chord2key: A°', 'A°', 'Am'],
	['chord2key: A7°', 'A7°', 'Am'],

	['chord2key: C#7°', 'C#7°', 'C#m'],
	['chord2key: Bb7°', 'Bb7°', 'Bbm'],
])('%s', (title, input, key) => {
	test('Correctly guess the key according to the defined rules', () => {
		const parsed = parseSong(input);
		expect(guessKey(parsed.allChords)).toBe(key);
	});
});

describe.each([
	[undefined, 'flat'],

	['A', 'sharp'],
	['B', 'sharp'],
	['C', 'flat'],
	['D', 'sharp'],
	['E', 'sharp'],
	['F', 'flat'],
	['G', 'sharp'],

	['Cm', 'flat'],
	['Am', 'flat'],
	['Bm', 'sharp'],
	['Dm', 'flat'],
	['Em', 'sharp'],
	['Fm', 'flat'],
	['Gm', 'flat'],

	['A#', 'sharp'],
	['C#', 'sharp'],
	['D#', 'sharp'],
	['F#', 'sharp'],
	['G#', 'sharp'],

	['A#m', 'sharp'],
	['C#m', 'sharp'],
	['D#m', 'sharp'],
	['F#m', 'sharp'],
	['G#m', 'sharp'],

	['Ab', 'flat'],
	['Bb', 'flat'],
	['Db', 'flat'],
	['Eb', 'flat'],
	['Gb', 'flat'],

	['Abm', 'flat'],
	['Bbm', 'flat'],
	['Dbm', 'flat'],
	['Ebm', 'flat'],
	['Gbm', 'flat'],
])('getKeyAccidental(%s) => %s', (key, accidental) => {
	test('correctly returns key accidental', () => {
		expect(getKeyAccidental(key)).toBe(accidental);
	});
});
