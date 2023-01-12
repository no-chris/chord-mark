import { parseSong, renderSong } from 'chord-mark';
import { chordRendererFactory } from 'chord-symbol';
import chordSymbolUltimateGuitar from 'chord-symbol-ultimateguitar';
import chordMark2UltimateGuitar from '../../../src/converters/chordMark2UltimateGuitar';

describe('chordMark2UltimateGuitar', () => {
	test('Module', () => {
		expect(chordMark2UltimateGuitar).toBeInstanceOf(Function);
	});
});

describe.each([
	[
		'should remove bar separators',
		`A D7 B... E7. Gm.. Bm..
_Some _lyrics _with a lot _of chords _on top _of them`,
		`[ch]A[/ch]    [ch]D7[/ch]     [ch]B[/ch]          [ch]E7[/ch]        [ch]Gm[/ch]     [ch]Bm[/ch]
Some lyrics with a lot of chords on top of them`,
	],
	[
		'should remove chord beat count indicators (given proper config)',
		`Em7/G... G7.
_Another _line`,
		`[ch]Em7/G[/ch]   [ch]G7[/ch]
Another line`,
	],
	[
		'should remove parenthesis',
		`C7(#9)... Gm(add9).
_Chords with _parenthesis`,
		`[ch]C7#9[/ch]        [ch]Gmadd9[/ch]
Chords with parenthesis`,
	],
	[
		'should remove spaces in chord names',
		`C(add #9)  A(add b9)
_Chord symbols with a _space`,
		`[ch]Cadd#9[/ch]               [ch]Aaddb9[/ch]
Chord symbols with a space`,
	],
	[
		'should keep spaces at the beginning of the line',
		`C A
A chord line _starting with _blank space`,
		`             [ch]C[/ch]             [ch]A[/ch]
A chord line starting with blank space`,
	],
	[
		'should correctly space lyrics starting after the first chord',
		`Cm7(#9) A
_ A chord before the _first lyrics`,
		`[ch]Cm7add#9[/ch]                   [ch]A[/ch]
        A chord before the first lyrics`,
	],
	[
		'Keep bar separators for non-positioned chord lines',
		`C A
A chord line without position markers`,
		`|[ch]C[/ch]     |[ch]A[/ch]     |
A chord line without position markers`,
	],
	[
		'Keep bar separators for chord lines without lyric lines',
		`#s
A7 %%%
D7 % A7 %
E7 D7 A7 A7.. E7..`,
		`[Solo]
|[ch]A7[/ch]     |[ch]%[/ch]      |[ch]%[/ch]      |[ch]%[/ch]         |
|[ch]D7[/ch]     |[ch]%[/ch]      |[ch]A7[/ch]     |[ch]%[/ch]         |
|[ch]E7[/ch]     |[ch]D7[/ch]     |[ch]A7[/ch]     |[ch]A7[/ch]   [ch]E7[/ch]   |`,
	],
])('%s', (title, input, output) => {
	test('should produce expected Ultimate Guitar markup', () => {
		const parsed = parseSong(input);
		const rendered = renderSong(parsed, {
			printChordsDuration: 'never',
			printBarSeparators: 'grids',
			customRenderer: chordMark2UltimateGuitar(),
			chordSymbolRenderer: chordRendererFactory({
				customFilters: [chordSymbolUltimateGuitar()],
				useShortNamings: true,
			}),
		});
		expect(rendered).toBe(output);
	});
});
