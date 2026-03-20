import { parseSong, renderSong } from '../../src/chordMark';
import toText from './helpers/toText';
import song from './helpers/songInput';

function render(input, options = {}) {
	return renderSong(parseSong(input), options);
}

describe('renderSong - chords', () => {
	test('renders single chord', () => {
		const text = toText(render(song('C'), { alignBars: false }));
		expect(text).toBe('|C  |');
	});

	test('renders multiple chords in one bar', () => {
		const text = toText(
			render(song('C.. G..'), { alignBars: false })
		);
		expect(text).toBe('|C  G  |');
	});

	test('renders multiple bars', () => {
		const text = toText(
			render(song('C G Am F'), { alignBars: false })
		);
		expect(text).toBe('|C  |G  |Am  |F  |');
	});

	test('renders bar repeat as %', () => {
		const text = toText(
			render(song('C G Am %'), { alignBars: false })
		);
		expect(text).toBe('|C  |G  |Am  |%  |');
	});

	test('renders NC chord', () => {
		const text = toText(
			render(song('C NC'), { alignBars: false })
		);
		expect(text).toBe('|C  |NC  |');
	});

	describe('printChordsDuration', () => {
		const input = song('4/4', 'A7. B...');

		test('="never" hides beat dots', () => {
			const text = toText(
				render(input, { printChordsDuration: 'never', alignBars: true })
			);
			expect(text).toBe('4/4\n|A7  B    |');
		});

		test('="uneven" shows dots for uneven durations', () => {
			const text = toText(
				render(input, {
					printChordsDuration: 'uneven',
					alignBars: true,
				})
			);
			expect(text).toBe('4/4\n|A7.  B...    |');
		});

		test('="always" shows dots for all chords', () => {
			const text = toText(
				render(song('4/4', 'A7.. B..'), {
					printChordsDuration: 'always',
					alignBars: true,
				})
			);
			expect(text).toBe('4/4\n|A7..   B..   |');
		});
	});

	describe('printBarSeparators', () => {
		test('="never" removes bar separators', () => {
			const text = toText(
				render(song('C G'), { printBarSeparators: 'never' })
			);
			expect(text).not.toContain('|');
		});

		test('="always" shows bar separators', () => {
			const text = toText(
				render(song('C G'), {
					printBarSeparators: 'always',
					alignBars: false,
				})
			);
			expect(text).toBe('|C  |G  |');
		});

		test('="grids" shows separators only for non-positioned chord lines', () => {
			const input = song(
				'#v',
				'A7 %%%',
				'_A first _line _with _positioned chords',
				'D7 % A7 %',
				'A second line without'
			);
			const text = toText(render(input, { printBarSeparators: 'grids' }));
			const lines = text.split('\n');
			// Positioned line should not have bar separators
			expect(lines[1]).not.toContain('|');
			// Non-positioned line should have bar separators
			expect(lines[3]).toContain('|D7');
			expect(lines[3]).toBe('|D7     |%     |A7     |%     |');
		});
	});

	test('renders repeated bars with %', () => {
		const text = toText(
			render(song('A7 % % %'), { alignBars: true })
		);
		expect(text).toBe('|A7     |%     |%     |%     |');
	});
});
