import getMaxBeatsWidth from '../../../../../src/renderer/spacers/chord/getMaxBeatsWidth';

import parseSong from '../../../../../src/parser/parseSong';

import getChordSymbol from '../../../../../src/renderer/helpers/getChordSymbol';
import { forEachChordInSong } from '../../../../../src/parser/helper/songs';

describe('getMaxBeatsWidth', () => {
	test('Module', () => {
		expect(getMaxBeatsWidth).toBeInstanceOf(Function);
	});
});

describe('Get max width of each beat', () => {
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

		[
			'2 lines / 1 sub-beat group',
			['[C G] Fmi7.. G7(#9).', 'G.  B.. A.'],
			[{ 1: '[C G]'.length, 2: 'Fmi7'.length, 3: 0, 4: 'G7(#9)'.length }],
		],

		[
			'2 lines / 2 sub-beat groups',
			['[C G] Fmi7.. G7(#9).', 'G.  B.. [C B7 Emi G]'],
			[
				{
					1: '[C G]'.length,
					2: 'Fmi7'.length,
					3: 0,
					4: '[C B7 Emi G]'.length,
				},
			],
		],

		[
			'do not consider bars after an inline time signature change - simple',
			['C 3/4 E'],
			[
				{
					1: 'C'.length,
					2: 0,
					3: 0,
					4: 0,
				},
			],
		],

		[
			'do not consider bars after an inline time signature change - complex',
			['C B7 3/4 E 5/4 F 4/4 B'],
			[
				{
					1: 'C'.length,
					2: 0,
					3: 0,
					4: 0,
				},
				{
					1: 'B7'.length,
					2: 0,
					3: 0,
					4: 0,
				},
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

			const maxBeatsWidth = getMaxBeatsWidth(allLines, {
				shouldAlignChordsWithLyrics: () => false,
			});
			expect(maxBeatsWidth).toEqual(output);
		});
	});
});

describe('Chord duration', () => {
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
				{
					1: 'Ami7.'.length,
					2: 'Bmi9.'.length,
					3: 'Cmi13..'.length,
					4: 0,
				},
				{ 1: 'A13...'.length, 2: 0, 3: 0, 4: 'B9.'.length },
			],
		],
		[
			'do not print chord durations in sub-beat group',
			true,
			'A A7. [C G] B7.. Ami7. [Bmi9 G(b13)] Cmi13.. A13... B9.',
			[
				{ 1: 'A'.length, 2: 0, 3: 0, 4: 0 },
				{ 1: 'A7.'.length, 2: '[C G]'.length, 3: 'B7..'.length, 4: 0 },
				{
					1: 'Ami7.'.length,
					2: '[Bmi9 G(b13)]'.length,
					3: 'Cmi13..'.length,
					4: 0,
				},
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

				const maxBeatsWidth = getMaxBeatsWidth(allLines, {
					shouldAlignChordsWithLyrics: () => false,
				});
				expect(maxBeatsWidth).toEqual(output);
			});
		}
	);
});

describe('Positioned chords', () => {
	describe.each([
		[
			'positioned chords NOT TAKEN into account when they are aligned with lyrics',
			[true, false],
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
			[false, false],
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
		(title, shouldAlignChords, input, output) => {
			test(title, () => {
				const parsedSong = parseSong(input);
				let { allLines } = parsedSong;

				allLines[0].model.allBars[0].shouldPrintChordsDuration = false;
				allLines[0].model.allBars[1].shouldPrintChordsDuration = false;

				allLines = forEachChordInSong(
					allLines,
					(chord) => (chord.symbol = getChordSymbol(chord.model))
				);

				const maxBeatsWidth = getMaxBeatsWidth(allLines, {
					shouldAlignChordsWithLyrics: () =>
						shouldAlignChords.shift(),
				});
				expect(maxBeatsWidth).toEqual(output);
			});
		}
	);
});

describe('Sub-beat delimiters', () => {
	describe.each([
		[
			'no sub-beat delimiters',
			false,
			'[C G] Fmi7.. G7(#9). Ami7.. [Bmi9 G(b13)] Cmi13.',
			[
				{ 1: 'C G'.length, 2: 'Fmi7'.length, 3: 0, 4: 'G7(#9)'.length },
				{
					1: 'Ami7'.length,
					2: 0,
					3: 'Bmi9 G(b13)'.length,
					4: 'Cmi13'.length,
				},
			],
		],
		[
			'with sub-beat delimiters',
			true,
			'[C G] Fmi7.. G7(#9). Ami7.. [Bmi9 G(b13)] Cmi13.',
			[
				{
					1: '[C G]'.length,
					2: 'Fmi7'.length,
					3: 0,
					4: 'G7(#9)'.length,
				},
				{
					1: 'Ami7'.length,
					2: 0,
					3: '[Bmi9 G(b13)]'.length,
					4: 'Cmi13'.length,
				},
			],
		],
	])(
		'take sub-beat delimiters into account when needed',
		(title, shouldPrintSubBeatDelimiters, input, output) => {
			test(title, () => {
				const parsedSong = parseSong(input);
				let { allLines } = parsedSong;

				allLines = forEachChordInSong(
					allLines,
					(chord) => (chord.symbol = getChordSymbol(chord.model))
				);

				const maxBeatsWidth = getMaxBeatsWidth(allLines, {
					shouldAlignChordsWithLyrics: () => false,
					shouldPrintSubBeatDelimiters,
				});
				expect(maxBeatsWidth).toEqual(output);
			});
		}
	);
});

describe('Roman numerals', () => {
	describe.each([
		[
			'Single chord per beat',
			'key C\nC\nF',
			[{ 1: 'IV'.length, 2: 0, 3: 0, 4: 0 }],
		],
		[
			'With sub-beat groups',
			'key C\n[F Em F Em] C...',
			[{ 1: '[IV iii IV iii]'.length, 2: 'C'.length, 3: 0, 4: 0 }],
		],
	])(
		'take roman numerals width into account instead of chord symbols',
		(title, input, output) => {
			test(title, () => {
				const parsedSong = parseSong(input);
				let { allLines } = parsedSong;

				allLines = forEachChordInSong(
					allLines,
					(chord) => (chord.symbol = getChordSymbol(chord.model))
				);

				const maxBeatsWidth = getMaxBeatsWidth(allLines, {
					shouldAlignChordsWithLyrics: () => false,
					symbolType: 'roman',
				});
				expect(maxBeatsWidth).toEqual(output);
			});
		}
	);
});
