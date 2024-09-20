jest.mock('../../../src/parser/parseChord');
jest.mock('../../../src/renderer/helpers/getChordSymbol');

import parseChord from '../../../src/parser/parseChord';
import parseChordLine from '../../../src/parser/parseChordLine';
import getChordSymbol from '../../../src/renderer/helpers/getChordSymbol';
import parseTimeSignature from '../../../src/parser/parseTimeSignature';

import InvalidBeatCountException from '../../../src/parser/exceptions/InvalidBeatCountException';
import InvalidChordRepetitionException from '../../../src/parser/exceptions/InvalidChordRepetitionException';
import InvalidSubBeatGroupException from '../../../src/parser/exceptions/InvalidSubBeatGroupException';
import InvalidBarRepeatException from '../../../src/parser/exceptions/InvalidBarRepeatException';

import { forEachChordInChordLine } from '../../../src/parser/helper/songs';

describe('parseChordLine', () => {
	test('Module', () => {
		expect(parseChordLine).toBeInstanceOf(Function);
	});
});

const ts1_4 = parseTimeSignature('1/4');
const ts2_4 = parseTimeSignature('2/4');
const ts3_4 = parseTimeSignature('3/4');
const ts4_4 = parseTimeSignature('4/4');
const ts5_4 = parseTimeSignature('5/4');
const ts3_8 = parseTimeSignature('3/8');

beforeEach(() => {
	parseChord.mockReset();
	getChordSymbol.mockReset();
	parseChord.mockImplementation((chordString) => ({ symbol: chordString }));
	getChordSymbol.mockImplementation((chordDef) => chordDef.symbol);
});

