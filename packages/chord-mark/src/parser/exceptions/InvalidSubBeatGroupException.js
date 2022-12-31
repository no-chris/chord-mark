import _isString from 'lodash/isString';
import _isFinite from 'lodash/isFinite';

import syntax from '../syntax';

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
		const message =
			symbol === syntax.subBeatOpener
				? 'Unclosed sub-beat group'
				: 'No sub-beat group to close';
		super(message);

		this.name = 'IncorrectBeatCountException';
		this.chordLine = chordLine;
		this.symbol = symbol;
		this.position = position;
	}
}
