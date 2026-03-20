import { parseSong, renderSong } from '../../src/chordMark';
import toText from './helpers/toText';
import song from './helpers/songInput';

function render(input, options = {}) {
	return renderSong(parseSong(input), options);
}

describe('renderSong - basics', () => {
	test('renders with default options', () => {
		const rendered = render(song('C G', 'A lyric line'));
		const text = toText(rendered);
		expect(text).toBe('|C     |G     |\nA lyric line');
	});

	test('renders lyrics-only song', () => {
		const text = toText(render(song('First line', '', 'Second line')));
		expect(text).toBe('First line\n\nSecond line');
	});

	test('renders empty lines', () => {
		const text = toText(render(song('line1', '', 'line2')));
		expect(text).toBe('line1\n\nline2');
	});

	test('renders chord line with lyrics', () => {
		const text = toText(
			render(song('C G', 'A lyric'), { alignBars: false })
		);
		expect(text).toBe('|C  |G  |\nA lyric');
	});

	test('output is wrapped in song template div', () => {
		const rendered = render(song('C'));
		expect(rendered).toMatch(/^<div class="cmSong">/);
		expect(rendered).toMatch(/<\/div>$/);
	});

	test('each line is wrapped in a <p> tag', () => {
		const rendered = render(song('C G', 'A line'));
		const pTags = rendered.match(/<p/g);
		expect(pTags.length).toBe(2);
	});

	test('renders chord line with cmChordLine CSS class', () => {
		const rendered = render(song('C'));
		expect(rendered).toContain('cmChordLine');
	});

	test('renders lyric line with cmLyricLine CSS class', () => {
		const rendered = render(song('A lyric'));
		expect(rendered).toContain('cmLyricLine');
	});

	test('renders empty line with cmEmptyLine CSS class', () => {
		const rendered = render(song('line', '', 'line'));
		expect(rendered).toContain('cmEmptyLine');
	});
});
