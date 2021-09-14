import replaceRepeatedBars from '../../../src/renderer/replaceRepeatedBars';
import parseSong from '../../../src/parser/parseSong';
import getChordSymbol from '../../../src/renderer/helpers/getChordSymbol';
import { forEachChordInChordLine } from '../../../src/parser/helper/songs';

describe('replaceRepeatedBars', () => {
	test('Module', () => {
		expect(replaceRepeatedBars).toBeInstanceOf(Function);
	});

	describe.each([
		[
			'no lyric line, single chord per bar',
			'A / / B /\n ',
			'A % % B %',
			'A % % B %',
		],
		[
			'no lyric line, multiple chords per bar',
			'A.. B.. / / B.. C.. /\n ',
			'A B % % B C %',
			'A B % % B C %',
		],
		[
			'no position markers',
			'A / / B /\nA lyric line',
			'A % % B %',
			'A % % B %',
		],
		[
			'single chord per bar, position markers',
			'A / / B /\n_A _ve_ry _long _ly_ric _line',
			'A % % B %',
			'A % % B %',
		],
		[
			'multiple chords per bar, position markers',
			'A.. B.. / / /\n_A _ve_ry _long _ly_ric _line _',
			'A B A B A B A B',
			'A B % % %',
		],
		[
			'a mix of single/multiple chords per bar',
			'A.. B.. / C / A.. B.. /\n_A _ve_ry _ve_ry _long _ly_ric _li_ne',
			'A B A B C % A B A B',
			'A B % C % A B %',
		],
		[
			'repeated bar at the end of the line, with no positioned chords',
			'A.. B.. / /\n_A _ly_ric _line',
			'A B A B %',
			'A B % %',
		],
		[
			'more position markers than chords',
			'A.. B.. /\n_A _ve_ry _ve_ry _long _ly_ric _li_ne',
			'A B A B',
			'A B %',
		],
	])(
		'%s',
		(
			title,
			input,
			expectedWithAlignedChords,
			expectedWithoutAlignedChords
		) => {
			test('Should render correctly with aligned chords', () => {
				const parsed = parseSong(input.split('\n'));
				const replaced = replaceRepeatedBars(parsed.allLines[0], {
					alignChordsWithLyrics: true,
				});
				const rendered = [];
				forEachChordInChordLine(replaced.model, (chord) => {
					rendered.push(getChordSymbol(chord.model));
				});
				expect(rendered.join(' ')).toBe(expectedWithAlignedChords);
			});

			test('Should render correctly with non-aligned chords', () => {
				const parsed = parseSong(input.split('\n'));
				const replaced = replaceRepeatedBars(parsed.allLines[0], {
					alignChordsWithLyrics: false,
				});
				const rendered = [];
				forEachChordInChordLine(replaced.model, (chord) => {
					rendered.push(getChordSymbol(chord.model));
				});
				expect(rendered.join(' ')).toBe(expectedWithoutAlignedChords);
			});
		}
	);
});
