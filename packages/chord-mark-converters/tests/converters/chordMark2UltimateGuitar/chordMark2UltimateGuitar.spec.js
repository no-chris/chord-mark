import { parseSong, renderSong } from 'chord-mark';

import chordMark2UltimateGuitar from '../../../src/converters/chordMark2UltimateGuitar';

describe('chordMark2UltimateGuitar', () => {
	test('Module', () => {
		expect(chordMark2UltimateGuitar).toBeInstanceOf(Function);
	});
});

describe.each([
	[
		'base',
		`#v
A D7
_Some _lyrics
Em7/G... G7.
_Another _line`,
		`[Verse]
|[ch]A[/ch]   |[ch]D7[/ch]   |
Some lyrics
|[ch]Em7/G[/ch]... [ch]G7[/ch]. |
Another   line`,
	],
])('%s', (title, input, output) => {
	test('should produce expected Ultimate Guitar markup', () => {
		const parsed = parseSong(input);
		const rendered = renderSong(parsed, {
			customRenderer: chordMark2UltimateGuitar(),
		});
		expect(rendered).toBe(output);
	});
});
