jest.mock('../../../src/parser/parseChordLine');

import _ from 'lodash';

import songLinesFactory from '../../../src/parser/songLinesFactory';

import parseChordLine from '../../../src/parser/parseChordLine';
import parseSectionLabel from '../../../src/parser/parseSectionLabel';
import parseTimeSignature from '../../../src/parser/parseTimeSignature';

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
});

describe('ChordLines', () => {
	test('Correctly detect and parses chord lines', () => {
		parseChordLine.mockImplementation((chordLine) => chordLine);

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
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'When I find myself in times of trouble' },
			{ type: 'chord', string: 'Am.. F..', model: 'Am.. F..' },
			{ type: 'text', string: 'Mother mary comes to me' },
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'Speaking words of wisdom' },
			{ type: 'chord', string: 'F. Em. Dm. C.', model: 'F. Em. Dm. C.' },
			{ type: 'text', string: 'Let it be' },
			{ type: 'emptyLine', string: '' },
			{ type: 'chord', string: 'Am.. G..', model: 'Am.. G..' },
			{ type: 'text', string: 'Let it be, let it be' },
			{ type: 'chord', string: 'C.. F..', model: 'C.. F..' },
			{ type: 'text', string: 'Let it be, let it be' },
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'Whispers words of wisdom' },
			{ type: 'chord', string: 'F. Em. Dm. C.', model: 'F. Em. Dm. C.' },
			{ type: 'text', string: 'Let it be' },
		];

		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});

	test('Set chordLine as text if parsing fails', () => {
		parseChordLine.mockImplementation((chordLine) => {
			throw new Error(chordLine);
		});

		const input = 'C. D.. E..';

		const expected = [{ type: 'text', string: input }];

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
			},
			{
				type: 'sectionLabel',
				string: '#c',
				model: sectionsParsed[5],
				index: 2,
				indexWithoutRepeats: 2,
				id: 'c2',
			},
			{
				type: 'sectionLabel',
				string: '#v',
				model: sectionsParsed[6],
				index: 4,
				indexWithoutRepeats: 4,
				id: 'v4',
			},
			{
				type: 'sectionLabel',
				string: '#c x2',
				model: sectionsParsed[7],
				index: 3,
				indexWithoutRepeats: 3,
				id: 'c3',
			},
			{
				type: 'sectionLabel',
				string: '#c x2',
				model: _.cloneDeep(sectionsParsed[7]),
				index: 4,
				indexWithoutRepeats: 3,
				id: 'c4',
				isFromSectionRepeat: true,
			},
			{
				type: 'sectionLabel',
				string: '#c',
				model: sectionsParsed[8],
				index: 5,
				indexWithoutRepeats: 4,
				id: 'c5',
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
			{
				type: 'sectionLabel',
				string: '#v',
				index: 1,
				indexWithoutRepeats: 1,
				model: parseSectionLabel('#v'),
				id: 'v1',
			},
			{ type: 'timeSignature', string: '4/4', model: _.cloneDeep(ts4_4) },
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'When I find myself in times of trouble' },
			{ type: 'chord', string: 'Am.. F..', model: 'Am.. F..' },
			{ type: 'text', string: 'Mother mary comes to me' },
			{ type: 'emptyLine', string: '' },
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'Speaking words of wisdom' },
			{ type: 'chord', string: 'F. Em. Dm. C.', model: 'F. Em. Dm. C.' },
			{ type: 'text', string: 'Let it be' },
			{ type: 'emptyLine', string: '' },
			{
				type: 'sectionLabel',
				string: '#v',
				index: 2,
				indexWithoutRepeats: 2,
				model: parseSectionLabel('#v'),
				id: 'v2',
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
			{ type: 'text', string: 'And in my hour of darkness' },
			{
				type: 'chord',
				string: 'Am.. F..',
				model: 'Am.. F..',
				isFromAutoRepeatChords: true,
			},
			{ type: 'text', string: 'she is standing right in front of me' },
			{ type: 'emptyLine', string: '' },
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromAutoRepeatChords: true,
			},
			{ type: 'text', string: 'Speaking words of wisdom' },
			{
				type: 'chord',
				string: 'F. Em. Dm. C.',
				model: 'F. Em. Dm. C.',
				isFromAutoRepeatChords: true,
			},
			{ type: 'text', string: 'Let it be' },
			{ type: 'emptyLine', string: '' },
			{
				type: 'sectionLabel',
				string: '#c',
				index: 1,
				indexWithoutRepeats: 1,
				model: parseSectionLabel('#c'),
				id: 'c1',
			},
			{ type: 'chord', string: 'Am.. G..', model: 'Am.. G..' },
			{ type: 'text', string: 'Let it be, let it be' },
			{ type: 'chord', string: 'C.. F..', model: 'C.. F..' },
			{ type: 'text', string: 'Let it be, let it be' },
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'Whispers words of wisdom' },
			{ type: 'chord', string: 'F. Em. Dm. C.', model: 'F. Em. Dm. C.' },
			{ type: 'text', string: 'Let it be' },
			{ type: 'emptyLine', string: '' },
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
			{ type: 'text', string: 'And when the broken hearted people' },
			{
				type: 'chord',
				string: 'Am.. F..',
				model: 'Am.. F..',
				isFromAutoRepeatChords: true,
			},
			{ type: 'text', string: 'Living in the world agree' },
			{ type: 'emptyLine', string: '' },
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromAutoRepeatChords: true,
			},
			{ type: 'text', string: 'There will be an answer' },
			{
				type: 'chord',
				string: 'F. Em. Dm. C.',
				model: 'F. Em. Dm. C.',
				isFromAutoRepeatChords: true,
			},
			{ type: 'text', string: 'Let it be' },
			{ type: 'emptyLine', string: '' },
			{
				type: 'sectionLabel',
				string: '#c',
				index: 2,
				indexWithoutRepeats: 2,
				model: parseSectionLabel('#c'),
				id: 'c2',
			},
			{
				type: 'chord',
				string: 'Am.. G..',
				model: 'Am.. G..',
				isFromAutoRepeatChords: true,
			},
			{ type: 'text', string: 'Let it be, let it be' },
			{
				type: 'chord',
				string: 'C.. F..',
				model: 'C.. F..',
				isFromAutoRepeatChords: true,
			},
			{ type: 'text', string: 'Let it be, let it be' },
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromAutoRepeatChords: true,
			},
			{ type: 'text', string: 'Whispers words of wisdom' },
			{
				type: 'chord',
				string: 'F. Em. Dm. C.',
				model: 'F. Em. Dm. C.',
				isFromAutoRepeatChords: true,
			},
			{ type: 'text', string: 'Let it be' },
		];

		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});

	test('blueprint overflows repeat, last empty line of repeat is not "chorded"', () => {
		parseChordLine.mockImplementation((chordLine) => chordLine);

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
			{
				type: 'sectionLabel',
				string: '#v',
				index: 1,
				indexWithoutRepeats: 1,
				model: parseSectionLabel('#v'),
				id: 'v1',
			},
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'line1-1' },
			{ type: 'chord', string: 'Am.. F..', model: 'Am.. F..' },
			{ type: 'text', string: 'line1-2' },
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'line1-3' },
			{ type: 'chord', string: 'F. Em. Dm. C.', model: 'F. Em. Dm. C.' },
			{ type: 'text', string: 'line1-4' },
			{ type: 'emptyLine', string: '' },
			{
				type: 'sectionLabel',
				string: '#v',
				index: 2,
				indexWithoutRepeats: 2,
				model: parseSectionLabel('#v'),
				id: 'v2',
			},
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromAutoRepeatChords: true,
			},
			{ type: 'text', string: 'line2-1' },
			{
				type: 'chord',
				string: 'Am.. F..',
				model: 'Am.. F..',
				isFromAutoRepeatChords: true,
			},
			{ type: 'text', string: 'line2-2' },
			{ type: 'emptyLine', string: '' },
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
			{ type: 'text', string: 'line3-1' },
			{
				type: 'chord',
				string: 'Am.. F..',
				model: 'Am.. F..',
				isFromAutoRepeatChords: true,
			},
			{ type: 'text', string: 'line3-2' },
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromAutoRepeatChords: true,
			},
			{ type: 'text', string: 'line3-3' },
			{ type: 'emptyLine', string: '' },
			{ type: 'emptyLine', string: '' },
			{ type: 'emptyLine', string: '' },
		];

		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});

	test('repeat overflows blueprint', () => {
		parseChordLine.mockImplementation((chordLine) => chordLine);

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
			{
				type: 'sectionLabel',
				string: '#v',
				index: 1,
				indexWithoutRepeats: 1,
				model: parseSectionLabel('#v'),
				id: 'v1',
			},
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'line1-1' },
			{ type: 'chord', string: 'Am.. F..', model: 'Am.. F..' },
			{ type: 'text', string: 'line1-2' },
			{ type: 'emptyLine', string: '' },
			{
				type: 'sectionLabel',
				string: '#v',
				index: 2,
				indexWithoutRepeats: 2,
				model: parseSectionLabel('#v'),
				id: 'v2',
			},
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromAutoRepeatChords: true,
			},
			{ type: 'text', string: 'line2-1' },
			{
				type: 'chord',
				string: 'Am.. F..',
				model: 'Am.. F..',
				isFromAutoRepeatChords: true,
			},
			{ type: 'text', string: 'line2-2' },
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'line2-3' },
			{ type: 'chord', string: 'F. Em. Dm. C.', model: 'F. Em. Dm. C.' },
			{ type: 'text', string: 'line2-4' },
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
			{
				type: 'sectionLabel',
				string: '#v',
				index: 1,
				indexWithoutRepeats: 1,
				model: parseSectionLabel('#v'),
				id: 'v1',
			},
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'line1-1' },
			{ type: 'chord', string: 'Am.. F..', model: 'Am.. F..' },
			{ type: 'text', string: 'line1-2' },
			{ type: 'emptyLine', string: '' },
			{
				type: 'sectionLabel',
				string: '#v',
				index: 2,
				indexWithoutRepeats: 2,
				model: parseSectionLabel('#v'),
				id: 'v2',
			},
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromAutoRepeatChords: true,
			},
			{ type: 'text', string: 'line2-1' },
			{ type: 'chord', string: 'F. Em. Dm. C.', model: 'F. Em. Dm. C.' },
			{ type: 'text', string: 'line2-2' },
		];

		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});
});

