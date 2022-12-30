import getBeatString from '../../../../../src/renderer/spacers/chord/getBeatString';

import parseSong from '../../../../../src/parser/parseSong';

import getChordSymbol from '../../../../../src/renderer/helpers/getChordSymbol';
import { forEachChordInSong } from '../../../../../src/parser/helper/songs';

describe('getBeatString', () => {
	test('Module', () => {
		expect(getBeatString).toBeInstanceOf(Function);
	});
});

describe.each([
	['1 chord / beat 1 / no duration ', 'A', 1, false, 'A'],
	['1 chord / beat 1 / with duration ', 'A', 1, true, 'A....'],
	['1 chord / beat 2 / no chord ', 'A', 2, true, ''],
	['1 chord / beat 3 / no chord ', 'A', 3, true, ''],
	['1 chord / beat 4 / no chord ', 'A', 4, true, ''],
	['1 chord / beat 5 / no beat ', 'A', 5, true, ''],

	['2 chords / beat 1 / no duration', 'A.. B..', 1, false, 'A'],
	['2 chords / beat 1 / with duration', 'A.. B..', 1, true, 'A..'],
	['2 chords / beat 2 / no chord', 'A.. B..', 2, true, ''],
	['2 chords / beat 3 / no duration', 'A.. B..', 3, false, 'B'],
	['2 chords / beat 3 / with duration', 'A.. B..', 3, true, 'B..'],
	['2 chords / beat 4 / no chord', 'A.. B..', 4, true, ''],

	['sub-beat group 8th / no duration', 'A. {C G} B..', 2, false, '{C G}'],
	['sub-beat group 8th / with duration', 'A. {C G} B..', 2, true, '{C G}'],
	['sub-beat group 8thT', 'A. {C Am G} B..', 2, false, '{C Ami G}'],
	['sub-beat group 16th', 'A. {C Am G C} B..', 2, false, '{C Ami G C}'],
])(
	'getBeatString(): %s',
	(title, input, beat, shouldPrintChordDuration, output) => {
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
				beat
			);
			expect(beatString).toEqual(output);
		});
	}
);
