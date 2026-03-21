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

describe('bar split with auto-repeat chords', () => {
	test('both split + continuation auto-repeat with correct flags', () => {
		const songLines = songLinesFactory();
		// First verse: split chord lines
		['#v', 'A D... \\', 'lyrics', 'G. C', 'lyrics2'].forEach(
			songLines.addLine
		);
		// Second verse: only lyrics → chords auto-repeat from blueprint
		['#v', 'new lyrics', 'new lyrics2'].forEach(songLines.addLine);

		const allLines = songLines.asArray();
		// Find the auto-repeated chord lines in second verse
		const autoRepeated = allLines.filter(
			(l) => l.isFromAutoRepeatChords && l.type === 'chord'
		);
		expect(autoRepeated.length).toBe(2);
		expect(autoRepeated[0].model.hasContinuation).toBe(true);
		expect(autoRepeated[1].model.allBars[0].isContinuation).toBe(true);
	});

	test('override split line → orphaned continuation skipped', () => {
		const songLines = songLinesFactory();
		// First verse: split chord lines
		['#v', 'A D... \\', 'lyrics', 'G. C', 'lyrics2'].forEach(
			songLines.addLine
		);
		// Second verse: user provides a normal chord line instead of split
		['#v', 'E F', 'new lyrics2'].forEach(songLines.addLine);

		const allLines = songLines.asArray();
		// The continuation from blueprint should be skipped
		const autoRepeated = allLines.filter(
			(l) => l.isFromAutoRepeatChords && l.type === 'chord'
		);
		expect(autoRepeated.length).toBe(0);
	});

	test('override continuation with compatible chords → continuation works', () => {
		const songLines = songLinesFactory();
		// First verse: split chord lines
		['#v', 'A D... \\', 'lyrics', 'G. C', 'lyrics2'].forEach(
			songLines.addLine
		);
		// Second verse: split auto-repeats, user provides compatible continuation
		['#v', 'lyrics', 'E. F', 'new lyrics2'].forEach(songLines.addLine);

		const allLines = songLines.asArray();
		// Split should auto-repeat, setting pendingBarContext
		const autoRepeated = allLines.filter(
			(l) => l.isFromAutoRepeatChords && l.type === 'chord'
		);
		expect(autoRepeated.length).toBe(1);
		expect(autoRepeated[0].model.hasContinuation).toBe(true);

		// User-typed continuation should have isContinuation
		const userChordLines = allLines.filter(
			(l) => !l.isFromAutoRepeatChords && l.type === 'chord'
		);
		// Last user chord line in second verse is the continuation
		const continuationLine = userChordLines[userChordLines.length - 1];
		expect(continuationLine.model.allBars[0].isContinuation).toBe(true);
	});

	test('override continuation with incompatible chords → both fall back to lyric', () => {
		const songLines = songLinesFactory();
		// First verse: split chord lines
		['#v', 'A D... \\', 'lyrics', 'G. C', 'lyrics2'].forEach(
			songLines.addLine
		);
		// Second verse: split auto-repeats, user provides incompatible continuation
		// D... = 3 beats pending 1 beat. G.. = 2 beats → too many
		['#v', 'lyrics', 'G.. C', 'new lyrics2'].forEach(songLines.addLine);

		const allLines = songLines.asArray();
		// The split line should be invalidated (reverted to lyric)
		// and the incompatible continuation should also be lyric
		const secondVerseLines = allLines.slice(
			allLines.findIndex(
				(l, i) =>
					i > 0 &&
					l.type === 'sectionLabel' &&
					l.model.label === 'v'
			) + 1
		);
		// No chord lines in second verse
		const chordLinesInSecondVerse = secondVerseLines.filter(
			(l) => l.type === 'chord'
		);
		expect(chordLinesInSecondVerse.length).toBe(0);
	});

	test('override split with different pending beats → blueprint continuation skipped and split invalidated', () => {
		const songLines = songLinesFactory();
		// Blueprint: A D... \ (1 beat pending) / G. C (1 beat continuation)
		['#v', 'A D... \\', 'lyrics', 'G. C', 'lyrics2'].forEach(
			songLines.addLine
		);
		// Override split: A C.. \ (2 beats pending) → blueprint G. C expects 1 beat
		['#v', 'A C.. \\', 'lyrics', 'lyrics2'].forEach(songLines.addLine);

		const allLines = songLines.asArray();
		const secondVerseLines = allLines.slice(
			allLines.findIndex(
				(l, i) =>
					i > 0 &&
					l.type === 'sectionLabel' &&
					l.model.label === 'v'
			) + 1
		);
		// Split invalidated (no matching continuation), continuation skipped
		const chordLinesInSecondVerse = secondVerseLines.filter(
			(l) => l.type === 'chord'
		);
		expect(chordLinesInSecondVerse.length).toBe(0);
	});

	test('override split with different pending beats + compatible user continuation → works', () => {
		const songLines = songLinesFactory();
		// Blueprint: A D... \ (1 beat pending) / G. C
		['#v', 'A D... \\', 'lyrics', 'G. C', 'lyrics2'].forEach(
			songLines.addLine
		);
		// Override split: A C.. \ (2 beats pending)
		// User provides compatible continuation: D.. F (2 beats fills the 2 pending)
		['#v', 'A C.. \\', 'lyrics', 'D.. F', 'lyrics2'].forEach(
			songLines.addLine
		);

		const allLines = songLines.asArray();
		const secondVerseLines = allLines.slice(
			allLines.findIndex(
				(l, i) =>
					i > 0 &&
					l.type === 'sectionLabel' &&
					l.model.label === 'v'
			) + 1
		);
		const chordLinesInSecondVerse = secondVerseLines.filter(
			(l) => l.type === 'chord'
		);
		expect(chordLinesInSecondVerse.length).toBe(2);
		expect(chordLinesInSecondVerse[0].model.hasContinuation).toBe(true);
		expect(
			chordLinesInSecondVerse[1].model.allBars[0].isContinuation
		).toBe(true);
	});

	test('override both split and continuation with incompatible beats → all fall back to lyric', () => {
		const songLines = songLinesFactory();
		// Blueprint: A D... \ (1 beat pending) / G. C
		['#v', 'A D... \\', 'lyrics', 'G. C', 'lyrics2'].forEach(
			songLines.addLine
		);
		// Override split: A C.. \ (2 beats pending)
		// Override continuation: G. F (1 beat → needs 2)
		['#v', 'A C.. \\', 'lyrics', 'G. F', 'lyrics2'].forEach(
			songLines.addLine
		);

		const allLines = songLines.asArray();
		const secondVerseLines = allLines.slice(
			allLines.findIndex(
				(l, i) =>
					i > 0 &&
					l.type === 'sectionLabel' &&
					l.model.label === 'v'
			) + 1
		);
		const chordLinesInSecondVerse = secondVerseLines.filter(
			(l) => l.type === 'chord'
		);
		expect(chordLinesInSecondVerse.length).toBe(0);
	});
});

