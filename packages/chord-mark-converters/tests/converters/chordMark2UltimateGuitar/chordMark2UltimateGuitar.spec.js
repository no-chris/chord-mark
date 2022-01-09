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
		`A D7
_Some _lyrics`,
		`[ch]A[/ch]    [ch]D7[/ch]
Some lyrics`,
	],
	[
		'should remove chord position markers (given proper config)',
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
		`C(add #9)
_Chord symbol with space`,
		`Cadd#9
Chord symbol with space`,
	],
])('%s', (title, input, output) => {
	test('should produce expected Ultimate Guitar markup', () => {
		const parsed = parseSong(input);
		const rendered = renderSong(parsed, {
			printChordsDuration: 'never',
			customRenderer: chordMark2UltimateGuitar(),
			chordSymbolRenderer: chordRendererFactory({
				customFilters: [chordSymbolUltimateGuitar()],
				useShortNamings: true,
			}),
		});
		expect(rendered).toBe(output);
	});
});
