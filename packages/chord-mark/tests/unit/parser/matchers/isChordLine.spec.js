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

	// sub-beats durations
	['F. [C/E Dm7] C..', true],
	['[C/E Dm7] F. C..', true],
	['F. [C/E A(add b9)] C..', true],
	['[C/E A(add b9) Dm7] F. C..', true],
	['[A(add b9) C/E Dm7] F. C..', true],
	['[A] F. C..', true], // will be rejected later
	// unmatched openers/closers will be rejected at a later stage
	['F C [A [B', true],
	['F C A B]', true],
	['F [C A] [B', true],
	['F [C A(add b9)] B]', true],

	// time signature in chord line
	['2/4 A', true],
	['A 2/4', true],
	['A B 2/4 C', true],
	['A B C 2/4', true],
	['A B C 2/4 3/4', true],
	['A B C 2/4 3/4 B', true],
	['A B C 2/4 C 3/4 B', true],
	['A % 2/4', true],
	['A 2/4 %', true], // duh! This is rejected at parsing time

	[undefined, false],
	['', false],
	['AB ', false],
	['A X ', false],
	['A C/R ', false],
	['A . ', false],
	['A. C ...', false],
	['  .A  ..C  ', false],
	['  .A  C.%F  ', false],
	['A | B', false],
	['%', false],
	['% A', false],
	['%..', false],
	['A B %.', false],
	['5/4\n', false],
	['4/4', false],
	['3/4', false],
	['A B[', false],
	['A ]B', false],
	['A [ B', false],
	['A ] B', false],
])('Test Chord line %s', (line, output) => {
	test('Correctly detect chord line', () => {
		expect(isChordLine(line)).toEqual(output);
	});
});
