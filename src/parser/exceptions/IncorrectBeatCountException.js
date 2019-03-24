import _ from 'lodash';

export default class IncorrectBeatCountException extends Error {
	constructor(
		{
			string,
			duration,
			currentBeatCount,
			beatCount
		} = {}
	) {
		if (!string || !_.isString(string)) {
			throw new TypeError('IncorrectBeatCountException cannot be created without chord string, received: ' + string);
		}
		if (!duration || !_.isFinite(duration)) {
			throw new TypeError('IncorrectBeatCountException cannot be created without chord duration, received: ' + duration);
		}
		if (!currentBeatCount || !_.isFinite(currentBeatCount)) {
			throw new TypeError('IncorrectBeatCountException cannot be created without currentBeatCount, received: ' + currentBeatCount);
		}
		if (!beatCount || !_.isFinite(beatCount)) {
			throw new TypeError('IncorrectBeatCountException cannot be created without beatCount, received: ' + beatCount);
		}

		super();

		this.name = 'IncorrectBeatCountException';
		this.string = string;
		this.duration = duration;
		this.currentBeatCount = currentBeatCount;
		this.beatCount = beatCount;
	}
}

