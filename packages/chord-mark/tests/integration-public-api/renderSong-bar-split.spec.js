import { parseSong, renderSong } from '../../src/chordMark';
import toText from './helpers/toText';
import song from './helpers/songInput';

function render(input, options = {}) {
	return renderSong(parseSong(input), options);
}

describe('renderSong - bar split across lines', () => {
	describe('basic split', () => {
		test('splits a bar across two chord lines', () => {
			const text = toText(
				render(
					song('A D... \\', 'Lorem ipsum', 'G. C', 'Consectetur'),
					{ alignBars: false }
				)
			);
			expect(text).toBe(
				'|A  |D...  \n' +
					'Lorem ipsum\n' +
					'G.  |C  |\n' +
					'Consectetur'
			);
		});

		test('splits a bar with single chord before split', () => {
			const text = toText(
				render(song('A... \\', 'line 1', 'B. C', 'line 2'), {
					alignBars: false,
				})
			);
			expect(text).toBe(
				'|A...  \n' + 'line 1\n' + 'B.  |C  |\n' + 'line 2'
			);
		});
	});

	describe('split with positioned chords', () => {
		test('aligns chords with lyrics on both lines', () => {
			const text = toText(
				render(
					song(
						'A D... \\',
						'_ Lorem ipsum dolor _sit amet,',
						'G. C',
						'_Con _sectetur adipiscing elit'
					)
				)
			);
			expect(text).toBe(
				'|A                 |D...     \n' +
					'  Lorem ipsum dolor sit amet,\n' +
					'G. |C                       |\n' +
					'Con sectetur adipiscing elit'
			);
		});
	});

	describe('chords-only mode merge', () => {
		test('merges split bar onto one line with chartType=chords', () => {
			const text = toText(
				render(
					song('A D... \\', 'Lorem ipsum', 'G. C', 'Consectetur'),
					{ chartType: 'chords', alignBars: false }
				)
			);
			expect(text).toBe('|A  |D...  G.  |C  |');
		});

		test('merges split bar with multiple bars before split', () => {
			const text = toText(
				render(
					song('A D... \\', 'Lorem ipsum', 'G. C E', 'Consectetur'),
					{ chartType: 'chords', alignBars: false }
				)
			);
			expect(text).toBe('|A  |D...  G.  |C  |E  |');
		});
	});

	describe('split with bar separators', () => {
		test('no bar separator at split point', () => {
			const text = toText(
				render(
					song('A D... \\', 'Lorem ipsum', 'G. C', 'Consectetur'),
					{ alignBars: false }
				)
			);
			// Line 1 should NOT end with |
			const lines = text.split('\n');
			expect(lines[0]).not.toMatch(/\|$/);
			// Line 3 (continuation) should NOT start with |
			expect(lines[2]).not.toMatch(/^\|/);
		});

		test('printBarSeparators=never still works', () => {
			const text = toText(
				render(
					song('A D... \\', 'Lorem ipsum', 'G. C', 'Consectetur'),
					{ alignBars: false, printBarSeparators: 'never' }
				)
			);
			expect(text).toBe(
				'A  D...  \n' +
					'Lorem ipsum\n' +
					'G.  C\n' +
					'Consectetur'
			);
		});
	});

	describe('error cases', () => {
		test('backslash on a complete bar falls back to lyric', () => {
			const parsed = parseSong(song('A D \\'));
			// A D fills 4+4=8 beats which is 2 bars, but the last bar (D)
			// is complete, so \ is meaningless — should fail parsing
			// and the line becomes a lyric
			expect(parsed.allLines[0].type).toBe('lyric');
		});

		test('open sub-beat group at backslash falls back to lyric', () => {
			const parsed = parseSong(song('A... [B \\'));
			expect(parsed.allLines[0].type).toBe('lyric');
		});

		test('backslash in the middle of a line falls back to lyric', () => {
			const parsed = parseSong(song('A \\ D'));
			expect(parsed.allLines[0].type).toBe('lyric');
		});

		test('split followed by section label invalidates split', () => {
			const parsed = parseSong(song('A D... \\', '#v', 'C'));
			expect(parsed.allLines[0].type).toBe('lyric');
			expect(parsed.allLines[1].type).toBe('sectionLabel');
			expect(parsed.allLines[2].type).toBe('chord');
		});

		test('split followed by time signature invalidates split', () => {
			const parsed = parseSong(song('A D... \\', '3/4'));
			expect(parsed.allLines[0].type).toBe('lyric');
			expect(parsed.allLines[1].type).toBe('timeSignature');
		});

		test('split followed by key declaration invalidates split', () => {
			const parsed = parseSong(song('A D... \\', 'key C'));
			expect(parsed.allLines[0].type).toBe('lyric');
			expect(parsed.allLines[1].type).toBe('keyDeclaration');
		});

		test('split followed by empty line invalidates split', () => {
			const parsed = parseSong(song('A D... \\', '', 'C'));
			expect(parsed.allLines[0].type).toBe('lyric');
			expect(parsed.allLines[1].type).toBe('emptyLine');
		});

		test('split followed by chord line repeater invalidates split', () => {
			const parsed = parseSong(song('C', 'A D... \\', '%'));
			expect(parsed.allLines[1].type).toBe('lyric');
			// % repeats C (the previous valid chord line), not the split line
			expect(parsed.allLines[2].type).toBe('chord');
		});

		test('split + lyric + section invalidates split', () => {
			const parsed = parseSong(
				song('A D... \\', 'some lyrics', '#v', 'C')
			);
			expect(parsed.allLines[0].type).toBe('lyric');
			expect(parsed.allLines[1].type).toBe('lyric');
			expect(parsed.allLines[2].type).toBe('sectionLabel');
			expect(parsed.allLines[3].type).toBe('chord');
		});

		test('wrong beat count on continuation falls back to lyric', () => {
			// D... = 3 beats, leaves 1 beat pending.
			// G.. = 2 beats on continuation => 3+2=5 > 4, too many beats
			const parsed = parseSong(
				song('A D... \\', 'lyric', 'G.. C')
			);
			expect(parsed.allLines[0].type).toBe('lyric');
			expect(parsed.allLines[2].type).toBe('lyric');
		});
	});

	describe('parser output structure', () => {
		test('first line has hasContinuation flag', () => {
			const parsed = parseSong(
				song('A D... \\', 'Lorem ipsum', 'G. C', 'Consectetur')
			);
			const chordLines = parsed.allLines.filter(
				(l) => l.type === 'chord'
			);
			expect(chordLines[0].model.hasContinuation).toBe(true);
			expect(chordLines[1].model.hasContinuation).toBeFalsy();
		});

		test('continuation line first bar has isContinuation flag', () => {
			const parsed = parseSong(
				song('A D... \\', 'Lorem ipsum', 'G. C', 'Consectetur')
			);
			const chordLines = parsed.allLines.filter(
				(l) => l.type === 'chord'
			);
			expect(chordLines[1].model.allBars[0].isContinuation).toBe(true);
		});

		test('first line allBars contains complete bars plus the incomplete bar', () => {
			const parsed = parseSong(
				song('A D... \\', 'Lorem ipsum', 'G. C', 'Consectetur')
			);
			const chordLines = parsed.allLines.filter(
				(l) => l.type === 'chord'
			);
			// Line 1: complete A bar + incomplete D... bar
			expect(chordLines[0].model.allBars.length).toBe(2);
			// Line 2: continuation bar (G.) + C bar
			expect(chordLines[1].model.allBars.length).toBe(2);
			expect(chordLines[1].model.allBars[0].isContinuation).toBe(true);
		});

		test('% after split falls back to lyric', () => {
			const parsed = parseSong(
				song('A D... \\', 'Lorem ipsum', 'G. C', 'Consectetur', '%')
			);
			// Neither the split line nor the continuation line should be
			// stored as previousChordLine, so % has nothing to repeat
			const lastLine = parsed.allLines[parsed.allLines.length - 1];
			expect(lastLine.type).toBe('lyric');
		});

		test('%% after split falls back to lyric', () => {
			const parsed = parseSong(
				song('A D... \\', 'Lorem ipsum', 'G. C', 'Consectetur', '%%')
			);
			const lastLine = parsed.allLines[parsed.allLines.length - 1];
			expect(lastLine.type).toBe('lyric');
		});
	});

	describe('split without continuation', () => {
		test('split line at end of song falls back to lyric', () => {
			const parsed = parseSong(song('A D... \\'));
			expect(parsed.allLines[0].type).toBe('lyric');
		});

		test('split line followed only by lyric falls back to lyric', () => {
			const parsed = parseSong(song('A D... \\', 'Lorem ipsum'));
			expect(parsed.allLines[0].type).toBe('lyric');
		});
	});

	describe('split with multiple chords in incomplete bar', () => {
		test('handles two chords in the incomplete bar', () => {
			// In 5/4: A.. B.. = 4 beats, leaving 1 beat pending. Then C. completes.
			const text = toText(
				render(song('5/4', 'A.. B.. \\', 'line 1', 'C. D', 'line 2'), {
					alignBars: false,
				})
			);
			expect(text).toBe(
				'5/4\n' +
					'|A..  B..  \n' +
					'line 1\n' +
					'C.  |D  |\n' +
					'line 2'
			);
		});
	});

	describe('chained split edge cases', () => {
		test('split on a complete bar in continuation falls back to lyric', () => {
			// G... = 3 beats, then C. completes bar → \ on complete bar → error
			const parsed = parseSong(song('G... \\', 'lyric', 'C. \\'));
			expect(parsed.allLines[0].type).toBe('lyric');
			expect(parsed.allLines[2].type).toBe('lyric');
		});

		test('complete bar before split marker falls back to lyric', () => {
			// G... D. = 4 beats = complete bar → \ is meaningless
			const parsed = parseSong(song('G... D. \\'));
			expect(parsed.allLines[0].type).toBe('lyric');
		});
	});

	describe('chained splits', () => {
		test('two consecutive splits render correctly', () => {
			const text = toText(
				render(
					song(
						'C G... \\',
						'line 1',
						'D. A D... \\',
						'line 2',
						'G. C',
						'line 3'
					),
					{ alignBars: false }
				)
			);
			expect(text).toBe(
				'|C  |G...  \n' +
					'line 1\n' +
					'D.  |A  |D...  \n' +
					'line 2\n' +
					'G.  |C  |\n' +
					'line 3'
			);
		});

		test('chained splits merge in chords-only mode', () => {
			const text = toText(
				render(
					song(
						'C G... \\',
						'line 1',
						'D. A D... \\',
						'line 2',
						'G. C',
						'line 3'
					),
					{ chartType: 'chords', alignBars: false }
				)
			);
			expect(text).toBe('|C  |G...  D.  |A  |D...  G.  |C  |');
		});

		test('parser flags are correct for chained splits', () => {
			const parsed = parseSong(
				song(
					'C G... \\',
					'line 1',
					'D. A D... \\',
					'line 2',
					'G. C',
					'line 3'
				)
			);
			const chordLines = parsed.allLines.filter(
				(l) => l.type === 'chord'
			);
			expect(chordLines.length).toBe(3);
			expect(chordLines[0].model.hasContinuation).toBe(true);
			expect(chordLines[1].model.hasContinuation).toBe(true);
			expect(chordLines[1].model.allBars[0].isContinuation).toBe(true);
			expect(chordLines[2].model.hasContinuation).toBe(false);
			expect(chordLines[2].model.allBars[0].isContinuation).toBe(true);
		});
	});

	describe('split with alignBars', () => {
		test('aligned bars work with split', () => {
			const text = toText(
				render(
					song('A D... \\', 'Lorem ipsum', 'G. C', 'Consectetur'),
					{ alignBars: true }
				)
			);
			expect(text).toBe(
				'|A     |D...    \n' +
					'Lorem ipsum\n' +
					'G.  |C        |\n' +
					'Consectetur'
			);
		});
	});
});
