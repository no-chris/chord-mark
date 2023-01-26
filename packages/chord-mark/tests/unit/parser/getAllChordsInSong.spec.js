import getAllChordsInSong from '../../../src/parser/getAllChordsInSong';

import parseChordLine from '../../../src/parser/parseChordLine';
import parseChord from '../../../src/parser/parseChord';

describe('getAllChordsInSong', () => {
	test('Module', () => {
		expect(getAllChordsInSong).toBeInstanceOf(Function);
	});
});

describe('getAllChordsInSong()', () => {
	test('Should correctly identify each chord, skipping the "No Chord" symbol', () => {
		const allLines = [
			{ type: 'chord', model: parseChordLine('C.. G..') },
			{ type: 'chord', model: parseChordLine('Am.. F..') },
			{ type: 'chord', model: parseChordLine('C.. G.. NC') },
			{ type: 'chord', model: parseChordLine('F. Em.. C.') },
			{ type: 'chord', model: parseChordLine('Am.. G..') },
			{ type: 'chord', model: parseChordLine('C.. F..') },
			{ type: 'chord', model: parseChordLine('C.. G.. NC') },
			{ type: 'chord', model: parseChordLine('F. Em. C. Dm.') },
		];

		const expectedAllChords = [
			{
				model: parseChord('C'),
				occurrences: 6,
				duration: 10,
				isFirst: true,
			},
			{ model: parseChord('G'), occurrences: 4, duration: 8 },
			{ model: parseChord('Am'), occurrences: 2, duration: 4 },
			{ model: parseChord('F'), occurrences: 4, duration: 6 },
			{ model: parseChord('Em'), occurrences: 2, duration: 3 },
			{
				model: parseChord('Dm'),
				occurrences: 1,
				duration: 1,
				isLast: true,
			},
		];

		const allChords = getAllChordsInSong(allLines);

		expect(allChords).toEqual(expectedAllChords);
	});

	test('Should correctly set isFirst and isLast on the same chord', () => {
		const allLines = [
			{ type: 'chord', model: parseChordLine('C.. G..') },
			{ type: 'chord', model: parseChordLine('F. Em.. C.') },
		];

		const expectedAllChords = [
			{
				model: parseChord('C'),
				occurrences: 2,
				duration: 3,
				isFirst: true,
				isLast: true,
			},
			{ model: parseChord('G'), occurrences: 1, duration: 2 },
			{ model: parseChord('F'), occurrences: 1, duration: 1 },
			{ model: parseChord('Em'), occurrences: 1, duration: 2 },
		];

		const allChords = getAllChordsInSong(allLines);

		expect(allChords).toEqual(expectedAllChords);
	});

	test('Should correctly set isLast on the first occurrence of a chord (1 chord)', () => {
		const allLines = [{ type: 'chord', model: parseChordLine('C') }];

		const expectedAllChords = [
			{
				model: parseChord('C'),
				occurrences: 1,
				duration: 4,
				isFirst: true,
				isLast: true,
			},
		];

		const allChords = getAllChordsInSong(allLines);

		expect(allChords).toEqual(expectedAllChords);
	});

	test('Should correctly set isLast on the first occurrence of a chord (multiple chords)', () => {
		const allLines = [{ type: 'chord', model: parseChordLine('C.. G..') }];

		const expectedAllChords = [
			{
				model: parseChord('C'),
				occurrences: 1,
				duration: 2,
				isFirst: true,
			},
			{
				model: parseChord('G'),
				occurrences: 1,
				duration: 2,
				isLast: true,
			},
		];

		const allChords = getAllChordsInSong(allLines);

		expect(allChords).toEqual(expectedAllChords);
	});

	test('Should return an empty array if no chords are found', () => {
		const allLines = [];

		const allChords = getAllChordsInSong(allLines);

		expect(allChords).toEqual([]);
	});
});
