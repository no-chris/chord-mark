import textLineRenderer from '../../../../src/renderer/text/textLine';
import htmlToElement from '../../../../src/core/dom/htmlToElement';

describe('textLineRenderer', () => {
	test('Module', () => {
		expect(textLineRenderer).toBeInstanceOf(Object);
	});
});

describe('Behaviour', () => {
	test('Should return valid html', () => {
		const rendered = textLineRenderer.render('textContent');
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.nodeName).toBe('P');
		expect(element.classList.contains('cp2-text-line')).toBe(true);
	});
});
