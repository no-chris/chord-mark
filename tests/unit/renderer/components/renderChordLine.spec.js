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
});

describe('Behaviour', () => {
	test('Should return valid html', () => {
		renderBarContent.mockReturnValue('C');

		const rendered = renderChordLine(parseChordLine('C'));
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.nodeName).toBe('P');
		expect(element.classList.contains('cp2-chord-line')).toBe(true);
	});
});

describe.each([

	['A B C', 			'|A|B|C|'],
	['A.. B.. C.. D..',	'|A B|C D|'],

])('Render chordLine "%s" as "%s"', (input, output) => {
	test('expected rendering', () => {
		renderBarContent.mockImplementation(bar => bar.allChords
			.map(chord => getChordSymbol(chord.model))
			.join(' ')
		);

		const chordLine = parseChordLine(input);

		const rendered = renderChordLine(chordLine);

		expect(stripTags(rendered)).toEqual(output);
	});
});
