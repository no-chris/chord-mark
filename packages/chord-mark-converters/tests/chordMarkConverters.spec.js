import chordMarkConverters from '../src/chordMarkConverters';

describe('chordMarkConverters', () => {
	test('Module', () => {
		expect(typeof chordMarkConverters.convert2ChordMark).toBe('function');
	});
});
