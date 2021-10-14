import isSectionCopy from '../../../../src/parser/matchers/isSectionCopy';

describe('isSectionCopy', () => {
	test('Module', () => {
		expect(isSectionCopy).toBeInstanceOf(Function);
	});
});

describe.each([
	['@a', true],
	['@b', true],
	['@c', true],
	['@i', true],
	['@v', true],
	['@b', true],
	['@ch', true],
	['@s', true],
	['@pre', true],
	['@o', true],
	['@ad', true],
	['@other', true],
	['@a', true],
	['@other', true],

	[' @a', true],
	['@a ', true],
	[' @a ', true],
	[' @a ', true],
	['@a ', true],
	[' @a ', true],

	['@a x2', true],
	['@a x9', true],
	['@a x4', true],

	['@ a', false],
	['@a b', false],
	['@', false],
	['@ ', false],
	['@@', false],

	['@a x', false],
	['@a x0', false],
	['@a x1', false],
	['@a  x2', false],
	['@a x10', false],
	['@a x-1', false],
])('Section copy identifier string %s', (string, result) => {
	test('Correctly detect section copy', () => {
		expect(isSectionCopy(string)).toEqual(result);
	});
});
