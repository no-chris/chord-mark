import trimArray from '../../src/helpers/trimArray';

describe('trimArray', () => {
	test('Module', () => {
		expect(typeof trimArray).toBe('function');
	});
});

describe.each([
	['trim start and end', ['', '', '', 1, 2, 3, '', '', ''], [1, 2, 3]],
	['trim start only', ['', '', '', 1, 2, 3], [1, 2, 3]],
	['trim end only', [1, 2, 3, '', '', ''], [1, 2, 3]],
	['no trim', [1, 2, 3], [1, 2, 3]],
])('%s', (title, input, expected) => {
	test('should properly trim array', () => {
		const fn = (el) => el === '';
		expect(trimArray(input, fn)).toStrictEqual(expected);
	});
});
