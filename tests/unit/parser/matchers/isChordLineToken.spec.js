import isChordLineToken from '../../../../src/parser/matchers/isChordLineToken';

describe('isChordLineToken', () => {
	test('Module', () => {
		expect(isChordLineToken).toBeInstanceOf(Function);
	});
});

describe.each([

	[ 'A', 		true],
	[ 'Am7b5', 	true],
	[ 'A+7', 	true],
	[ 'A9',		true],
	[ 'AM7', 	true],
	[ 'Asus4', 	true],

	[ '/', 	true],

	[ undefined,false],
	[ {},	 	false],
	[ '',	 	false],
	[ 'Ah', 	false],
	[ 'H', 		false],
	[ 'G75-', 	false],

])('When given %s', (input, output) => {
	test('Properly recognize as chord', () => {
		expect(isChordLineToken(input)).toEqual(output);
	});
});
