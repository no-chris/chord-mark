import renderKeyDeclaration from '../../../../src/renderer/components/renderKeyDeclaration';
import htmlToElement from '../../../../src/core/dom/htmlToElement';
import stripTags from '../../../../src/core/dom/stripTags';

describe('renderKeyDeclaration', () => {
	test('Module', () => {
		expect(renderKeyDeclaration).toBeInstanceOf(Function);
	});

	test('Should return valid html', () => {
		const line = {
			model: {
				key: 'C#mi',
			},
		};
		const rendered = renderKeyDeclaration(line);
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.nodeName).toBe('SPAN');
		expect(element.classList.contains('cmKeyDeclaration')).toBe(true);

		expect(stripTags(rendered)).toEqual('key: C#mi');
	});
});
