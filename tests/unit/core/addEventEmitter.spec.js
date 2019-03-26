import addEventEmitter from '../../../src/core/addEventEmitter';

describe('addEventEmitter', () => {
	test('Module', () => {
		expect(addEventEmitter).toBeInstanceOf(Function);
	});
});

describe.each([
	'on',
	'once',
	'off',
	'emit'
])('API: .%s()', (method) => {
	test('Method exists', () => {
		const withEmitter = addEventEmitter({});
		expect(withEmitter[method]).toBeInstanceOf(Function);
	});
});

describe('.on()', () => {
	test('Should trigger listener once', () => {
		const withEmitter = addEventEmitter({});
		const listener = jest.fn();

		withEmitter.on('test', listener);
		withEmitter.emit('test');

		expect(listener).toHaveBeenCalledTimes(1);
	});

	test('Should trigger listener multiple times', () => {
		const withEmitter = addEventEmitter({});
		const listener = jest.fn();

		withEmitter.on('test', listener);
		withEmitter.emit('test');
		withEmitter.emit('test');
		withEmitter.emit('test');

		expect(listener).toHaveBeenCalledTimes(3);
	});

	test('Should trigger listener with event parameters', () => {
		const withEmitter = addEventEmitter({});
		const listener = jest.fn();

		const params = [
			{ test: 'test' },
			['4', '5'],
			'string',
			69
		];

		withEmitter.on('test', listener);
		withEmitter.emit('test', params[0], params[1], params[2], params[3]);

		expect(listener).toHaveBeenCalledTimes(1);
		expect(listener).toHaveBeenLastCalledWith(params[0], params[1], params[2], params[3]);
	});
});

describe('.once()', () => {
	test('Should trigger listener once', () => {
		const withEmitter = addEventEmitter({});
		const listener = jest.fn();

		withEmitter.once('test', listener);
		withEmitter.emit('test');
		withEmitter.emit('test');
		withEmitter.emit('test');

		expect(listener).toHaveBeenCalledTimes(1);
	});
});

describe('.off()', () => {
	test('Should remove all listeners at once', () => {
		const withEmitter = addEventEmitter({});
		const listener1 = jest.fn();
		const listener2 = jest.fn();

		withEmitter.on('test', listener1);
		withEmitter.on('test', listener2);
		withEmitter.emit('test');

		withEmitter.off('test');
		withEmitter.emit('test');

		expect(listener1).toHaveBeenCalledTimes(1);
		expect(listener2).toHaveBeenCalledTimes(1);
	});

	test('Should remove specific listener', () => {
		const withEmitter = addEventEmitter({});
		const listener1 = jest.fn();
		const listener2 = jest.fn();

		withEmitter.on('test', listener1);
		withEmitter.on('test', listener2);
		withEmitter.emit('test');

		withEmitter.off('test', listener1);
		withEmitter.emit('test');

		expect(listener1).toHaveBeenCalledTimes(1);
		expect(listener2).toHaveBeenCalledTimes(2);
	});
});
