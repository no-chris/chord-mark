import parseKeyDeclaration from '../../../src/parser/parseKeyDeclaration';

describe('parseKeyDeclaration', () => {
	test('Module', () => {
		expect(parseKeyDeclaration).toBeInstanceOf(Function);
	});
});

describe.each([
	['key Abmin', 'Abmi'],
	['key Abmi', 'Abmi'],
	['key Amin', 'Ami'],
	['key Abm', 'Abmi'],
	['key Ami', 'Ami'],
	['key Am', 'Ami'],
	['key A', 'A'],
	['key A#', 'A#'],
	['key A#m', 'A#mi'],
	['key A#mi', 'A#mi'],
	['key A#min', 'A#mi'],
])('Valid: %s => %s', (string, key) => {
	test('Correctly gets key', () => {
		expect(parseKeyDeclaration(string)).toEqual({
			key,
		});
	});
});

describe.each([
	['keyA'],
	['Key A'],
	['KEY A'],
	['KEY AA'],
	['KEY #A'],
	['KEY Am7'],
	['KEY A7'],
])('Invalid: %s', (string) => {
	test('Throws TypeError', () => {
		const throwingFn = () => parseKeyDeclaration(string);
		expect(throwingFn).toThrow(TypeError);
	});
});
