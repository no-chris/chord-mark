import parseTimeSignature from '../../../src/parser/parseTimeSignature';

describe('parseTimeSignature', () => {
	test('Module', () => {
		expect(parseTimeSignature).toBeInstanceOf(Function);
	});
});

describe.each([

	['2/2',  2, 2, 4],
	['3/2',  3, 2, 6],

	['3/4',  3, 4, 3],
	['4/4',  4, 4, 4],
	['5/4',  5, 4, 5],

	['3/8',  3, 8, 1],
	['6/8',  6, 8, 2],
	['9/8',  9, 8, 3],
	['12/8', 12, 8, 4],

])('Time signature of %s', (string, count, value, beatCount) => {
	test('Correctly gets definition', () => {
		expect(parseTimeSignature(string)).toEqual({ string, count, value, beatCount });
	});
});

describe.each([

	['2/1'],
	['3/1'],
	['5/8'],
	['13/7'],

])('Invalid time signature of %s', (string) => {
	test('Throws TypeError', () => {
		const throwingFn = () => parseTimeSignature(string);
		expect(throwingFn).toThrow(TypeError);
	});
});
