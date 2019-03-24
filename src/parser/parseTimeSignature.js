import isTimeSignatureString from './isTimeSignatureString';

/**
 * @typedef {Object} TimeSignature
 * @type {Object}
 * @property {String} string - original string
 * @property {Number} count - upper part of time signature
 * @property {Number} value - lower part of time signature
 * @property {Number} beatCount - number of beats per bar
 */

/**
 * @param {String} string
 * @returns {TimeSignature}
 */
export default function parseTimeSignature(string) {
	if (!isTimeSignatureString(string)) {
		throw new TypeError('Expected time signature string, received: ' + string);
	}

	const array = string.split('/');

	const count = Number.parseInt(array[0], 10);
	const value = Number.parseInt(array[1], 10);

	let beatCount = count;

	if (value === 2) {
		beatCount = count * 2;

	} else if (value === 8) {
		beatCount = count / 3;
	}

	return {
		string,
		count,
		value,
		beatCount,
	};
}

