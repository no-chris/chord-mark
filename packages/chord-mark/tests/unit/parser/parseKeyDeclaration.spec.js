import parseKeyDeclaration from '../../../src/parser/parseKeyDeclaration';

describe('parseKeyDeclaration', () => {
	test('Module', () => {
		expect(parseKeyDeclaration).toBeInstanceOf(Function);
	});
});

describe.each([
	['Abm', 'Abm', 'flat'],
	['Am', 'Am', 'flat'],
	['A', 'A', 'sharp'],
	['A#', 'A#', 'sharp'],
	['A#m', 'A#m', 'sharp'],
])('Valid: %s => %s', (chordInput, string, accidental) => {
	test('Correctly gets key', () => {
		expect(parseKeyDeclaration('key ' + chordInput)).toEqual({
			string,
			accidental,
		});
	});
});

describe.each([
	['key Abmin'],
	['key Abmi'],
	['key Amin'],
	['key Ami'],
	['key A#mi'],
	['key A#min'],
	['keyA'],
	['Key A'],
	['KEY A'],
	['KEY AA'],
	['KEY #A'],
	['KEY Am7'],
	['KEY A7'],
	['KEY La'],
	['key La'],
	['key Sol'],
	['key H'],
])('Invalid: %s', (string) => {
	test('Throws TypeError', () => {
		const throwingFn = () => parseKeyDeclaration(string);
		expect(throwingFn).toThrow(TypeError);
	});
});
