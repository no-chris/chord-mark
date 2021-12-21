import chordMarkConverters from '../src/chordMarkConverters';

describe('chordMarkConverters', () => {
	test('Module', () => {
		expect(typeof chordMarkConverters.chordPro2ChordMark).toBe('function');
	});
});
