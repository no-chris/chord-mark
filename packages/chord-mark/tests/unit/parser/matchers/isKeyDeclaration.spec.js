import isKeyDeclaration from '../../../../src/parser/matchers/isKeyDeclaration';

describe('isKeyDeclaration', () => {
	test('Module', () => {
		expect(isKeyDeclaration).toBeInstanceOf(Function);
	});
});

describe.each([
	['key A♭min', true],
	['key Abmin', true],
	['key Abmi', true],
	['key Abm', true],
	['key Ab', true],
	['key A', true],
	['key A#', true],
	['key Ami', true],
	['key A#m', true],
	['key A#mi', true],
	['key A#min', true],
	['key A♯min', true],

	['key   Ab', true],
	['   key   Ab', true],
	['   key   Ab  ', true],

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
