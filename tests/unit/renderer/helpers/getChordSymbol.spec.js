import getChordSymbol from '../../../../src/renderer/helpers/getChordSymbol';
import parseChord from '../../../../src/parser/parseChord';

describe('getChordSymbol', () => {
	test('Module', () => {
		expect(getChordSymbol).toBeInstanceOf(Function);
	});
});

describe.each([
	['AM7', parseChord('AMaj7'), 'Ama7'],
	['A+', parseChord('Aaug'), 'A+'],
	['NC', 'NC', 'NC'],
])('getChordSymbol() for %s', (title, input, output) => {
	test('returns ' + output, () => {
		expect(getChordSymbol(input)).toEqual(output);
	});
});
