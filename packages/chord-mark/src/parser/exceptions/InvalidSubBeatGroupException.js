import _isString from 'lodash/isString';
import _isFinite from 'lodash/isFinite';

export default class InvalidSubBeatGroupException extends Error {
	constructor({ chordLine, symbol, position } = {}) {
		if (!chordLine || !_isString(chordLine)) {
			throw new TypeError(
				'InvalidSubBeatGroupException cannot be created without a chordLine, received: ' +
					chordLine
			);
		}
		if (!symbol || !_isString(symbol)) {
			throw new TypeError(
				'InvalidSubBeatGroupException cannot be created without symbol, received: ' +
					symbol
			);
		}
		if (!_isFinite(position)) {
			throw new TypeError(
				'InvalidSubBeatGroupException cannot be created without symbol position, received: ' +
					position
			);
		}
		super();

		this.name = 'IncorrectBeatCountException';
		this.chordLine = chordLine;
		this.symbol = symbol;
		this.position = position;
	}
}
