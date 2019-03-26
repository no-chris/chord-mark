import Emitter from 'tiny-emitter';

export default function addEventEmitter(object) {
	const eventEmitter = {
		_emitter: new Emitter(),

		on(eventName, fn) {
			this._emitter.on(eventName, fn);
		},

		once(eventName, fn) {
			this._emitter.once(eventName, fn);
		},

		off(eventName, fn) {
			this._emitter.off(eventName, fn);
		},

		emit(eventName, ...args) {
			this._emitter.emit(eventName, ...args);
		}
	};

	return Object.assign(object, eventEmitter);
}
