import InvalidBeatCountException from '../../../../src/parser/exceptions/InvalidBeatCountException';

describe('InvalidBeatCountException', () => {
	test('Module', () => {
		expect(InvalidBeatCountException).toBeInstanceOf(Function);
	});
});

describe('Behavior', () => {
	test('Correctly fills exception properties', () => {
		const error = new InvalidBeatCountException({
			string: 'Cm7...',
			duration: 3,
			currentBeatCount: 6,
			beatCount: 4,
		});
		expect(error).toBeInstanceOf(InvalidBeatCountException);
		expect(error.string).toEqual('Cm7...');
		expect(error.duration).toEqual(3);
		expect(error.currentBeatCount).toEqual(6);
		expect(error.beatCount).toEqual(4);
	});

	test('Throw if given no parameter', () => {
		const throwingFn = () => {
			throw new InvalidBeatCountException();
		};
		expect(throwingFn).toThrow(TypeError);
		expect(throwingFn).toThrow(
			'InvalidBeatCountException cannot be created without chord string, received: undefined'
		);
	});
});

describe.each([
	[
		'no string',
		'string',
		'InvalidBeatCountException cannot be created without chord string, received: undefined',
	],
	[
		'no duration',
		'duration',
		'InvalidBeatCountException cannot be created without chord duration, received: undefined',
	],
	[
		'no currentBeatCount',
		'currentBeatCount',
		'InvalidBeatCountException cannot be created without currentBeatCount, received: undefined',
	],
	[
		'no beatCount',
		'beatCount',
		'InvalidBeatCountException cannot be created without beatCount, received: undefined',
	],
])('Throw TypeError on %s', (title, propertyToRemove, message) => {
	test('Test details', () => {
		const errorParameters = {
			string: 'Cm7...',
			duration: 3,
			currentBeatCount: 6,
			BeatCount: 4,
		};
		delete errorParameters[propertyToRemove];

		const throwingFn = () => {
			throw new InvalidBeatCountException(errorParameters);
		};
		expect(throwingFn).toThrow(TypeError);
		expect(throwingFn).toThrow(message);
	});
});
