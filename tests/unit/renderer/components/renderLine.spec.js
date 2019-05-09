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

	['none', { isFromSectionRepeat: false, isFromAutoRepeatChords: false, isFromChordLineRepeater: false }, []],

	['isFromSectionRepeat', { isFromSectionRepeat: true, isFromAutoRepeatChords: false, isFromChordLineRepeater: false }, ['cmLine--isFromSectionRepeat']],
	['isFromAutoRepeatChords', { isFromSectionRepeat: false, isFromAutoRepeatChords: true, isFromChordLineRepeater: false }, ['cmLine--isFromAutoRepeatChords']],
	['isFromChordLineRepeater', { isFromSectionRepeat: false, isFromAutoRepeatChords: false, isFromChordLineRepeater: true }, ['cmLine--isFromChordLineRepeater']],

	['all', { isFromSectionRepeat: true, isFromAutoRepeatChords: true, isFromChordLineRepeater: true }, ['cmLine--isFromSectionRepeat', 'cmLine--isFromAutoRepeatChords', 'cmLine--isFromChordLineRepeater']],

])('repeat identifier classes', (title, options, expected) => {
	test('correctly adds expected classes', () => {
		const rendered = renderLine({ line: 'myLine' }, options);
		const element = htmlToElement(rendered);

		expect.assertions(expected.length + 1);
		expect(element).toBeInstanceOf(Node);
		expected.forEach(className => {
			expect(element.classList.contains(className)).toBe(true);
		});
	});
});
