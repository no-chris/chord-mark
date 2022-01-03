import renderSectionLabel from '../../../../src/renderer/components/renderSectionLabel';
import htmlToElement from '../../../../src/core/dom/htmlToElement';

describe('renderSectionLabel', () => {
	test('Module', () => {
		expect(renderSectionLabel).toBeInstanceOf(Function);
	});

	test('Should return valid html', () => {
		const line = {
			model: {
				rendered: {
					label: 'Verse',
				},
			},
		};
		const rendered = renderSectionLabel(line);
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.nodeName).toBe('SPAN');
		expect(element.classList.contains('cmSectionLabel')).toBe(true);
	});

	test('Should wrap multiplier in a dedicated span', () => {
		const line = {
			model: {
				rendered: {
					label: 'Verse',
					multiplier: 'x5',
				},
			},
		};
		const rendered = renderSectionLabel(line);
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.innerHTML).toBe(
			'Verse<span class="cmSectionMultiplier"> x5</span>'
		);
	});
});
