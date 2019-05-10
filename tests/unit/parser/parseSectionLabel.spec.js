import parseSectionLabel from '../../../src/parser/parseSectionLabel';

describe('parseSectionLabel', () => {
	test('Module', () => {
		expect(parseSectionLabel).toBeInstanceOf(Function);
	});
});

describe.each([

	['#A', 'A', 0],
	['#B', 'B', 0],
	['#C', 'C', 0],
	['#D', 'D', 0],
	['#d', 'd', 0],
	['#i', 'i', 0],
	['#v', 'v', 0],
	['#p', 'p', 0],
	['#c', 'c', 0],
	['#b', 'b', 0],
	['#s', 's', 0],
	['#o', 'o', 0],
	['#a', 'a', 0],
	['#other', 'other', 0],
	['#whatever', 'whatever', 0],

	['#v x2', 'v', 2],
	['#c x3', 'c', 3],
	['#i x9', 'i', 9],

])('Section identifier %s => %s', (string, label, repeatTimes) => {
	test('Correctly gets identifier', () => {
		expect(parseSectionLabel(string)).toEqual({
			string,
			label,
			repeatTimes,
		});
	});
});


describe.each([

	['#'],
	['#'],
	['#a x'],
	['#a x33'],

])('Invalid section identifier of %s', (string) => {
	test('Throws TypeError', () => {
		const throwingFn = () => parseSectionLabel(string);
		expect(throwingFn).toThrow(TypeError);
	});
});
