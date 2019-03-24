import _ from 'lodash';

export default class InvalidChordRepetitionException extends Error {
	constructor(
		{
			string,
		} = {}
	) {
		if (!string || !_.isString(string)) {
			throw new TypeError('InvalidChordRepetitionException cannot be created without chord string, received: ' + string);
		}

		super();

		this.name = 'InvalidChordRepetitionException';
		this.string = string;
	}
}

