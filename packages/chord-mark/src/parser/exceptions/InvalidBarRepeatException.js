import _isString from 'lodash/isString';

export default class InvalidBarRepeatException extends Error {
	constructor({ string } = {}) {
		if (!string || !_isString(string)) {
			throw new TypeError(
				'InvalidBarRepeatException cannot be created without chord string, received: ' +
					string
			);
		}

		super();

		this.name = 'InvalidBarRepeatException';
		this.string = string;
	}
}
