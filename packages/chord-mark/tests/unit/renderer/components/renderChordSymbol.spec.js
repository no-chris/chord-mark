import renderChordSymbol from '../../../../src/renderer/components/renderChordSymbol';

import stripTags from '../../../../src/core/dom/stripTags';
import htmlToElement from '../../../../src/core/dom/htmlToElement';
import symbols from '../../../../src/renderer/symbols';

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

	test('Should add proper classes in case of roman numeral', () => {
		const rendered = renderChordSymbol(
			{
				symbol: 'C',
				model: { numeral: { symbol: 'V', type: 'diatonic' } },
			},
			{ symbolType: 'roman' }
		);
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.nodeName).toBe('SPAN');
		expect(element.classList.contains('cmChordSymbol')).toBe(true);
		expect(element.classList.contains('cmRomanNumeral')).toBe(true);
		expect(element.classList.contains('cmRomanNumeral-diatonic')).toBe(
			true
		);
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
		'[AM7',
	],
	[
		'sub-beat group close',
		{ symbol: 'AM7', duration: 3 },
		{ shouldPrintSubBeatCloser: true },
		'AM7]',
	],
	[
		'sub-beat group open and close: should never happen, the parser should prevent that',
		{ symbol: 'AM7', duration: 3 },
		{ shouldPrintSubBeatOpener: true, shouldPrintSubBeatCloser: true },
		'[AM7]',
	],
	[
		'render numeral symbol',
		{ symbol: 'G', duration: 4, model: { numeral: { symbol: 'V' } } },
		{ symbolType: 'roman' },
		'V',
	],
	[
		'do not render roman symbol if the chord symbol is a bar repeat symbol',
		{
			symbol: symbols.barRepeat,
			duration: 4,
			model: symbols.barRepeat,
		},
		{ symbolType: 'roman' },
		symbols.barRepeat,
	],
	[
		'do not render roman symbol if the chord symbol is a no chord symbol',
		{
			symbol: symbols.noChordSymbol,
			duration: 4,
			model: symbols.noChordSymbol,
		},
		{ symbolType: 'roman' },
		symbols.noChordSymbol,
	],
])('Render chord %s as %s', (title, chord, options, expected) => {
	test('expected rendering', () => {
		const rendered = renderChordSymbol(chord, options);
		expect(stripTags(rendered)).toEqual(expected);
	});
});
