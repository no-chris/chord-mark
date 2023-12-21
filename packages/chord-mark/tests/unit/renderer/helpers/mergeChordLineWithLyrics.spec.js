import { mergeChordLineWithLyrics } from '../../../../src/renderer/helpers/mergeChordLineWithLyrics';
import { parseSong, renderSong } from '../../../../src/chordMark';
import stripTags from '../../../../src/core/dom/stripTags';

describe('mergeChordLineWithLyrics', () => {
	test('Module', () => {
		expect(mergeChordLineWithLyrics).toBeInstanceOf(Function);
	});

	describe('should properly split the chord lyrics lines into breakable blocs', () => {
		describe.each([
			/* */
			[
				'Longer chord line, 1',
				'C',
				'_Clean ending',
				//|C           |
				// Clean ending
				[
					['|', ' '],
					['C', 'Clean'],
					[' ', ' '],
					['      ', 'ending'],
					['|', ''],
				],
			],
			/* */
			[
				'Longer chord line, 2',
				'C G',
				'_Extra Chord',
				//|C          |G  |
				// Extra Chord
				[
					['|', ' '],
					['C', 'Extra'],
					[' ', ' '],
					['     ', 'Chord'],
					['|', ''],
					['G', ''],
					[' ', ''],
					['|', ''],
				],
			],
			/* */
			[
				'Longer text line',
				'C',
				'_No bar separators',
				//C
				//No bar separators
				[
					['C', 'No'],
					['', ' '],
					['', 'bar'],
					['', ' '],
					['', 'separators'],
				],
				{ printBarSeparators: false },
			],
			[
				'Exact same length',
				'C Am7',
				'_Same len_gth',
				//C       Am7
				//Same length
				[
					['C', 'Same'],
					[' ', ' '],
					['   Am7', 'length'],
				],
				{ printBarSeparators: false },
			],
			[
				'Let it be, 1',
				'C.. G..',
				'When I _find myself in _times of trouble',
				//      |C              G               |
				//When I find myself in times of trouble
				[
					['    ', 'When'],
					[' ', ' '],
					[' ', 'I'],
					['|', ' '],
					['C', 'find'],
					[' ', ' '],
					['      ', 'myself'],
					[' ', ' '],
					['  ', 'in'],
					[' ', ' '],
					['G', 'times'],
					[' ', ' '],
					['  ', 'of'],
					[' ', ' '],
					['       ', 'trouble'],
					['|', ''],
				],
			],
			/* */
			[
				'Let it be, 2',
				'Am. [Am Am/G] FM7. F6.',
				'_ Mother _Ma_ry _comes to _me',
				//|Am.      [Am Am/G] FM7.     F6. |
				//    Mother Ma ry    comes to me
				[
					['|', ' '],
					['Am.', '   '],
					['      ', 'Mother'],
					['[', ' '],
					['Am', 'Ma'],
					[' ', ' '],
					['Am/G', 'ry  '],
					[']', ' '],
					[' ', ' '],
					['FM7.', 'comes'],
					[' ', ' '],
					['  ', 'to'],
					[' ', ' '],
					['F6.', 'me'],
					[' ', ''],
					['|', ''],
				],
			],
			/* */
			[
				'Let it be, 3',
				'C.. G..',
				'_Speaking words of _wisdom',
				//|C                 G     |
				// Speaking words of wisdom
				[
					['|', ' '],
					['C', 'Speaking'],
					[' ', ' '],
					['     ', 'words'],
					[' ', ' '],
					['  ', 'of'],
					[' ', ' '],
					['G', 'wisdom'],
					['|', ''],
				],
			],
			/* */
			[
				'Let it be, 4',
				'F. [C/E Dm7] C..',
				'Let it _be _ _ _',
				//      |F. [C/E Dm7] C.. |
				//Let it be
				[
					['   ', 'Let'],
					[' ', ' '],
					['  ', 'it'],
					['|', ' '],
					['F.', 'be'],
					[' ', ''],
					['[', ''],
					['C/E', ''],
					[' ', ''],
					['Dm7', ''],
					[']', ''],
					[' ', ''],
					['C..', ''],
					[' ', ''],
					['|', ''],
				],
			],
			/* */
		])('%s', (title, chordLine, lyricLine, pairs, options) => {
			test('returns ', () => {
				const parsed = parseSong(chordLine + '\n' + lyricLine);
				const renderedMerged = renderSong(parsed, {
					...options,
					chordLineRendering: 'merged',
				});
				const allChordTokens = [
					...renderedMerged.matchAll(
						/<span class="cmChordLyricPair--chords">(.*?)<\/span>/gm
					),
				];
				const allLyricTokens = [
					...renderedMerged.matchAll(
						/<span class="cmChordLyricPair--lyrics">(.*?)<\/span>/gm
					),
				];
				expect(allChordTokens.length).toBe(pairs.length);
				expect(allLyricTokens.length).toBe(pairs.length);

				pairs.forEach(([chord, lyric], i) => {
					expect(stripTags(allChordTokens[i][0])).toEqual(chord);
					expect(stripTags(allLyricTokens[i][0])).toEqual(lyric);
				});
			});
		});
		/*
		describe.skip.each([
			[
				'C.. G..',
				'When I _find myself in _times of trouble',
				'<span class="cmChordLyricsLine">' +
					'When I<span class="cmBarSeparator">|</span> ' +
					'<span class="cmChordSymbol">C</span>find myself in ' +
					'<span class="cmChordSymbol">G</span>times of trouble' +
					'<span class="cmBarSeparator">|</span>' +
					'</span>',
			],
			[
				'Am. [Am Am/G] FM7. F6.',
				'_ Mother _Ma_ry _comes to _me',
				'<span class="cmBarSeparator">|</span> ' +
					'<span class="cmChordSymbol">Am<span class="cmChordDuration">.</span></span>   Mother' +
					'<span class="cmSubBeatGroupOpener">[</span> ' +
					'<span class="cmChordSymbol">Am</span>Ma ' +
					'<span class="cmChordSymbol">Am/G</span>ry  ' +
					'<span class="cmSubBeatGroupCloser">]</span>  ' +
					'<span class="cmChordSymbol">FM7<span class="cmChordDuration">.</span></span>' +
					'comes to ' +
					'<span class="cmChordSymbol">F6<span class="cmChordDuration">.</span></span>me  ' +
					'</span><span class="cmBarSeparator">|</span>',
			],
			['A', 'My _first verse', 'My| Afirst verse|'],
		])('renders correct html', (chordLine, lyricLine, output) => {
			test('chordLine', () => {
				const parsed = parseSong(chordLine + '\n' + lyricLine);
				const renderedMerged = renderSong(parsed, {
					chordLineRendering: 'merged',
				});
				const fullOutput =
					'<div class="cmSong"><p class="cmLine"><span class="cmChordLyricsLine">' +
					output +
					'</span></p></div>';
				expect(renderedMerged).toEqual(fullOutput);
			});
		});
		*/
	});
});
