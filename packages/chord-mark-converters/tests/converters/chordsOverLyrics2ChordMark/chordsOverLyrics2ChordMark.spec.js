import fs from 'fs';
import path from 'path';

import convert2ChordMark from '../../../src/convert2ChordMark';
import chordsOverLyrics2ChordMark from '../../../src/converters/chordsOverLyrics2ChordMark';

const dataDir = path.resolve(__dirname + '/data');
const inputGT1 = fs.readFileSync(dataDir + '/inputGuitarTabs1.txt', 'utf-8');
const inputUG1 = fs.readFileSync(
	dataDir + '/inputUltimateGuitar1.txt',
	'utf-8'
);
const inputUG2 = fs.readFileSync(
	dataDir + '/inputUltimateGuitar2.txt',
	'utf-8'
);
const inputUG3 = fs.readFileSync(
	dataDir + '/inputUltimateGuitar3.txt',
	'utf-8'
);
const outputGT1 = fs.readFileSync(dataDir + '/outputGuitarTabs1.txt', 'utf-8');
const outputUG1 = fs.readFileSync(
	dataDir + '/outputUltimateGuitar1.txt',
	'utf-8'
);
const outputUG2 = fs.readFileSync(
	dataDir + '/outputUltimateGuitar2.txt',
	'utf-8'
);
const outputUG3 = fs.readFileSync(
	dataDir + '/outputUltimateGuitar3.txt',
	'utf-8'
);

describe('Module', () => {
	test('Should expose a function', () => {
		expect(typeof chordsOverLyrics2ChordMark).toBe('function');
	});
});

describe('chordsOverLyrics2ChordMark', () => {
	describe.each([
		['Sample song from guitartabs.cc', inputGT1, outputGT1],
		['Sample song 1 from ultimate-guitar.com', inputUG1, outputUG1],
		['Sample song 2 from ultimate-guitar.com', inputUG2, outputUG2],
		['Sample song 3 from ultimate-guitar.com', inputUG3, outputUG3],
	])('%s', (title, input, output) => {
		test('should produce expected ChordMark markup', () => {
			const converted = convert2ChordMark(input, {
				inputFormat: 'chordsOverLyrics',
			});
			expect(converted).toBe(output);
		});
	});

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

		// ===== Chords and lyrics lines spaces
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
		[
			'lyric line with spaces',
			`
A     Bm         D7       Gm
Some      lyrics \t well   \t  spaced`,
			`
A Bm D7 Gm
_Some _ lyrics _ well _ spaced`,
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

		// ===== sections label =====
		[
			'Recognize all section labels shortcuts',
			`
[AdLib]
[Ad-Lib]
[Ad.Lib.]
[Bridge]
[Chorus]
[Intro]
[Introduction]
[Outro]
[PreChorus]
[Pre-Chorus]
[Pre Chorus]
[Solo]
[Interlude]
[Verse]`,
			`
#a
#a
#a
#b
#c
#i
#i
#o
#p
#p
#p
#s
#u
#v`,
		],
		[
			'Section labels without shortcuts',
			`
[Something]
[SomethingElse]
[Something Else]
[Thing x2]`,
			`
#Something
#SomethingElse
#Something Else
#Thing x2`,
		],
		[
			'Section labels with index',
			`
[Verse 1]
[Chorus 3]
[Bridge 2]
[Verse 15]`,
			`
#v
#c
#b
#v`,
		],
		[
			'Padded section label',
			`
[ Something ]
[ Verse ]`,
			`
#Something
#v`,
		],
		[
			'Invalid section labels',
			`
[]
[ ]
[\t]
[Ver
se]
[Chorus
Bridge]`,
			`
[]
[ ]
[\t]
[Ver
se]
[Chorus
Bridge]`,
		],
	])('%s', (title, input, output) => {
		test('should produce expected ChordMark markup', () => {
			const converted = convert2ChordMark(input, {
				inputFormat: 'chordsOverLyrics',
			});
			expect(converted).toBe(output);
		});
	});
});
