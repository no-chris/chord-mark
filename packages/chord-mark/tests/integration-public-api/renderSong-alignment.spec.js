import { parseSong, renderSong } from '../../src/chordMark';
import toText from './helpers/toText';
import song from './helpers/songInput';

function render(input, options = {}) {
	return renderSong(parseSong(input), options);
}

describe('renderSong - alignment', () => {
	describe('alignBars', () => {
		test('aligned bars pad shorter chords with spaces', () => {
			const text = toText(
				render(song('C G Am F'), { alignBars: true })
			);
			expect(text).toBe('|C     |G     |Am     |F     |');
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
			expect(text).toBe(
				'Verse\n' +
				'|C...            CM7. |F  |\n' +
				" Imagine there's no heaven"
			);
		});

		test('ignores _ positions when disabled', () => {
			const input = song(
				'#v',
				'C... CM7. F',
				"_Imagine there's _no hea_ven"
			);
			const text = toText(
				render(input, { alignChordsWithLyrics: false })
			);
			expect(text).toBe(
				'Verse\n' +
				'|C...    CM7.|F     |\n' +
				"Imagine there's no heaven"
			);
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
