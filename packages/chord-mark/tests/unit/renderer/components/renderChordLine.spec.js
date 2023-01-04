import { forEachChordInChordLine } from '../../../../src/parser/helper/songs';

import renderChordLine from '../../../../src/renderer/components/renderChordLine';
import parseChordLine from '../../../../src/parser/parseChordLine';

import stripTags from '../../../../src/core/dom/stripTags';
import htmlToElement from '../../../../src/core/dom/htmlToElement';
import getChordSymbol from '../../../../src/renderer/helpers/getChordSymbol';

function renderChordSymbols(chordLine) {
	return forEachChordInChordLine(chordLine, (chord) => {
		chord.symbol = getChordSymbol(chord.model);
	});
}

describe('chordLine renderer', () => {
	test('Module', () => {
		expect(renderChordLine).toBeInstanceOf(Function);
	});

	test('Should return valid html', () => {
		const rendered = renderChordLine(parseChordLine('C'), true);
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.nodeName).toBe('SPAN');
		expect(element.classList.contains('cmChordLine')).toBe(true);
	});
});

describe.each([
	['A B C', '|A  |B  |C  |'],
	['A.. B.. C.. D..', '|A  B  |C  D  |'],
])('Render chordLine "%s" as "%s"', (input, output) => {
	test('expected rendering', () => {
		const chordLine = parseChordLine(input);
		const rendered = renderChordLine(renderChordSymbols(chordLine));

		expect(stripTags(rendered)).toEqual(output);
	});
});

describe.each([
	['A B C', undefined, '|A  |B  |C  |'],
	['A B C', 0, '|A  |B  |C  |'],
	['A B C', 1, ' |A  |B  |C  |'],
	['A B C', 2, '  |A  |B  |C  |'],
	['A B C', 3, '   |A  |B  |C  |'],
	['A B C', 10, '          |A  |B  |C  |'],
])('respect offset parameter', (input, offset, output) => {
	test('offset chordline by ' + (offset || '0'), () => {
		const chordLine = parseChordLine(input);
		chordLine.offset = offset;

		const rendered = renderChordLine(renderChordSymbols(chordLine));

		expect(stripTags(rendered)).toEqual(output);
	});
});

describe.each([
	['A B C', '|A  |B  |C  |', true],
	['A B C', 'A  B  C', false],
])('%s => %s', (input, output, shouldPrintBarSeparators) => {
	test('respect shouldPrintBarSeparators', () => {
		const chordLine = parseChordLine(input);

		const rendered = renderChordLine(
			renderChordSymbols(chordLine),
			undefined,
			{ shouldPrintBarSeparators }
		);

		expect(stripTags(rendered)).toEqual(output);
	});
});

describe.each([
	['A.. B. {C D}', '|A  B  {C  D}  |', undefined],
	['A.. B. {C D}', '|A  B  {C  D}  |', true],
	['A.. B. {C D}', '|A  B  C  D  |', false],
])('%s => %s', (input, output, shouldPrintSubBeatDelimiters) => {
	test('respect shouldPrintSubBeatDelimiters', () => {
		const chordLine = parseChordLine(input);

		const rendered = renderChordLine(
			renderChordSymbols(chordLine),
			undefined,
			{ shouldPrintSubBeatDelimiters }
		);

		expect(stripTags(rendered)).toEqual(output);
	});
});

describe.each([
	['C 3/4 D', '|C  |3/4 D  |', true],
	['C 3/4 D E', '|C  |3/4 D  |E  |', true],
	['C 3/4 D 2/4 E', '|C  |3/4 D  |2/4 E  |', true],
	['C 3/4 D 2/4 E', '|C  |3/4 D  |2/4 E  |', undefined],
	['C 3/4 D 2/4 E', '|C  |D  |E  |', false],
])('%s => %s', (input, output, shouldPrintInlineTimeSignatures) => {
	test('Print time signature after an inline change', () => {
		const chordLine = parseChordLine(input);

		const rendered = renderChordLine(
			renderChordSymbols(chordLine),
			undefined,
			{ shouldPrintInlineTimeSignatures }
		);

		expect(stripTags(rendered)).toEqual(output);
	});
});
