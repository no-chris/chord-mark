import parseChordLine from '../../../src/parser/parseChordLine';
import parseChord from '../../../src/parser/parseChord';
import parseSong from '../../../src/parser/parseSong';
import parseTimeSignature from '../../../src/parser/parseTimeSignature';


describe('parseSong', () => {
	test('', () => {
		expect(true).toBe(true);
	});

	test('Accept multiline string as an input', () => {
		const input = `4/4
C.. G..
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
		const expected = {
			allLines: [
				{ type: 'time-signature', string: '4/4', model: parseTimeSignature('4/4') },
				{ type: 'chord', string: 'C.. G..', model: parseChordLine('C.. G..')} ,
				{ type: 'text', string: 'When I find myself in times of trouble' },
				{ type: 'chord', string: 'Am.. F..', model: parseChordLine('Am.. F..') },
				{ type: 'text', string: 'Mother mary comes to me' },
				{ type: 'chord', string: 'C.. G..', model: parseChordLine('C.. G..') },
				{ type: 'text', string: 'Speaking words of wisdom' },
				{ type: 'chord', string: 'F. Em. Dm. C.', model: parseChordLine('F. Em. Dm. C.') },
				{ type: 'text', string: 'Let it be' },
				{ type: 'emptyLine', string: '' },
				{ type: 'chord', string: 'Am.. G..', model: parseChordLine('Am.. G..') },
				{ type: 'text', string: 'Let it be, let it be' },
				{ type: 'chord', string: 'C.. F..', model: parseChordLine('C.. F..') },
				{ type: 'text', string: 'Let it be, let it be' },
				{ type: 'chord', string: 'C.. G..', model: parseChordLine('C.. G..') },
				{ type: 'text', string: 'Whispers words of wisdom' },
				{ type: 'chord', string: 'F. Em. Dm. C.', model: parseChordLine('F. Em. Dm. C.') },
				{ type: 'text', string: 'Let it be' },
			],
			allChords: [
				{ model: parseChord('C'), occurrences: 6 },
				{ model: parseChord('G'), occurrences: 4 },
				{ model: parseChord('Am'), occurrences: 2 },
				{ model: parseChord('F'), occurrences: 4 },
				{ model: parseChord('Em'), occurrences: 2 },
				{ model: parseChord('Dm'), occurrences: 2 },
			]
		};

		expect(parseSong(input)).toEqual(expected);
	});

	test('Also accept array as an input', () => {
		const input = [
			'C.. G..',
			'When I find myself in times of trouble',
			'Am.. F..',
			'Mother mary comes to me'
		];
		const expected = {
			allLines: [
				{ type: 'chord', 	string: 'C.. G..', model: parseChordLine('C.. G..') },
				{ type: 'text', 	string: 'When I find myself in times of trouble' },
				{ type: 'chord', 	string: 'Am.. F..', model: parseChordLine('Am.. F..') },
				{ type: 'text', 	string: 'Mother mary comes to me' },
			],
			allChords: [
				{ model: parseChord('C'), occurrences: 1 },
				{ model: parseChord('G'), occurrences: 1 },
				{ model: parseChord('Am'), occurrences: 1 },
				{ model: parseChord('F'), occurrences: 1 },
			]
		};

		expect(parseSong(input)).toEqual(expected);
	});

});
