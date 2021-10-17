jest.mock('../../../src/parser/parseChordLine');
jest.mock('../../../src/parser/parseLyricLine');

import _ from 'lodash';

import songLinesFactory from '../../../src/parser/songLinesFactory';

import parseChordLine from '../../../src/parser/parseChordLine';
import parseSectionLabel from '../../../src/parser/parseSectionLabel';
import parseTimeSignature from '../../../src/parser/parseTimeSignature';
import parseLyricLine from '../../../src/parser/parseLyricLine';

describe('songLinesFactory', () => {
	test('Module', () => {
		expect(songLinesFactory).toBeInstanceOf(Function);
	});

	describe.each([['addLine'], ['asArray']])('API', (method) => {
		test('has method ' + method, () => {
			const songLines = songLinesFactory();
			expect(songLines[method]).toBeInstanceOf(Function);
		});
	});
});

beforeEach(() => {
	parseChordLine.mockClear();
	parseLyricLine.mockClear();
});

describe('ChordLines', () => {
	test('Correctly detect and parses chord lines', () => {
		parseChordLine.mockImplementation((chordLine) => chordLine);
		parseLyricLine.mockImplementation((lyricLine) => lyricLine);

		const input = `C.. G..
When I find myself in times of trouble
Am.. F..
Mother mary comes to me
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

		const expected = [
			getChordLine('C.. G..'),
			getLyricLine('When I find myself in times of trouble'),
			getChordLine('Am.. F..'),
			getLyricLine('Mother mary comes to me'),
			getChordLine('C.. G..'),
			getLyricLine('Speaking words of wisdom'),
			getChordLine('F. Em. Dm. C.'),
			getLyricLine('Let it be'),
			getEmptyLine(),
			getChordLine('Am.. G..'),
			getLyricLine('Let it be, let it be'),
			getChordLine('C.. F..'),
			getLyricLine('Let it be, let it be'),
			getChordLine('C.. G..'),
			getLyricLine('Whispers words of wisdom'),
			getChordLine('F. Em. Dm. C.'),
			getLyricLine('Let it be'),
		];

		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});

	test('Set chordLine as lyric if parsing fails', () => {
		parseChordLine.mockImplementation((chordLine) => {
			throw new Error(chordLine);
		});

		const input = 'C. D.. E..';

		const expected = [{ type: 'lyric', string: input, model: input }];

		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});
});

describe('timeSignature', () => {
	test('Correctly parse time signature', () => {
		const ts3_4 = parseTimeSignature('3/4');
		const ts4_4 = parseTimeSignature('4/4');
		const ts6_8 = parseTimeSignature('6/8');

		const input = ['6/8', '4/4', '3/4'];

		const expected = [
			{ type: 'timeSignature', string: '6/8', model: ts6_8 },
			{ type: 'timeSignature', string: '4/4', model: ts4_4 },
			{ type: 'timeSignature', string: '3/4', model: ts3_4 },
		];

		const songLines = songLinesFactory();
		input.forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});

	test('Correctly interpret time signature', () => {
		const ts3_4 = parseTimeSignature('3/4');
		const ts4_4 = parseTimeSignature('4/4');
		const ts6_8 = parseTimeSignature('6/8');

		const input = [
			'6/8',
			'Em D. C.',
			'So close, no matter how far',
			'4/4',
			'C.. G..',
			'When I find myself in times of trouble',
			'3/4',
			'D D C A',
			'Never cared for what they know',
		];

		const songLines = songLinesFactory();
		input.forEach(songLines.addLine);

		expect(parseChordLine.mock.calls.length).toBe(3);
		expect(parseChordLine.mock.calls[0][0]).toEqual('Em D. C.');
		expect(parseChordLine.mock.calls[0][1]).toEqual({
			timeSignature: ts6_8,
		});
		expect(parseChordLine.mock.calls[1][0]).toEqual('C.. G..');
		expect(parseChordLine.mock.calls[1][1]).toEqual({
			timeSignature: ts4_4,
		});
		expect(parseChordLine.mock.calls[2][0]).toEqual('D D C A');
		expect(parseChordLine.mock.calls[2][1]).toEqual({
			timeSignature: ts3_4,
		});
	});
});

describe('sectionLabels and autoRepeatChords', () => {
	test('correctly parse section labels', () => {
		const input = [
			'#i',
			'#v',
			'#v',
			'#c',
			'#v',
			'#c',
			'#v',
			'#c x2',
			'#c',
			'#o',
		];

		const sectionsParsed = input.map(parseSectionLabel);

		const expected = [
			{
				type: 'sectionLabel',
				string: '#i',
				model: sectionsParsed[0],
				index: 1,
				indexWithoutRepeats: 1,
				id: 'i1',
			},
			{
				type: 'sectionLabel',
				string: '#v',
				model: sectionsParsed[1],
				index: 1,
				indexWithoutRepeats: 1,
				id: 'v1',
			},
			{
				type: 'sectionLabel',
				string: '#v',
				model: sectionsParsed[2],
				index: 2,
				indexWithoutRepeats: 2,
				id: 'v2',
				isFromSectionCopy: true,
			},
			{
				type: 'sectionLabel',
				string: '#c',
				model: sectionsParsed[3],
				index: 1,
				indexWithoutRepeats: 1,
				id: 'c1',
			},
			{
				type: 'sectionLabel',
				string: '#v',
				model: sectionsParsed[4],
				index: 3,
				indexWithoutRepeats: 3,
				id: 'v3',
				isFromSectionCopy: true,
			},
			{
				type: 'sectionLabel',
				string: '#c',
				model: sectionsParsed[5],
				index: 2,
				indexWithoutRepeats: 2,
				id: 'c2',
				isFromSectionCopy: true,
			},
			{
				type: 'sectionLabel',
				string: '#v',
				model: sectionsParsed[6],
				index: 4,
				indexWithoutRepeats: 4,
				id: 'v4',
				isFromSectionCopy: true,
			},
			{
				type: 'sectionLabel',
				string: '#c x2',
				model: sectionsParsed[7],
				index: 3,
				indexWithoutRepeats: 3,
				id: 'c3',
				isFromSectionCopy: true,
			},
			{
				type: 'sectionLabel',
				string: '#c x2',
				model: _.cloneDeep(sectionsParsed[7]),
				index: 4,
				indexWithoutRepeats: 3,
				id: 'c4',
				isFromSectionRepeat: true,
				isFromSectionCopy: true,
			},
			{
				type: 'sectionLabel',
				string: '#c',
				model: sectionsParsed[8],
				index: 5,
				indexWithoutRepeats: 4,
				id: 'c5',
				isFromSectionCopy: true,
			},
			{
				type: 'sectionLabel',
				string: '#o',
				model: sectionsParsed[9],
				index: 1,
				indexWithoutRepeats: 1,
				id: 'o1',
			},
		];

		const songLines = songLinesFactory();
		input.forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});

	test('automatically apply chords - and other lines - of previously defined identical section. Sections can contain empty lines.', () => {
		const ts4_4 = parseTimeSignature('4/4');

		parseChordLine.mockImplementation((chordLine) => chordLine);
		parseLyricLine.mockImplementation((lyricLine) => lyricLine);

		const input = `#v
4/4
C.. G..
When I find myself in times of trouble
Am.. F..
Mother mary comes to me

C.. G..
Speaking words of wisdom
F. Em. Dm. C.
Let it be

#v
And in my hour of darkness
she is standing right in front of me

Speaking words of wisdom
Let it be

#c
Am.. G..
Let it be, let it be
C.. F..
Let it be, let it be
C.. G..
Whispers words of wisdom
F. Em. Dm. C.
Let it be

#v
And when the broken hearted people
Living in the world agree

There will be an answer
Let it be

#c
Let it be, let it be
Let it be, let it be
Whispers words of wisdom
Let it be`;

		const expected = [
			getSectionLine('#v', 'v1', 1),
			{ type: 'timeSignature', string: '4/4', model: _.cloneDeep(ts4_4) },
			getChordLine('C.. G..'),
			getLyricLine('When I find myself in times of trouble'),
			getChordLine('Am.. F..'),
			getLyricLine('Mother mary comes to me'),
			getEmptyLine(),
			getChordLine('C.. G..'),
			getLyricLine('Speaking words of wisdom'),
			getChordLine('F. Em. Dm. C.'),
			getLyricLine('Let it be'),
			getEmptyLine(),
			getSectionLine('#v', 'v2', 2),
			{
				type: 'timeSignature',
				string: '4/4',
				model: _.cloneDeep(ts4_4),
				isFromAutoRepeatChords: true,
			},
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromAutoRepeatChords: true,
			},
			getLyricLine('And in my hour of darkness'),
			{
				type: 'chord',
				string: 'Am.. F..',
				model: 'Am.. F..',
				isFromAutoRepeatChords: true,
			},

			getLyricLine('she is standing right in front of me'),
			getEmptyLine(),
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromAutoRepeatChords: true,
			},
			getLyricLine('Speaking words of wisdom'),
			{
				type: 'chord',
				string: 'F. Em. Dm. C.',
				model: 'F. Em. Dm. C.',
				isFromAutoRepeatChords: true,
			},
			getLyricLine('Let it be'),
			getEmptyLine(),
			getSectionLine('#c', 'c1', 1),
			getChordLine('Am.. G..'),
			getLyricLine('Let it be, let it be'),
			getChordLine('C.. F..'),
			getLyricLine('Let it be, let it be'),
			getChordLine('C.. G..'),
			getLyricLine('Whispers words of wisdom'),
			getChordLine('F. Em. Dm. C.'),
			getLyricLine('Let it be'),
			getEmptyLine(),
			{
				type: 'sectionLabel',
				string: '#v',
				index: 3,
				indexWithoutRepeats: 3,
				model: parseSectionLabel('#v'),
				id: 'v3',
			},
			{
				type: 'timeSignature',
				string: '4/4',
				model: _.cloneDeep(ts4_4),
				isFromAutoRepeatChords: true,
			},
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromAutoRepeatChords: true,
			},
			getLyricLine('And when the broken hearted people'),
			{
				type: 'chord',
				string: 'Am.. F..',
				model: 'Am.. F..',
				isFromAutoRepeatChords: true,
			},
			getLyricLine('Living in the world agree'),
			getEmptyLine(),
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromAutoRepeatChords: true,
			},
			getLyricLine('There will be an answer'),
			{
				type: 'chord',
				string: 'F. Em. Dm. C.',
				model: 'F. Em. Dm. C.',
				isFromAutoRepeatChords: true,
			},
			getLyricLine('Let it be'),
			getEmptyLine(),
			getSectionLine('#c', 'c2', 2),
			{
				type: 'chord',
				string: 'Am.. G..',
				model: 'Am.. G..',
				isFromAutoRepeatChords: true,
			},
			getLyricLine('Let it be, let it be'),
			{
				type: 'chord',
				string: 'C.. F..',
				model: 'C.. F..',
				isFromAutoRepeatChords: true,
			},
			getLyricLine('Let it be, let it be'),
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromAutoRepeatChords: true,
			},
			getLyricLine('Whispers words of wisdom'),
			{
				type: 'chord',
				string: 'F. Em. Dm. C.',
				model: 'F. Em. Dm. C.',
				isFromAutoRepeatChords: true,
			},
			getLyricLine('Let it be'),
		];

		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});

	test('blueprint overflows repeat, last empty line of repeat is not "chorded"', () => {
		parseChordLine.mockImplementation((chordLine) => chordLine);
		parseLyricLine.mockImplementation((lyricLine) => lyricLine);

		const input = `#v
C.. G..
line1-1
Am.. F..
line1-2
C.. G..
line1-3
F. Em. Dm. C.
line1-4

#v
line2-1
line2-2

#v
line3-1
line3-2
line3-3


`;

		const expected = [
			getSectionLine('#v', 'v1', 1),
			getChordLine('C.. G..'),
			getLyricLine('line1-1'),
			getChordLine('Am.. F..'),
			getLyricLine('line1-2'),
			getChordLine('C.. G..'),
			getLyricLine('line1-3'),
			getChordLine('F. Em. Dm. C.'),
			getLyricLine('line1-4'),
			getEmptyLine(),
			getSectionLine('#v', 'v2', 2),
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromAutoRepeatChords: true,
			},
			getLyricLine('line2-1'),
			{
				type: 'chord',
				string: 'Am.. F..',
				model: 'Am.. F..',
				isFromAutoRepeatChords: true,
			},
			getLyricLine('line2-2'),
			getEmptyLine(),
			{
				type: 'sectionLabel',
				string: '#v',
				index: 3,
				indexWithoutRepeats: 3,
				model: parseSectionLabel('#v'),
				id: 'v3',
			},
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromAutoRepeatChords: true,
			},
			getLyricLine('line3-1'),
			{
				type: 'chord',
				string: 'Am.. F..',
				model: 'Am.. F..',
				isFromAutoRepeatChords: true,
			},
			getLyricLine('line3-2'),
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromAutoRepeatChords: true,
			},
			getLyricLine('line3-3'),
			getEmptyLine(),
			getEmptyLine(),
			getEmptyLine(),
		];

		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});

	test('repeat overflows blueprint', () => {
		parseChordLine.mockImplementation((chordLine) => chordLine);
		parseLyricLine.mockImplementation((lyricLine) => lyricLine);

		const input = `#v
C.. G..
line1-1
Am.. F..
line1-2

#v
line2-1
line2-2
C.. G..
line2-3
F. Em. Dm. C.
line2-4`;

		const expected = [
			getSectionLine('#v', 'v1', 1),
			getChordLine('C.. G..'),
			getLyricLine('line1-1'),
			getChordLine('Am.. F..'),
			getLyricLine('line1-2'),
			getEmptyLine(),
			getSectionLine('#v', 'v2', 2),
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromAutoRepeatChords: true,
			},
			getLyricLine('line2-1'),
			{
				type: 'chord',
				string: 'Am.. F..',
				model: 'Am.. F..',
				isFromAutoRepeatChords: true,
			},
			getLyricLine('line2-2'),
			getChordLine('C.. G..'),
			getLyricLine('line2-3'),
			getChordLine('F. Em. Dm. C.'),
			getLyricLine('line2-4'),
		];

		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});

	test('allow chords override in repeat', () => {
		parseChordLine.mockImplementation((chordLine) => chordLine);

		const input = `#v
C.. G..
line1-1
Am.. F..
line1-2

#v
line2-1
F. Em. Dm. C.
line2-2`;

		const expected = [
			getSectionLine('#v', 'v1', 1),
			getChordLine('C.. G..'),
			getLyricLine('line1-1'),
			getChordLine('Am.. F..'),
			getLyricLine('line1-2'),
			getEmptyLine(),
			getSectionLine('#v', 'v2', 2),
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromAutoRepeatChords: true,
			},
			getLyricLine('line2-1'),
			getChordLine('F. Em. Dm. C.'),
			getLyricLine('line2-2'),
		];

		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});
});

describe('chordLineRepeater', () => {
	test('should allow to repeat last chordLine', () => {
		parseChordLine.mockImplementation((chordLine) => chordLine);
		parseLyricLine.mockImplementation((lyricLine) => lyricLine);

		const input = `C.. G..
line1-1
/
line1-2


/
line2-1`;

		const expected = [
			getChordLine('C.. G..'),
			getLyricLine('line1-1'),
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromChordLineRepeater: true,
			},
			getLyricLine('line1-2'),
			getEmptyLine(),
			getEmptyLine(),
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromChordLineRepeater: true,
			},
			getLyricLine('line2-1'),
		];

		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});

	test('should be parsed as lyric line if there is no chordLine before', () => {
		parseChordLine.mockImplementation((chordLine) => chordLine);
		parseLyricLine.mockImplementation((lyricLine) => lyricLine);

		const input = `/
line1-1
/
line1-2
/
line1-3`;

		const expected = [
			getLyricLine('/'),
			getLyricLine('line1-1'),
			getLyricLine('/'),
			getLyricLine('line1-2'),
			getLyricLine('/'),
			getLyricLine('line1-3'),
		];

		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});

	test('should be usable in repeated section', () => {
		parseChordLine.mockImplementation((chordLine) => chordLine);
		parseLyricLine.mockImplementation((lyricLine) => lyricLine);

		const input = `#v
C.. G..
line1-1
Am.. F..
line1-2

#v
line2-1
/
line2-2`;

		const expected = [
			getSectionLine('#v', 'v1', 1),
			getChordLine('C.. G..'),
			getLyricLine('line1-1'),
			getChordLine('Am.. F..'),
			getLyricLine('line1-2'),
			getEmptyLine(),
			getSectionLine('#v', 'v2', 2),
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromAutoRepeatChords: true,
			},
			getLyricLine('line2-1'),
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromChordLineRepeater: true,
			},
			getLyricLine('line2-2'),
		];

		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});
});

describe('Repeat directive (x3, x5...)', () => {
	test('should allow to repeat section', () => {
		parseChordLine.mockImplementation((chordLine) => chordLine);
		parseLyricLine.mockImplementation((lyricLine) => lyricLine);

		const input = `#v x2
C.. G..
line1-1
Am.. F..
line1-2
`;
		const expected = [
			{
				type: 'sectionLabel',
				string: '#v x2',
				index: 1,
				indexWithoutRepeats: 1,
				model: parseSectionLabel('#v x2'),
				id: 'v1',
			},
			getChordLine('C.. G..'),
			getLyricLine('line1-1'),
			getChordLine('Am.. F..'),
			getLyricLine('line1-2'),
			getEmptyLine(),
			{
				type: 'sectionLabel',
				string: '#v x2',
				index: 2,
				indexWithoutRepeats: 1,
				model: parseSectionLabel('#v x2'),
				id: 'v2',
				isFromSectionRepeat: true,
			},
			getChordLine('C.. G..', { fromRepeat: true }),
			getLyricLine('line1-1', { fromRepeat: true }),
			getChordLine('Am.. F..', { fromRepeat: true }),
			getLyricLine('line1-2', { fromRepeat: true }),
			getEmptyLine({ fromRepeat: true }),
		];

		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});

	test('should allow to repeat section that contains other kinds of repeats', () => {
		parseChordLine.mockImplementation((chordLine) => chordLine);
		parseLyricLine.mockImplementation((lyricLine) => lyricLine);

		const input = `#v
C.. G..
line1-1
Am.. F..
line1-2

#v x2
line2-1
line2-2
/
line2-3
`;
		const expected = [
			getSectionLine('#v', 'v1', 1),
			getChordLine('C.. G..'),
			getLyricLine('line1-1'),
			getChordLine('Am.. F..'),
			getLyricLine('line1-2'),
			getEmptyLine(),
			{
				type: 'sectionLabel',
				string: '#v x2',
				index: 2,
				indexWithoutRepeats: 2,
				model: parseSectionLabel('#v x2'),
				id: 'v2',
			},
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromAutoRepeatChords: true,
			},
			getLyricLine('line2-1'),
			{
				type: 'chord',
				string: 'Am.. F..',
				model: 'Am.. F..',
				isFromAutoRepeatChords: true,
			},
			getLyricLine('line2-2'),
			{
				type: 'chord',
				string: 'Am.. F..',
				model: 'Am.. F..',
				isFromChordLineRepeater: true,
			},
			getLyricLine('line2-3'),
			getEmptyLine(),
			{
				type: 'sectionLabel',
				string: '#v x2',
				index: 3,
				indexWithoutRepeats: 2,
				model: parseSectionLabel('#v x2'),
				id: 'v3',
				isFromSectionRepeat: true,
			},
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromSectionRepeat: true,
				isFromAutoRepeatChords: true,
			},
			getLyricLine('line2-1', { fromRepeat: true }),
			{
				type: 'chord',
				string: 'Am.. F..',
				model: 'Am.. F..',
				isFromSectionRepeat: true,
				isFromAutoRepeatChords: true,
			},
			getLyricLine('line2-2', { fromRepeat: true }),
			{
				type: 'chord',
				string: 'Am.. F..',
				model: 'Am.. F..',
				isFromSectionRepeat: true,
				isFromChordLineRepeater: true,
			},
			getLyricLine('line2-3', { fromRepeat: true }),
			getEmptyLine({ fromRepeat: true }),
		];

		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});
});

describe('Section copy', () => {
	test('should allow to copy the first section of a given label', () => {
		parseChordLine.mockImplementation((chordLine) => chordLine);
		parseLyricLine.mockImplementation((lyricLine) => lyricLine);

		const input = `#v
C.. G..
line1-1
Am.. F..
line1-2

#c
Am.. F..
line2-1
#v

#c

#v`;
		const expected = [
			getSectionLine('#v', 'v1', 1),
			getChordLine('C.. G..'),
			getLyricLine('line1-1'),
			getChordLine('Am.. F..'),
			getLyricLine('line1-2'),
			getEmptyLine(),

			getSectionLine('#c', 'c1', 1),
			getChordLine('Am.. F..'),
			getLyricLine('line2-1'),

			{
				type: 'sectionLabel',
				string: '#v',
				index: 2,
				indexWithoutRepeats: 2,
				model: parseSectionLabel('#v'),
				id: 'v2',
				isFromSectionCopy: true,
			},
			getChordLine('C.. G..', { fromCopy: true }),
			getLyricLine('line1-1', { fromCopy: true }),
			getChordLine('Am.. F..', { fromCopy: true }),
			getLyricLine('line1-2', { fromCopy: true }),
			getEmptyLine(),

			{
				type: 'sectionLabel',
				string: '#c',
				index: 2,
				indexWithoutRepeats: 2,
				model: parseSectionLabel('#c'),
				id: 'c2',
				isFromSectionCopy: true,
			},
			getChordLine('Am.. F..', { fromCopy: true }),
			getLyricLine('line2-1', { fromCopy: true }),
			getEmptyLine(),

			{
				type: 'sectionLabel',
				string: '#v',
				index: 3,
				indexWithoutRepeats: 3,
				model: parseSectionLabel('#v'),
				id: 'v3',
				isFromSectionCopy: true,
			},
			getChordLine('C.. G..', { fromCopy: true }),
			getLyricLine('line1-1', { fromCopy: true }),
			getChordLine('Am.. F..', { fromCopy: true }),
			getLyricLine('line1-2', { fromCopy: true }),
		];

		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});

	test('section label without empty lines', () => {
		parseChordLine.mockImplementation((chordLine) => chordLine);
		parseLyricLine.mockImplementation((lyricLine) => lyricLine);

		const input = `#v
C.. G..
verseContent

#c
Am.. F..
chorusContent

#v
#c`;
		const expected = [
			getSectionLine('#v', 'v1', 1),
			getChordLine('C.. G..'),
			getLyricLine('verseContent'),
			getEmptyLine(),

			getSectionLine('#c', 'c1', 1),
			getChordLine('Am.. F..'),
			getLyricLine('chorusContent'),
			getEmptyLine(),

			getSectionLine('#v', 'v2', 2, { fromCopy: true }),
			getChordLine('C.. G..', { fromCopy: true }),
			getLyricLine('verseContent', { fromCopy: true }),

			getSectionLine('#c', 'c2', 2, { fromCopy: true }),
			getChordLine('Am.. F..', { fromCopy: true }),
			getLyricLine('chorusContent', { fromCopy: true }),
		];

		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});

	test('empty sections', () => {
		parseChordLine.mockImplementation((chordLine) => chordLine);
		parseLyricLine.mockImplementation((lyricLine) => lyricLine);

		const input = `#v
C.. G..
line1-1
Am.. F..
line1-2

#v x2
`;
		const expected = [
			getSectionLine('#v', 'v1', 1),
			getChordLine('C.. G..'),
			getLyricLine('line1-1'),
			getChordLine('Am.. F..'),
			getLyricLine('line1-2'),
			getEmptyLine(),

			getSectionLine('#v x2', 'v2', 2, { fromCopy: true }),
			getChordLine('C.. G..', { fromCopy: true }),
			getLyricLine('line1-1', { fromCopy: true }),
			getChordLine('Am.. F..', { fromCopy: true }),
			getLyricLine('line1-2', { fromCopy: true }),
			getEmptyLine(),

			{
				type: 'sectionLabel',
				string: '#v x2',
				index: 3,
				indexWithoutRepeats: 2,
				model: parseSectionLabel('#v x2'),
				id: 'v3',
				isFromSectionCopy: true,
				isFromSectionRepeat: true,
			},
			getChordLine('C.. G..', { fromCopy: true, fromRepeat: true }),
			getLyricLine('line1-1', { fromCopy: true, fromRepeat: true }),
			getChordLine('Am.. F..', { fromCopy: true, fromRepeat: true }),
			getLyricLine('line1-2', { fromCopy: true, fromRepeat: true }),
			getEmptyLine({ fromRepeat: true }),
		];

		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});

	test('correctly handle last section', () => {
		parseChordLine.mockImplementation((chordLine) => chordLine);
		parseLyricLine.mockImplementation((lyricLine) => lyricLine);

		const input = `#v
C.. G..
verseContent

#v
Am.. F..
verseContent2`;
		const expected = [
			getSectionLine('#v', 'v1', 1),
			getChordLine('C.. G..'),
			getLyricLine('verseContent'),
			getEmptyLine(),

			getSectionLine('#v', 'v2', 2),
			getChordLine('Am.. F..'),
			getLyricLine('verseContent2'),
		];

		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});

	test('repeat arbitrary section', () => {
		parseChordLine.mockImplementation((chordLine) => chordLine);
		parseLyricLine.mockImplementation((lyricLine) => lyricLine);

		const input = `#v
C.. G..
verseContent1

#v
Am.. F..
verseContent2

#v1

#v2`;
		const expected = [
			getSectionLine('#v', 'v1', 1),
			getChordLine('C.. G..'),
			getLyricLine('verseContent1'),
			getEmptyLine(),

			getSectionLine('#v', 'v2', 2),
			getChordLine('Am.. F..'),
			getLyricLine('verseContent2'),
			getEmptyLine(),

			getSectionLine('#v1', 'v3', 3, { fromCopy: true }),
			getChordLine('C.. G..', { fromCopy: true }),
			getLyricLine('verseContent1', { fromCopy: true }),
			getEmptyLine(),

			getSectionLine('#v2', 'v4', 4, { fromCopy: true }),
			getChordLine('Am.. F..', { fromCopy: true }),
			getLyricLine('verseContent2', { fromCopy: true }),
		];

		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});
});

