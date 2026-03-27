import { parseSong, renderSong } from '../../src/chordMark';
import toText from './helpers/toText';
import song from './helpers/songInput';

function render(input, options = {}) {
	return renderSong(parseSong(input), options);
}

describe('renderSong - time signatures', () => {
	test('renders standalone time signature line', () => {
		const text = toText(render(song('4/4', 'C')));
		expect(text).toBe(
			'4/4\n' +
			'|C     |'
		);
	});

	test('renders 3/4 time signature', () => {
		const text = toText(render(song('3/4', 'C. D. E.')));
		expect(text).toBe(
			'3/4\n' +
			'|C  D  E|'
		);
	});

	describe('printInlineTimeSignatures', () => {
		const input = song(
			'4/4',
			'2/4 G 4/4 Am',
			"_A line _with changes"
		);

		test('prints inline time signatures by default', () => {
			const text = toText(render(input));
			const lines = text.split('\n');
			expect(lines[1]).toBe('|2/4 G     |4/4 Am          |');
		});

		test('prints inline time signatures when explicitly true', () => {
			const text = toText(
				render(input, { printInlineTimeSignatures: true })
			);
			const lines = text.split('\n');
			expect(lines[1]).toBe('|2/4 G     |4/4 Am          |');
		});

		test('hides inline time signatures when false', () => {
			const text = toText(
				render(input, { printInlineTimeSignatures: false })
			);
			const lines = text.split('\n');
			expect(lines[1]).not.toContain('2/4');
			expect(lines[1]).not.toContain('4/4');
			expect(lines[1]).toContain('G');
			expect(lines[1]).toContain('Am');
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
		expect(text).toBe(
			'6/8\n' +
			'|Em                  |D       C |\n' +
			'   So close no matter how far\n' +
			'|3/8 D     |6/8 Em  |% |\n' +
			'      But I     know'
		);
	});
});
