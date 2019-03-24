import IncorrectBeatCountException from '../../../../src/parser/exceptions/IncorrectBeatCountException';

describe('IncorrectBeatCountException', () => {
	test('Module', () => {
		expect(IncorrectBeatCountException).toBeInstanceOf(Function);
	});
});

describe('Behavior', () => {
	test('Correctly fills exception properties', () => {
		const error = new IncorrectBeatCountException({
			string: 'Cm7...',
			duration: 3,
			currentBeatCount: 6,
			beatCount: 4
		});
		expect(error).toBeInstanceOf(IncorrectBeatCountException);
		expect(error.string).toEqual('Cm7...');
		expect(error.duration).toEqual(3);
		expect(error.currentBeatCount).toEqual(6);
		expect(error.beatCount).toEqual(4);
	});

	test('Throw if given no parameter', () => {
		const throwingFn = () => { throw new IncorrectBeatCountException(); };
		expect(throwingFn).toThrow(TypeError);
		expect(throwingFn).toThrow('IncorrectBeatCountException cannot be created without chord string, received: undefined');
	});
});

describe.each([
	['no string', 'string', 'IncorrectBeatCountException cannot be created without chord string, received: undefined'],
	['no duration', 'duration', 'IncorrectBeatCountException cannot be created without chord duration, received: undefined'],
	['no currentBeatCount', 'currentBeatCount', 'IncorrectBeatCountException cannot be created without currentBeatCount, received: undefined'],
	['no beatCount', 'beatCount', 'IncorrectBeatCountException cannot be created without beatCount, received: undefined'],
])('Throw TypeError on %s', (title, propertyToRemove, message) => {
	test('Test details', () => {
		const errorParameters = {
			string: 'Cm7...',
			duration: 3,
			currentBeatCount: 6,
			BeatCount: 4
		};
		delete errorParameters[propertyToRemove];

		const throwingFn = () => { throw new IncorrectBeatCountException(errorParameters); };
		expect(throwingFn).toThrow(TypeError);
		expect(throwingFn).toThrow(message);
	});
});
