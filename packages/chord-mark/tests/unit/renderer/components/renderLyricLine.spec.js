import renderLyricLine from '../../../../src/renderer/components/renderLyricLine';
import htmlToElement from '../../../../src/core/dom/htmlToElement';
import stripTags from '../../../../src/core/dom/stripTags';

describe('renderLyricLine', () => {
	test('Module', () => {
		expect(renderLyricLine).toBeInstanceOf(Function);
	});

	test('Should return valid html', () => {
		const rendered = renderLyricLine({
			string: 'textContent',
			model: {
				lyrics: 'textContent',
				chordPositions: [],
			},
		});
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.nodeName).toBe('SPAN');
		expect(element.classList.contains('cmLyricLine')).toBe(true);
	});

	test('should trim lyric line if chords are NOT aligned with lyrics OR if chords are not displayed', () => {
		const rendered = renderLyricLine(
			{
				string: '  textContent  ',
				model: {
					lyrics: '  textContent  ',
					chordPositions: [],
				},
			},
			{ alignChordsWithLyrics: false, chartType: 'lyrics' }
		);
		expect(stripTags(rendered)).toBe('textContent');
	});

	test('should NOT trim lyric line if chords are displayed', () => {
		const lyricLine = {
			string: 'textContent',
			model: {
				lyrics: '  textContent  ',
				chordPositions: [],
			},
		};
		let rendered = renderLyricLine(lyricLine, {
			chartType: 'all',
			alignChordsWithLyrics: true,
		});
		expect(stripTags(rendered)).toBe('  textContent  ');

		rendered = renderLyricLine(lyricLine, {
			chartType: 'chords',
			alignChordsWithLyrics: true,
		});
		expect(stripTags(rendered)).toBe('  textContent  ');
	});

	test('should NOT trim lyric line if chords ARE aligned with lyrics', () => {
		const rendered = renderLyricLine(
			{
				string: 'textContent',
				model: {
					lyrics: '  textContent  ',
					chordPositions: [],
				},
			},
			{ alignChordsWithLyrics: true }
		);
		expect(stripTags(rendered)).toBe('  textContent  ');
	});
});
