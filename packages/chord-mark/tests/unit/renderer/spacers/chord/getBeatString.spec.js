import {
	getBeatString,
	getChordString,
} from '../../../../../src/renderer/spacers/chord/getBeatString';

import parseSong from '../../../../../src/parser/parseSong';

import getChordSymbol from '../../../../../src/renderer/helpers/getChordSymbol';
import { forEachChordInSong } from '../../../../../src/parser/helper/songs';

describe('Module', () => {
	test('getBeatString', () => {
		expect(getBeatString).toBeInstanceOf(Function);
	});
	test('getChordString', () => {
		expect(getChordString).toBeInstanceOf(Function);
	});
});

describe('getBeatString()', () => {
	describe.each([
		['1 chord / beat 1 / no duration ', 'A', 1, undefined, 'A'],
		[
			'1 chord / beat 1 / with duration ',
			'A',
			1,
			{
				shouldPrintChordDuration: true,
				shouldPrintSubBeatDelimiters: true,
			},
			'A....',
		],
		[
			'1 chord / beat 2 / no chord ',
			'A',
			2,
			{
				shouldPrintChordDuration: true,
				shouldPrintSubBeatDelimiters: true,
			},
			'',
		],
		[
			'1 chord / beat 3 / no chord ',
			'A',
			3,
			{
				shouldPrintChordDuration: true,
				shouldPrintSubBeatDelimiters: true,
			},
			'',
		],
		[
			'1 chord / beat 4 / no chord ',
			'A',
			4,
			{
				shouldPrintChordDuration: true,
				shouldPrintSubBeatDelimiters: true,
			},
			'',
		],
		[
			'1 chord / beat 5 / no beat ',
			'A',
			5,
			{
				shouldPrintChordDuration: true,
				shouldPrintSubBeatDelimiters: true,
			},
			'',
		],

		[
			'2 chords / beat 1 / no duration',
			'A.. B..',
			1,
			{
				shouldPrintChordDuration: false,
				shouldPrintSubBeatDelimiters: true,
			},
			'A',
		],
		[
			'2 chords / beat 1 / with duration',
			'A.. B..',
			1,
			{
				shouldPrintChordDuration: true,
				shouldPrintSubBeatDelimiters: true,
			},
			'A..',
		],
		[
			'2 chords / beat 2 / no chord',
			'A.. B..',
			2,
			{
				shouldPrintChordDuration: true,
				shouldPrintSubBeatDelimiters: true,
			},
			'',
		],
		[
			'2 chords / beat 3 / no duration',
			'A.. B..',
			3,
			{
				shouldPrintChordDuration: false,
				shouldPrintSubBeatDelimiters: true,
			},
			'B',
		],
		[
			'2 chords / beat 3 / with duration',
			'A.. B..',
			3,
			{
				shouldPrintChordDuration: true,
				shouldPrintSubBeatDelimiters: true,
			},
			'B..',
		],
		[
			'2 chords / beat 4 / no chord',
			'A.. B..',
			4,
			{
				shouldPrintChordDuration: true,
				shouldPrintSubBeatDelimiters: true,
			},
			'',
		],

		[
			'sub-beat group 8th / no duration',
			'A. [C G] B..',
			2,
			{
				shouldPrintChordDuration: false,
				shouldPrintSubBeatDelimiters: true,
			},
			'[C G]',
		],
		[
			'sub-beat group 8th / with duration',
			'A. [C G] B..',
			2,
			{
				shouldPrintChordDuration: true,
				shouldPrintSubBeatDelimiters: true,
			},
			'[C G]',
		],
		[
			'sub-beat group 8thT',
			'A. [C Am G] B..',
			2,
			{
				shouldPrintChordDuration: false,
				shouldPrintSubBeatDelimiters: true,
			},
			'[C Ami G]',
		],
		[
			'sub-beat group 16th',
			'A. [C Am G C] B..',
			2,
			{
				shouldPrintChordDuration: false,
				shouldPrintSubBeatDelimiters: true,
			},
			'[C Ami G C]',
		],

		[
			'no sub-beat delimiters',
			'A. [C Am G C] B..',
			2,
			{
				shouldPrintChordDuration: false,
				shouldPrintSubBeatDelimiters: false,
			},
			'C Ami G C',
		],

		[
			'no sub-beat delimiters',
			'A. [C Am G C] B..',
			2,
			{
				shouldPrintChordDuration: false,
				shouldPrintSubBeatDelimiters: false,
			},
			'C Ami G C',
		],

		[
			'roman symbols (all to "I" since no key is defined)',
			'A. [C Am G C] B..',
			2,
			{
				symbolType: 'roman',
				shouldPrintChordDuration: true,
				shouldPrintSubBeatDelimiters: true,
			},
			'[I i I I]',
		],
	])('getBeatString(): %s', (title, input, beat, options, output) => {
		test('returns the correct beat string', () => {
			const parsedSong = parseSong(input);
			let { allLines } = parsedSong;

			allLines[0].model.allBars[0].shouldPrintChordsDuration = (
				options || {}
			).shouldPrintChordDuration;

			allLines = forEachChordInSong(
				allLines,
				(chord) => (chord.symbol = getChordSymbol(chord.model))
			);
			const beatString = getBeatString(
				allLines[0].model.allBars[0],
				beat,
				options
			);
			expect(beatString).toEqual(output);
		});
	});
});
