import getAllChordsInSong from '../../../src/parser/getAllChordsInSong';
import getAllKeysInSong from '../../../src/parser/getAllKeysInSong';

import parseChordLine from '../../../src/parser/parseChordLine';
import parseKeyDeclaration from '../../../src/parser/parseKeyDeclaration';
import parseLyricLine from '../../../src/parser/parseLyricLine';

describe('getAllKeysInSong', () => {
	test('Module', () => {
		expect(getAllKeysInSong).toBeInstanceOf(Function);
	});
});

describe('getAllKeysInSong()', () => {
	test('Should return the automatically detected key in the `auto` property', () => {
		const allLines = [
			{ type: 'chord', model: parseChordLine('C.. G..') },
			{ type: 'chord', model: parseChordLine('Am.. F..') },
			{ type: 'chord', model: parseChordLine('C.. G..') },
			{ type: 'chord', model: parseChordLine('F. Em.. C.') },
		];
		const allChords = getAllChordsInSong(allLines);
		const allKeys = getAllKeysInSong(allLines, allChords);

		const expectedAllKeys = {
			auto: {
				string: 'C',
				accidental: 'flat',
			},
			explicit: [],
		};

		expect(allKeys).toEqual(expectedAllKeys);
	});

	test('Should return explicitly detected key in the `explicit` property', () => {
		const allLines = [
			{ type: 'keyDeclaration', model: parseKeyDeclaration('key C') },
			{ type: 'chord', model: parseChordLine('C.. G..') },
			{ type: 'chord', model: parseChordLine('Am.. F..') },
			{ type: 'chord', model: parseChordLine('C.. G..') },
			{ type: 'chord', model: parseChordLine('F. Em.. C.') },
			{ type: 'keyDeclaration', model: parseKeyDeclaration('key F#m') },
		];
		const allChords = getAllChordsInSong(allLines);
		const allKeys = getAllKeysInSong(allLines, allChords);

		const expectedAllKeys = {
			auto: undefined, // detection is disabled as soon as an explicit key is declared
			explicit: [
				{
					string: 'C',
					accidental: 'flat',
				},
				{
					string: 'F#m',
					accidental: 'sharp',
				},
			],
		};

		expect(allKeys).toEqual(expectedAllKeys);
	});

	test('Should return empty properties if no key is detected and no chords are present', () => {
		const allLines = [
			{ type: 'lyric', model: parseLyricLine('ya pas de papa') },
		];
		const allChords = getAllChordsInSong(allLines);
		const allKeys = getAllKeysInSong(allLines, allChords);

		expect(allKeys.auto).toBeUndefined();
		expect(allKeys.explicit).toHaveLength(0);
	});
});
