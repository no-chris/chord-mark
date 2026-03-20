import { parseSong, renderSong } from '../../src/chordMark';
import toText from './helpers/toText';
import song from './helpers/songInput';

function render(input, options = {}) {
	return renderSong(parseSong(input), options);
}

describe('renderSong - filtering (chartType)', () => {
	const input = song(
		'#v',
		'A7 % % %',
		'v1-line-1',
		'D7 % A7 %',
		'v1-line-2',
		'E7 D7 A7 E7',
		'v1-line-3',
		'',
		'#v',
		'v2-line-1',
		'v2-line-2',
		'v2-line-3',
		''
	);

	test('chartType="all" shows chords and lyrics', () => {
		const text = toText(render(input, { chartType: 'all', alignBars: true }));
		expect(text).toContain('A7');
		expect(text).toContain('v1-line-1');
		expect(text).toContain('v2-line-1');
	});

	test('chartType="chords" shows only chords', () => {
		const text = toText(
			render(input, { chartType: 'chords', alignBars: true })
		);
		expect(text).toContain('A7');
		expect(text).not.toContain('v1-line-1');
		expect(text).not.toContain('v2-line-1');
		// Section labels still shown
		expect(text).toContain('Verse');
	});

	test('chartType="lyrics" shows only lyrics', () => {
		const text = toText(
			render(input, { chartType: 'lyrics', alignBars: true })
		);
		expect(text).not.toContain('A7');
		expect(text).toContain('v1-line-1');
		expect(text).toContain('v2-line-1');
	});

	test('chartType="chordsFirstLyricLine" shows chords and first lyric line per section', () => {
		const text = toText(
			render(input, {
				chartType: 'chordsFirstLyricLine',
				alignBars: true,
			})
		);
		expect(text).toContain('A7');
		expect(text).toContain('v1-line-1');
		expect(text).not.toContain('v1-line-2');
		expect(text).not.toContain('v1-line-3');
		expect(text).toContain('v2-line-1');
		expect(text).not.toContain('v2-line-2');
	});
});
