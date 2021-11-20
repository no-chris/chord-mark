import getMaxBeatsWidth from '../../../../../src/renderer/spacers/chord/getMaxBeatsWidth';

import parseSong from '../../../../../src/parser/parseSong';

import getChordSymbol from '../../../../../src/renderer/helpers/getChordSymbol';
import { forEachChordInSong } from '../../../../../src/parser/helper/songs';

describe('getMaxBeatsWidth', () => {
	test('Module', () => {
		expect(getMaxBeatsWidth).toBeInstanceOf(Function);
	});
});

describe.each([
	[
		'2 lines / 1 bar / 1 chord, same width ',
		['A', 'B'],
		[{ 1: 'A'.length, 2: 0, 3: 0, 4: 0 }],
	],

	[
		'2 lines / 1 bar / 1 chord, different width',
		['A', 'Bmi7'],
		[{ 1: 'Bmi7'.length, 2: 0, 3: 0, 4: 0 }],
	],

	[
		'2 lines / 1 bar / 4 chords per bar',
		['A. Bmi7. C. Dmi7.', 'E7. A7. G7. D7/G.'],
		[
			{
				1: 'E7'.length,
				2: 'Bmi7'.length,
				3: 'G7'.length,
				4: 'Dmi7'.length,
			},
		],
	],

	[
		'2 lines / 1 bar / 3 chords / gap on beat 2 and 4',
		['A.. Bmi7..', 'E7'],
		[{ 1: 'E7'.length, 2: 0, 3: 'Bmi7'.length, 4: 0 }],
	],

	[
		'2 lines / 1 bar / 3 chords / gap on beat 2',
		['A.. Bmi7..', 'E7... A7.'],
		[{ 1: 'E7'.length, 2: 0, 3: 'Bmi7'.length, 4: 'A7'.length }],
	],

	[
		'2 lines / 1 bar / 3 chords / gap on beat 3',
		['A. Bmi7...', 'E7... A7.'],
		[{ 1: 'E7'.length, 2: 'Bmi7'.length, 3: 0, 4: 'A7'.length }],
	],

	[
		'2 lines / 1 bar / 3 chords / gap on beat 4',
		['A. Bmi7...', 'E7.. A7..'],
		[{ 1: 'E7'.length, 2: 'Bmi7'.length, 3: 'A7'.length, 4: 0 }],
	],

	[
		'3 lines / 1 bar / 4 chords ',
		['A. Bmi7. C. Dmi7.', 'E7. A7. G7. D7.', 'E7/G. A. G. D(b5).'],
		[
			{
				1: 'E7/G'.length,
				2: 'Bmi7'.length,
				3: 'G7'.length,
				4: 'D(b5)'.length,
			},
		],
	],

	[
		'3 lines / 1 bar / different beat per line ',
		['A', 'E7. A7...', 'D7.. A..', 'Dmi7... C(b5).'],
		[
			{
				1: 'Dmi7'.length,
				2: 'A7'.length,
				3: 'A'.length,
				4: 'C(b5)'.length,
			},
		],
	],

	[
		'3 lines / 3 bars / different beat per line ',
		[
			'A             A             B',
			'E7. A7...     E7... A7.     G(omit5)',
			'D7.. A..      D7.. A(b5)..  D7.. C(b5)..',
			'Dmi7... C(b5). G(b5). Dmi7... B7',
		],
		[
			{
				1: 'Dmi7'.length,
				2: 'A7'.length,
				3: 'A'.length,
				4: 'C(b5)'.length,
			},
			{
				1: 'G(b5)'.length,
				2: 'Dmi7'.length,
				3: 'A(b5)'.length,
				4: 'A7'.length,
			},
			{ 1: 'G(omit5)'.length, 2: 0, 3: 'C(b5)'.length, 4: 0 },
		],
	],

	[
		'3 lines / uneven bars per line',
		['A   A           B   C  G.. E7..', 'G7', 'G   Bmi7.. Ami7.. E7'],
		[
			{ 1: 'G7'.length, 2: 0, 3: 0, 4: 0 },
			{ 1: 'Bmi7'.length, 2: 0, 3: 'Ami7'.length, 4: 0 },
			{ 1: 'E7'.length, 2: 0, 3: 0, 4: 0 },
			{ 1: 'C'.length, 2: 0, 3: 0, 4: 0 },
			{ 1: 'G'.length, 2: 0, 3: 'E7'.length, 4: 0 },
		],
	],
])('getMaxBeatsWidth(): %s', (title, input, output) => {
	test('Correctly computes the maximum width for each beat', () => {
		const parsedSong = parseSong(input);
		let { allLines } = parsedSong;

		allLines = forEachChordInSong(
			allLines,
			(chord) => (chord.symbol = getChordSymbol(chord.model))
		);

		const maxBeatsWidth = getMaxBeatsWidth(allLines, false);
		expect(maxBeatsWidth).toEqual(output);
	});
});

