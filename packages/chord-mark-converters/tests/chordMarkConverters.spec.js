import {
	convert2ChordMark,
	chordPro2ChordMark,
} from '../src/chordMarkConverters';

describe('chordMarkConverters', () => {
	test('Module', () => {
		expect(typeof convert2ChordMark).toBe('function');
		expect(typeof chordPro2ChordMark).toBe('function');
	});
});
