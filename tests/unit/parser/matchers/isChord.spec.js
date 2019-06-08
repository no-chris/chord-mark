import isChord from '../../../../src/parser/matchers/isChord';

describe('isChord', () => {
	test('Module', () => {
		expect(isChord).toBeInstanceOf(Function);
	});
});

describe.each([

	[ 'A', 		true],
	[ 'Am7b5', 	true],
	[ 'A+7', 	true],
	[ 'A9',		true],
	[ 'AM7', 	true],
	[ 'Asus4', 	true],
	[ 'Ah', 	true],
	[ 'H', 		true],
	[ 'G75-', 	true],

	[ undefined,false],
	[ {},	 	false],
	[ '',	 	false],
	[ 'I', 		false],
	[ 'Amm', 	false],

])('When given %s', (input, output) => {
	test('Properly recognize as chord', () => {
		expect(isChord(input)).toEqual(output);
	});
});
