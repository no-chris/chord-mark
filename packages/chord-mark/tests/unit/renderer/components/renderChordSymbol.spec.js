import renderChordSymbol from '../../../../src/renderer/components/renderChordSymbol';

import stripTags from '../../../../src/core/dom/stripTags';
import htmlToElement from '../../../../src/core/dom/htmlToElement';

describe('chordSymbol renderer', () => {
	test('Module', () => {
		expect(renderChordSymbol).toBeInstanceOf(Object);
	});

	test('Should return valid html', () => {
		const rendered = renderChordSymbol({ symbol: 'C' }, false);
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.nodeName).toBe('SPAN');
		expect(element.classList.contains('cmChordSymbol')).toBe(true);
	});
});

describe.each([
	['no duration', { symbol: 'AM7', duration: 2 }, false, 'AM7'],
	['duration = 1', { symbol: 'AM7', duration: 1 }, true, 'AM7.'],
	['duration = 2', { symbol: 'AM7', duration: 2 }, true, 'AM7..'],
	['duration = 3', { symbol: 'AM7', duration: 3 }, true, 'AM7...'],
])(
	'Render chord %s as %s',
	(title, chord, shouldPrintChordsDuration, expected) => {
		test('expected rendering', () => {
			const rendered = renderChordSymbol(
				chord,
				shouldPrintChordsDuration
			);
			expect(stripTags(rendered)).toEqual(expected);
		});
	}
);
