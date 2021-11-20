import parseChordLine from '../../../src/parser/parseChordLine';
import parseChord from '../../../src/parser/parseChord';
import parseSong from '../../../src/parser/parseSong';
import parseTimeSignature from '../../../src/parser/parseTimeSignature';
import parseLyricLine from '../../../src/parser/parseLyricLine';

const ts4_4 = parseTimeSignature('4/4');

describe.skip('parseSong', () => {
	test('', () => {
		expect(true).toBe(true);
	});

	test('Accept multiline string as an input', () => {
		const input = `4/4
C.. G..
When I find myself in times of trouble
Am.. F..
_Mother mary _comes to me
C.. G..
Speaking words of wisdom
F. Em. Dm. C.
Let it be

Am.. G..
Let it be, let it be
C.. F..
Let it be, let it be
C.. G..
Whispers words of wisdom
F. Em. Dm. C.
Let it be`;
		const expected = {
			allLines: [
				{
					type: 'timeSignature',
					string: '4/4',
					model: ts4_4,
				},
				{
					type: 'chord',
					string: 'C.. G..',
					model: {
						allBars: [
							{
								allChords: [
									{
										string: 'C',
										model: parseChord('C'),
										duration: 2,
										beat: 1,
										isPositioned: false,
									},
									{
										string: 'G',
										model: parseChord('G'),
										duration: 2,
										beat: 3,
										isPositioned: false,
									},
								],
								timeSignature: ts4_4,
								isRepeated: false,
								hasPositionedChords: false,
							},
						],
					},
				},
				{
					type: 'lyric',
					string: 'When I find myself in times of trouble',
					model: parseLyricLine(
						'When I find myself in times of trouble'
					),
				},
				{
					type: 'chord',
					string: 'Am.. F..',
					model: parseChordLine('Am.. F..'),
				},
				{
					type: 'lyric',
					string: 'Mother mary comes to me',
					model: parseLyricLine('Mother mary comes to me'),
				},
				{
					type: 'chord',
					string: 'C.. G..',
					model: parseChordLine('C.. G..'),
				},
				{
					type: 'lyric',
					string: 'Speaking words of wisdom',
					model: parseLyricLine('Speaking words of wisdom'),
				},
				{
					type: 'chord',
					string: 'F. Em. Dm. C.',
					model: parseChordLine('F. Em. Dm. C.'),
				},
				{
					type: 'lyric',
					string: 'Let it be',
					model: parseLyricLine('Let it be'),
				},
				{ type: 'emptyLine', string: '' },
				{
					type: 'chord',
					string: 'Am.. G..',
					model: parseChordLine('Am.. G..'),
				},
				{
					type: 'lyric',
					string: 'Let it be, let it be',
					model: parseLyricLine('Let it be, let it be'),
				},
				{
					type: 'chord',
					string: 'C.. F..',
					model: parseChordLine('C.. F..'),
				},
				{
					type: 'lyric',
					string: 'Let it be, let it be',
					model: parseLyricLine('Let it be, let it be'),
				},
				{
					type: 'chord',
					string: 'C.. G..',
					model: parseChordLine('C.. G..'),
				},
				{
					type: 'lyric',
					string: 'Whispers words of wisdom',
					model: parseLyricLine('Whispers words of wisdom'),
				},
				{
					type: 'chord',
					string: 'F. Em. Dm. C.',
					model: parseChordLine('F. Em. Dm. C.'),
				},
				{
					type: 'lyric',
					string: 'Let it be',
					model: parseLyricLine('Let it be'),
				},
			],
			allChords: [
				{ model: parseChord('C'), occurrences: 6 },
				{ model: parseChord('G'), occurrences: 4 },
				{ model: parseChord('Am'), occurrences: 2 },
				{ model: parseChord('F'), occurrences: 4 },
				{ model: parseChord('Em'), occurrences: 2 },
				{ model: parseChord('Dm'), occurrences: 2 },
			],
		};

		expect(parseSong(input)).toEqual(expected);
	});

	test('Also accept array as an input', () => {
		const input = [
			'C.. G..',
			'When I find myself in times of trouble',
			'Am.. F..',
			'Mother mary comes to me',
		];
		const expected = {
			allLines: [
				{
					type: 'chord',
					string: 'C.. G..',
					model: parseChordLine('C.. G..'),
				},
				{
					type: 'lyric',
					string: 'When I find myself in times of trouble',
					model: parseLyricLine(
						'When I find myself in times of trouble'
					),
				},
				{
					type: 'chord',
					string: 'Am.. F..',
					model: parseChordLine('Am.. F..'),
				},
				{
					type: 'lyric',
					string: 'Mother mary comes to me',
					model: parseLyricLine('Mother mary comes to me'),
				},
			],
			allChords: [
				{ model: parseChord('C'), occurrences: 1 },
				{ model: parseChord('G'), occurrences: 1 },
				{ model: parseChord('Am'), occurrences: 1 },
				{ model: parseChord('F'), occurrences: 1 },
			],
		};

		expect(parseSong(input)).toEqual(expected);
	});
});
