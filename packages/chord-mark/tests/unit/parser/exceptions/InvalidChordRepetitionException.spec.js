import InvalidChordRepetitionException from '../../../../src/parser/exceptions/InvalidChordRepetitionException';

describe('InvalidChordRepetitionException', () => {
	test('Module', () => {
		expect(InvalidChordRepetitionException).toBeInstanceOf(Function);
	});
});

describe('Behavior', () => {
	test('Correctly fills exception properties', () => {
		const error = new InvalidChordRepetitionException({
			string: 'Cm7...',
		});
		expect(error).toBeInstanceOf(InvalidChordRepetitionException);
		expect(error.string).toEqual('Cm7...');
	});

	test('Throw if given no parameter', () => {
		const throwingFn = () => {
			throw new InvalidChordRepetitionException();
		};
		expect(throwingFn).toThrow(TypeError);
		expect(throwingFn).toThrow(
			'InvalidChordRepetitionException cannot be created without chord string, received: undefined'
		);
	});
});

describe.each([
	[
		'no string',
		'string',
		'InvalidChordRepetitionException cannot be created without chord string, received: undefined',
	],
])('Throw TypeError on %s', (title, propertyToRemove, message) => {
	test('Test details', () => {
		const errorParameters = {
			string: 'Cm7...',
		};
		delete errorParameters[propertyToRemove];

		const throwingFn = () => {
			throw new InvalidChordRepetitionException(errorParameters);
		};
		expect(throwingFn).toThrow(TypeError);
		expect(throwingFn).toThrow(message);
	});
});
