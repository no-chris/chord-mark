import _cloneDeep from 'lodash/cloneDeep';

import parseChord from '../../../src/parser/parseChord';
import parseSong from '../../../src/parser/parseSong';
import parseTimeSignature from '../../../src/parser/parseTimeSignature';
import parseLyricLine from '../../../src/parser/parseLyricLine';

const ts4_4 = parseTimeSignature('4/4');

describe('parseSong', () => {
	test('Accept multiline string as an input', () => {
		const input = `4/4
key G
C.. G..
When I find myself in times of trouble
Am. [Am Am/G] FM7. F6.
_ Mother _Ma_ry _comes to _me
%%
Speaking words of wisdom
F. [C/E Dm7] C..
Let it _be _ _ _
key Am`;
		const expected = {
			allLines: [
				{
					type: 'timeSignature',
					string: '4/4',
					model: _cloneDeep(ts4_4),
				},
				{
					type: 'keyDeclaration',
					string: 'key G',
					model: {
						string: 'G',
						chordModel: parseChord('G'),
						accidental: 'sharp',
					},
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
										model: parseChord('C', 'G'),
										duration: 2,
										beat: 1,
										isInSubBeatGroup: false,
										isPositioned: false,
									},
									{
										string: 'G..',
										model: parseChord('G', 'G'),
										duration: 2,
										beat: 3,
										isInSubBeatGroup: false,
										isPositioned: false,
									},
								],
								timeSignature: _cloneDeep(ts4_4),
								isRepeated: false,
								hasUnevenChordsDurations: false,
								lineHadTimeSignatureChange: false,
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
					string: 'Am. [Am Am/G] FM7. F6.',
					model: {
						allBars: [
							{
								allChords: [
									{
										string: 'Am.',
										model: parseChord('Am', 'G'),
										duration: 1,
										beat: 1,
										isInSubBeatGroup: false,
										isPositioned: true,
									},
									{
										string: '[Am',
										model: parseChord('Am', 'G'),
										duration: 0.5,
										beat: 2,
										isInSubBeatGroup: true,
										isFirstOfSubBeat: true,
										isLastOfSubBeat: false,
										isPositioned: true,
									},
									{
										string: 'Am/G]',
										model: parseChord('Am/G', 'G'),
										duration: 0.5,
										beat: 2,
										isInSubBeatGroup: true,
										isFirstOfSubBeat: false,
										isLastOfSubBeat: true,
										isPositioned: true,
									},
									{
										string: 'FM7.',
										model: parseChord('FM7', 'G'),
										duration: 1,
										beat: 3,
										isInSubBeatGroup: false,
										isPositioned: true,
									},
									{
										string: 'F6.',
										model: parseChord('F6', 'G'),
										duration: 1,
										beat: 4,
										isInSubBeatGroup: false,
										isPositioned: true,
									},
								],
								timeSignature: _cloneDeep(ts4_4),
								isRepeated: false,
								hasUnevenChordsDurations: true,
								lineHadTimeSignatureChange: false,
							},
						],
						hasPositionedChords: true,
					},
				},
				{
					type: 'lyric',
					string: '_ Mother _Ma_ry _comes to _me',
					model: {
						chordPositions: [0, 8, 10, 13, 22],
						lyrics: ' Mother Mary comes to me',
					},
				},
				{
					type: 'chord',
					string: 'C.. G..',
					isFromChordLineRepeater: true,
					model: {
						allBars: [
							{
								allChords: [
									{
										string: 'C..',
										model: parseChord('C', 'G'),
										duration: 2,
										beat: 1,
										isInSubBeatGroup: false,
										isPositioned: false,
									},
									{
										string: 'G..',
										model: parseChord('G', 'G'),
										duration: 2,
										beat: 3,
										isInSubBeatGroup: false,
										isPositioned: false,
									},
								],
								timeSignature: _cloneDeep(ts4_4),
								isRepeated: false,
								hasUnevenChordsDurations: false,
								lineHadTimeSignatureChange: false,
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
					string: 'F. [C/E Dm7] C..',
					model: {
						allBars: [
							{
								allChords: [
									{
										string: 'F.',
										model: parseChord('F', 'G'),
										duration: 1,
										beat: 1,
										isInSubBeatGroup: false,
										isPositioned: true,
									},
									{
										string: '[C/E',
										model: parseChord('C/E', 'G'),
										duration: 0.5,
										beat: 2,
										isInSubBeatGroup: true,
										isFirstOfSubBeat: true,
										isLastOfSubBeat: false,
										isPositioned: true,
									},
									{
										string: 'Dm7]',
										model: parseChord('Dm7', 'G'),
										duration: 0.5,
										beat: 2,
										isInSubBeatGroup: true,
										isFirstOfSubBeat: false,
										isLastOfSubBeat: true,
										isPositioned: true,
									},
									{
										string: 'C..',
										model: parseChord('C', 'G'),
										duration: 2,
										beat: 3,
										isInSubBeatGroup: false,
										isPositioned: true,
									},
								],
								timeSignature: _cloneDeep(ts4_4),
								isRepeated: false,
								hasUnevenChordsDurations: true,
								lineHadTimeSignatureChange: false,
							},
						],
						hasPositionedChords: true,
					},
				},
				{
					type: 'lyric',
					string: 'Let it _be _ _ _',
					model: {
						chordPositions: [7, 10, 11, 12],
						lyrics: 'Let it be   ',
					},
				},
				{
					type: 'keyDeclaration',
					string: 'key Am',
					model: {
						string: 'Ami',
						chordModel: parseChord('Am'),
						accidental: 'flat',
					},
				},
			],
			allChords: [
				{
					model: parseChord('C', 'Am'),
					occurrences: 3,
					duration: 6,
					isFirst: true,
					isLast: true,
				},
				{ model: parseChord('G'), occurrences: 2, duration: 4 },
				{ model: parseChord('Am'), occurrences: 2, duration: 1.5 },
				{ model: parseChord('Am/G'), occurrences: 1, duration: 0.5 },
				{ model: parseChord('FM7'), occurrences: 1, duration: 1 },
				{ model: parseChord('F6'), occurrences: 1, duration: 1 },
				{ model: parseChord('F'), occurrences: 1, duration: 1 },
				{ model: parseChord('C/E'), occurrences: 1, duration: 0.5 },
				{ model: parseChord('Dm7'), occurrences: 1, duration: 0.5 },
			],
			allKeys: {
				auto: {
					string: 'C',
					chordModel: parseChord('C'),
					accidental: 'flat',
				},
				explicit: [
					{
						string: 'G',
						chordModel: parseChord('G'),
						accidental: 'sharp',
					},
					{
						string: 'Ami',
						chordModel: parseChord('Am'),
						accidental: 'flat',
					},
				],
			},
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
			allKeys: {
				auto: undefined,
				explicit: [],
			},
		};

		expect(parseSong(input)).toEqual(expected);
	});
});
