import { parseSong, renderSong } from '../../src/chordMark';
import toText from './helpers/toText';
import song from './helpers/songInput';

function render(input, options = {}) {
	return renderSong(parseSong(input), options);
}

describe('renderSong - time signatures', () => {
	test('renders standalone time signature line', () => {
		const text = toText(render(song('4/4', 'C')));
		expect(text).toContain('4/4');
	});

	test('renders 3/4 time signature', () => {
		const text = toText(render(song('3/4', 'C. D. E.')));
		expect(text).toContain('3/4');
	});

	describe('printInlineTimeSignatures', () => {
		const input = song(
			'4/4',
			'2/4 G 4/4 Am',
			"_A line _with changes"
		);

		test('prints inline time signatures by default', () => {
			const text = toText(render(input));
			expect(text).toContain('2/4');
			expect(text).toContain('4/4');
		});

		test('prints inline time signatures when explicitly true', () => {
			const text = toText(
				render(input, { printInlineTimeSignatures: true })
			);
			expect(text).toContain('2/4');
		});

		test('hides inline time signatures when false', () => {
			const text = toText(
				render(input, { printInlineTimeSignatures: false })
			);
			const lines = text.split('\n');
			// Chord line should not contain time signatures
			expect(lines[1]).not.toContain('2/4');
			expect(lines[1]).not.toContain('4/4');
		});
	});

	test('inline time signature different from default', () => {
		const input = song(
			'6/8',
			'Em D. C.',
			'_ So close no matter _how far _',
			'3/8 D 6/8 Em %',
			'_ But I _know'
		);
		const text = toText(
			render(input, { printInlineTimeSignatures: true })
		);
		expect(text).toContain('3/8');
		expect(text).toContain('6/8');
	});
});
