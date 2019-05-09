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
		[ '#a', 'Adlib' ],
		[ '#b', 'Bridge' ],
		[ '#c', 'Chorus' ],
		[ '#i', 'Intro' ],
		[ '#o', 'Outro' ],
		[ '#p', 'Pre-chorus' ],
		[ '#s', 'Solo' ],
		[ '#u', 'Interlude' ],
		[ '#v', 'Verse' ],
	])('Should replace shortcuts', (string, output) => {
		test('expands ' + string + ' to ' + output, () => {
			const line = {
				model: parseSectionLabel(string),
				index: 1,
			};
			const rendered = renderSectionLabel(line);
			const element = htmlToElement(rendered);

			expect(element).toBeInstanceOf(Node);
			expect(element.innerHTML).toBe(output);
		});
	});

	describe.each([
		[ '#inter', 'Inter' ],
		[ '#special', 'Special' ],
		[ '#other', 'Other' ],
	])('Should render custom sections with a capital first letter', (string, output) => {
		test('renders ' + string + ' to ' + output, () => {
			const line = {
				model: parseSectionLabel(string),
				index: 1,
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
		[ '#v', 5, { v: 10 }, 'Verse 5' ],
		[ '#c', 3, { c: 5 }, 'Chorus 3' ],
		[ '#b', 7, { b: 8 }, 'Bridge 7' ],
	])('Should append index to section label if expandSectionRepeats === true', (string, index, sectionsStats, output) => {
		test('appends ' + index, () => {
			const line = {
				model: parseSectionLabel(string),
				index,
			};
			const rendered = renderSectionLabel(line, { sectionsStats, expandSectionRepeats: true });
			const element = htmlToElement(rendered);

			expect(element).toBeInstanceOf(Node);
			expect(element.innerHTML).toBe(output);
		});
	});

	describe.each([
		[ '#v', 5, { v: 10 }, 'Verse 5' ],
		[ '#c', 3, { c: 5 }, 'Chorus 3' ],
		[ '#b', 7, { b: 8 }, 'Bridge 7' ],
	])('Should append indexWithoutRepeats if expandSectionRepeats === false', (string, indexWithoutRepeats, sectionsStats, output) => {
		test('appends ' + indexWithoutRepeats, () => {
			const line = {
				model: parseSectionLabel(string),
				indexWithoutRepeats,
			};
			const rendered = renderSectionLabel(line, { sectionsStats, expandSectionRepeats: false });
			const element = htmlToElement(rendered);

			expect(element).toBeInstanceOf(Node);
			expect(element.innerHTML).toBe(output);
		});
	});

	describe.each([
		[ '#v', 1, { v: 1 }, 'Verse' ],
		[ '#c', 1, { c: 2 }, 'Chorus 1' ],
	])('Should not append index to section label if section is unique', (string, index, sectionsStats, output) => {
		test('appends ' + index, () => {
			const line = {
				model: parseSectionLabel(string),
				index,
			};
			const rendered = renderSectionLabel(line, { sectionsStats });
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
			index: 1,
		};
		const rendered = renderSectionLabel(line, { expandSectionRepeats: true });
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.innerHTML).toBe('Verse');
	});

	test('should append repeat indication if expandSectionRepeats === false', () => {
		const line = {
			model: parseSectionLabel('#v x5'),
			index: 1,
		};
		const rendered = renderSectionLabel(line, { expandSectionRepeats: false });
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.innerHTML).toBe('Verse x5');
	});
});
