import { parseSong } from '../../src/chordMark';
import song from './helpers/songInput';

describe('parseSong - error recovery', () => {
	// parseSong catches chord parsing errors and falls back to treating
	// the line as a lyric. This is by design — errors are only thrown
	// when calling parseChordLine directly (unit test territory).

	describe('invalid beat count falls back to lyric', () => {
		test.each([
			['1 dot', 'C.'],
			['2 dots', 'C..'],
			['3 dots', 'C...'],
			['5 dots', 'C.....'],
			['2 chords / 3 beats', 'C. D..'],
			['2 chords / 5 beats', 'C... D..'],
		])('%s: "%s" is treated as lyric', (title, input) => {
			const parsed = parseSong(song(input));
			expect(parsed.allLines[0].type).toBe('lyric');
		});
	});

	describe('invalid sub-beat group falls back to lyric', () => {
		test.each([
			['duration in group', 'A... [B7. D7.]'],
			['duration in first', 'A... [B7. D7]'],
			['duration in second', 'A... [B7 D7.]'],
			['unclosed bracket', 'A... [B7 D7'],
			['nested bracket', 'A... [B7 [D7'],
			['single chord', 'A... [C]'],
			['stray closing at start', ']A.. B7. D7.'],
			['stray closing at end', 'A... B7 D7]'],
		])('%s: "%s" is treated as lyric', (title, input) => {
			const parsed = parseSong(song(input));
			expect(parsed.allLines[0].type).toBe('lyric');
		});
	});

	describe('invalid bar repeat falls back to lyric', () => {
		test.each([
			['no bar to repeat', '% A'],
			['whitespace before %', ' % A'],
			['previous bar incomplete', 'A... % A'],
		])('%s: "%s" is treated as lyric', (title, input) => {
			const parsed = parseSong(song(input));
			expect(parsed.allLines[0].type).toBe('lyric');
		});
	});

	describe('invalid chord repetition falls back to lyric', () => {
		test.each([
			['same chord repeated', 'A. A...'],
			['same chord equal duration', 'A.. A..'],
			['same chord reversed', 'A... A.'],
		])('%s: "%s" is treated as lyric', (title, input) => {
			const parsed = parseSong(song(input));
			expect(parsed.allLines[0].type).toBe('lyric');
		});
	});

	describe('invalid inputs do not produce chord lines', () => {
		test('no chords detected in invalid chord-like input', () => {
			const parsed = parseSong(song('C.'));
			expect(parsed.allChords).toEqual([]);
		});

		test('valid chords on other lines still work', () => {
			const parsed = parseSong(song('C.', 'G Am'));
			// C. falls back to lyric, but G Am is a valid chord line
			expect(parsed.allLines[0].type).toBe('lyric');
			expect(parsed.allLines[1].type).toBe('chord');
			expect(parsed.allChords.length).toBeGreaterThan(0);
		});
	});
});
