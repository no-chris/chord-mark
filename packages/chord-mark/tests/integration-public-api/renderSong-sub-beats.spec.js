import { parseSong, renderSong } from '../../src/chordMark';
import toText from './helpers/toText';
import song from './helpers/songInput';

function render(input, options = {}) {
	return renderSong(parseSong(input), options);
}

describe('renderSong - sub-beats', () => {
	const input = song(
		'C.. G.. Am.. F..',
		'No woman no cry',
		'C.. [F C/E] [Dm7 C] C.. G..',
		'No woman no cry'
	);

	test('prints sub-beat delimiters by default', () => {
		const text = toText(render(input));
		expect(text).toContain('[F C/E]');
		expect(text).toContain('[Dm7 C]');
	});

	test('prints sub-beat delimiters when explicitly true', () => {
		const text = toText(
			render(input, { printSubBeatDelimiters: true })
		);
		expect(text).toContain('[F C/E]');
		expect(text).toContain('[Dm7 C]');
	});

	test('hides sub-beat delimiters when false', () => {
		const text = toText(
			render(input, { printSubBeatDelimiters: false })
		);
		expect(text).not.toContain('[');
		expect(text).not.toContain(']');
		expect(text).toContain('F C/E');
		expect(text).toContain('Dm7 C');
	});

	test('sub-beats with positioned chords', () => {
		const input2 = song(
			'C.. [F C/E] [Dm7 C] C.. G..',
			'_ No _wo_man _no _cry'
		);
		const text = toText(
			render(input2, { printSubBeatDelimiters: true })
		);
		expect(text).toBe(
			'|C..  [F C/E] [Dm7 C] |C G |\n    No woman   no  cry'
		);
	});

	test('sub-beats in 3/4 time', () => {
		const text = toText(
			render(song('3/4', 'C. [Am G]'), {
				printSubBeatDelimiters: true,
				alignBars: false,
			})
		);
		expect(text).toBe('3/4\nC. [Am G]');
	});
});