describe('chordLineRepeater', () => {
	test('should allow to repeat last chordLine', () => {
		parseChordLine.mockImplementation((chordLine) => chordLine);

		const input = `C.. G..
line1-1
/
line1-2


/
line2-1`;

		const expected = [
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'line1-1' },
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromChordLineRepeater: true,
			},
			{ type: 'text', string: 'line1-2' },
			{ type: 'emptyLine', string: '' },
			{ type: 'emptyLine', string: '' },
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromChordLineRepeater: true,
			},
			{ type: 'text', string: 'line2-1' },
		];

		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});

	test('should be parsed as text line if there is no chordLine before', () => {
		parseChordLine.mockImplementation((chordLine) => chordLine);

		const input = `/
line1-1
/
line1-2
/
line1-3`;

		const expected = [
			{ type: 'text', string: '/' },
			{ type: 'text', string: 'line1-1' },
			{ type: 'text', string: '/' },
			{ type: 'text', string: 'line1-2' },
			{ type: 'text', string: '/' },
			{ type: 'text', string: 'line1-3' },
		];

		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});

	test('should be usable in repeated section', () => {
		parseChordLine.mockImplementation((chordLine) => chordLine);

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
			{
				type: 'sectionLabel',
				string: '#v',
				index: 1,
				indexWithoutRepeats: 1,
				model: parseSectionLabel('#v'),
				id: 'v1',
			},
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'line1-1' },
			{ type: 'chord', string: 'Am.. F..', model: 'Am.. F..' },
			{ type: 'text', string: 'line1-2' },
			{ type: 'emptyLine', string: '' },
			{
				type: 'sectionLabel',
				string: '#v',
				index: 2,
				indexWithoutRepeats: 2,
				model: parseSectionLabel('#v'),
				id: 'v2',
			},
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromAutoRepeatChords: true,
			},
			{ type: 'text', string: 'line2-1' },
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromChordLineRepeater: true,
			},
			{ type: 'text', string: 'line2-2' },
		];

		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});
});

