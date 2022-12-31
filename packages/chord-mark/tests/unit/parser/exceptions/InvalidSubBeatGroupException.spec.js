import InvalidSubBeatGroupException from '../../../../src/parser/exceptions/InvalidSubBeatGroupException';

describe('InvalidSubBeatGroupException', () => {
	test('Module', () => {
		expect(InvalidSubBeatGroupException).toBeInstanceOf(Function);
	});
});

describe('Behavior', () => {
	test('Correctly fills exception properties', () => {
		const error = new InvalidSubBeatGroupException({
			chordLine: 'A... {B7 D7',
			symbol: '{',
			position: 5,
		});
		expect(error).toBeInstanceOf(InvalidSubBeatGroupException);
		expect(error.chordLine).toEqual('A... {B7 D7');
		expect(error.symbol).toEqual('{');
		expect(error.position).toEqual(5);
	});

	test('Throw if given no parameter', () => {
		const throwingFn = () => {
			throw new InvalidSubBeatGroupException();
		};
		expect(throwingFn).toThrow(TypeError);
		expect(throwingFn).toThrow(
			'InvalidSubBeatGroupException cannot be created without a chordLine, received: undefined'
		);
	});
});

describe.each([
	['missing opener', '}', 'No sub-beat group to close'],
	['missing closer', '{', 'Unclosed sub-beat group'],
])('Give correct message depending on the symbol', (title, symbol, message) => {
	test('extra symbol is ' + symbol, () => {
		const errorParameters = {
			chordLine: 'A... {B7 D7',
			symbol,
			position: 5,
		};
		const throwingFn = () => {
			throw new InvalidSubBeatGroupException(errorParameters);
		};
		expect(throwingFn).toThrow(InvalidSubBeatGroupException);
		expect(throwingFn).toThrow(message);
	});
});

describe.each([
	[
		'no chordLine',
		'chordLine',
		'InvalidSubBeatGroupException cannot be created without a chordLine, received: undefined',
	],
	[
		'no symbol',
		'symbol',
		'InvalidSubBeatGroupException cannot be created without symbol, received: undefined',
	],
	[
		'no currentBeatCount',
		'position',
		'InvalidSubBeatGroupException cannot be created without symbol position, received: undefined',
	],
])('Throw TypeError on %s', (title, propertyToRemove, message) => {
	test('missing ' + propertyToRemove, () => {
		const errorParameters = {
			chordLine: 'A... {B7 D7',
			symbol: '{',
			position: 5,
		};
		delete errorParameters[propertyToRemove];

		const throwingFn = () => {
			throw new InvalidSubBeatGroupException(errorParameters);
		};
		expect(throwingFn).toThrow(TypeError);
		expect(throwingFn).toThrow(message);
	});
});
