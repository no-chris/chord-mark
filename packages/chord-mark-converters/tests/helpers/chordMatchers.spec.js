import {
	isChordLine,
	isChordLyricsLine,
	chordLineRe,
	chordLyricsRe,
} from '../../src/helpers/chordMatchers';

describe('chordMatchers', () => {
	test('Module', () => {
		expect(isChordLine).toBeInstanceOf(Function);
		expect(isChordLyricsLine).toBeInstanceOf(Function);
		expect(chordLineRe).toBeInstanceOf(RegExp);
		expect(chordLyricsRe).toBeInstanceOf(RegExp);
	});
});

describe('isChordLyricsLine', () => {
	describe.each([
		// valid chordLyrics lines
		['Chords mixed with lyrics', 'Lyrics [A]with [D7]chords', true],
		['Chords at the beginning', '[A][D7]Lyrics with chords', true],
		['Chords at the end', 'Lyrics with bracketed chords[A][D7]', true],
		['lone chord', '[A]', true],
		['Chords without lyrics', '[A]   [B]', true],
		['Throw in some tabs', 'Lyrics \t [A]with \t [D7]chords', true],

		// invalid
		['Invalid chord symbols', 'Lyrics [Amid]with [D7]chords', false],
		['Section label', '[Verse]', false],
		['Chords without brackets', 'Ami D7', false],
		['ChordLyrics without brackets', 'Lyrics Ami with D7 chords', false],
		['Unclosed brackets', 'Lyrics with [D7 chords', false],
		['Empty line, spaces', '   ', false],
		['Empty line, tabs', '\t\t', false],
	])('%s', (title, input, expected) => {
		test('should correctly detect ChordLyric line', () => {
			expect(isChordLyricsLine(input)).toBe(expected);
		});
	});
});

describe('isChordLine', () => {
	describe.each([
		// valid chord lines
		['Chord symbols', 'A D7', true],
		['Chord symbols with tabs', '\tA \t\t D7\t', true],
		['Chord symbols with spaces', '    A      D7   ', true],

		// invalid
		['Invalid symbols', 'Amid D7', false],
		['Lyric line', 'A lyric line', false],
		['Bracketed chords', '[A] [D7]', false],
		['Empty line, spaces', '   ', false],
		['Empty line, tabs', '\t\t', false],
	])('%s', (title, input, expected) => {
		test('should correctly detect Chord line', () => {
			expect(isChordLine(input)).toBe(expected);
		});
	});
});
