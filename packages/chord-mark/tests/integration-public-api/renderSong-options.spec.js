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
			expect(text).toBe(
				'key: C\n' +
				'|C  |G  |'
			);
		});

		test('roman renders roman numerals', () => {
			const text = toText(
				render(song('key C', 'C Dm F G'), {
					symbolType: 'roman',
				})
			);
			expect(text).toBe(
				'key: C\n' +
				'|I     |ii     |IV     |V     |'
			);
		});

		test('roman with multiple keys', () => {
			const text = toText(
				render(
					song('key C', 'C Dm F G B°', 'key G', 'C Dm F G B°'),
					{ symbolType: 'roman' }
				)
			);
			const lines = text.split('\n');
			expect(lines[0]).toBe('key: C');
			expect(lines[1]).toBe(
				'|I      |ii     |IV       |V     |vii°     |'
			);
			expect(lines[2]).toBe('key: G');
			expect(lines[3]).toBe(
				'|IV     |v      |♭VII     |I     |?°       |'
			);
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
			expect(lines[1]).not.toContain('.');
			expect(lines[2]).not.toContain('.');
			expect(lines[3]).not.toContain('.');
		});

		test('="uneven"', () => {
			const text = toText(
				render(input, {
					printChordsDuration: 'uneven',
					alignBars: true,
				})
			);
			const lines = text.split('\n');
			// Single chord: no dots (nothing is uneven)
			expect(lines[1]).not.toContain('.');
			// Uneven durations: dots shown
			expect(lines[2]).toContain('A7.');
			expect(lines[2]).toContain('B...');
			// Even durations: no dots
			expect(lines[3]).not.toContain('.');
		});

		test('="always"', () => {
			const text = toText(
				render(input, {
					printChordsDuration: 'always',
					alignBars: true,
				})
			);
			const lines = text.split('\n');
			// Single chord: still no dots (only 1 chord, nothing to show)
			expect(lines[1]).not.toContain('.');
			// Even duration line should also show dots
			expect(lines[3]).toContain('A7..');
			expect(lines[3]).toContain('B..');
		});
	});
});
