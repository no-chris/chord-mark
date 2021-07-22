import clearSpaces from '../../../../src/parser/helper/clearSpaces';

describe('clearSpaces', () => {
	test('Module', () => {
		expect(clearSpaces).toBeInstanceOf(Function);
	});
});

describe.each([
	['Empty input', '', ''],
	['Preserve text', 'test', 'test'],
	['1 space', ' ', ''],
	['2 spaces', '  ', ''],
	['multiple spaces', '    ', ''],
	['1 tab', '	', ''],
	['2 tabs', '		', ''],
	['multiple tabs', '					', ''],

	['spaces between tokens', '  A    B       C  ', 'A B C'],
	['tabs between tokens', '  A			B	C  ', 'A B C'],
	['mix of spaces & tabs', '  A  	   	B	C  D  	 E', 'A B C D E'],
])('Group title for %s', (title, input, output) => {
	test('Test details', () => {
		expect(clearSpaces(input)).toEqual(output);
	});
});
