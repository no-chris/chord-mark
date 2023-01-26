import parseKeyDeclaration from '../../../src/parser/parseKeyDeclaration';
import { chordParserFactory } from 'chord-symbol';

const parseChord = chordParserFactory();

describe('parseKeyDeclaration', () => {
	test('Module', () => {
		expect(parseKeyDeclaration).toBeInstanceOf(Function);
	});
});

describe.each([
	['Abmin', 'Abmi', 'flat'],
	['Abmi', 'Abmi', 'flat'],
	['Amin', 'Ami', 'flat'],
	['Abm', 'Abmi', 'flat'],
	['Ami', 'Ami', 'flat'],
	['Am', 'Ami', 'flat'],
	['A', 'A', 'sharp'],
	['A#', 'A#', 'sharp'],
	['A#m', 'A#mi', 'sharp'],
	['A#mi', 'A#mi', 'sharp'],
	['A#min', 'A#mi', 'sharp'],
])('Valid: %s => %s', (chordInput, string, accidental) => {
	test('Correctly gets key', () => {
		expect(parseKeyDeclaration('key ' + chordInput)).toEqual({
			string,
			chordModel: parseChord(chordInput),
			accidental,
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
