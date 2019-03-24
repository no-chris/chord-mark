import chordSymbolRenderer from '../../../../src/renderer/chord/chordSymbol';

import isRenderer from '../../../../src/renderer/isRenderer';
import stripTags from '../../../../src/core/dom/stripTags';
import htmlToElement from '../../../../src/core/dom/htmlToElement';

describe('chordSymbol renderer', () => {
	test('Module', () => {
		expect(chordSymbolRenderer).toBeInstanceOf(Object);
	});

	test('isRenderer', () => {
		expect(isRenderer(chordSymbolRenderer)).toEqual(true);
	});
});

describe.each([

	['A', 		'A'],
	['AM7',		'AM7'],

])('Render chord %s as %s', (input, output) => {
	test('expected rendering', () => {
		const rendered = chordSymbolRenderer.render(input);
		expect(stripTags(rendered)).toEqual(output);
	});
});

describe('Behaviour', () => {
	test('Should return valid html', () => {
		const rendered = chordSymbolRenderer.render('C');
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.nodeName).toBe('SPAN');
		expect(element.classList.contains('cp2-chord-symbol')).toBe(true);
	});
});
