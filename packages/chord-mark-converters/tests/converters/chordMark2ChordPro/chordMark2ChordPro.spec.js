import fs from 'fs';
import path from 'path';

import { parseSong, renderSong } from 'chord-mark';
import chordMark2ChordPro from '../../../src/converters/chordMark2ChordPro';

const dataDir = path.resolve(__dirname + '/data');
const input1 = fs.readFileSync(dataDir + '/inputChordMark1.txt', 'utf-8');
const input2 = fs.readFileSync(dataDir + '/inputChordMark2.txt', 'utf-8');
const output1 = fs.readFileSync(dataDir + '/outputChordPro1.cho', 'utf-8');
const output2 = fs.readFileSync(dataDir + '/outputChordPro2.cho', 'utf-8');

describe('Module', () => {
	test('Should expose a function', () => {
		expect(typeof chordMark2ChordPro).toBe('function');
	});
});

describe('chordMark2Chordpro', () => {
	describe.skip.each([
		['base test', input1, output1],
		['no position markers', input2, output2],
	])('%s', (title, input, output, options) => {
		test('should produce expected rendering', () => {
			const parsed = parseSong(input);
			const rendered = renderSong(parsed, {
				customRenderer: chordMark2ChordPro(),
				...options,
			});
			expect(rendered).toBe(output);
		});
	});

	describe.each([
		// ===== Chord/Lyrics (NON)alignment =====
		/* */
		[
			'alignChordsWithLyrics: by default',
			`Bb6... Cm7/Eb. Db6.. F9..
_A lyric _line a bit _more com_plex
Bb6/D.. Bb7.. Eb6... Ebm6.
_With weird _chords na_mes and du_rations`,
			`[|] [Bb6...]A lyric [Cm7/Eb.]line a bit [|] [Db6]more com[F9]plex [|]
[|] [Bb6/D]With weird [Bb7]chords na[|] [Eb6...]mes and du[Ebm6.]rations [|]`,
			// | Bb6...  Cm7/Eb.    | Db6     F9  |
			//   A lyric line a bit   more complex
			// | Bb6/D      Bb7      | Eb6...    Ebm6.  |
			//   With weird chords na  mes and durations
		],
		[
			'alignChordsWithLyrics: short lyric line, all markers',
			`A7.. D7.. E7.. A7..
_Short _ _ _`,
			`[|] [A7]Short [D7] [|] [E7] [A7] [|]`,
		],
		[
			'alignChordsWithLyrics: short lyric line and missing markers',
			`A7.. D7.. E7.. A7..
_Short _`,
			`[|] [A7]Short [D7] [|] [E7] [A7] [|]`,
		],
		[
			'alignChordsWithLyrics: short lyric line and extra markers',
			`A7.. D7.. E7.. A7..
_Short _ _ _ _ _ _ _`,
			`[|] [A7]Short [D7] [|] [E7] [A7] [|]`,
		],

		/* */
		[
			'Should NOT align chords with lyrics if alignChordsWithLyrics === false',
			`D7.. G7..
_A very simple _lyric line`,
			`[|]A [D7]very [G7]simple[|] lyric line`,
			{ alignChordsWithLyrics: false },
			// | D7   G7    |
			// A very simple lyric line
		],
		/* */
		[
			'Should align bars across lines with non-positioned chords',
			`Bb6... Cm7/Eb. Db6.. F9..
_A lyric _line a bit _more com_plex
Bb6/D.. Bb7.. Eb6... Ebm6.
_With weird _chords na_mes and du_rations`,
			`[|]A [Bb6...]lyric line a b[Cm7/Eb.]it more [|]co[Db6]mplex    [F9]          [|]
[|]Wi[Bb6/D]th weird [Bb7]chords names [|]an[Eb6...]d durations  [Ebm6.]      [|]`,
			{ alignChordsWithLyrics: false },
			// | Bb6...        Cm7/Eb. | Db6      F9        |
			// A lyric line a bit more complex
			// | Bb6/D    Bb7          | Eb6...       Ebm6. |
			// With weird chords names and durations
		],
		[
			'Should not align bars across lines with non-positioned chords if alignBars === false',
			`Bb6... Cm7/Eb. Db6.. F9..
_A lyric _line a bit _more com_plex
Bb6/D.. Bb7.. Eb6... Ebm6.
_With weird _chords na_mes and du_rations`,
			`[|]A [Bb6...]lyric li[Cm7/Eb.]ne a bit [|]mo[Db6]re co[F9]mple[|]x
[|]Wi[Bb6/D]th weir[Bb7]d cho[|]rd[Eb6...]s names [Ebm6.]and dur[|]ations`,
			// | Bb6...  Cm7/Eb.  | Db6  F9  |
			// A lyric line a bit more complex
			// | Bb6/D  Bb7  | Eb6...  Ebm6.  |
			// With weird chords names and durations
			{ alignChordsWithLyrics: false, alignBars: false },
		],
		/* */
	])('%s', (title, input, output, options = {}) => {
		test('should produce expected ChordMark markup', () => {
			const parsed = parseSong(input);
			const rendered = renderSong(parsed, {
				customRenderer: chordMark2ChordPro(),
				...options,
			});
			expect(rendered).toBe(output);
		});
	});
});
