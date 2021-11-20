import _isString from 'lodash/isString';

export default class InvalidChordRepetitionException extends Error {
	constructor({ string } = {}) {
		if (!string || !_isString(string)) {
			throw new TypeError(
				'InvalidChordRepetitionException cannot be created without chord string, received: ' +
					string
			);
		}

		super();

		this.name = 'InvalidChordRepetitionException';
		this.string = string;
	}
}