describe.each([
	[
		'1 bar / 1 chord / 4/4',
		'Cm',
		ts4_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'Cm',
							model: { symbol: 'Cm' },
							duration: 4,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
			],
			originalKey: {},
		},
	],

	[
		'1 bar / 2 chords / 4/4',
		'Cm.. F..',
		ts4_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'Cm..',
							model: { symbol: 'Cm' },
							duration: 2,
							beat: 1,
							isInSubBeatGroup: false,
						},
						{
							string: 'F..',
							model: { symbol: 'F' },
							duration: 2,
							beat: 3,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
			],
			originalKey: {},
		},
	],

	[
		'1 bar / 3 chords / 4/4',
		'Cm.. F. G.',
		ts4_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'Cm..',
							model: { symbol: 'Cm' },
							duration: 2,
							beat: 1,
							isInSubBeatGroup: false,
						},
						{
							string: 'F.',
							model: { symbol: 'F' },
							duration: 1,
							beat: 3,
							isInSubBeatGroup: false,
						},
						{
							string: 'G.',
							model: { symbol: 'G' },
							duration: 1,
							beat: 4,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: true,
					lineHadTimeSignatureChange: false,
				},
			],
			originalKey: {},
		},
	],

	[
		'1 bar / 4 chords / 4/4',
		'Cm. Em7. F. G.',
		ts4_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'Cm.',
							model: { symbol: 'Cm' },
							duration: 1,
							beat: 1,
							isInSubBeatGroup: false,
						},
						{
							string: 'Em7.',
							model: { symbol: 'Em7' },
							duration: 1,
							beat: 2,
							isInSubBeatGroup: false,
						},
						{
							string: 'F.',
							model: { symbol: 'F' },
							duration: 1,
							beat: 3,
							isInSubBeatGroup: false,
						},
						{
							string: 'G.',
							model: { symbol: 'G' },
							duration: 1,
							beat: 4,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
			],
			originalKey: {},
		},
	],

	[
		'2 bars / 2 chords / 4/4',
		'C F',
		ts4_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'C',
							model: { symbol: 'C' },
							duration: 4,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
				{
					allChords: [
						{
							string: 'F',
							model: { symbol: 'F' },
							duration: 4,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
			],
			originalKey: {},
		},
	],

	[
		'2 bars / 3 chords / 4/4',
		'C F.. G..',
		ts4_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'C',
							model: { symbol: 'C' },
							duration: 4,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
				{
					allChords: [
						{
							string: 'F..',
							model: { symbol: 'F' },
							duration: 2,
							beat: 1,
							isInSubBeatGroup: false,
						},
						{
							string: 'G..',
							model: { symbol: 'G' },
							duration: 2,
							beat: 3,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
			],
			originalKey: {},
		},
	],

	[
		'2 bars / 4 chords / 4/4',
		'C... Em7. F. G...',
		ts4_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'C...',
							model: { symbol: 'C' },
							duration: 3,
							beat: 1,
							isInSubBeatGroup: false,
						},
						{
							string: 'Em7.',
							model: { symbol: 'Em7' },
							duration: 1,
							beat: 4,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: true,
					lineHadTimeSignatureChange: false,
				},
				{
					allChords: [
						{
							string: 'F.',
							model: { symbol: 'F' },
							duration: 1,
							beat: 1,
							isInSubBeatGroup: false,
						},
						{
							string: 'G...',
							model: { symbol: 'G' },
							duration: 3,
							beat: 2,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: true,
					lineHadTimeSignatureChange: false,
				},
			],
			originalKey: {},
		},
	],

	[
		'3 bars / 4 chords / 4/4',
		'C Em7. F... G',
		ts4_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'C',
							model: { symbol: 'C' },
							duration: 4,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
				{
					allChords: [
						{
							string: 'Em7.',
							model: { symbol: 'Em7' },
							duration: 1,
							beat: 1,
							isInSubBeatGroup: false,
						},
						{
							string: 'F...',
							model: { symbol: 'F' },
							duration: 3,
							beat: 2,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: true,
					lineHadTimeSignatureChange: false,
				},
				{
					allChords: [
						{
							string: 'G',
							model: { symbol: 'G' },
							duration: 4,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
			],
			originalKey: {},
		},
	],

	[
		'1 bar / 1 chord / 3/4',
		'C',
		ts3_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'C',
							model: { symbol: 'C' },
							duration: 3,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts3_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
			],
			originalKey: {},
		},
	],

	[
		'1 bar / 2 chords / 3/4',
		'Cm. F..',
		ts3_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'Cm.',
							model: { symbol: 'Cm' },
							duration: 1,
							beat: 1,
							isInSubBeatGroup: false,
						},
						{
							string: 'F..',
							model: { symbol: 'F' },
							duration: 2,
							beat: 2,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts3_4,
					isRepeated: false,
					hasUnevenChordsDurations: true,
					lineHadTimeSignatureChange: false,
				},
			],
			originalKey: {},
		},
	],

	[
		'1 bar / 2 chords / 3/4',
		'Cm.. F.',
		ts3_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'Cm..',
							model: { symbol: 'Cm' },
							duration: 2,
							beat: 1,
							isInSubBeatGroup: false,
						},
						{
							string: 'F.',
							model: { symbol: 'F' },
							duration: 1,
							beat: 3,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts3_4,
					isRepeated: false,
					hasUnevenChordsDurations: true,
					lineHadTimeSignatureChange: false,
				},
			],
			originalKey: {},
		},
	],

	[
		'1 bar / 3 chords / 3/4',
		'Cm. F. G.',
		ts3_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'Cm.',
							model: { symbol: 'Cm' },
							duration: 1,
							beat: 1,
							isInSubBeatGroup: false,
						},
						{
							string: 'F.',
							model: { symbol: 'F' },
							duration: 1,
							beat: 2,
							isInSubBeatGroup: false,
						},
						{
							string: 'G.',
							model: { symbol: 'G' },
							duration: 1,
							beat: 3,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts3_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
			],
			originalKey: {},
		},
	],

	[
		'3/8 bar',
		'Cm F G.',
		ts3_8,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'Cm',
							model: { symbol: 'Cm' },
							duration: 1,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts3_8,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
				{
					allChords: [
						{
							string: 'F',
							model: { symbol: 'F' },
							duration: 1,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts3_8,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
				{
					allChords: [
						{
							string: 'G.',
							model: { symbol: 'G' },
							duration: 1,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts3_8,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
			],
			originalKey: {},
		},
	],

	[
		'trim end spaces',
		'Cm ',
		ts4_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'Cm',
							model: { symbol: 'Cm' },
							duration: 4,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
			],
			originalKey: {},
		},
	],

	[
		'trim start spaces',
		' Cm',
		ts4_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'Cm',
							model: { symbol: 'Cm' },
							duration: 4,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
			],
			originalKey: {},
		},
	],

	[
		'trim start and end spaces',
		'   Cm   ',
		ts4_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'Cm',
							model: { symbol: 'Cm' },
							duration: 4,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
			],
			originalKey: {},
		},
	],

	[
		'handle multiple spaces between chords',
		'C..     B..',
		ts4_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'C..',
							model: { symbol: 'C' },
							duration: 2,
							beat: 1,
							isInSubBeatGroup: false,
						},
						{
							string: 'B..',
							model: { symbol: 'B' },
							duration: 2,
							beat: 3,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
			],
			originalKey: {},
		},
	],

	[
		'handle the "no-chord" symbol',
		'C NC B.. NC.. D',
		ts4_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'C',
							model: { symbol: 'C' },
							duration: 4,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
				{
					allChords: [
						{
							string: 'NC',
							model: 'NC',
							duration: 4,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
				{
					allChords: [
						{
							string: 'B..',
							model: { symbol: 'B' },
							duration: 2,
							beat: 1,
							isInSubBeatGroup: false,
						},
						{
							string: 'NC..',
							model: 'NC',
							duration: 2,
							beat: 3,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
				{
					allChords: [
						{
							string: 'D',
							model: { symbol: 'D' },
							duration: 4,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
			],
			originalKey: {},
		},
	],

	[
		'flag repeated bars, single chord per bar',
		'C % D %',
		ts4_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'C',
							model: { symbol: 'C' },
							duration: 4,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
				{
					allChords: [
						{
							string: 'C',
							model: { symbol: 'C' },
							duration: 4,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: true,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
				{
					allChords: [
						{
							string: 'D',
							model: { symbol: 'D' },
							duration: 4,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
				{
					allChords: [
						{
							string: 'D',
							model: { symbol: 'D' },
							duration: 4,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: true,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
			],
			originalKey: {},
		},
	],

	[
		'flag repeated bars, multiple chords per bar',
		'C.. Am. F. %',
		ts4_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'C..',
							model: { symbol: 'C' },
							duration: 2,
							beat: 1,
							isInSubBeatGroup: false,
						},
						{
							string: 'Am.',
							model: { symbol: 'Am' },
							duration: 1,
							beat: 3,
							isInSubBeatGroup: false,
						},
						{
							string: 'F.',
							model: { symbol: 'F' },
							duration: 1,
							beat: 4,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: true,
					lineHadTimeSignatureChange: false,
				},
				{
					allChords: [
						{
							string: 'C..',
							model: { symbol: 'C' },
							duration: 2,
							beat: 1,
							isInSubBeatGroup: false,
						},
						{
							string: 'Am.',
							model: { symbol: 'Am' },
							duration: 1,
							beat: 3,
							isInSubBeatGroup: false,
						},
						{
							string: 'F.',
							model: { symbol: 'F' },
							duration: 1,
							beat: 4,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: true,
					hasUnevenChordsDurations: true,
					lineHadTimeSignatureChange: false,
				},
			],
			originalKey: {},
		},
	],

	[
		'spaces in chord symbol',
		'C(add b9) F(add #9)',
		ts4_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'C(addb9)',
							model: { symbol: 'C(addb9)' },
							duration: 4,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
				{
					allChords: [
						{
							string: 'F(add#9)',
							model: { symbol: 'F(add#9)' },
							duration: 4,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
			],
			originalKey: {},
		},
	],
	[
		'sub-beat group / 2 chords',
		'F... [C/E Dm7]',
		ts4_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'F...',
							model: { symbol: 'F' },
							duration: 3,
							beat: 1,
							isInSubBeatGroup: false,
						},
						{
							string: '[C/E',
							model: { symbol: 'C/E' },
							duration: 0.5,
							beat: 4,
							isInSubBeatGroup: true,
							isFirstOfSubBeat: true,
							isLastOfSubBeat: false,
						},
						{
							string: 'Dm7]',
							model: { symbol: 'Dm7' },
							duration: 0.5,
							beat: 4,
							isInSubBeatGroup: true,
							isFirstOfSubBeat: false,
							isLastOfSubBeat: true,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: true,
					lineHadTimeSignatureChange: false,
				},
			],
			originalKey: {},
		},
	],
	[
		'sub-beat group / 3 chords',
		'F... [C/E Dm7 C]',
		ts4_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'F...',
							model: { symbol: 'F' },
							duration: 3,
							beat: 1,
							isInSubBeatGroup: false,
						},
						{
							string: '[C/E',
							model: { symbol: 'C/E' },
							duration: 0.33,
							beat: 4,
							isInSubBeatGroup: true,
							isFirstOfSubBeat: true,
							isLastOfSubBeat: false,
						},
						{
							string: 'Dm7',
							model: { symbol: 'Dm7' },
							duration: 0.33,
							beat: 4,
							isInSubBeatGroup: true,
							isFirstOfSubBeat: false,
							isLastOfSubBeat: false,
						},
						{
							string: 'C]',
							model: { symbol: 'C' },
							duration: 0.33,
							beat: 4,
							isInSubBeatGroup: true,
							isFirstOfSubBeat: false,
							isLastOfSubBeat: true,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: true,
					lineHadTimeSignatureChange: false,
				},
			],
			originalKey: {},
		},
	],
	[
		'sub-beat group / 4 chords',
		'[C/E Dm7 C Am] F...',
		ts4_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: '[C/E',
							model: { symbol: 'C/E' },
							duration: 0.25,
							beat: 1,
							isInSubBeatGroup: true,
							isFirstOfSubBeat: true,
							isLastOfSubBeat: false,
						},
						{
							string: 'Dm7',
							model: { symbol: 'Dm7' },
							duration: 0.25,
							beat: 1,
							isInSubBeatGroup: true,
							isFirstOfSubBeat: false,
							isLastOfSubBeat: false,
						},
						{
							string: 'C',
							model: { symbol: 'C' },
							duration: 0.25,
							beat: 1,
							isInSubBeatGroup: true,
							isFirstOfSubBeat: false,
							isLastOfSubBeat: false,
						},
						{
							string: 'Am]',
							model: { symbol: 'Am' },
							duration: 0.25,
							beat: 1,
							isInSubBeatGroup: true,
							isFirstOfSubBeat: false,
							isLastOfSubBeat: true,
						},
						{
							string: 'F...',
							model: { symbol: 'F' },
							duration: 3,
							beat: 2,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: true,
					lineHadTimeSignatureChange: false,
				},
			],
			originalKey: {},
		},
	],
	[
		'sub-beat group in a single beat measure',
		'1/4 [NC A] 4/4 E',
		ts4_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: '[NC',
							model: 'NC',
							duration: 0.5,
							beat: 1,
							isInSubBeatGroup: true,
							isFirstOfSubBeat: true,
							isLastOfSubBeat: false,
						},
						{
							string: 'A]',
							model: { symbol: 'A' },
							duration: 0.5,
							beat: 1,
							isInSubBeatGroup: true,
							isFirstOfSubBeat: false,
							isLastOfSubBeat: true,
						},
					],
					timeSignature: ts1_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: true,
				},
				{
					allChords: [
						{
							string: 'E',
							model: { symbol: 'E' },
							duration: 4,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: true,
				},
			],
			originalKey: {},
		},
	],
	[
		'Inline time signature / 1 change',
		'C 3/4 D.. E.',
		ts4_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'C',
							model: { symbol: 'C' },
							duration: 4,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
				{
					allChords: [
						{
							string: 'D..',
							model: { symbol: 'D' },
							duration: 2,
							beat: 1,
							isInSubBeatGroup: false,
						},
						{
							string: 'E.',
							model: { symbol: 'E' },
							duration: 1,
							beat: 3,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts3_4,
					isRepeated: false,
					hasUnevenChordsDurations: true,
					lineHadTimeSignatureChange: true,
				},
			],
			originalKey: {},
		},
	],
	[
		'Inline time signature / 2 changes',
		'C 3/4 D.. E. 5/4 F... C..',
		ts4_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'C',
							model: { symbol: 'C' },
							duration: 4,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
				{
					allChords: [
						{
							string: 'D..',
							model: { symbol: 'D' },
							duration: 2,
							beat: 1,
							isInSubBeatGroup: false,
						},
						{
							string: 'E.',
							model: { symbol: 'E' },
							duration: 1,
							beat: 3,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts3_4,
					isRepeated: false,
					hasUnevenChordsDurations: true,
					lineHadTimeSignatureChange: true,
				},
				{
					allChords: [
						{
							string: 'F...',
							model: { symbol: 'F' },
							duration: 3,
							beat: 1,
							isInSubBeatGroup: false,
						},
						{
							string: 'C..',
							model: { symbol: 'C' },
							duration: 2,
							beat: 4,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts5_4,
					isRepeated: false,
					hasUnevenChordsDurations: true,
					lineHadTimeSignatureChange: true,
				},
			],
			originalKey: {},
		},
	],
	[
		'Inline time signature / 3 consecutive changes', // useless, but can be parsed
		'C 3/4 D.. E. 2/4 4/4 5/4 F... C..',
		ts4_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'C',
							model: { symbol: 'C' },
							duration: 4,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: false,
				},
				{
					allChords: [
						{
							string: 'D..',
							model: { symbol: 'D' },
							duration: 2,
							beat: 1,
							isInSubBeatGroup: false,
						},
						{
							string: 'E.',
							model: { symbol: 'E' },
							duration: 1,
							beat: 3,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts3_4,
					isRepeated: false,
					hasUnevenChordsDurations: true,
					lineHadTimeSignatureChange: true,
				},
				{
					allChords: [
						{
							string: 'F...',
							model: { symbol: 'F' },
							duration: 3,
							beat: 1,
							isInSubBeatGroup: false,
						},
						{
							string: 'C..',
							model: { symbol: 'C' },
							duration: 2,
							beat: 4,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts5_4,
					isRepeated: false,
					hasUnevenChordsDurations: true,
					lineHadTimeSignatureChange: true,
				},
			],
			originalKey: {},
		},
	],
	[
		'Inline time signature / 2 changes, 1 at the start',
		'2/4 G 4/4 G°',
		ts4_4,
		{
			allBars: [
				{
					allChords: [
						{
							string: 'G',
							model: { symbol: 'G' },
							duration: 2,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts2_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: true,
				},
				{
					allChords: [
						{
							string: 'G°',
							model: { symbol: 'G°' },
							duration: 4,
							beat: 1,
							isInSubBeatGroup: false,
						},
					],
					timeSignature: ts4_4,
					isRepeated: false,
					hasUnevenChordsDurations: false,
					lineHadTimeSignatureChange: true,
				},
			],
			originalKey: {},
		},
	],
])('%s: %s', (title, input, timeSignature, expected) => {
	test('is correctly parsed', () => {
		const options = { timeSignature };
		const parsed = parseChordLine(input, options);

		expect(parsed).toEqual(expected);
	});
});

describe('chord key', () => {
	test('should forward the key to the chord parser', () => {
		const options = { originalKey: { string: 'C' } };
		parseChordLine('C F G', options);

		expect(parseChord).toHaveBeenNthCalledWith(1, 'C', options.originalKey);
		expect(parseChord).toHaveBeenNthCalledWith(2, 'F', options.originalKey);
		expect(parseChord).toHaveBeenNthCalledWith(3, 'G', options.originalKey);
	});

	test('should save the original key as a property', () => {
		const options = { originalKey: { string: 'C' } };
		const parsed = parseChordLine('C F G', options);

		expect(parsed.originalKey).toEqual(options.originalKey);
	});
});

describe.each([
	['1 chord / 1 beat / 4/4', 'Cm.', 'Cm.', 1, 1, ts4_4],
	['1 chord / 2 beats / 4/4', 'Cm..', 'Cm..', 2, 2, ts4_4],
	['1 chord / 3 beats / 4/4', 'Cm...', 'Cm...', 3, 3, ts4_4],
	['1 chord / 5 beats / 4/4', 'Cm.....', 'Cm.....', 5, 5, ts4_4],
	['1 chord / 6 beats / 4/4', 'Cm......', 'Cm......', 6, 6, ts4_4],
	['1 chord / 7 beats / 4/4', 'Cm.......', 'Cm.......', 7, 7, ts4_4],
	['2 chords / 3 beats / 4/4', 'Cm. D..', 'D..', 2, 3, ts4_4],
	['2 chords / 5 beats / 4/4', 'Cm... D..', 'D..', 2, 5, ts4_4],
	['2 chords / 6 beats / 4/4', 'Cm... D...', 'D...', 3, 6, ts4_4],
	['2 chords / 7 beats / 4/4', 'Cm... D', 'D', 4, 7, ts4_4],
	['3 chords / 3 beats / 4/4', 'C. D. E.', 'E.', 1, 3, ts4_4],
	['3 chords / 5 beats / 4/4', 'C. D.. E..', 'E..', 2, 5, ts4_4],

	['1 chords / 4 beats / 5/4', 'C....', 'C....', 4, 4, ts5_4],
	['2 chords / 4 beats / 5/4', 'C.. D..', 'D..', 2, 4, ts5_4],
	['3 chords / 6 beats / 5/4', 'C.. D.. E..', 'E..', 2, 6, ts5_4],
	['3 chords / 7 beats / 5/4', 'C.. D... E..', 'E..', 2, 2, ts5_4],
	['3 chords / 8 beats / 5/4', 'C... D... E..', 'D...', 3, 6, ts5_4],
	['3 chords / 9 beats / 5/4', 'C... D E.', 'D', 5, 8, ts5_4],
])(
	'Throw on %s: %s',
	(title, input, string, duration, currentBeatCount, timeSignature) => {
		const throwingFn = () => {
			parseChordLine(input, { timeSignature });
		};

		test('Throw InvalidBeatCountException', () => {
			expect(throwingFn).toThrow(InvalidBeatCountException);
		});

		test('Add correct properties to exception', () => {
			try {
				throwingFn();
				expect(false).toBeTruthy();
			} catch (e) {
				expect(e.name).toBe('InvalidBeatCountException');
				expect(e.string).toBe(string);
				expect(e.duration).toBe(duration);
				expect(e.currentBeatCount).toBe(currentBeatCount);
				expect(e.beatCount).toBe(timeSignature.beatCount);
			}
		});
	}
);

describe.each([
	['A. A...', 'A...'],
	['A.. A..', 'A..'],
	['A... A.', 'A.'],
	['A... B. C.. C. F.', 'C.'],
	['A... B. F... F.', 'F.'],
	['C... [G G C]', 'G'],
	['C... [G G]', 'G]'],
	['C... [C G G C]', 'G'],
])('Throw if repeated chord in a bar: %s', (input, string) => {
	const throwingFn = () => {
		parseChordLine(input);
	};

	test('Throw InvalidChordRepetitionException', () => {
		expect(throwingFn).toThrow(InvalidChordRepetitionException);
	});

	test('Add correct properties to exception', () => {
		try {
			throwingFn();
			expect(false).toBeTruthy();
		} catch (e) {
			expect(e.name).toBe('InvalidChordRepetitionException');
			expect(e.string).toBe(string);
		}
	});
});

describe.each([
	['A... [A A7/G]'],
	['A.. [A B7] [B7 A7/G]'],
	['[A B] [B C] [C D] [D E]'],
	['[A B] B...'],
])('Allowed chord repetitions: %s', (input) => {
	const notThrowingFn = () => {
		parseChordLine(input);
	};

	test('Do not throw if the repeated chord is the first of a sub-beat group', () => {
		expect(notThrowingFn).not.toThrow();
		expect(notThrowingFn).not.toThrow(InvalidChordRepetitionException);
	});
});

describe.each([
	['A %', 'A A', [0, 1]],
	['A % % %', 'A A A A', [0, 1, 1, 1]],
	['A % B %', 'A A B B', [0, 1, 0, 1]],
	['A B C D % %', 'A B C D D D', [0, 0, 0, 0, 1, 1]],
	['A B % C D %', 'A B B C D D', [0, 0, 1, 0, 0, 1]],
	['A.. B.. C... D. % %', 'A B C D C D C D', [0, 0, 1, 1]],

	['A %%%', 'A A A A', [0, 1, 1, 1]],
	['A %% %', 'A A A A', [0, 1, 1, 1]],
	['A % %% %', 'A A A A A', [0, 1, 1, 1, 1]],
	['A % %% B % %%', 'A A A A B B B B', [0, 1, 1, 1, 0, 1, 1, 1]],
])('barRepeat: %s', (input, expected, repeatFlags) => {
	test('should correctly repeat previous bar', () => {
		const parsed = parseChordLine(input);
		const parsedArray = [];
		forEachChordInChordLine(parsed, (chord) => {
			parsedArray.push(chord.model.symbol);
		});

		expect(parsedArray.join(' ')).toEqual(expected);
	});

	test('should flag repeated bars', () => {
		const parsed = parseChordLine(input);

		expect.assertions(parsed.allBars.length);

		parsed.allBars.forEach((bar, i) => {
			expect(bar.isRepeated).toBe(!!repeatFlags[i]);
		});
	});
});

describe.each([
	['no bar to repeat (1)', '% A'],
	['no bar to repeat (2)', '%% A'],
	['no bar to repeat (3)', ' % A'],
	['no bar to repeat (4)', '	% A'],
	['no bar to repeat (5)', '3/4 % C'],
	['previous bar incomplete (1)', 'A... % A'],
	['previous bar incomplete (2)', 'A.. B. % A'],
	['previous bar incomplete (3)', 'A B.. C. %'],
	['previous bar incomplete (4)', 'A B. %'],
	['repeat bar with a different time signature', 'C 3/4 %'],
])('Invalid bar repeat usage: %s => %s', (title, input) => {
	const throwingFn = () => {
		parseChordLine(input);
	};

	test('Throw InvalidBarRepeatException', () => {
		expect(throwingFn).toThrow(InvalidBarRepeatException);
	});
});

describe.each([
	['A... [B7. D7.]'],
	['A... [B7. D7]'],
	['A... [B7 D7.]'],
	['A... [B7. E7 D7]'],
	['A... [B7 E7. D7]'],
	['A... [B7 E7 D7.]'],
	['A... [B7.. E7 D7]'],
	['A... [B7 E7.. D7]'],
	['A... [B7 E7 D7..]'],
])('Throw if a sub-beat group contains duration markers: %s', (input) => {
	const throwingFn = () => {
		parseChordLine(input);
	};

	test('Throw Error', () => {
		expect(throwingFn).toThrow(InvalidSubBeatGroupException);
	});

	test('Properly fills exception parameters', () => {
		expect.assertions(2);
		try {
			throwingFn();
		} catch (error) {
			expect(error.chordLine).toBe(input);
			//expect(error.symbol).toBe(symbol); //duh
			expect(error.position).toBe(0);
		}
	});
});

describe.each([
	['A.. B7. D7.[', '[', 11],
	['A... [B7 [D7', '[', 9],
	['A... [B7 D7', '[', 5],
	['A.. [C G] [B7 D7', '[', 10],

	[']A.. B7. D7.', ']', 0],
	['A... B7 D7]', ']', 10],
	['A.. [C G] B7 D7]', ']', 15],

	['A... [C G E B7 D7]', 'D7]', 0],
	['A... [C]', '[C]', 0],
])(
	'Throw if sub-beat groups are not properly defined: %s',
	(input, symbol, position) => {
		const throwingFn = () => {
			parseChordLine(input);
		};

		test('Throw InvalidSubBeatGroupException', () => {
			expect(throwingFn).toThrow(InvalidSubBeatGroupException);
		});

		test('Properly fills exception parameters', () => {
			expect.assertions(3);
			try {
				throwingFn();
			} catch (error) {
				expect(error.chordLine).toBe(input);
				expect(error.symbol).toBe(symbol);
				expect(error.position).toBe(position);
			}
		});
	}
);
