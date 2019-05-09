import renderSectionLabel from '../../../../src/renderer/components/renderSectionLabel';
import htmlToElement from '../../../../src/core/dom/htmlToElement';
import parseSectionLabel from '../../../../src/parser/parseSectionLabel';

describe('renderSectionLabel', () => {
	test('Module', () => {
		expect(renderSectionLabel).toBeInstanceOf(Function);
	});

	test('Should return valid html', () => {
		const line = {
			model: parseSectionLabel('#v'),
			index: 1,
		};
		const rendered = renderSectionLabel(line);
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.nodeName).toBe('P');
		expect(element.classList.contains('cmSectionLabel')).toBe(true);
	});
});

describe('Shortcuts and case', () => {
	describe.each([
		[ '#a', 1, 'Adlib 1' ],
		[ '#b', 1, 'Bridge 1' ],
		[ '#c', 1, 'Chorus 1' ],
		[ '#i', 1, 'Intro 1' ],
		[ '#o', 1, 'Outro 1' ],
		[ '#p', 1, 'Pre-chorus 1' ],
		[ '#s', 1, 'Solo 1' ],
		[ '#u', 1, 'Interlude 1' ],
		[ '#v', 1, 'Verse 1' ],
	])('Should replace shortcuts', (string, index, output) => {
		test('expands ' + string + ' to ' + output, () => {
			const line = {
				model: parseSectionLabel(string),
				index,
			};
			const rendered = renderSectionLabel(line);
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
			const line = {
				model: parseSectionLabel(string),
				index,
			};
			const rendered = renderSectionLabel(line);
			const element = htmlToElement(rendered);

			expect(element).toBeInstanceOf(Node);
			expect(element.innerHTML).toBe(output);
		});
	});
});


describe('Label indexes', () => {
	describe.each([
		[ '#v', 5, 'Verse 5' ],
		[ '#c', 3, 'Chorus 3' ],
		[ '#b', 7, 'Bridge 7' ],
	])('Should append index to section label', (string, index, output) => {
		test('appends ' + index, () => {
			const line = {
				model: parseSectionLabel(string),
				index,
			};
			const rendered = renderSectionLabel(line);
			const element = htmlToElement(rendered);

			expect(element).toBeInstanceOf(Node);
			expect(element.innerHTML).toBe(output);
		});
	});
});


describe('Repeat indications', () => {
	test('should NOT append repeat indication if expandSectionRepeats === true', () => {
		const line = {
			model: parseSectionLabel('#v x5'),
			index: 2,
		};
		const rendered = renderSectionLabel(line, { expandSectionRepeats: true });
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.innerHTML).toBe('Verse 2');
	});

	test('should append repeat indication if expandSectionRepeats === false', () => {
		const line = {
			model: parseSectionLabel('#v x5'),
			index: 2,
		};
		const rendered = renderSectionLabel(line, { expandSectionRepeats: false });
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.innerHTML).toBe('Verse 2 x5');
	});
});
