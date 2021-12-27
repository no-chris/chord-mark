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
				customRenderer: chordMark2ChordPro,
				...options,
			});
			expect(rendered).toBe(output);
		});
	});

	describe.each([
		// ===== xxxx =====
		[
			'Should NOT align chords with lyrics if alignChordsWithLyrics === false',
			`D7.. G7..
_A very simple _lyric line`,
			`[|][D7]A very[G7] simp[|]le lyric line`,
			{ alignChordsWithLyrics: false },
		],
		[
			'Should align bars across lines with non-positioned chords',
			`Bb6... Cm7/Eb. Db6.. F9..
A lyric line a bit more complex
Bb6/D.. Bb7.. Eb6... Ebm6.
With weird chords names and durations`,
			`[|][Bb6...]A lyric line a [Cm7/Eb.]bit mor[|][Db6]e complex [F9]         [|]
[|][Bb6/D]With weird[Bb7] chords name[|][Eb6...]s and duration[Ebm6.]s    [|]`,
			/*
			|Bb6...        Cm7/Eb.|Db6      F9       |
			A lyric line a bit more complex
			|Bb6/D    Bb7         |Eb6...       Ebm6.|
			With weird chords names and durations
			 */
		],
		[
			'Should not align bars across lines with non-positioned chords if alignBars === false',
			`Bb6... Cm7/Eb. Db6.. F9..
A lyric line a bit more complex
Bb6/D.. Bb7.. Eb6... Ebm6.
With weird chords names and durations`,
			`[|][Bb6...]A lyric l[Cm7/Eb.]ine a bit[|][Db6] more [F9]comp[|]lex
[|][Bb6/D]With wei[Bb7]rd ch[|][Eb6...]ords name[Ebm6.]s and d[|]urations`,
			/*
			|Bb6...  Cm7/Eb.  |Db6  F9  |
			A lyric line a bit more complex
			|Bb6/D  Bb7  |Eb6...  Ebm6.  |
			With weird chords names and durations
			 */
			{ alignBars: false },
		],
	])('%s', (title, input, output, options = {}) => {
		test('should produce expected ChordMark markup', () => {
			const parsed = parseSong(input);
			const rendered = renderSong(parsed, {
				customRenderer: chordMark2ChordPro,
				...options,
			});
			expect(rendered).toBe(output);
		});
	});
});
