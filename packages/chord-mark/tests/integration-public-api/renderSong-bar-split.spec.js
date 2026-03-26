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
			// prettier-ignore
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
			// prettier-ignore
			expect(text).toBe(
				'|A...  \n' + 
				'line 1\n' + 
				'B.  |C  |\n' + 
				'line 2'
			);
		});

		test('continuation line contains only the continuation bar', () => {
			const text = toText(
				render(song('A D... \\', 'line 1', 'G.', 'line 2'), {
					alignBars: false,
				})
			);
			// prettier-ignore
			expect(text).toBe(
				'|A  |D...  \n' + 
				'line 1\n' + 
				'G.  |\n' + 
				'line 2'
			);
		});

		test('continuation-only line merges in chords-only mode', () => {
			const text = toText(
				render(song('A D... \\', 'line 1', 'G.', 'line 2'), {
					chartType: 'chords',
					alignBars: false,
				})
			);
			expect(text).toBe('|A  |D...  G.  |');
		});

		test('continuation-only line with printBarSeparators=never', () => {
			const text = toText(
				render(song('A D... \\', 'line 1', 'G.', 'line 2'), {
					alignBars: false,
					printBarSeparators: 'never',
				})
			);
			// prettier-ignore
			expect(text).toBe(
				'A  D...  \n' + 
				'line 1\n' + 
				'G.\n' + 
				'line 2'
			);
		});

		test('printBarSeparators=never with full split+continuation', () => {
			const text = toText(
				render(
					song('A D... \\', 'Lorem ipsum', 'G. C', 'Consectetur'),
					{ alignBars: false, printBarSeparators: 'never' }
				)
			);
			// prettier-ignore
			expect(text).toBe(
				'A  D...  \n' + 
				'Lorem ipsum\n' + 
				'G.  C\n' + 
				'Consectetur'
			);
		});

		test('continuation-only line with alignBars', () => {
			const text = toText(
				render(song('A D... \\', 'line 1', 'G.', 'line 2'), {
					alignBars: true,
				})
			);
			// Continuation lines use simple spacing — aligning them would
			// be misleading since the continuation bar occupies a different
			// musical position than the bar at the same column index above.
			// prettier-ignore
			expect(text).toBe(
				'|A     |D...    \n' +
				'line 1\n' +
				'G.  |\n' +
				'line 2'
			);
		});
	});

	describe('continuation-only line with positioned chords', () => {
		test('aligns continuation-only bar with lyrics', () => {
			const text = toText(
				render(
					song(
						'A D... \\',
						'_Lorem _ipsum dolor sit amet',
						'G.',
						'oh _Consectetur'
					)
				)
			);
			// prettier-ignore
			expect(text).toBe(
				'|A    |D...                \n' +
				' Lorem ipsum dolor sit amet\n' +
				'   G.         |\n' +
				'oh Consectetur'
			);
		});

		test('aligns continuation-only bar with printBarSeparators=never', () => {
			const text = toText(
				render(
					song(
						'A D... \\',
						'_Lorem _ipsum dolor sit amet',
						'G.',
						'oh _Consectetur'
					),
					{ printBarSeparators: 'never' }
				)
			);
			// prettier-ignore
			expect(text).toBe(
				'A     D...                \n' +
				'Lorem ipsum dolor sit amet\n' +
				'   G.\n' +
				'oh Consectetur'
			);
		});
	});

	describe('split with positioned chords', () => {
		const splitInput = song(
			'A D... \\',
			'_ Lorem ipsum dolor _sit amet,',
			'G. C',
			'_Con _sectetur adipiscing elit'
		);

		test('aligns chords with lyrics on both lines', () => {
			const text = toText(render(splitInput));
			// prettier-ignore
			expect(text).toBe(
				'|A                 |D...     \n' +
				'  Lorem ipsum dolor sit amet,\n' +
				'G. |C                       |\n' +
				'Con sectetur adipiscing elit'
			);
		});

		test('aligns with printBarSeparators=never', () => {
			const text = toText(
				render(splitInput, { printBarSeparators: 'never' })
			);
			// prettier-ignore
			expect(text).toBe(
				'A                  D...     \n' +
				' Lorem ipsum dolor sit amet,\n' +
				'G.  C\n' +
				'Con sectetur adipiscing elit'
			);
		});

		test('aligns with printChordsDuration=never', () => {
			const text = toText(
				render(splitInput, { printChordsDuration: 'never' })
			);
			// prettier-ignore
			expect(text).toBe(
				'|A                 |D        \n' +
				'  Lorem ipsum dolor sit amet,\n' +
				'G  |C                       |\n' +
				'Con sectetur adipiscing elit'
			);
		});

		test('aligns with printBarSeparators=never and printChordsDuration=never', () => {
			const text = toText(
				render(splitInput, {
					printBarSeparators: 'never',
					printChordsDuration: 'never',
				})
			);
			// prettier-ignore
			expect(text).toBe(
				'A                  D        \n' +
				' Lorem ipsum dolor sit amet,\n' +
				'G   C\n' +
				'Con sectetur adipiscing elit'
			);
		});

		test('aligns with printChordsDuration=always', () => {
			const text = toText(
				render(splitInput, { printChordsDuration: 'always' })
			);
			// prettier-ignore
			expect(text).toBe(
				'|A                 |D...     \n' +
				'  Lorem ipsum dolor sit amet,\n' +
				'G. |C                       |\n' +
				'Con sectetur adipiscing elit'
			);
		});

		test('split with positioned chords and alignChordsWithLyrics disabled', () => {
			const text = toText(
				render(
					song(
						'A D... \\',
						'_ Lorem ipsum dolor _sit amet,',
						'G. C',
						'_Con _sectetur'
					),
					{ alignChordsWithLyrics: false, alignBars: false }
				)
			);
			// prettier-ignore
			expect(text).toBe(
				'|A  |D...  \n' +
				'Lorem ipsum dolor sit amet,\n' +
				'G.  |C  |\n' +
				'Con sectetur'
			);
		});
	});

	describe('chords-only mode merge', () => {
		test('continuation-only merge followed by chord line has no empty line', () => {
			const text = toText(
				render(song('A D... \\', 'lyric1', 'G.', 'lyric2', 'A D'), {
					chartType: 'chords',
					alignBars: false,
				})
			);
			expect(text).toBe('|A  |D...  G.  |\n' + '|A  |D  |');
		});

		test('merges split bar onto one line with chartType=chords', () => {
			const text = toText(
				render(
					song('A D... \\', 'Lorem ipsum', 'G. C', 'Consectetur'),
					{ chartType: 'chords', alignBars: false }
				)
			);
			// prettier-ignore
			expect(text).toBe(
				'|A  |D...  G.  |\n' + 
				'|C  |'
			);
		});

		test('merges split bar with multiple bars before split', () => {
			const text = toText(
				render(
					song('A D... \\', 'Lorem ipsum', 'G. C E', 'Consectetur'),
					{ chartType: 'chords', alignBars: false }
				)
			);
			// prettier-ignore
			expect(text).toBe(
				'|A  |D...  G.  |\n' + 
				'|C  |E  |'
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

		test('split without lyric before continuation invalidates split', () => {
			const parsed = parseSong(song('A D... \\', 'G. C', 'lyric'));
			// No lyric line between split and continuation — invalid.
			// G. C also fails without continuation context (G. = 1 beat).
			expect(parsed.allLines[0].type).toBe('lyric');
			expect(parsed.allLines[1].type).toBe('lyric');
			expect(parsed.allLines[2].type).toBe('lyric');
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

		test('split + 2 lyric lines invalidates split', () => {
			const parsed = parseSong(
				song('A D... \\', 'lyric 1', 'lyric 2', 'C', 'Consectetur')
			);
			expect(parsed.allLines[0].type).toBe('lyric');
			expect(parsed.allLines[1].type).toBe('lyric');
			expect(parsed.allLines[2].type).toBe('lyric');
			expect(parsed.allLines[3].type).toBe('chord');
			expect(parsed.allLines[4].type).toBe('lyric');
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
			const parsed = parseSong(song('A D... \\', 'lyric', 'G.. C'));
			expect(parsed.allLines[0].type).toBe('lyric');
			expect(parsed.allLines[2].type).toBe('lyric');
		});

		test('bar repeat on continuation line falls back to lyric', () => {
			const parsed = parseSong(song('A D... \\', 'lyric', 'G. %'));
			expect(parsed.allLines[0].type).toBe('lyric');
			expect(parsed.allLines[2].type).toBe('lyric');
		});

		test('bar repeat after completed continuation bar is valid', () => {
			const parsed = parseSong(song('A D... \\', 'lyric', 'G. C %'));
			expect(parsed.allLines[0].type).toBe('chord');
			expect(parsed.allLines[2].type).toBe('chord');
		});

		test('bar repeat on chained continuation after normal bar is valid', () => {
			const parsed = parseSong(
				song(
					'G.. A.. D.. \\',
					'lyric',
					'G.. D.. \\',
					'lyric',
					'G..  A %%'
				)
			);
			// All lines are valid: G.. completes continuation, A is a normal bar, %% repeats A
			expect(parsed.allLines[0].type).toBe('chord');
			expect(parsed.allLines[2].type).toBe('chord');
			expect(parsed.allLines[4].type).toBe('chord');
		});

		test('forced lyric : on continuation invalidates split', () => {
			const parsed = parseSong(song('A D... \\', 'lyric', ':G. C'));
			// :G. fails chord detection → lyric → invalidates split
			expect(parsed.allLines[0].type).toBe('lyric');
			expect(parsed.allLines[1].type).toBe('lyric');
			expect(parsed.allLines[2].type).toBe('lyric');
		});

		test('two lyric lines invalidate split (render)', () => {
			const text = toText(
				render(
					song('A D... \\', 'lyric 1', 'lyric 2', 'E F', 'lyric 3'),
					{ alignBars: false }
				)
			);
			// Split invalidated: first line becomes literal lyric text
			expect(text).toContain('A D... \\');
			expect(text).toContain('|E  |F  |');
			// prettier-ignore
			expect(text).toBe(
				'A D... \\\n' +
				'lyric 1\n' +
				'lyric 2\n' +
				'|E  |F  |\n' +
				'lyric 3'
			);
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

		test('%% after split + normal chord line falls back to lyric', () => {
			const parsed = parseSong(
				song(
					'A D... \\',
					'lyric 1',
					'G. C',
					'lyric 2',
					'D',
					'lyric 3',
					'%%',
					'lyric 4'
				)
			);
			// D is a standalone chord line after the split pair,
			// but %% needs 2 previous chord lines and only 1 is stored
			const lines = parsed.allLines;
			expect(lines[4].type).toBe('chord'); // D
			expect(lines[6].type).toBe('lyric'); // %% falls back
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
			// prettier-ignore
			expect(text).toBe(
				'5/4\n' +
				'|A..  B..  \n' +
				'line 1\n' +
				'C.  |D  |\n' +
				'line 2'
			);
		});

		test('handles four chords in the split bar, two on each side', () => {
			// A. B. = 2 beats, leaving 2 pending. C. D. completes the bar.
			const text = toText(
				render(song('A. B. \\', 'line 1', 'C. D. E', 'line 2'), {
					alignBars: false,
				})
			);
			// prettier-ignore
			expect(text).toBe(
				'|A.  B.  \n' +
				'line 1\n' +
				'C.  D.  |E  |\n' +
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
			// prettier-ignore
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
			// prettier-ignore
			expect(text).toBe(
				'|C  |G...  D.  |\n' + 
				'|A  |D...  G.  |\n' + 
				'|C  |'
			);
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

	describe('auto-repeat chords with bar split', () => {
		test('full render of auto-repeated split section', () => {
			const text = toText(
				render(
					song(
						'#v',
						'A D... \\',
						'Lorem ipsum',
						'G. C',
						'Consectetur',
						'#v',
						'New lyrics',
						'New lyrics2'
					),
					{ alignBars: false }
				)
			);
			// prettier-ignore
			expect(text).toBe(
				'Verse 1\n' +
				'|A  |D...  \n' +
				'Lorem ipsum\n' +
				'G.  |C  |\n' +
				'Consectetur\n' +
				'Verse 2\n' +
				'|A  |D...  \n' +
				'New lyrics\n' +
				'G.  |C  |\n' +
				'New lyrics2'
			);
		});

		test('full render of overridden split line', () => {
			const text = toText(
				render(
					song(
						'#v',
						'A D... \\',
						'Lorem ipsum',
						'G. C',
						'Consectetur',
						'#v',
						'E F',
						'New lyrics',
						'New lyrics2'
					),
					{ alignBars: false }
				)
			);
			// prettier-ignore
			expect(text).toBe(
				'Verse 1\n' +
				'|A  |D...  \n' +
				'Lorem ipsum\n' +
				'G.  |C  |\n' +
				'Consectetur\n' +
				'Verse 2\n' +
				'|E  |F  |\n' +
				'New lyrics\n' +
				'New lyrics2'
			);
		});

		test('full render of overridden continuation line', () => {
			const text = toText(
				render(
					song(
						'#v',
						'A D... \\',
						'Lorem ipsum',
						'G. C',
						'Consectetur',
						'#v',
						'New lyrics',
						'E. F',
						'New lyrics2'
					),
					{ alignBars: false }
				)
			);
			// prettier-ignore
			expect(text).toBe(
				'Verse 1\n' +
				'|A  |D...  \n' +
				'Lorem ipsum\n' +
				'G.  |C  |\n' +
				'Consectetur\n' +
				'Verse 2\n' +
				'|A  |D...  \n' +
				'New lyrics\n' +
				'E.  |F  |\n' +
				'New lyrics2'
			);
		});

		test('override split with different pending beats invalidates split', () => {
			const text = toText(
				render(
					song(
						'#v',
						'A D... \\',
						'Lorem ipsum',
						'G. C',
						'Consectetur',
						'#v',
						'A C.. \\',
						'New lyrics',
						'New lyrics2'
					),
					{ alignBars: false }
				)
			);
			// A C.. \ becomes lyric (blueprint continuation incompatible)
			// prettier-ignore
			expect(text).toBe(
				'Verse 1\n' +
				'|A  |D...  \n' +
				'Lorem ipsum\n' +
				'G.  |C  |\n' +
				'Consectetur\n' +
				'Verse 2\n' +
				'A C.. \\\n' +
				'New lyrics\n' +
				'New lyrics2'
			);
		});

		test('override split with different pending beats + user continuation works', () => {
			const text = toText(
				render(
					song(
						'#v',
						'A D... \\',
						'Lorem ipsum',
						'G. C',
						'Consectetur',
						'#v',
						'A C.. \\',
						'New lyrics',
						'D.. F',
						'New lyrics2'
					),
					{ alignBars: false }
				)
			);
			// prettier-ignore
			expect(text).toBe(
				'Verse 1\n' +
				'|A  |D...  \n' +
				'Lorem ipsum\n' +
				'G.  |C  |\n' +
				'Consectetur\n' +
				'Verse 2\n' +
				'|A  |C..  \n' +
				'New lyrics\n' +
				'D..  |F  |\n' +
				'New lyrics2'
			);
		});

		test('empty section auto-repeats split (no lyrics)', () => {
			const text = toText(
				render(
					song(
						'#v',
						'A D... \\',
						'Lorem ipsum',
						'G. C',
						'Consectetur',
						'#v'
					),
					{ alignBars: false }
				)
			);
			// Section 2 has no content → auto-repeats blueprint including split
			const lines = text.split('\n');
			expect(lines[0]).toBe('Verse 1');
			expect(lines[5]).toBe('Verse 2');
			// Repeated section should contain chord lines
			const verse2Text = text.slice(text.indexOf('Verse 2'));
			expect(verse2Text).toContain('D...');
			expect(verse2Text).toContain('G.');
		});
	});

	describe('even beat count split', () => {
		test('splits a bar with even beats on each side', () => {
			const text = toText(
				render(song('G C.. \\', 'line 1', 'D.. G', 'line 2'), {
					alignBars: false,
				})
			);
			// prettier-ignore
			expect(text).toBe(
				'|G  |C..  \n' + 
				'line 1\n' + 
				'D..  |G  |\n' + 
				'line 2'
			);
		});

		test('even beat split merges in chords-only mode', () => {
			const text = toText(
				render(song('G C.. \\', 'line 1', 'D.. G', 'line 2'), {
					chartType: 'chords',
					alignBars: false,
				})
			);
			// prettier-ignore
			expect(text).toBe(
				'|G  |C  D  |\n' + 
				'|G  |'
			);
		});

		test('even beat split merged in chords-only mode shows dots with always', () => {
			const text = toText(
				render(song('G C.. \\', 'line 1', 'D.. G', 'line 2'), {
					chartType: 'chords',
					printChordsDuration: 'always',
					alignBars: false,
				})
			);
			// prettier-ignore
			expect(text).toBe(
				'|G  |C..  D..  |\n' + 
				'|G  |'
			);
		});

		test('uneven beat split merged in chords-only mode shows dots', () => {
			const text = toText(
				render(song('G C... \\', 'line 1', 'D. G', 'line 2'), {
					chartType: 'chords',
					alignBars: false,
				})
			);
			// prettier-ignore
			expect(text).toBe(
				'|G  |C...  D.  |\n' + 
				'|G  |'
			);
		});

		test('even beat split parser flags are correct', () => {
			const parsed = parseSong(song('G C.. \\', 'line 1', 'D.. G'));
			const chordLines = parsed.allLines.filter(
				(l) => l.type === 'chord'
			);
			expect(chordLines.length).toBe(2);
			expect(chordLines[0].model.hasContinuation).toBe(true);
			expect(chordLines[1].model.allBars[0].isContinuation).toBe(true);
		});
	});

	describe('split with printChordsDuration', () => {
		test('never hides durations on split bars too', () => {
			const text = toText(
				render(
					song('A D... \\', 'Lorem ipsum', 'G. C', 'Consectetur'),
					{ printChordsDuration: 'never', alignBars: false }
				)
			);
			// prettier-ignore
			expect(text).toBe(
				'|A  |D  \n' +
				'Lorem ipsum\n' +
				'G  |C  |\n' +
				'Consectetur'
			);
		});

		test('never hides durations on both complete and split bars', () => {
			const text = toText(
				render(
					song(
						'A.. B.. D... \\',
						'Lorem ipsum',
						'G. C',
						'Consectetur'
					),
					{ printChordsDuration: 'never', alignBars: false }
				)
			);
			// prettier-ignore
			expect(text).toBe(
				'|A  B  |D  \n' +
				'Lorem ipsum\n' +
				'G  |C  |\n' +
				'Consectetur'
			);
		});

		test('always shows durations on split bars', () => {
			const text = toText(
				render(
					song('A D... \\', 'Lorem ipsum', 'G. C', 'Consectetur'),
					{ printChordsDuration: 'always', alignBars: false }
				)
			);
			// prettier-ignore
			expect(text).toBe(
				'|A  |D...  \n' +
				'Lorem ipsum\n' +
				'G.  |C  |\n' +
				'Consectetur'
			);
		});
	});

	describe('split with alignBars', () => {
		// Continuation lines are excluded from the alignment algorithm and
		// use simple spacing. Aligning them would be misleading: the
		// continuation bar (e.g. G.) is the tail of a split bar, not the
		// same bar as the one at the same column index on the split line.
		// Bars after the continuation are also semantically shifted, so
		// column alignment cannot be meaningful.

		test('aligned bars work with split', () => {
			const text = toText(
				render(
					song('A D... \\', 'Lorem ipsum', 'G. C', 'Consectetur'),
					{ alignBars: true }
				)
			);
			// prettier-ignore
			expect(text).toBe(
				'|A     |D...    \n' +
				'Lorem ipsum\n' +
				'G.  |C  |\n' +
				'Consectetur'
			);
		});

		test('bugfix: chained splits with alignBars do not crash', () => {
			const text = toText(
				render(
					song(
						'#c',
						'G.. A.. D.. \\',
						'_Hey! Mr. _Tambourine Man, _play a song for _me',
						'G.. D.. \\',
						"I'm not _sleepy and there _is no place I'm _going to",
						'G.. A G A',
						'_Hey! Mr. _Tambourine Man, _play a song for _me'
					),
					{ alignBars: true }
				)
			);
			expect(text).toBeDefined();
			expect(text).not.toBe('');
		});
	});

	describe('sub-beat groups with splits', () => {
		test('sub-beat group in complete bar before split', () => {
			const text = toText(
				render(song('A... [B C] D... \\', 'line 1', 'G. E', 'line 2'), {
					alignBars: false,
				})
			);
			// A...(3)+[B C](1)=4 beats = complete bar. D...(3) pending 1.
			// G.(1) completes. E = full bar.
			// prettier-ignore
			expect(text).toBe(
				'|A...  [B C]  |D...  \n' +
				'line 1\n' +
				'G.  |E  |\n' +
				'line 2'
			);
		});

		test('sub-beat group after continuation completes', () => {
			const text = toText(
				render(
					song('A D... \\', 'line 1', 'G. C.. [E F] D.', 'line 2'),
					{ alignBars: false }
				)
			);
			// G.(1) completes. C..(2)+[E F](1)+D.(1) = 4 = full bar.
			// prettier-ignore
			expect(text).toBe(
				'|A  |D...  \n' +
				'line 1\n' +
				'G.  |C..  [E F]  D.  |\n' +
				'line 2'
			);
		});

		test('sub-beat group completing the continuation in 5/4', () => {
			const text = toText(
				render(song('5/4', 'A.... \\', 'line 1', '[G C] D', 'line 2'), {
					alignBars: false,
				})
			);
			// A....(4) in 5/4, pending 1. [G C](1) completes. D = full bar.
			// prettier-ignore
			expect(text).toBe(
				'5/4\n' +
				'|A....  \n' +
				'line 1\n' +
				'[G C]  |D  |\n' +
				'line 2'
			);
		});
	});

	describe('time signatures with splits', () => {
		test('3/4 time with split', () => {
			const text = toText(
				render(song('3/4', 'A.. \\', 'line 1', 'G. C', 'line 2'), {
					alignBars: false,
				})
			);
			// A..(2) in 3/4, pending 1. G.(1) completes. C = 3 beats = full bar.
			// prettier-ignore
			expect(text).toBe(
				'3/4\n' +
				'|A..  \n' +
				'line 1\n' +
				'G.  |C  |\n' +
				'line 2'
			);
		});

		test('inline time sig change on split line', () => {
			const text = toText(
				render(song('A 3/4 G.. \\', 'line 1', 'D. C', 'line 2'), {
					alignBars: false,
				})
			);
			// A = 4 beats in 4/4 (complete). 3/4 change. G..(2) pending 1.
			// D.(1) completes. C = 3 beats = full bar.
			// prettier-ignore
			expect(text).toBe(
				'|A  |3/4 G..  \n' +
				'line 1\n' +
				'3/4 D.  |C  |\n' +
				'line 2'
			);
		});

		test('time sig change after continuation completes', () => {
			const text = toText(
				render(song('A D... \\', 'line 1', 'G. 3/4 C.. D.', 'line 2'), {
					alignBars: false,
				})
			);
			// G.(1) completes 4/4 continuation. 3/4 change. C..(2)+D.(1)=3 = full bar.
			// prettier-ignore
			expect(text).toBe(
				'|A  |D...  \n' +
				'line 1\n' +
				'G.  |3/4 C..  D.  |\n' +
				'line 2'
			);
		});
	});

	describe('bar repeat rendering with split', () => {
		test('bar repeat on continuation after completion', () => {
			const text = toText(
				render(song('A D... \\', 'line 1', 'G. C %', 'line 2'), {
					alignBars: false,
				})
			);
			// G.(1) completes, C = normal bar, % repeats C.
			// prettier-ignore
			expect(text).toBe(
				'|A  |D...  \n' +
				'line 1\n' +
				'G.  |C  |%  |\n' +
				'line 2'
			);
		});

		test('%% after normal line following split pair', () => {
			const text = toText(
				render(
					song(
						'A D... \\',
						'line 1',
						'G. C',
						'line 2',
						'E F',
						'line 3',
						'%%',
						'line 4'
					),
					{ alignBars: false }
				)
			);
			// Split pair not stored in previousChordLines.
			// E F is stored → %% repeats E F (renders as %% symbol).
			const lines = text.split('\n');
			expect(lines[4]).toBe('|E  |F  |');
			expect(lines[6]).toBe('%%');
		});
	});
});
