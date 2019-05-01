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
	['#i', 'intro', 0],
	['#v', 'verse', 0],
	['#p', 'pre-chorus', 0],
	['#c', 'chorus', 0],
	['#b', 'bridge', 0],
	['#s', 'solo', 0],
	['#o', 'outro', 0],
	['#a', 'adlib', 0],
	['#other', 'other', 0],
	['#whatever', 'whatever', 0],

	['#v x2', 'verse', 2],
	['#i x9', 'intro', 9],

	['#i', 'intro', 0],

	['#c x3', 'chorus', 3],

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
