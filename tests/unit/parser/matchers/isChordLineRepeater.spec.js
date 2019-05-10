import isChordLineRepeater from '../../../../src/parser/matchers/isChordLineRepeater';

describe('isChordLineRepeater', () => {
	test('Module', () => {
		expect(isChordLineRepeater).toBeInstanceOf(Function);
	});
});

describe.each([

	['/',  	 	true],
	[' / ',    	true],
	['	/	', 	true],

	['/..',  false],
	['/ /',  false],
	['/1',  false],

])('Chord line repeater string %s', (string, result) => {
	test('Correctly detect chord line repeater', () => {
		expect(isChordLineRepeater(string)).toEqual(result);
	});
});
