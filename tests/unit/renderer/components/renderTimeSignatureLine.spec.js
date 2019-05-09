import renderTimeSignature from '../../../../src/renderer/components/renderTimeSignature';
import htmlToElement from '../../../../src/core/dom/htmlToElement';

describe('renderTimeSignature', () => {
	test('Module', () => {
		expect(renderTimeSignature).toBeInstanceOf(Function);
	});

	test('Should return valid html', () => {
		const rendered = renderTimeSignature({ string: '4/4' });
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.nodeName).toBe('P');
		expect(element.classList.contains('cmTimeSignature')).toBe(true);
	});
});
