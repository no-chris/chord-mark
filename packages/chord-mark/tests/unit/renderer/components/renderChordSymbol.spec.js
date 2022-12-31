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
	[
		'no duration',
		{ symbol: 'AM7', duration: 2 },
		{ shouldPrintChordsDuration: false },
		'AM7',
	],
	[
		'duration = 1',
		{ symbol: 'AM7', duration: 1 },
		{ shouldPrintChordsDuration: true },
		'AM7.',
	],
	[
		'duration = 2',
		{ symbol: 'AM7', duration: 2 },
		{ shouldPrintChordsDuration: true },
		'AM7..',
	],
	[
		'duration = 3',
		{ symbol: 'AM7', duration: 3 },
		{ shouldPrintChordsDuration: true },
		'AM7...',
	],
	[
		'sub-beat group open',
		{ symbol: 'AM7', duration: 3 },
		{ shouldPrintSubBeatOpener: true },
		'{AM7',
	],
	[
		'sub-beat group close',
		{ symbol: 'AM7', duration: 3 },
		{ shouldPrintSubBeatCloser: true },
		'AM7}',
	],
	[
		'sub-beat group open and close: should never happen, the parser should prevent that',
		{ symbol: 'AM7', duration: 3 },
		{ shouldPrintSubBeatOpener: true, shouldPrintSubBeatCloser: true },
		'{AM7}',
	],
])('Render chord %s as %s', (title, chord, options, expected) => {
	test('expected rendering', () => {
		const rendered = renderChordSymbol(
			chord,
			options.shouldPrintChordsDuration,
			options.shouldPrintSubBeatOpener,
			options.shouldPrintSubBeatCloser
		);
		expect(stripTags(rendered)).toEqual(expected);
	});
});