describe('bar split with multiple auto-repeat sections', () => {
	function getVerseLines(allLines, verseNumber) {
		let seen = 0;
		let start = -1;
		for (let i = 0; i < allLines.length; i++) {
			if (
				allLines[i].type === 'sectionLabel' &&
				allLines[i].model.label === 'v'
			) {
				seen++;
				if (seen === verseNumber) {
					start = i + 1;
				} else if (seen === verseNumber + 1) {
					return allLines.slice(start, i);
				}
			}
		}
		return start >= 0 ? allLines.slice(start) : [];
	}

	test('v2=auto-repeat, v3=override split → v3 skips orphaned continuation', () => {
		const songLines = songLinesFactory();
		['#v', 'A D... \\', 'lyrics', 'G. C', 'lyrics2'].forEach(
			songLines.addLine
		);
		['#v', 'new lyrics', 'new lyrics2'].forEach(songLines.addLine);
		['#v', 'E F', 'more lyrics', 'more lyrics2'].forEach(
			songLines.addLine
		);
		const allLines = songLines.asArray();

		const v2 = getVerseLines(allLines, 2);
		const v2Chords = v2.filter((l) => l.type === 'chord');
		expect(v2Chords.length).toBe(2);
		expect(v2Chords[0].isFromAutoRepeatChords).toBe(true);

		const v3 = getVerseLines(allLines, 3);
		const v3Chords = v3.filter((l) => l.type === 'chord');
		expect(v3Chords.length).toBe(1);
		expect(v3Chords[0].string).toBe('E F');
	});

	test('v2=override split, v3=auto-repeat → v3 gets full auto-repeat', () => {
		const songLines = songLinesFactory();
		['#v', 'A D... \\', 'lyrics', 'G. C', 'lyrics2'].forEach(
			songLines.addLine
		);
		['#v', 'E F', 'new lyrics', 'new lyrics2'].forEach(
			songLines.addLine
		);
		['#v', 'more lyrics', 'more lyrics2'].forEach(songLines.addLine);
		const allLines = songLines.asArray();

		const v3 = getVerseLines(allLines, 3);
		const v3Chords = v3.filter((l) => l.type === 'chord');
		expect(v3Chords.length).toBe(2);
		expect(v3Chords[0].isFromAutoRepeatChords).toBe(true);
		expect(v3Chords[0].model.hasContinuation).toBe(true);
		expect(v3Chords[1].isFromAutoRepeatChords).toBe(true);
		expect(v3Chords[1].model.allBars[0].isContinuation).toBe(true);
	});

	test('v2=incompatible continuation, v3=auto-repeat → v3 gets full auto-repeat', () => {
		const songLines = songLinesFactory();
		['#v', 'A D... \\', 'lyrics', 'G. C', 'lyrics2'].forEach(
			songLines.addLine
		);
		['#v', 'new lyrics', 'G.. C', 'new lyrics2'].forEach(
			songLines.addLine
		);
		['#v', 'more lyrics', 'more lyrics2'].forEach(songLines.addLine);
		const allLines = songLines.asArray();

		const v2 = getVerseLines(allLines, 2);
		const v2Chords = v2.filter((l) => l.type === 'chord');
		expect(v2Chords.length).toBe(0);

		const v3 = getVerseLines(allLines, 3);
		const v3Chords = v3.filter((l) => l.type === 'chord');
		expect(v3Chords.length).toBe(2);
		expect(v3Chords[0].isFromAutoRepeatChords).toBe(true);
		expect(v3Chords[0].model.hasContinuation).toBe(true);
	});

	test('v2=auto-repeat, v3=override continuation → split auto-repeats, user provides continuation', () => {
		const songLines = songLinesFactory();
		['#v', 'A D... \\', 'lyrics', 'G. C', 'lyrics2'].forEach(
			songLines.addLine
		);
		['#v', 'new lyrics', 'new lyrics2'].forEach(songLines.addLine);
		['#v', 'more lyrics', 'E. F', 'more lyrics2'].forEach(
			songLines.addLine
		);
		const allLines = songLines.asArray();

		const v3 = getVerseLines(allLines, 3);
		const v3Chords = v3.filter((l) => l.type === 'chord');
		expect(v3Chords.length).toBe(2);
		expect(v3Chords[0].isFromAutoRepeatChords).toBe(true);
		expect(v3Chords[0].model.hasContinuation).toBe(true);
		expect(v3Chords[1].isFromAutoRepeatChords).toBeFalsy();
		expect(v3Chords[1].model.allBars[0].isContinuation).toBe(true);
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
