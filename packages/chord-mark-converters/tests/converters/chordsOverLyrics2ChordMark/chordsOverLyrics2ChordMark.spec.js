import fs from 'fs';
import path from 'path';

import chordsOverLyrics2ChordMark from '../../../src/converters/chordsOverLyrics2ChordMark';

const dataDir = path.resolve(__dirname + '/data');
const input1 = fs.readFileSync(dataDir + '/inputGuitarTabs1.txt', 'utf-8');
const output1 = fs.readFileSync(dataDir + '/outputGuitarTabs1.txt', 'utf-8');

describe('Module', () => {
	test('Should expose a function', () => {
		expect(typeof chordsOverLyrics2ChordMark).toBe('function');
	});
});

describe('chordsOverLyrics2ChordMark', () => {
	describe.each([['Sample song 1', input1, output1]])(
		'%s',
		(title, input, output) => {
			test('should produce expected ChordMark markup', () => {
				const converted = chordsOverLyrics2ChordMark(input);
				expect(converted).toBe(output);
			});
		}
	);

	describe.each([
		// ===== Chords & lyrics lines
		[
			'chords line shorter than lyrics line',
			`
A    B      C    D
Some lyrics with chords`,
			`
A B C D
_Some _lyrics _with _chords`,
		],
		[
			'chords line same length than lyrics line',
			`
A    B    C
Some lyrics`,
			`
A B C
_Some _lyric_s`,
		],
		[
			'chords line same length than lyrics line + 1',
			`
A    B     C
Some lyrics`,
			`
A B C
_Some _lyrics_`,
		],
		[
			'chords line longer than lyrics line',
			`
A    B     C    D
Some lyrics`,
			`
A B C D
_Some _lyrics_ _`,
		],
		[
			'chords line A LOT longer than lyrics line',
			`
A B C D E F G A B
Hey`,
			`
A B C D E F G A B
_He_y _ _ _ _ _ _ _`,
		],

		// ===== Chords lines spaces
		[
			'chord line starting and ending with spaces',
			`
  A  B   C\t \t
Some lyrics`,
			`
A B C
So_me _lyri_cs`,
		],
		[
			'trimmed chord line',
			`
A    B   C
Some lyrics`,
			`
A B C
_Some _lyri_cs`,
		],
		[
			'chord line without spaces',
			`
A
Some lyrics`,
			`
A
_Some lyrics`,
		],

		// ===== Multiple chords lines
		[
			'multiple chords lines no lyrics',
			`
A7 A7 A7 A7
D7 D7 A7 A7
E7 D7 A7 A7

Some lyrics`,
			`
A7 A7 A7 A7
D7 D7 A7 A7
E7 D7 A7 A7

Some lyrics`,
		],
		[
			'multiple chords lines, lyrics on the last',
			`
A7 A7 A7 A7
D7 D7 A7 A7
E7 D7 A7 A7
Some lyrics`,
			`
A7 A7 A7 A7
D7 D7 A7 A7
E7 D7 A7 A7
_Som_e l_yri_cs`,
		],
	])('%s', (title, input, output) => {
		test('should produce expected ChordMark markup', () => {
			const converted = chordsOverLyrics2ChordMark(input);
			expect(converted).toBe(output);
		});
	});
});
