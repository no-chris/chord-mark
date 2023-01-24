import parseKeyDeclaration from '../../../src/parser/parseKeyDeclaration';
import { chordParserFactory } from 'chord-symbol';

const parseChord = chordParserFactory();

describe('parseKeyDeclaration', () => {
	test('Module', () => {
		expect(parseKeyDeclaration).toBeInstanceOf(Function);
	});
});

describe.each([
	['Abmin', 'Abmi'],
	['Abmi', 'Abmi'],
	['Amin', 'Ami'],
	['Abm', 'Abmi'],
	['Ami', 'Ami'],
	['Am', 'Ami'],
	['A', 'A'],
	['A#', 'A#'],
	['A#m', 'A#mi'],
	['A#mi', 'A#mi'],
	['A#min', 'A#mi'],
])('Valid: %s => %s', (chordInput, string) => {
	test('Correctly gets key', () => {
		expect(parseKeyDeclaration('key ' + chordInput)).toEqual({
			string,
			chordModel: parseChord(chordInput),
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
