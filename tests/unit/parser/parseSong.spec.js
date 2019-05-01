jest.mock('../../../src/parser/getAllChordsInSong');
jest.mock('../../../src/parser/parseChordLine');

import parseSong from '../../../src/parser/parseSong';

import getAllChordsInSong from '../../../src/parser/getAllChordsInSong';
import parseChordLine from '../../../src/parser/parseChordLine';
import parseSectionLabel from '../../../src/parser/parseSectionLabel';
import parseTimeSignature from '../../../src/parser/parseTimeSignature';


describe('parseSong', () => {
	test('Module', () => {
		expect(parseSong).toBeInstanceOf(Function);
	});
});

beforeEach(() => {
	parseChordLine.mockClear();
	getAllChordsInSong.mockClear();
});

describe('ChordLines', () => {
	test('Correctly detect and parses chord lines', () => {
		getAllChordsInSong.mockReturnValue([]);
		parseChordLine.mockImplementation(chordLine => chordLine);

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

		const allLines = [
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'When I find myself in times of trouble'},
			{ type: 'chord', string: 'Am.. F..', model: 'Am.. F..' },
			{ type: 'text', string: 'Mother mary comes to me'},
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'Speaking words of wisdom'},
			{ type: 'chord', string: 'F. Em. Dm. C.', model: 'F. Em. Dm. C.' },
			{ type: 'text', string: 'Let it be'},
			{ type: 'text', string: ''},
			{ type: 'chord', string: 'Am.. G..', model: 'Am.. G..' },
			{ type: 'text', string: 'Let it be, let it be'},
			{ type: 'chord', string: 'C.. F..', model: 'C.. F..' },
			{ type: 'text', string: 'Let it be, let it be'},
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'Whispers words of wisdom'},
			{ type: 'chord', string: 'F. Em. Dm. C.', model: 'F. Em. Dm. C.' },
			{ type: 'text', string: 'Let it be'},
		];

		const expected = {
			allLines,
			allChords: []
		};

		const parsed = parseSong(input);
		expect(parsed).toEqual(expected);
	});

	test('Set chordLine as text if parsing fails', () => {
		getAllChordsInSong.mockReturnValue([]);
		parseChordLine.mockImplementation(chordLine => { throw new Error(chordLine); });

		const input = 'C. D.. E..';

		const expected = {
			allLines: [
				{ type: 'text',	string: input }
			],
			allChords: []
		};

		const parsed = parseSong(input);
		expect(parsed).toEqual(expected);
	});

	test('Remove any html tag', () => {
		getAllChordsInSong.mockReturnValue([]);
		parseChordLine.mockImplementation(chordLine => { throw new Error(chordLine); });

		const input =
			'<p>this is a text line</p>';

		const expected = {
			allLines: [
				{ type: 'text',	string: 'this is a text line' }
			],
			allChords: []
		};

		const parsed = parseSong(input);
		expect(parsed).toEqual(expected);
	});
});


describe('timeSignature', () => {
	test('Correctly parse time signature', () => {
		const ts3_4 = parseTimeSignature('3/4');
		const ts4_4 = parseTimeSignature('4/4');
		const ts6_8 = parseTimeSignature('6/8');

		const input = [
			'6/8',
			'4/4',
			'3/4',
		];

		const expected = {
			allLines: [
				{ type: 'time-signature', string: '6/8', model: ts6_8 },
				{ type: 'time-signature', string: '4/4', model: ts4_4 },
				{ type: 'time-signature', string: '3/4', model: ts3_4 },
			],
			allChords: []
		};

		const parsed = parseSong(input);
		expect(parsed).toEqual(expected);
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
			'Never cared for what they know'
		];

		parseSong(input);

		expect(parseChordLine.mock.calls.length).toBe(3);
		expect(parseChordLine.mock.calls[0][0]).toEqual('Em D. C.');
		expect(parseChordLine.mock.calls[0][1]).toEqual({ timeSignature: ts6_8 });
		expect(parseChordLine.mock.calls[1][0]).toEqual('C.. G..');
		expect(parseChordLine.mock.calls[1][1]).toEqual({ timeSignature: ts4_4 });
		expect(parseChordLine.mock.calls[2][0]).toEqual('D D C A');
		expect(parseChordLine.mock.calls[2][1]).toEqual({ timeSignature: ts3_4 });
	});
});


