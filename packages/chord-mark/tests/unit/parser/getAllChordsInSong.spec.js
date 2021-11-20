import getAllChordsInSong from '../../../src/parser/getAllChordsInSong';

import parseChordLine from '../../../src/parser/parseChordLine';
import parseChord from '../../../src/parser/parseChord';

describe('getAllChordsInSong', () => {
	test('Module', () => {
		expect(getAllChordsInSong).toBeInstanceOf(Function);
	});
});

describe('getAllChordsInSong()', () => {
	test('Should correctly identify each chord', () => {
		const allLines = [
			{ type: 'chord', model: parseChordLine('C.. G..') },
			{ type: 'chord', model: parseChordLine('Am.. F..') },
			{ type: 'chord', model: parseChordLine('C.. G..') },
			{ type: 'chord', model: parseChordLine('F. Em. Dm. C.') },
			{ type: 'chord', model: parseChordLine('Am.. G..') },
			{ type: 'chord', model: parseChordLine('C.. F..') },
			{ type: 'chord', model: parseChordLine('C.. G..') },
			{ type: 'chord', model: parseChordLine('F. Em. Dm. C.') },
		];

		const expectedAllChords = [
			{ model: parseChord('C'), occurrences: 6 },
			{ model: parseChord('G'), occurrences: 4 },
			{ model: parseChord('Am'), occurrences: 2 },
			{ model: parseChord('F'), occurrences: 4 },
			{ model: parseChord('Em'), occurrences: 2 },
			{ model: parseChord('Dm'), occurrences: 2 },
		];

		const allChords = getAllChordsInSong(allLines);

		expect(allChords).toEqual(expectedAllChords);
	});
});
