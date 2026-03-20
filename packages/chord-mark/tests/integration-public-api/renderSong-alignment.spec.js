import { parseSong, renderSong } from '../../src/chordMark';
import toText from './helpers/toText';
import song from './helpers/songInput';

function render(input, options = {}) {
	return renderSong(parseSong(input), options);
}

describe('renderSong - alignment', () => {
	describe('alignBars', () => {
		test('aligned bars pad shorter chords with spaces', () => {
			const textAligned = toText(
				render(song('C G Am F'), { alignBars: true })
			);
			const textNonAligned = toText(
				render(song('C G Am F'), { alignBars: false })
			);
			// Aligned output is wider because shorter chords get padded
			expect(textAligned.length).toBeGreaterThan(textNonAligned.length);
			// Aligned bars have consistent padding
			expect(textAligned).toBe('|C     |G     |Am     |F     |');
		});

		test('non-aligned bars use simple spacing', () => {
			const text = toText(
				render(song('C G Am F'), { alignBars: false })
			);
			expect(text).toBe('|C  |G  |Am  |F  |');
		});
	});

	describe('alignChordsWithLyrics', () => {
		test('aligns chords with lyric positions when enabled', () => {
			const input = song(
				'#v',
				'C... CM7. F',
				'_Imagine there\'s _no hea_ven'
			);
			const text = toText(
				render(input, { alignChordsWithLyrics: true })
			);
			const lines = text.split('\n');
			// Chord line should be aligned with lyrics
			expect(lines[1]).toContain('C...');
			expect(lines[1]).toContain('CM7.');
			expect(lines[1]).toContain('F');
		});

		test('ignores _ positions when disabled', () => {
			const input = song(
				'#v',
				'C... CM7. F',
				"_Imagine there's _no hea_ven"
			);
			const textEnabled = toText(
				render(input, { alignChordsWithLyrics: true })
			);
			const textDisabled = toText(
				render(input, { alignChordsWithLyrics: false })
			);
			// Different alignment produces different output
			expect(textEnabled).not.toEqual(textDisabled);
		});

		test('positioned chords strip _ from lyrics', () => {
			const input = song(
				'C... CM7. F',
				"_Imagine there's _no hea_ven"
			);
			const text = toText(render(input));
			expect(text).toContain("Imagine there's no heaven");
			expect(text).not.toContain('_');
		});
	});
});
