import getSpaceLength from '../../src/helpers/getSpaceLength';

describe('getSpaceLength', () => {
	test('Module', () => {
		expect(typeof getSpaceLength).toBe('function');
	});
});

describe.each([
	['1 space', ' ', 1],
	['2 spaces', '  ', 2],
	['3 spaces', '   ', 3],
	['4 spaces', '    ', 4],

	['1 tab', '\t', 4],
	['2 tabs', '\t\t', 8],
	['3 tabs', '\t\t\t', 12],
	['4 tabs', '\t\t\t\t', 16],

	['1 tab, 1 space', ' \t', 4],
	['1 tab, 2 spaces', '  \t', 4],
	['1 tab, 3 spaces', '   \t', 4],
	['2 tabs, 1 space', '\t \t', 8],
	['2 tabs, 2 spaces', '\t  \t', 8],
	['2 tabs, 3 spaces', '\t   \t', 8],

	['1 tab, 4 spaces', '    \t', 8],
	['1 tab, 5 spaces', '     \t', 8],
	['1 tab, 6 spaces', '      \t', 8],
	['1 tab, 7 spaces', '       \t', 8],
	['1 tab, 8 spaces', '        \t', 12],
	['1 tab, 9 spaces', '         \t', 12],
	['1 tab, 10 spaces', '          \t', 12],
	['1 tab, 11 spaces', '           \t', 12],

	['1 tab, 1 spaces before, 1 space after', ' \t ', 5],
	['1 tab, 1 spaces before, 2 space after', ' \t  ', 6],
	['1 tab, 1 spaces before, 3 space after', ' \t   ', 7],
	['1 tab, 1 spaces before, 4 space after', ' \t    ', 8],

	['1 tab, 6 spaces before, 1 space after', '      \t ', 9],
	['1 tab, 6 spaces before, 2 space after', '      \t  ', 10],
	['1 tab, 6 spaces before, 3 space after', '      \t   ', 11],
	['1 tab, 6 spaces before, 4 space after', '      \t    ', 12],

	['1s 1t 2s 1t 3s', ' \t  \t   ', 11],
	['3s 1t 2s 1t 1s', '   \t  \t ', 9],
	['2s 1t 6s 1t 2s', '  \t      \t  ', 14],
])('%s', (title, input, expected) => {
	test('should return the proper number of spaces', () => {
		expect(getSpaceLength(input)).toBe(expected);
	});
});
