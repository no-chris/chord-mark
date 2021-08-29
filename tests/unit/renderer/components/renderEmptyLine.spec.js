import renderEmptyLine from '../../../../src/renderer/components/renderEmptyLine';
import htmlToElement from '../../../../src/core/dom/htmlToElement';

describe('renderEmptyLine', () => {
	test('Module', () => {
		expect(renderEmptyLine).toBeInstanceOf(Function);
	});

	test('Should return valid html', () => {
		const rendered = renderEmptyLine();
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.nodeName).toBe('SPAN');
		expect(element.classList.contains('cmEmptyLine')).toBe(true);
	});
});

describe('Behaviour', () => {
	test('renders empty line as non-breaking space', () => {
		const rendered = renderEmptyLine();
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.innerHTML).toBe('&nbsp;');
	});
});
