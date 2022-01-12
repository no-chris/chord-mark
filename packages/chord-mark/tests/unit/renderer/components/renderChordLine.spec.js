jest.mock('../../../../src/renderer/components/renderBarContent');

import renderChordLine from '../../../../src/renderer/components/renderChordLine';
import renderBarContent from '../../../../src/renderer/components/renderBarContent';

import parseChordLine from '../../../../src/parser/parseChordLine';
import getChordSymbol from '../../../../src/renderer/helpers/getChordSymbol';

import stripTags from '../../../../src/core/dom/stripTags';
import htmlToElement from '../../../../src/core/dom/htmlToElement';

describe('chordLine renderer', () => {
	test('Module', () => {
		expect(renderChordLine).toBeInstanceOf(Function);
	});

	test('Should return valid html', () => {
		renderBarContent.mockReturnValue('C');

		const rendered = renderChordLine(parseChordLine('C'), true);
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.nodeName).toBe('SPAN');
		expect(element.classList.contains('cmChordLine')).toBe(true);
	});
});

describe.each([
	['A B C', '|A|B|C|'],
	['A.. B.. C.. D..', '|A B|C D|'],
])('Render chordLine "%s" as "%s"', (input, output) => {
	test('expected rendering', () => {
		renderBarContent.mockImplementation((bar) =>
			bar.allChords.map((chord) => getChordSymbol(chord.model)).join(' ')
		);

		const chordLine = parseChordLine(input);

		const rendered = renderChordLine(chordLine, true);

		expect(stripTags(rendered)).toEqual(output);
	});
});

describe.each([
	['A B C', undefined, '|A|B|C|'],
	['A B C', 0, '|A|B|C|'],
	['A B C', 1, ' |A|B|C|'],
	['A B C', 2, '  |A|B|C|'],
	['A B C', 3, '   |A|B|C|'],
	['A B C', 10, '          |A|B|C|'],
])('respect offset parameter', (input, offset, output) => {
	test('offset chordline by ' + (offset || '0'), () => {
		renderBarContent.mockImplementation((bar) =>
			bar.allChords.map((chord) => getChordSymbol(chord.model)).join(' ')
		);

		const chordLine = parseChordLine(input);
		chordLine.offset = offset;

		const rendered = renderChordLine(chordLine, true);

		expect(stripTags(rendered)).toEqual(output);
	});
});

describe.each([
	['A B C', '|A |B |C |', true],
	['A B C', 'A B C ', false],
])('%s => %s', (input, output, printBarSeparators) => {
	test('respect printBarSeparator', () => {
		renderBarContent.mockImplementation(
			(bar) =>
				bar.allChords
					.map((chord) => getChordSymbol(chord.model))
					.join(' ') + ' '
		);

		const chordLine = parseChordLine(input);

		const rendered = renderChordLine(chordLine, printBarSeparators);

		expect(stripTags(rendered)).toEqual(output);
	});
});
