import _isString from 'lodash/isString';
import _isFinite from 'lodash/isFinite';

export default class IncorrectBeatCountException extends Error {
	constructor({ string, duration, currentBeatCount, beatCount } = {}) {
		if (!string || !_isString(string)) {
			throw new TypeError(
				'IncorrectBeatCountException cannot be created without chord string, received: ' +
					string
			);
		}
		if (!duration || !_isFinite(duration)) {
			throw new TypeError(
				'IncorrectBeatCountException cannot be created without chord duration, received: ' +
					duration
			);
		}
		if (!currentBeatCount || !_isFinite(currentBeatCount)) {
			throw new TypeError(
				'IncorrectBeatCountException cannot be created without currentBeatCount, received: ' +
					currentBeatCount
			);
		}
		if (!beatCount || !_isFinite(beatCount)) {
			throw new TypeError(
				'IncorrectBeatCountException cannot be created without beatCount, received: ' +
					beatCount
			);
		}

		super();

		this.name = 'IncorrectBeatCountException';
		this.string = string;
		this.duration = duration;
		this.currentBeatCount = currentBeatCount;
		this.beatCount = beatCount;
	}
}
