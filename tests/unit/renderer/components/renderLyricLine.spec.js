import renderLyricLine from '../../../../src/renderer/components/renderLyricLine';
import htmlToElement from '../../../../src/core/dom/htmlToElement';

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
});
