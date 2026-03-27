import { lineTypes } from '../../src/chordMark';

describe('lineTypes', () => {
	test('exports an object', () => {
		expect(typeof lineTypes).toBe('object');
	});

	test('has exactly 6 line types', () => {
		expect(Object.keys(lineTypes)).toHaveLength(6);
	});

	test.each([
		['CHORD', 'chord'],
		['EMPTY_LINE', 'emptyLine'],
		['KEY_DECLARATION', 'keyDeclaration'],
		['LYRIC', 'lyric'],
		['SECTION_LABEL', 'sectionLabel'],
		['TIME_SIGNATURE', 'timeSignature'],
	])('has %s = "%s"', (key, value) => {
		expect(lineTypes[key]).toBe(value);
	});
});
