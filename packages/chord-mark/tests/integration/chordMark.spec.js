import * as chordMark from '../../src/chordMark';

describe('Public API', () => {
	test('chordMark', () => {
		expect(Object.keys(chordMark).length).toEqual(2);
		expect(chordMark.parseSong).toBeInstanceOf(Function);
		expect(chordMark.renderSong).toBeInstanceOf(Function);
	});
});
