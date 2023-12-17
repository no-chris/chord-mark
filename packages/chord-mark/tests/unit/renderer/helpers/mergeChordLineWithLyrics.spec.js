import { mergeChordLineWithLyrics } from '../../../../src/renderer/helpers/mergeChordLineWithLyrics';
import { parseSong, renderSong } from '../../../../src/chordMark';
import stripTags from '../../../../src/core/dom/stripTags';

describe('mergeChordLineWithLyrics', () => {
	test('Module', () => {
		expect(mergeChordLineWithLyrics).toBeInstanceOf(Function);
	});

	describe('should properly position chord tokens', () => {
		describe.each([
			[
				'C.. G..',
				'When I _find myself in _times of trouble',
				'When I| Cfind myself in Gtimes of trouble|',
			],
			[
				'Am. [Am Am/G] FM7. F6.',
				'_ Mother _Ma_ry _comes to _me',
				'| Am.   Mother[ AmMa Am/Gry  ]  FM7.comes to F6.me  |',
			],
			[
				'C.. G..',
				'_Speaking words of _wisdom',
				'| CSpeaking words of Gwisdom|',
			],
			[
				'F. [C/E Dm7] C..',
				'Let it _be _ _ _',
				'Let it| F.be [ C/E    Dm7   ] C..    |',
			],
			['A', 'My _first verse', 'My| Afirst verse|'],
		])('%s + %s => %s', (chordLine, lyricLine, output) => {
			test('returns ' + output, () => {
				const parsed = parseSong(chordLine + '\n' + lyricLine);
				const renderedMerged = renderSong(parsed, {
					chordLineRendering: 'merged',
				});
				expect(stripTags(renderedMerged)).toEqual(output);
			});
		});

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
	});
});
