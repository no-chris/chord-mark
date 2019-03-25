import renderTextLine from '../../../../src/renderer/components/renderTextLine';
import htmlToElement from '../../../../src/core/dom/htmlToElement';

describe('renderTextLine', () => {
	test('Module', () => {
		expect(renderTextLine).toBeInstanceOf(Function);
	});
});

describe('Behaviour', () => {
	test('Should return valid html', () => {
		const rendered = renderTextLine('textContent');
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.nodeName).toBe('P');
		expect(element.classList.contains('cp2-text-line')).toBe(true);
	});
});