describe('Repeat directive (x3, x5...)', () => {
	test('should allow to repeat section', () => {
		parseChordLine.mockImplementation((chordLine) => chordLine);

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
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'line1-1' },
			{ type: 'chord', string: 'Am.. F..', model: 'Am.. F..' },
			{ type: 'text', string: 'line1-2' },
			{ type: 'emptyLine', string: '' },
			{
				type: 'sectionLabel',
				string: '#v x2',
				index: 2,
				indexWithoutRepeats: 1,
				model: parseSectionLabel('#v x2'),
				id: 'v2',
				isFromSectionRepeat: true,
			},
			{
				type: 'chord',
				string: 'C.. G..',
				model: 'C.. G..',
				isFromSectionRepeat: true,
			},
			{ type: 'text', string: 'line1-1', isFromSectionRepeat: true },
			{
				type: 'chord',
				string: 'Am.. F..',
				model: 'Am.. F..',
				isFromSectionRepeat: true,
			},
			{ type: 'text', string: 'line1-2', isFromSectionRepeat: true },
			{ type: 'emptyLine', string: '', isFromSectionRepeat: true },
		];

		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});

	test('should allow to repeat section that contains other kinds of repeats', () => {
		parseChordLine.mockImplementation((chordLine) => chordLine);

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
			{
				type: 'sectionLabel',
				string: '#v',
				index: 1,
				indexWithoutRepeats: 1,
				model: parseSectionLabel('#v'),
				id: 'v1',
			},
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'line1-1' },
			{ type: 'chord', string: 'Am.. F..', model: 'Am.. F..' },
			{ type: 'text', string: 'line1-2' },
			{ type: 'emptyLine', string: '' },
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
			{ type: 'text', string: 'line2-1' },
			{
				type: 'chord',
				string: 'Am.. F..',
				model: 'Am.. F..',
				isFromAutoRepeatChords: true,
			},
			{ type: 'text', string: 'line2-2' },
			{
				type: 'chord',
				string: 'Am.. F..',
				model: 'Am.. F..',
				isFromChordLineRepeater: true,
			},
			{ type: 'text', string: 'line2-3' },
			{ type: 'emptyLine', string: '' },
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
			{ type: 'text', string: 'line2-1', isFromSectionRepeat: true },
			{
				type: 'chord',
				string: 'Am.. F..',
				model: 'Am.. F..',
				isFromSectionRepeat: true,
				isFromAutoRepeatChords: true,
			},
			{ type: 'text', string: 'line2-2', isFromSectionRepeat: true },
			{
				type: 'chord',
				string: 'Am.. F..',
				model: 'Am.. F..',
				isFromSectionRepeat: true,
				isFromChordLineRepeater: true,
			},
			{ type: 'text', string: 'line2-3', isFromSectionRepeat: true },
			{ type: 'emptyLine', string: '', isFromSectionRepeat: true },
		];

		const songLines = songLinesFactory();
		input.split('\n').forEach(songLines.addLine);

		expect(songLines.asArray()).toEqual(expected);
	});
});
