import renderTextLine from '../../../../src/renderer/components/renderTextLine';
import htmlToElement from '../../../../src/core/dom/htmlToElement';

describe('renderTextLine', () => {
	test('Module', () => {
		expect(renderTextLine).toBeInstanceOf(Function);
	});

	test('Should return valid html', () => {
		const rendered = renderTextLine({ string: 'textContent' });
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.nodeName).toBe('P');
		expect(element.classList.contains('cmTextLine')).toBe(true);
	});
});