describe('sectionId', () => {
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
			'#o',
		];

		const sectionsParsed = input.map(parseSectionLabel);

		const expected = {
			allLines: [
				{ type: 'sectionId', string: '#i', model: sectionsParsed[0], index: 1, id: 'i1' },
				{ type: 'sectionId', string: '#v', model: sectionsParsed[1], index: 1, id: 'v1' },
				{ type: 'sectionId', string: '#v', model: sectionsParsed[2], index: 2, id: 'v2' },
				{ type: 'sectionId', string: '#c', model: sectionsParsed[3], index: 1, id: 'c1' },
				{ type: 'sectionId', string: '#v', model: sectionsParsed[4], index: 3, id: 'v3' },
				{ type: 'sectionId', string: '#c', model: sectionsParsed[5], index: 2, id: 'c2' },
				{ type: 'sectionId', string: '#v', model: sectionsParsed[6], index: 4, id: 'v4' },
				{ type: 'sectionId', string: '#c x2', model: sectionsParsed[7], index: 3, id: 'c3' },
				{ type: 'sectionId', string: '#o', model: sectionsParsed[8], index: 1, id: 'o1' },
			],
			allChords: []
		};

		const parsed = parseSong(input);
		expect(parsed).toEqual(expected);
	});

	test.skip('automatically apply chords of previously defined identical section', () => {
		getAllChordsInSong.mockReturnValue([]);
		parseChordLine.mockImplementation(chordLine => chordLine);

		const input = `#v
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

		const allLines = [
			{ type: 'sectionId', string: '#v', index: 1, model: parseSectionLabel('#v') },
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'When I find myself in times of trouble'},
			{ type: 'chord', string: 'Am.. F..', model: 'Am.. F..' },
			{ type: 'text', string: 'Mother mary comes to me'},
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'Speaking words of wisdom'},
			{ type: 'chord', string: 'F. Em. Dm. C.', model: 'F. Em. Dm. C.' },
			{ type: 'text', string: 'Let it be'},
			{ type: 'text', string: ''},
			{ type: 'sectionId', string: '#v', index: 2, model: parseSectionLabel('#v') },
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'And in my hour of darkness'},
			{ type: 'chord', string: 'Am.. F..', model: 'Am.. F..' },
			{ type: 'text', string: 'she is standing right in front of me'},
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'Speaking words of wisdom'},
			{ type: 'chord', string: 'F. Em. Dm. C.', model: 'F. Em. Dm. C.' },
			{ type: 'text', string: 'Let it be'},
			{ type: 'text', string: ''},
			{ type: 'sectionId', string: '#c', index: 1, model: parseSectionLabel('#c') },
			{ type: 'chord', string: 'Am.. G..', model: 'Am.. G..' },
			{ type: 'text', string: 'Let it be, let it be'},
			{ type: 'chord', string: 'C.. F..', model: 'C.. F..' },
			{ type: 'text', string: 'Let it be, let it be'},
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'Whispers words of wisdom'},
			{ type: 'chord', string: 'F. Em. Dm. C.', model: 'F. Em. Dm. C.' },
			{ type: 'text', string: 'Let it be'},
			{ type: 'text', string: ''},
			{ type: 'sectionId', string: '#v', index: 3, model: parseSectionLabel('#v') },
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'And in my hour of darkness'},
			{ type: 'chord', string: 'Am.. F..', model: 'Am.. F..' },
			{ type: 'text', string: 'she is standing right in front of me'},
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'Speaking words of wisdom'},
			{ type: 'chord', string: 'F. Em. Dm. C.', model: 'F. Em. Dm. C.' },
			{ type: 'text', string: 'Let it be'},
			{ type: 'text', string: ''},
			{ type: 'sectionId', string: '#c', index: 1, model: parseSectionLabel('#c') },
			{ type: 'chord', string: 'Am.. G..', model: 'Am.. G..' },
			{ type: 'text', string: 'Let it be, let it be'},
			{ type: 'chord', string: 'C.. F..', model: 'C.. F..' },
			{ type: 'text', string: 'Let it be, let it be'},
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'Whispers words of wisdom'},
			{ type: 'chord', string: 'F. Em. Dm. C.', model: 'F. Em. Dm. C.' },
			{ type: 'text', string: 'Let it be'},
			{ type: 'sectionId', string: '#v', index: 3, model: parseSectionLabel('#v') },
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'And when the broken hearted people'},
			{ type: 'chord', string: 'Am.. F..', model: 'Am.. F..' },
			{ type: 'text', string: 'Living in the world agree'},
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'There will be an answer'},
			{ type: 'chord', string: 'F. Em. Dm. C.', model: 'F. Em. Dm. C.' },
			{ type: 'text', string: 'Let it be'},
			{ type: 'text', string: ''},
			{ type: 'sectionId', string: '#c', index: 2, model: parseSectionLabel('#c') },
			{ type: 'chord', string: 'Am.. G..', model: 'Am.. G..' },
			{ type: 'text', string: 'Let it be, let it be'},
			{ type: 'chord', string: 'C.. F..', model: 'C.. F..' },
			{ type: 'text', string: 'Let it be, let it be'},
			{ type: 'chord', string: 'C.. G..', model: 'C.. G..' },
			{ type: 'text', string: 'Whispers words of wisdom'},
			{ type: 'chord', string: 'F. Em. Dm. C.', model: 'F. Em. Dm. C.' },
			{ type: 'text', string: 'Let it be'},
		];

		const expected = {
			allLines,
			allChords: []
		};

		const parsed = parseSong(input);
		expect(parsed).toEqual(expected);
	});
});
