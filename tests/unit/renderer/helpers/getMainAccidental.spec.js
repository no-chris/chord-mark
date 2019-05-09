import getMainAccidental from '../../../../src/renderer/helpers/getMainAccidental';
import parseSong from '../../../../src/parser/parseSong';

describe('getMainAccidental', () => {
	test('Module', () => {
		expect(getMainAccidental).toBeInstanceOf(Function);
	});
});

describe.each([

	['no accidentals', 	'A B C', 'sharp'],

	['all flats', 			'Ab Bb Db Gb', 'flat'],
	['3 flats, 1 sharp',	'Ab Bb Db G#', 'flat'],
	['2 flats, 2 sharps',	'Ab Bb D# G#', 'sharp'],
	['1 flat, 3 sharp',		'Ab F# D# G#', 'sharp'],
	['all sharps',			'A# F# D# G#', 'sharp'],

	['NC symbol does not count', 'A# Eb NC', 'sharp'],
	['number of chord occurrences have priority over number of distinct chords', 'Ab Ab Ab G# C#', 'flat'],

])('Detect accidentals for: %s', (title, input, output) => {
	test(input + ' => ' + output, () => {
		const parsed = parseSong(input);

		expect(getMainAccidental(parsed.allChords)).toEqual(output);
	});
});
