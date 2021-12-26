import {
	convert2ChordMark,
	chordMark2ChordPro,
} from '../src/chordMarkConverters';

describe('chordMarkConverters', () => {
	test('Module', () => {
		expect(typeof convert2ChordMark).toBe('function');
		expect(typeof chordMark2ChordPro).toBe('function');
	});
});
