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

describe.each([
	['1 chord / beat 1 / no duration ', 'A', 1, false, true, 'A'],
	['1 chord / beat 1 / with duration ', 'A', 1, true, true, 'A....'],
	['1 chord / beat 2 / no chord ', 'A', 2, true, true, ''],
	['1 chord / beat 3 / no chord ', 'A', 3, true, true, ''],
	['1 chord / beat 4 / no chord ', 'A', 4, true, true, ''],
	['1 chord / beat 5 / no beat ', 'A', 5, true, true, ''],

	['2 chords / beat 1 / no duration', 'A.. B..', 1, false, true, 'A'],
	['2 chords / beat 1 / with duration', 'A.. B..', 1, true, true, 'A..'],
	['2 chords / beat 2 / no chord', 'A.. B..', 2, true, true, ''],
	['2 chords / beat 3 / no duration', 'A.. B..', 3, false, true, 'B'],
	['2 chords / beat 3 / with duration', 'A.. B..', 3, true, true, 'B..'],
	['2 chords / beat 4 / no chord', 'A.. B..', 4, true, true, ''],

	[
		'sub-beat group 8th / no duration',
		'A. [C G] B..',
		2,
		false,
		true,
		'[C G]',
	],
	[
		'sub-beat group 8th / with duration',
		'A. [C G] B..',
		2,
		true,
		true,
		'[C G]',
	],
	['sub-beat group 8thT', 'A. [C Am G] B..', 2, false, true, '[C Ami G]'],
	['sub-beat group 16th', 'A. [C Am G C] B..', 2, false, true, '[C Ami G C]'],

	[
		'no sub-beat delimiters',
		'A. [C Am G C] B..',
		2,
		false,
		false,
		'C Ami G C',
	],
])(
	'getBeatString(): %s',
	(
		title,
		input,
		beat,
		shouldPrintChordDuration,
		shouldPrintSubBeatDelimiters,
		output
	) => {
		test('returns the correct beat string', () => {
			const parsedSong = parseSong(input);
			let { allLines } = parsedSong;

			allLines[0].model.allBars[0].shouldPrintChordsDuration =
				shouldPrintChordDuration;

			allLines = forEachChordInSong(
				allLines,
				(chord) => (chord.symbol = getChordSymbol(chord.model))
			);
			const beatString = getBeatString(
				allLines[0].model.allBars[0],
				beat,
				shouldPrintSubBeatDelimiters
			);
			expect(beatString).toEqual(output);
		});
	}
);
