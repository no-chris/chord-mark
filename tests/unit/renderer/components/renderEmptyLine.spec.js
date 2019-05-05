import renderEmptyLine from '../../../../src/renderer/components/renderEmptyLine';
import htmlToElement from '../../../../src/core/dom/htmlToElement';

describe('renderEmptyLine', () => {
	test('Module', () => {
		expect(renderEmptyLine).toBeInstanceOf(Function);
	});
});

describe('Behaviour', () => {
	test('Should return valid html', () => {
		const rendered = renderEmptyLine();
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.nodeName).toBe('P');
		expect(element.classList.contains('cmEmptyLine')).toBe(true);
	});

	test('renders empty line as non-breaking space', () => {
		const rendered = renderEmptyLine();
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.innerHTML).toBe('&nbsp;');
	});
});
