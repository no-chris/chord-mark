import renderLine from '../../../../src/renderer/components/renderLine';
import htmlToElement from '../../../../src/core/dom/htmlToElement';

describe('renderLine', () => {
	test('Module', () => {
		expect(renderLine).toBeInstanceOf(Function);
	});

	test('Should return valid html', () => {
		const rendered = renderLine({ line: 'myLine' });
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.nodeName).toBe('P');
		expect(element.classList.contains('cmLine')).toBe(true);
	});
});

describe.each([
	[
		'none',
		{
			isFromSectionMultiply: false,
			isFromAutoRepeatChords: false,
			isFromChordLineRepeater: false,
		},
		[],
	],

	[
		'isFromSectionMultiply',
		{
			isFromSectionMultiply: true,
			isFromAutoRepeatChords: false,
			isFromChordLineRepeater: false,
		},
		['cmLine--isFromSectionMultiply'],
	],
	[
		'isFromAutoRepeatChords',
		{
			isFromSectionMultiply: false,
			isFromAutoRepeatChords: true,
			isFromChordLineRepeater: false,
		},
		['cmLine--isFromAutoRepeatChords'],
	],
	[
		'isFromChordLineRepeater',
		{
			isFromSectionMultiply: false,
			isFromAutoRepeatChords: false,
			isFromChordLineRepeater: true,
		},
		['cmLine--isFromChordLineRepeater'],
	],

	[
		'all',
		{
			isFromSectionMultiply: true,
			isFromAutoRepeatChords: true,
			isFromChordLineRepeater: true,
		},
		[
			'cmLine--isFromSectionMultiply',
			'cmLine--isFromAutoRepeatChords',
			'cmLine--isFromChordLineRepeater',
		],
	],
])('repeat identifier classes', (title, options, expected) => {
	test('correctly adds expected classes', () => {
		const rendered = renderLine({ line: 'myLine' }, options);
		const element = htmlToElement(rendered);

		expect.assertions(expected.length + 1);
		expect(element).toBeInstanceOf(Node);
		expected.forEach((className) => {
			expect(element.classList.contains(className)).toBe(true);
		});
	});
});

describe.each([
	[
		'line only',
		{
			shouldOpenSection: false,
			shouldClosePriorSection: false,
			shouldCloseFinalSection: false,
			sectionWrapperClasses: [],
		},
		'^<p class="cmLine">%l</p>$',
	],

	[
		'opens section only',
		{
			shouldOpenSection: true,
			shouldClosePriorSection: false,
			shouldCloseFinalSection: false,
			sectionWrapperClasses: ["cmSection cmSection-intro"],
		},
		'^<div class="%c"><p class="cmLine">%l</p>$',
	],
	[
		'closes prior section only',
		{
			shouldOpenSection: false,
			shouldClosePriorSection: true,
			shouldCloseFinalSection: false,
			sectionWrapperClasses: [],
		},
		'^</div><p class="cmLine">%l</p>$',
	],
	[
		'closes prior and opens section',
		{
			shouldOpenSection: true,
			shouldClosePriorSection: true,
			shouldCloseFinalSection: false,
			sectionWrapperClasses: ["cmSection cmSection-intro"],
		},
		'^</div><div class="%c"><p class="cmLine">%l</p>$',
	],
	[
		'closes final section',
		{
			shouldOpenSection: false,
			shouldClosePriorSection: false,
			shouldCloseFinalSection: true,
			sectionWrapperClasses: [],
		},
		'^<p class="cmLine">%l</p></div>$',
	],

	[
		'close prior, open, and closes final section',
		{
			shouldOpenSection: true,
			shouldClosePriorSection: true,
			shouldCloseFinalSection: true,
			sectionWrapperClasses: ["cmSection cmSection-intro"],
		},
		'^</div><div class="%c"><p class="cmLine">%l</p></div>$',
	],

])('create proper markup', (title, options, expected) => {
	test('correctly creates expected markup', () => {
		const l = 'myLine';
		const expectedMatch = expected
			.replace('%l', l)
			.replace('%c', options.sectionWrapperClasses.join(' '))
			.replace(/"/g,'\\"');

		const rendered = renderLine( l, options);

		expect(rendered).toMatch(new RegExp(expectedMatch));
	});
});
