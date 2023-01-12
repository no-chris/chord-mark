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
		const rendered = renderChordLine(parseChordLine('C'));
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

		const rendered = renderChordLine(renderChordSymbols(chordLine), {
			shouldPrintBarSeparators,
		});

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

		const rendered = renderChordLine(renderChordSymbols(chordLine), {
			shouldPrintSubBeatDelimiters,
		});

		expect(stripTags(rendered)).toEqual(output);
	});
});

describe.each([
	['4/4 D', '|D  |', [false], true],
	['3/4 D', '|3/4 D  |', [true], true],
	['C 3/4 D', '|C  |3/4 D  |', [false, true], true],
	['C 3/4 D E', '|C  |3/4 D  |E  |', [false, true, false], true],
	['C 3/4 D 2/4 E', '|C  |3/4 D  |2/4 E  |', [false, true, true], true],
	['C 3/4 D 2/4 E', '|C  |3/4 D  |2/4 E  |', [false, true, true], undefined],
	['C 3/4 D 2/4 E', '|C  |D  |E  |', [true, true, false], false],
])(
	'%s => %s',
	(
		input,
		output,
		shouldPrintBarTimeSignature,
		shouldPrintInlineTimeSignatures
	) => {
		test('Print time signature after an inline change', () => {
			const chordLine = parseChordLine(input);

			chordLine.allBars.forEach((bar, barIndex) => {
				bar.shouldPrintBarTimeSignature =
					shouldPrintBarTimeSignature[barIndex];
			});

			const rendered = renderChordLine(renderChordSymbols(chordLine), {
				shouldPrintInlineTimeSignatures,
			});

			expect(stripTags(rendered)).toEqual(output);
		});
	}
);
