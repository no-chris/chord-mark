import * as ucc from '../../src/ucc';

describe('Public API', () => {
	test('ucc', () => {
		expect(Object.keys(ucc).length).toEqual(2);
		expect(ucc.parseSong).toBeInstanceOf(Function);
		expect(ucc.renderSong).toBeInstanceOf(Function);
	});
});
