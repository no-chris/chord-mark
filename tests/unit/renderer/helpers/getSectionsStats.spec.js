import getSectionsStats from '../../../../src/renderer/helpers/getSectionsStats';
import parseSong from '../../../../src/parser/parseSong';

describe('getSectionsStats', () => {
	test('Module', () => {
		expect(getSectionsStats).toBeInstanceOf(Function);
	});
});

describe('getSectionsStats()', () => {
	test('Should detect number of usage of each section', () => {
		const input = [
			'#i',
			'#v x2',
			'#c',
			'#v',
			'#c x2',
			'#solo',
			'#c x2',
			'#o'
		];
		const parsed = parseSong(input);
		const expected = {
			i: 1,
			v: 3,
			c: 5,
			solo: 1,
			o: 1,
		};

		expect(getSectionsStats(parsed.allLines)).toEqual(expected);
	});
});
