import { chordParserFactory } from 'chord-symbol';
import {
	getKeyAccidental,
	transposeKey,
	guessKey,
} from '../../../../src/parser/helper/keyHelpers';
import parseSong from '../../../../src/parser/parseSong';

const parseChord = chordParserFactory();

describe('keyHelpers', () => {
	test('API', () => {
		expect(typeof getKeyAccidental).toBe('function');
		expect(typeof transposeKey).toBe('function');
		expect(typeof guessKey).toBe('function');
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
])('getKeyAccidental(%s) => %s', (string, accidental) => {
	test('correctly returns key accidental', () => {
		expect(getKeyAccidental(string)).toBe(accidental);
	});
});

describe.each([
	['avoid theoretical keys: G# => Ab', 'G#', 0, 'Ab', 'flat', true],
	['avoid theoretical keys: Dbmi => C#m', 'Dbm', 0, 'C#m', 'sharp', true],
	['avoid theoretical keys: C+3 => Eb', 'C', 3, 'Eb', 'flat', true],
	['avoid theoretical keys: C+8 => Ab', 'C', 8, 'Ab', 'flat', true],
	['avoid theoretical keys: C+10 => Bb', 'C', 10, 'Bb', 'flat', true],
	['avoid theoretical keys: Cm-6 => F#m', 'Cm', -6, 'F#m', 'sharp', true],
	['avoid theoretical keys: Cm-11 => C#m', 'Cm', -11, 'C#m', 'sharp', true],

	['use flats for negative transpose: C-5 => G', 'C', -5, 'G', 'flat'],
	['use flats for negative transpose: C-4 => Ab', 'C', -4, 'Ab', 'flat'],
	['use flats for negative transpose: C-3 => A', 'C', -3, 'A', 'flat'],
	['use flats for negative transpose: C-2 => Bb', 'C', -2, 'Bb', 'flat'],
	['use flats for negative transpose: C-1 => B', 'C', -1, 'B', 'flat'],
	['use sharps for positive transpose: C+1 => C#', 'C', 1, 'C#', 'sharp'],
	['use sharps for positive transpose: C+3 => D#', 'C', 3, 'D#', 'sharp'],
	['use sharps for positive transpose: C+7 => G', 'C', 7, 'G', 'sharp'],
	['use sharps for positive transpose: C+8 => G#', 'C', 8, 'G#', 'sharp'],
	['use sharps for positive transpose: C+9 => A', 'C', 9, 'A', 'sharp'],
	['use sharps for positive transpose: C+10 => A#', 'C', 10, 'A#', 'sharp'],
	['use sharps for positive transpose: C+11 => B', 'C', 11, 'B', 'flat'],

	['keep accidental when no transposing (sharps)', 'G#', 0, 'G#', 'sharp'],
	['keep accidental when no transposing (flats)', 'Db', 0, 'Db', 'flat'],
])(
	'transposeKey: %s',
	(
		title,
		source,
		transposeValue,
		transposed,
		accidental,
		avoidTheoreticalKeys = false
	) => {
		test('correctly transpose key', () => {
			const actual = transposeKey(
				{
					string: source,
					chordModel: parseChord(source),
					accidental,
				},
				transposeValue,
				avoidTheoreticalKeys
			);
			expect(actual.string).toBe(transposed);
			expect(actual.chordModel).toStrictEqual(parseChord(transposed));
		});
	}
);

describe.each([
	[
		'returns chord with the longest duration (no ambiguity)',
		'C %%%\nF % C %\nG F C %',
		'C',
	],
	[
		'returns chord with the longest duration (1 beat difference)',
		'A\nC %% G %%\nC. G.. D.\nA',
		'G',
	],
	[
		'duration equality: last chord of the song gets more weight',
		'C.. G..\nF.. D..',
		'D',
	],
	[
		'duration equality: last chord of the song gets 25% more weight',
		'5/4 C... A.. G F A. D....',
		'D',
	],
	[
		'duration equality: first chord of the song gets 25% more weight',
		'5/4 C.... A. G F D A... E..',
		'C',
	],
	['a chord that is first and last get > 50% more weight', 'C A %% C', 'C'],
	[
		'duration equality: first chord of the song gets more weight',
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
])('guessKey: %s', (title, input, key) => {
	test('Correctly guess the key according to the defined rules', () => {
		const parsed = parseSong(input);

		const expected = {
			string: key,
			chordModel: parseChord(key),
			accidental: getKeyAccidental(key),
		};

		expect(guessKey(parsed.allChords)).toEqual(expected);
	});
});

describe.each([
	['no chords!', 'a song with no chords'],
	['"no chord" symbol', 'NC\na song with no chords'],
])('%s', (title, input) => {
	test('should return undefined if no chords are in the song', () => {
		const parsed = parseSong(input);

		expect(guessKey(parsed.allChords)).toBeUndefined();
	});
});
