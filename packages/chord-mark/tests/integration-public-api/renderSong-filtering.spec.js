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
		expect(text).toBe(
			'Verse 1\n' +
			'|A7     |%      |%      |%      |\n' +
			'v1-line-1\n' +
			'|D7     |%      |A7     |%      |\n' +
			'v1-line-2\n' +
			'|E7     |D7     |A7     |E7     |\n' +
			'v1-line-3\n' +
			'\n' +
			'Verse 2\n' +
			'|A7     |%      |%      |%      |\n' +
			'v2-line-1\n' +
			'|D7     |%      |A7     |%      |\n' +
			'v2-line-2\n' +
			'|E7     |D7     |A7     |E7     |\n' +
			'v2-line-3\n'
		);
	});

	test('chartType="chords" shows only chords and section labels', () => {
		const text = toText(
			render(input, { chartType: 'chords', alignBars: true })
		);
		expect(text).toBe(
			'Verse 1\n' +
			'|A7     |%      |%      |%      |\n' +
			'|D7     |%      |A7     |%      |\n' +
			'|E7     |D7     |A7     |E7     |\n' +
			'\n' +
			'Verse 2\n' +
			'|A7     |%      |%      |%      |\n' +
			'|D7     |%      |A7     |%      |\n' +
			'|E7     |D7     |A7     |E7     |\n'
		);
	});

	test('chartType="lyrics" shows only lyrics and section labels', () => {
		const text = toText(
			render(input, { chartType: 'lyrics', alignBars: true })
		);
		expect(text).toBe(
			'Verse 1\n' +
			'v1-line-1\n' +
			'v1-line-2\n' +
			'v1-line-3\n' +
			'\n' +
			'Verse 2\n' +
			'v2-line-1\n' +
			'v2-line-2\n' +
			'v2-line-3\n'
		);
	});

	test('chartType="chordsFirstLyricLine" shows chords and first lyric line per section', () => {
		const text = toText(
			render(input, {
				chartType: 'chordsFirstLyricLine',
				alignBars: true,
			})
		);
		expect(text).toBe(
			'Verse 1\n' +
			'|A7     |%      |%      |%      |\n' +
			'v1-line-1\n' +
			'|D7     |%      |A7     |%      |\n' +
			'|E7     |D7     |A7     |E7     |\n' +
			'\n' +
			'Verse 2\n' +
			'|A7     |%      |%      |%      |\n' +
			'v2-line-1\n' +
			'|D7     |%      |A7     |%      |\n' +
			'|E7     |D7     |A7     |E7     |\n'
		);
	});
});