/** ====================== **/
/**   Helpers functions    **/
/** ====================== **/

function getSectionLine(
	sectionStr,
	id,
	index,
	{ fromCopy = false, fromRepeat = false } = {}
) {
	const sectionLine = {
		type: 'sectionLabel',
		string: sectionStr,
		index: index,
		indexWithoutRepeats: index,
		model: parseSectionLabel(sectionStr),
		id,
	};
	if (fromCopy) {
		sectionLine.isFromSectionCopy = true;
	}
	if (fromRepeat) {
		sectionLine.isFromSectionRepeat = true;
	}
	return sectionLine;
}

function getLine(
	type,
	lineString,
	{ fromCopy = false, fromRepeat = false } = {}
) {
	const line = {
		type,
		string: lineString,
	};
	if (type !== 'emptyLine') {
		line.model = lineString;
	}
	if (fromCopy) {
		line.isFromSectionCopy = true;
	}
	if (fromRepeat) {
		line.isFromSectionRepeat = true;
	}
	return line;
}

function getLyricLine(lineStr, options) {
	return getLine('lyric', lineStr, options);
}

function getChordLine(lineStr, options) {
	return getLine('chord', lineStr, options);
}

function getEmptyLine(options) {
	return getLine('emptyLine', '', options);
}

describe('Helpers functions', () => {
	describe.each([
		['base', undefined, undefined, getLyricLine('lyricContent')],
		['no copy, no repeat', false, false, getLyricLine('lyricContent')],
		[
			'copy, no repeat',
			true,
			false,
			{
				type: 'lyric',
				model: 'lyricContent',
				string: 'lyricContent',
				isFromSectionCopy: true,
			},
		],
		[
			'no copy, repeat',
			false,
			true,
			{
				type: 'lyric',
				model: 'lyricContent',
				string: 'lyricContent',
				isFromSectionRepeat: true,
			},
		],
		[
			'copy, repeat',
			true,
			true,
			{
				type: 'lyric',
				model: 'lyricContent',
				string: 'lyricContent',
				isFromSectionCopy: true,
				isFromSectionRepeat: true,
			},
		],
	])('Lyric line: %s', (title, fromCopy, fromRepeat, expected) => {
		test('getLyricLine', () => {
			const actual = getLyricLine('lyricContent', {
				fromCopy,
				fromRepeat,
			});
			expect(actual).toEqual(expected);
		});
	});

	describe.each([
		[
			'base',
			undefined,
			undefined,
			{ type: 'chord', model: 'chordContent', string: 'chordContent' },
		],
		[
			'no copy, no repeat',
			false,
			false,
			{ type: 'chord', model: 'chordContent', string: 'chordContent' },
		],
		[
			'copy, no repeat',
			true,
			false,
			{
				type: 'chord',
				model: 'chordContent',
				string: 'chordContent',
				isFromSectionCopy: true,
			},
		],
		[
			'no copy, repeat',
			false,
			true,
			{
				type: 'chord',
				model: 'chordContent',
				string: 'chordContent',
				isFromSectionRepeat: true,
			},
		],
		[
			'copy, repeat',
			true,
			true,
			{
				type: 'chord',
				model: 'chordContent',
				string: 'chordContent',
				isFromSectionCopy: true,
				isFromSectionRepeat: true,
			},
		],
	])('Chord line: %s', (title, fromCopy, fromRepeat, expected) => {
		test('getChordLine()', () => {
			const actual = getChordLine('chordContent', {
				fromCopy,
				fromRepeat,
			});
			expect(actual).toEqual(expected);
		});
	});

	describe.each([
		['base', undefined, undefined, { type: 'emptyLine', string: '' }],
		['no copy, no repeat', false, false, { type: 'emptyLine', string: '' }],
		[
			'copy, no repeat',
			true,
			false,
			{ type: 'emptyLine', string: '', isFromSectionCopy: true },
		],
		['no copy, repeat', false, true, getEmptyLine({ fromRepeat: true })],
		[
			'copy, repeat',
			true,
			true,
			{
				type: 'emptyLine',
				string: '',
				isFromSectionCopy: true,
				isFromSectionRepeat: true,
			},
		],
	])('Empty line: %s', (title, fromCopy, fromRepeat, expected) => {
		test('getEmptyLine()', () => {
			const actual = getEmptyLine({
				fromCopy,
				fromRepeat,
			});
			expect(actual).toEqual(expected);
		});
	});
});
