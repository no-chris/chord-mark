import isEmptyLine from '../../../../src/parser/matchers/isEmptyLine';

describe('isEmptyLine', () => {
	test('Module', () => {
		expect(isEmptyLine).toBeInstanceOf(Function);
	});
});

describe.each([

	['',  true],
	[' ',  true],
	['    ',  true],

	['  . ',  false],

])('Empty line string %s', (string, result) => {
	test('Correctly detect empty line', () => {
		expect(isEmptyLine(string)).toEqual(result);
	});
});
