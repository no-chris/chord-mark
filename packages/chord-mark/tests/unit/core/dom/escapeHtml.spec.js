import escapeHTML from '../../../../src/core/dom/escapeHTML';

describe('escapeHTML', () => {
	test('Module', () => {
		expect(escapeHTML).toBeInstanceOf(Function);
	});

	test('should sanitize html', () => {
		expect(escapeHTML('<img src=x onerror=alert(1)//>')).toBe(
			'<img src="x">'
		);
	});
});
