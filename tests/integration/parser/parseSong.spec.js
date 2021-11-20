import _cloneDeep from 'lodash/cloneDeep';

import parseChord from '../../../src/parser/parseChord';
import parseSong from '../../../src/parser/parseSong';
import parseTimeSignature from '../../../src/parser/parseTimeSignature';
import parseLyricLine from '../../../src/parser/parseLyricLine';

const ts4_4 = parseTimeSignature('4/4');

describe('parseSong', () => {
	test('Accept multiline string as an input', () => {
		const input = `4/4
C.. G..
When I find myself in times of trouble
Am.. F..
_Mother mary _comes to me
C... G.
Speaking words of wisdom
F. Em. Dm. C.
_Let it _be`;
		const expected = {
			allLines: [
				{
					type: 'timeSignature',
					string: '4/4',
					model: _cloneDeep(ts4_4),
				},
				{
					type: 'chord',
					string: 'C.. G..',
					model: {
						allBars: [
							{
								allChords: [
									{
										string: 'C..',
										model: parseChord('C'),
										duration: 2,
										beat: 1,
										isPositioned: false,
									},
									{
										string: 'G..',
										model: parseChord('G'),
										duration: 2,
										beat: 3,
										isPositioned: false,
									},
								],
								timeSignature: _cloneDeep(ts4_4),
								isRepeated: false,
								hasUnevenChordsDurations: false,
							},
						],
						hasPositionedChords: false,
					},
				},
				{
					type: 'lyric',
					string: 'When I find myself in times of trouble',
					model: {
						chordPositions: [],
						lyrics: 'When I find myself in times of trouble',
					},
				},
				{
					type: 'chord',
					string: 'Am.. F..',
					model: {
						allBars: [
							{
								allChords: [
									{
										string: 'Am..',
										model: parseChord('Am'),
										duration: 2,
										beat: 1,
										isPositioned: true,
									},
									{
										string: 'F..',
										model: parseChord('F'),
										duration: 2,
										beat: 3,
										isPositioned: true,
									},
								],
								timeSignature: _cloneDeep(ts4_4),
								isRepeated: false,
								hasUnevenChordsDurations: false,
							},
						],
						hasPositionedChords: true,
					},
				},
				{
					type: 'lyric',
					string: '_Mother mary _comes to me',
					model: {
						chordPositions: [0, 12],
						lyrics: 'Mother mary comes to me',
					},
				},
				{
					type: 'chord',
					string: 'C... G.',
					model: {
						allBars: [
							{
								allChords: [
									{
										string: 'C...',
										model: parseChord('C'),
										duration: 3,
										beat: 1,
										isPositioned: false,
									},
									{
										string: 'G.',
										model: parseChord('G'),
										duration: 1,
										beat: 4,
										isPositioned: false,
									},
								],
								timeSignature: _cloneDeep(ts4_4),
								isRepeated: false,
								hasUnevenChordsDurations: true,
							},
						],
						hasPositionedChords: false,
					},
				},
				{
					type: 'lyric',
					string: 'Speaking words of wisdom',
					model: {
						chordPositions: [],
						lyrics: 'Speaking words of wisdom',
					},
				},
				{
					type: 'chord',
					string: 'F. Em. Dm. C.',
					model: {
						allBars: [
							{
								allChords: [
									{
										string: 'F.',
										model: parseChord('F'),
										duration: 1,
										beat: 1,
										isPositioned: true,
									},
									{
										string: 'Em.',
										model: parseChord('Em'),
										duration: 1,
										beat: 2,
										isPositioned: true,
									},
									{
										string: 'Dm.',
										model: parseChord('Dm'),
										duration: 1,
										beat: 3,
										isPositioned: false,
									},
									{
										string: 'C.',
										model: parseChord('C'),
										duration: 1,
										beat: 4,
										isPositioned: false,
									},
								],
								timeSignature: _cloneDeep(ts4_4),
								isRepeated: false,
								hasUnevenChordsDurations: false,
							},
						],
						hasPositionedChords: true,
					},
				},
				{
					type: 'lyric',
					string: '_Let it _be',
					model: {
						chordPositions: [0, 7],
						lyrics: 'Let it be',
					},
				},
			],
			allChords: [
				{ model: parseChord('C'), occurrences: 3 },
				{ model: parseChord('G'), occurrences: 2 },
				{ model: parseChord('Am'), occurrences: 1 },
				{ model: parseChord('F'), occurrences: 2 },
				{ model: parseChord('Em'), occurrences: 1 },
				{ model: parseChord('Dm'), occurrences: 1 },
			],
		};

		expect(parseSong(input)).toEqual(expected);
	});

	test('Also accept array as an input', () => {
		const input = [
			'When I find myself in times of trouble',
			'Mother mary comes to me',
		];
		const expected = {
			allLines: [
				{
					type: 'lyric',
					string: 'When I find myself in times of trouble',
					model: parseLyricLine(
						'When I find myself in times of trouble'
					),
				},
				{
					type: 'lyric',
					string: 'Mother mary comes to me',
					model: parseLyricLine('Mother mary comes to me'),
				},
			],
			allChords: [],
		};

		expect(parseSong(input)).toEqual(expected);
	});
});
