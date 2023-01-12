import InvalidBarRepeatException from '../../../../src/parser/exceptions/InvalidBarRepeatException';

describe('InvalidBarRepeatException', () => {
	test('Module', () => {
		expect(InvalidBarRepeatException).toBeInstanceOf(Function);
	});
});

describe('Behavior', () => {
	test('Correctly fills exception properties', () => {
		const error = new InvalidBarRepeatException({
			string: 'Cm7... %',
		});
		expect(error).toBeInstanceOf(InvalidBarRepeatException);
		expect(error.string).toEqual('Cm7... %');
	});

	test('Throw if given no parameter', () => {
		const throwingFn = () => {
			throw new InvalidBarRepeatException();
		};
		expect(throwingFn).toThrow(TypeError);
		expect(throwingFn).toThrow(
			'InvalidBarRepeatException cannot be created without chord string, received: undefined'
		);
	});
});

describe.each([
	[
		'no string',
		'string',
		'InvalidBarRepeatException cannot be created without chord string, received: undefined',
	],
])('Throw TypeError on %s', (title, propertyToRemove, message) => {
	test('Test details', () => {
		const errorParameters = {
			string: 'Cm7... %',
		};
		delete errorParameters[propertyToRemove];

		const throwingFn = () => {
			throw new InvalidBarRepeatException(errorParameters);
		};
		expect(throwingFn).toThrow(TypeError);
		expect(throwingFn).toThrow(message);
	});
});
