import isChordLine from '../../../../src/parser/matchers/isChordLine';

describe('isChordLine', () => {
	test('Module', () => {
		expect(isChordLine).toBeInstanceOf(Function);
	});
});

describe.each([
	['A', true],
	['A B', true],
	['A   B', true],
	['  A   B  ', true],
	['  A.  C..  ', true],
	['Am7 CM7 F+ C/G', true],
	['A.	C..', true], // with 1 tab
	['A		C', true], // with 2 tabs
	['A	 	C', true], // with tab + space + tav
	['A %', true],
	['A %%%', true],
	['A.. B.. %', true],
	['A.. B.. %%%', true],
	['C(add #9)', true], // remove space in symbol
	['C(add #9) A(add b9)', true], // remove space in symbol
	['C(add #9)... A(add b9).', true], // remove space in symbol

	[undefined, false],
	['', false],
	['AB ', false],
	['A X ', false],
	['A C/R ', false],
	['  .A  ..C  ', false],
	['  .A  C.%F  ', false],
	['A | B', false],
	['%', false],
	['% A', false],
	['%..', false],
	['A B %.', false],
	['5/4\n', false],
])('Test Chord line %s', (line, output) => {
	test('Correctly detect chord line', () => {
		expect(isChordLine(line)).toEqual(output);
	});
});
