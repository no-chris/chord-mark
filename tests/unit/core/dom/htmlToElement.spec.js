import htmlToElement from '../../../../src/core/dom/htmlToElement';

describe('htmlToElement', () => {
	test('Module', () => {
		expect(htmlToElement).toBeInstanceOf(Function);
	});
});

describe('Behavior', () => {
	test('Module', () => {
		const html = '<div class="test-container"><p class="test-content">Content</p></div>';

		const element = htmlToElement(html);

		expect(element).toBeInstanceOf(Node);
		expect(element.nodeType).toEqual(1);
		expect(element.nodeName).toEqual('DIV');
		expect(element.classList.contains('test-container')).toEqual(true);

		expect(element.firstChild.nodeType).toEqual(1);
		expect(element.firstChild.nodeName).toEqual('P');
		expect(element.firstChild.classList.contains('test-content')).toEqual(true);

		expect(element.firstChild.textContent).toEqual('Content');
	});
});
