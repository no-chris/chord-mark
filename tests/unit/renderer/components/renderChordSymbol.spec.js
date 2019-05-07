import renderChordSymbol from '../../../../src/renderer/components/renderChordSymbol';

import stripTags from '../../../../src/core/dom/stripTags';
import htmlToElement from '../../../../src/core/dom/htmlToElement';

describe('chordSymbol renderer', () => {
	test('Module', () => {
		expect(renderChordSymbol).toBeInstanceOf(Object);
	});

	test('Should return valid html', () => {
		const rendered = renderChordSymbol('C');
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.nodeName).toBe('SPAN');
		expect(element.classList.contains('cmChordSymbol')).toBe(true);
	});
});

describe.each([

	['A', 		'A'],
	['AM7',		'AM7'],

])('Render chord %s as %s', (input, output) => {
	test('expected rendering', () => {
		const rendered = renderChordSymbol(input);
		expect(stripTags(rendered)).toEqual(output);
	});
});
