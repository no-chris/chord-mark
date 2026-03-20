import { parseSong, renderSong } from '../../src/chordMark';
import toText from './helpers/toText';
import song from './helpers/songInput';

function render(input, options = {}) {
	return renderSong(parseSong(input), options);
}

describe('renderSong - options', () => {
	describe('chordSymbolRenderer', () => {
		test('uses custom chord symbol renderer', () => {
			const chordSymbolRenderer = () => 'Custom';
			const text = toText(
				render(song('A B C'), { chordSymbolRenderer })
			);
			expect(text).toBe('|Custom     |Custom     |Custom     |');
		});
	});

	describe('symbolType', () => {
		test('chord (default) renders chord names', () => {
			const text = toText(
				render(song('key C', 'C G'), { alignBars: false })
			);
			expect(text).toContain('C');
			expect(text).toContain('G');
		});

		test('roman renders roman numerals', () => {
			const text = toText(
				render(song('key C', 'C Dm F G'), {
					symbolType: 'roman',
				})
			);
			expect(text).toContain('I');
			expect(text).toContain('ii');
			expect(text).toContain('IV');
			expect(text).toContain('V');
		});

		test('roman with multiple keys', () => {
			const text = toText(
				render(
					song('key C', 'C Dm F G B°', 'key G', 'C Dm F G B°'),
					{ symbolType: 'roman' }
				)
			);
			// First key: C => I, ii, IV, V, vii°
			expect(text).toContain('vii°');
			// Second key: G => IV, v, bVII, I
			expect(text).toContain('♭VII');
		});
	});

	describe('printChordsDuration', () => {
		const input = song('4/4', 'A7', 'A7. B...', 'A7.. B..');

		test('="never"', () => {
			const text = toText(
				render(input, {
					printChordsDuration: 'never',
					alignBars: true,
				})
			);
			const lines = text.split('\n');
			// Single chord line should have no dots
			expect(lines[1]).not.toContain('.');
		});

		test('="uneven"', () => {
			const text = toText(
				render(input, {
					printChordsDuration: 'uneven',
					alignBars: true,
				})
			);
			// Uneven duration line should show dots
			expect(text).toContain('A7.');
			expect(text).toContain('B...');
			// Even duration line should not show dots
			const lines = text.split('\n');
			expect(lines[3]).not.toContain('.');
		});

		test('="always"', () => {
			const text = toText(
				render(input, {
					printChordsDuration: 'always',
					alignBars: true,
				})
			);
			// Even duration line should also show dots
			expect(text).toContain('A7..');
			expect(text).toContain('B..');
		});
	});
});
