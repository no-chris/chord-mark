import parseKeyDeclaration from '../../../src/parser/parseKeyDeclaration';
import { chordParserFactory } from 'chord-symbol';

const parseChord = chordParserFactory();

describe('parseKeyDeclaration', () => {
	test('Module', () => {
		expect(parseKeyDeclaration).toBeInstanceOf(Function);
	});
});

describe.each([
	['Abmin', 'Abm', 'flat'],
	['Abmi', 'Abm', 'flat'],
	['Amin', 'Am', 'flat'],
	['Abm', 'Abm', 'flat'],
	['Ami', 'Am', 'flat'],
	['Am', 'Am', 'flat'],
	['A', 'A', 'sharp'],
	['A#', 'A#', 'sharp'],
	['A#m', 'A#m', 'sharp'],
	['A#mi', 'A#m', 'sharp'],
	['A#min', 'A#m', 'sharp'],
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
