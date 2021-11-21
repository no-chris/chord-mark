//import { parseSong, renderSong } from 'chord-mark';
import chordMark2Chordpro from '../../lib/chord-mark-2-chordpro';

describe('Module', () => {
	test('Should expose a function', () => {
		expect(typeof chordMark2Chordpro).toBe('function');
	});
});
