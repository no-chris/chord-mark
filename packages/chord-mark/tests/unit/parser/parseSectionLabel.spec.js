import parseSectionLabel from '../../../src/parser/parseSectionLabel';

describe('parseSectionLabel', () => {
	test('Module', () => {
		expect(parseSectionLabel).toBeInstanceOf(Function);
	});
});

describe.each([
	['#A', 'A', 0, 1],
	['#B', 'B', 0, 1],
	['#C', 'C', 0, 1],
	['#D', 'D', 0, 1],
	['#d', 'd', 0, 1],
	['#i', 'i', 0, 1],
	['#v', 'v', 0, 1],
	['#p', 'p', 0, 1],
	['#c', 'c', 0, 1],
	['#b', 'b', 0, 1],
	['#s', 's', 0, 1],
	['#o', 'o', 0, 1],
	['#a', 'a', 0, 1],
	['#other', 'other', 0, 1],
	['#whatever', 'whatever', 0, 1],

	['#v x2', 'v', 2, 1],
	['#c x3', 'c', 3, 1],
	['#i x9', 'i', 9, 1],
	['#i x10', 'i', 10, 1],
	['#i x33', 'i', 33, 1],

	['#c1', 'c', 0, 1],
	['#c2', 'c', 0, 2],
	['#c2 x3', 'c', 3, 2],
])('Section identifier %s => %s', (string, label, multiplyTimes, copyIndex) => {
	test('Correctly gets identifier', () => {
		expect(parseSectionLabel(string)).toEqual({
			string,
			label,
			multiplyTimes,
			copyIndex,
		});
	});
});

describe.each([['#'], ['#'], ['#a x'], ['#a x333']])(
	'Invalid section identifier of %s',
	(string) => {
		test('Throws TypeError', () => {
			const throwingFn = () => parseSectionLabel(string);
			expect(throwingFn).toThrow(TypeError);
		});
	}
);
