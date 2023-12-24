import parseLyricLine from '../../../src/parser/parseLyricLine';

describe('parseLyricLine', () => {
	test('Module', () => {
		expect(parseLyricLine).toBeInstanceOf(Function);
	});
});

describe.each([
	['empty line', '', '', []],
	[
		'no chords position marker',
		'A lyric line with no chords',
		'A lyric line with no chords',
		[],
	],
	[
		'1 chords position marker, beginning',
		'_A lyric line with one chord',
		'A lyric line with one chord',
		[0],
	],
	[
		'1 chords position marker, before lyrics',
		'_ A lyric line with one chord',
		' A lyric line with one chord',
		[0],
	],
	[
		'1 chords position marker, middle',
		'A lyric line _with one chord',
		'A lyric line with one chord',
		['A lyric line '.length],
	],
	[
		'1 chords position marker, end',
		'A lyric line with one chord _',
		'A lyric line with one chord ',
		['A lyric line with one chord '.length],
	],
	[
		'multiple chords position marker',
		'_A lyric _line with _multiple _chords',
		'A lyric line with multiple chords',
		[
			0,
			'A lyric '.length,
			'A lyric line with '.length,
			'A lyric line with multiple '.length,
		],
	],
	[
		'multiple position marker together will count as 1',
		'_A lyric ___line with a lot __of _chords',
		'A lyric line with a lot of chords',
		[
			0,
			'A lyric '.length,
			'A lyric line with a lot '.length,
			'A lyric line with a lot of '.length,
		],
	],
	[
		'multiple position marker separated with a space',
		'_A lyric _ _ _line with a lot _ _of _chords',
		'A lyric   line with a lot  of chords',
		[
			0,
			'A lyric '.length,
			'A lyric  '.length,
			'A lyric   '.length,
			'A lyric   line with a lot '.length,
			'A lyric   line with a lot  '.length,
			'A lyric   line with a lot  of '.length,
		],
	],
	[
		'ending a line with multiple chords without lyrics',
		'_A lyric line _ending with a lot of chords _ _ _ _',
		'A lyric line ending with a lot of chords    ',
		[
			0,
			'A lyric line '.length,
			'A lyric line ending with a lot of chords '.length,
			'A lyric line ending with a lot of chords  '.length,
			'A lyric line ending with a lot of chords   '.length,
			'A lyric line ending with a lot of chords    '.length,
		],
	],
	[
		'forced lyric lines should be rendered without the lyricLine symbol',
		':A forced lyric line',
		'A forced lyric line',
		[],
	],
	[
		'the lyricLine symbol should not impact chord positions',
		':_A lyric _ _ _line with a lot _ _of _chords',
		'A lyric   line with a lot  of chords',
		[
			0,
			'A lyric '.length,
			'A lyric  '.length,
			'A lyric   '.length,
			'A lyric   line with a lot '.length,
			'A lyric   line with a lot  '.length,
			'A lyric   line with a lot  of '.length,
		],
	],
])('%s ', (title, lyricLine, lyrics, chordPositions) => {
	test('Correctly detects chords position', () => {
		const parsed = parseLyricLine(lyricLine);
		expect(parsed).toHaveProperty('chordPositions');
		expect(parsed.chordPositions).toEqual(chordPositions);
	});

	test('Correctly remove chord placeholders in lyrics', () => {
		const parsed = parseLyricLine(lyricLine);
		expect(parsed).toHaveProperty('lyrics');
		expect(parsed.lyrics).toEqual(lyrics);
	});
});
