import { parseSong, renderSong } from '../src/chordMarkJsDom';

describe('chordMarkJsDom', () => {
	test('Module', () => {
		expect(parseSong).toBeInstanceOf(Function);
		expect(renderSong).toBeInstanceOf(Function);
	});

	test('should parse and render song', () => {
		const input = 'C.. G..\n' + 'When I _find myself in _times of trouble';
		const output =
			'<div class="cmSong">' +
			'<p class="cmLine">' +
			'<span class="cmChordLine">' +
			'<span class="cmChordLineOffset">      </span>' +
			'<span class="cmBarSeparator">|</span>' +
			'<span class="cmChordSymbol">C</span>              ' +
			'<span class="cmChordSymbol">G</span>               ' +
			'<span class="cmBarSeparator">|</span></span>' +
			'</p>' +
			'<p class="cmLine">' +
			'<span class="cmLyricLine">When I find myself in times of trouble</span>' +
			'</p>' +
			'</div>';

		expect(renderSong(parseSong(input))).toBe(output);
	});
});