describe.each([
	[
		'never print chords durations',
		false,
		'A A7.. B7.. Ami7. Bmi9. Cmi13.. A13... B9.',
		[
			{ 1: 'A'.length, 2: 0, 3: 0, 4: 0 },
			{ 1: 'A7'.length, 2: 0, 3: 'B7'.length, 4: 0 },
			{ 1: 'Ami7'.length, 2: 'Bmi9'.length, 3: 'Cmi13'.length, 4: 0 },
			{ 1: 'A13'.length, 2: 0, 3: 0, 4: 'B9'.length },
		],
	],
	[
		'always print chords durations',
		true,
		'A A7.. B7.. Ami7. Bmi9. Cmi13.. A13... B9.',
		[
			{ 1: 'A'.length, 2: 0, 3: 0, 4: 0 },
			{ 1: 'A7..'.length, 2: 0, 3: 'B7..'.length, 4: 0 },
			{ 1: 'Ami7.'.length, 2: 'Bmi9.'.length, 3: 'Cmi13..'.length, 4: 0 },
			{ 1: 'A13...'.length, 2: 0, 3: 0, 4: 'B9.'.length },
		],
	],
])(
	'take chords duration into account, if needed',
	(title, shouldPrintChordsDuration, input, output) => {
		test(title, () => {
			const parsedSong = parseSong(input);
			let { allLines } = parsedSong;

			allLines[0].model.allBars[0].shouldPrintChordsDuration = false; // not printed for single-chord bars
			allLines[0].model.allBars[1].shouldPrintChordsDuration =
				shouldPrintChordsDuration;
			allLines[0].model.allBars[2].shouldPrintChordsDuration =
				shouldPrintChordsDuration;
			allLines[0].model.allBars[3].shouldPrintChordsDuration =
				shouldPrintChordsDuration;

			allLines = forEachChordInSong(
				allLines,
				(chord) => (chord.symbol = getChordSymbol(chord.model))
			);

			const maxBeatsWidth = getMaxBeatsWidth(allLines, false);
			expect(maxBeatsWidth).toEqual(output);
		});
	}
);

describe.each([
	[
		'positioned chords NOT TAKEN into account when they are aligned with lyrics',
		true,
		[
			'Ami7.. B7(b9,#9).. D7(#11)',
			'_A lyric _line with _position markers',
			'G A.. D..',
		],
		[
			{ 1: 'G'.length, 2: 0, 3: 0, 4: 0 },
			{ 1: 'A'.length, 2: 0, 3: 'D'.length, 4: 0 },
		],
	],
	[
		'positioned chords taken into account when they are NOT aligned with lyrics',
		false,
		[
			'Am7.. B7(b9,#9).. D7(#11)',
			'_A lyric _line with _position markers',
			'G A.. D..',
		],
		[
			{ 1: 'Ami7'.length, 2: 0, 3: 'B7(b9,#9)'.length, 4: 0 },
			{ 1: 'D7(#11)'.length, 2: 0, 3: 'D'.length, 4: 0 },
		],
	],
])(
	'Only count lines with positioned chords when necessary',
	(title, alignChordsWithLyrics, input, output) => {
		test(title, () => {
			const parsedSong = parseSong(input);
			let { allLines } = parsedSong;

			allLines[0].model.allBars[0].shouldPrintChordsDuration = false;
			allLines[0].model.allBars[1].shouldPrintChordsDuration = false;

			allLines = forEachChordInSong(
				allLines,
				(chord) => (chord.symbol = getChordSymbol(chord.model))
			);

			const maxBeatsWidth = getMaxBeatsWidth(
				allLines,
				alignChordsWithLyrics
			);
			expect(maxBeatsWidth).toEqual(output);
		});
	}
);
