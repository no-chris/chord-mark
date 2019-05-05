import renderSectionLabel from '../../../../src/renderer/components/renderSectionLabel';
import htmlToElement from '../../../../src/core/dom/htmlToElement';
import parseSectionLabel from '../../../../src/parser/parseSectionLabel';

describe('renderSectionLabel', () => {
	test('Module', () => {
		expect(renderSectionLabel).toBeInstanceOf(Function);
	});
});

describe('Behaviour', () => {
	test('Should return valid html', () => {
		const rendered = renderSectionLabel(parseSectionLabel('#v'), 1);
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.nodeName).toBe('P');
		expect(element.classList.contains('cmSectionLabel')).toBe(true);
	});

	describe.each([
		[ '#v', 1, 'Verse 1' ],
		[ '#c', 1, 'Chorus 1' ],
		[ '#b', 1, 'Bridge 1' ],
	])('Should replace shortcuts', (string, index, output) => {
		test('expands ' + string + ' to ' + output, () => {
			const rendered = renderSectionLabel(parseSectionLabel(string), index);
			const element = htmlToElement(rendered);

			expect(element).toBeInstanceOf(Node);
			expect(element.innerHTML).toBe(output);
		});
	});

	describe.each([
		[ '#inter', 1, 'Inter 1' ],
		[ '#special', 1, 'Special 1' ],
		[ '#other', 1, 'Other 1' ],
	])('Should render custom sections with a capital first letter', (string, index, output) => {
		test('renders ' + string + ' to ' + output, () => {
			const rendered = renderSectionLabel(parseSectionLabel(string), index);
			const element = htmlToElement(rendered);

			expect(element).toBeInstanceOf(Node);
			expect(element.innerHTML).toBe(output);
		});
	});

	describe.each([
		[ '#v', 5, 'Verse 5' ],
		[ '#c', 3, 'Chorus 3' ],
		[ '#b', 7, 'Bridge 7' ],
	])('Should append index to section label', (string, index, output) => {
		test('appends ' + index, () => {
			const rendered = renderSectionLabel(parseSectionLabel(string), index);
			const element = htmlToElement(rendered);

			expect(element).toBeInstanceOf(Node);
			expect(element.innerHTML).toBe(output);
		});
	});

});
