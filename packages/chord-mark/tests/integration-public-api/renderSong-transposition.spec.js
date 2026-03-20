import { parseSong, renderSong } from '../../src/chordMark';
import toText from './helpers/toText';
import song from './helpers/songInput';

function render(input, options = {}) {
	return renderSong(parseSong(input), options);
}

describe('renderSong - transposition', () => {
	describe('transposeValue', () => {
		test('transposes up', () => {
			const text = toText(
				render(song('C'), {
					transposeValue: 1,
					alignBars: false,
				})
			);
			expect(text).toBe('|C#  |');
		});

		test('transposes down', () => {
			const text = toText(
				render(song('C'), {
					transposeValue: -11,
					alignBars: false,
				})
			);
			expect(text).toBe('|Db  |');
		});

		test('avoids theoretical keys (C+3 => Eb)', () => {
			const text = toText(
				render(song('C'), {
					transposeValue: 3,
					alignBars: false,
				})
			);
			expect(text).toBe('|Eb  |');
		});

		test('avoids theoretical keys (C+8 => Ab)', () => {
			const text = toText(
				render(song('C'), {
					transposeValue: 8,
					alignBars: false,
				})
			);
			expect(text).toBe('|Ab  |');
		});
	});

	describe('accidentalsType', () => {
		test('auto uses key-appropriate accidental (flat)', () => {
			const text = toText(
				render(song('F F A#'), { alignBars: false })
			);
			expect(text).toBe('|F  |%  |Bb  |');
		});

		test('auto uses key-appropriate accidental (sharp)', () => {
			const text = toText(
				render(song('G G Gb'), { alignBars: false })
			);
			expect(text).toBe('|G  |%  |F#  |');
		});

		test('force flat', () => {
			const text = toText(
				render(song('G G F#'), {
					accidentalsType: 'flat',
					alignBars: false,
				})
			);
			expect(text).toBe('|G  |%  |Gb  |');
		});

		test('force sharp', () => {
			const text = toText(
				render(song('F F Bb'), {
					accidentalsType: 'sharp',
					alignBars: false,
				})
			);
			expect(text).toBe('|F  |%  |A#  |');
		});
	});

	describe('explicit key + transpose', () => {
		test('auto accidentals', () => {
			const input = song(
				'key Dm',
				'Dm A# C Dm',
				'key C#m',
				'C#m7 G#7 D'
			);
			const text = toText(
				render(input, {
					accidentalsType: 'auto',
					transposeValue: -1,
					alignBars: false,
				})
			);
			expect(text).toContain('key: C#m');
			expect(text).toContain('|C#m  |A  |B  |C#m  |');
			expect(text).toContain('key: Cm');
			expect(text).toContain('|Cm7  |G7  |Db  |');
		});
	});

	describe('transpose with sections', () => {
		test('transposes repeated section chords', () => {
			const input = song(
				'key C',
				'#v',
				'Dm7 G7 C %',
				'The first verse is in the key of C',
				'key G',
				'#v',
				'And the second one in the key of G!'
			);
			const text = toText(render(input, { alignBars: false }));
			expect(text).toContain('|Dm7  |G7  |C  |%  |');
			expect(text).toContain('|Am7  |D7  |G  |%  |');
		});

		test('transposes repeated chord lines (%%)', () => {
			const input = song(
				'key C',
				'Dm7 G7 C %',
				'G7 % C %',
				'key G',
				'%%',
				'%'
			);
			const text = toText(render(input, { alignBars: false }));
			expect(text).toContain('|Am7  |D7  |G  |%  |');
			expect(text).toContain('|D7  |%  |G  |%  |');
		});
	});

	describe('force accidental on theoretical keys', () => {
		test('force sharp on theoretical key', () => {
			const text = toText(
				render(song('C'), {
					transposeValue: 8,
					accidentalsType: 'sharp',
					alignBars: false,
				})
			);
			expect(text).toBe('|G#  |');
		});

		test('force flat on theoretical key', () => {
			const text = toText(
				render(song('Cm'), {
					transposeValue: -11,
					accidentalsType: 'flat',
					alignBars: false,
				})
			);
			expect(text).toBe('|Dbm  |');
		});
	});
});
