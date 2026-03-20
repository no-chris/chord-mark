import { forEachChordInChordLine } from '../../../src/parser/helper/songs';

import songLinesFactory from '../../../src/parser/songLinesFactory';

describe('flagPositionedChords()', () => {
	describe.each([
		['no lyric line', 'A B C\nD E F', false, [0, 0, 0]],
		['empty line', 'A B C\n ', false, [0, 0, 0]],
		['no position markers', 'A B C\na lyric line', false, [0, 0, 0]],
		['1 chord positioned', 'A B C\n_a lyric line', true, [1, 0, 0]],
		['2 chords positioned', 'A B C\n_a lyric _line', true, [1, 1, 0]],
		[
			'3 chords positioned, single bar',
			'A.. B. C.\n_a _lyric _line',
			true,
			[1, 1, 1],
		],
		['all chords positioned', 'A B C\n_a _lyric _line', true, [1, 1, 1]],
		[
			'some chords positioned on long line',
			'A.. B.. C.. D. F. E\n_a _lyric _line',
			true,
			[1, 1, 1, 0, 0, 0],
		],
	])('%s', (title, input, hasPositionedChords, isPositioned) => {
		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);
		songLines.flagPositionedChords();

		const chordLine = songLines.asArray()[0];

		test('correctly flags line having positioned chords', () => {
			expect(chordLine.model.hasPositionedChords).toBe(
				hasPositionedChords
			);
		});

		test('correctly flag positioned chords', () => {
			let chordCount = 0;
			expect.assertions(isPositioned.length * 2);

			forEachChordInChordLine(chordLine.model, (chord) => {
				expect(chord.isPositioned).toBeDefined();
				expect(chord.isPositioned).toBe(!!isPositioned[chordCount]);
				chordCount++;
			});
		});
	});
});

describe('bar split invalidation', () => {
	test.each([
		[
			'split at end of song',
			['A D... \\'],
			[{ type: 'lyric', string: 'A D... \\' }],
		],
		[
			'split followed by section label',
			['A D... \\', '#v'],
			[
				{ type: 'lyric', string: 'A D... \\' },
				{ type: 'sectionLabel', string: '#v' },
			],
		],
		[
			'split followed by time signature',
			['A D... \\', '3/4'],
			[
				{ type: 'lyric', string: 'A D... \\' },
				{ type: 'timeSignature', string: '3/4' },
			],
		],
		[
			'split followed by key declaration',
			['A D... \\', 'key C'],
			[
				{ type: 'lyric', string: 'A D... \\' },
				{ type: 'keyDeclaration', string: 'key C' },
			],
		],
		[
			'split followed by empty line',
			['A D... \\', ''],
			[
				{ type: 'lyric', string: 'A D... \\' },
				{ type: 'emptyLine', string: '' },
			],
		],
		[
			'split + lyric + section (no continuation)',
			['A D... \\', 'some lyrics', '#v'],
			[
				{ type: 'lyric', string: 'A D... \\' },
				{ type: 'lyric', string: 'some lyrics' },
				{ type: 'sectionLabel', string: '#v' },
			],
		],
	])('%s', (title, input, expectedLines) => {
		const songLines = songLinesFactory();
		input.forEach(songLines.addLine);

		const allLines = songLines.asArray();
		expectedLines.forEach((expected, i) => {
			expect(allLines[i].type).toBe(expected.type);
			expect(allLines[i].string).toBe(expected.string);
		});
	});

	test('valid split is not invalidated', () => {
		const songLines = songLinesFactory();
		['A D... \\', 'lyrics', 'G. C'].forEach(songLines.addLine);

		const allLines = songLines.asArray();
		expect(allLines[0].type).toBe('chord');
		expect(allLines[0].model.hasContinuation).toBe(true);
		expect(allLines[2].type).toBe('chord');
		expect(allLines[2].model.allBars[0].isContinuation).toBe(true);
	});

	test('wrong beat count on continuation invalidates split', () => {
		const songLines = songLinesFactory();
		// D... = 3 beats (1 pending). G.. = 2 beats => too many
		['A D... \\', 'lyrics', 'G.. C'].forEach(songLines.addLine);

		const allLines = songLines.asArray();
		expect(allLines[0].type).toBe('lyric');
		expect(allLines[2].type).toBe('lyric');
	});
});

describe('Force lyric line symbol', () => {
	test('Correctly detects a forced lyric line', () => {
		const input = [':Ah', ':C G', ':Fish'];

		const expected = [
			{
				model: {
					chordPositions: [],
					lyrics: 'Ah',
				},
				string: ':Ah',
				type: 'lyric',
			},
			{
				model: {
					chordPositions: [],
					lyrics: 'C G',
				},
				string: ':C G',
				type: 'lyric',
			},
			{
				model: {
					chordPositions: [],
					lyrics: 'Fish',
				},
				string: ':Fish',
				type: 'lyric',
			},
		];

		const songLines = songLinesFactory();
		input.forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});
});
