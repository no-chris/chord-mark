import isSectionLabel from '../../../../src/parser/matchers/isSectionLabel';

describe('isSectionLabel', () => {
	test('Module', () => {
		expect(isSectionLabel).toBeInstanceOf(Function);
	});
});

describe.each([
	['#a', true],
	['#b', true],
	['#c', true],
	['#i', true],
	['#v', true],
	['#b', true],
	['#ch', true],
	['#s', true],
	['#pre', true],
	['#o', true],
	['#ad', true],
	['#other', true],
	['#a', true],
	['#other', true],

	[' #a', true],
	['#a ', true],
	[' #a ', true],
	[' #a ', true],
	['#a ', true],
	[' #a ', true],

	['#a x2', true],
	['#a  x2', true],
	['  #a  x2', true],
	['#a  x2  ', true],
	['  #a  x2  ', true],
	['#a x9', true],
	['#a x4', true],

	['#a1', true],
	['#a2', true],
	['#a3', true],
	['#a4', true],
	['#a9', true],
	['#a1 x2', true],
	['#a x10', true],
	['#a x22', true],
	['#a x99', true],
	['#a x1', true],

	['# a', false],
	['#a b', false],
	['#', false],
	['# ', false],
	['##', false],

	['#a10', false],

	['#a x', false],
	['#a x0', false],
	['#a x-1', false],
	['#a x01', false],
	['#a x09', false],
	['#a x100', false],
	['#a x130', false],
])('%s => %s', (string, result) => {
	test('Correctly detect section label in ' + string, () => {
		expect(isSectionLabel(string)).toEqual(result);
	});
});
