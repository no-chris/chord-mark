import isKeyDeclaration from '../../../../src/parser/matchers/isKeyDeclaration';

describe('isKeyDeclaration', () => {
	test('Module', () => {
		expect(isKeyDeclaration).toBeInstanceOf(Function);
	});
});

describe.each([
	['key Abm', true],
	['key Ab', true],
	['key A', true],
	['key A#', true],
	['key A#m', true],

	['key   Ab', true],
	['   key   Ab', true],
	['   key   Ab  ', true],

	['key A♭min', false],
	['key Abmin', false],
	['key Abmi', false],
	['key Ami', false],
	['key A#mi', false],
	['key A#min', false],
	['key A♯min', false],

	['key A#mine', false],
	['key Do', false],
	['key Sol', false],
	['key Hm', false],
	['key Fish', false],
	['key Rémi', false],

	['key A7', false],
	['key A9', false],
	['key A4', false],
	['key Am7', false],

	['key AA', false],
	['key AAm', false],
	['key Am#', false],
	['key Hm#', false],

	['key A;', false],
])('%s => %s', (string, result) => {
	test('Correctly detect key declaration', () => {
		expect(isKeyDeclaration(string)).toEqual(result);
	});
});
