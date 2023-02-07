import clearSpaces from './helper/clearSpaces';
import isKeyDeclaration, {
	keyDeclarationRegexp,
} from './matchers/isKeyDeclaration';
import { getKeyAccidental } from './helper/keyHelpers';

/**
 * @typedef {Object} KeyDeclaration
 * @type {Object}
 * @property {String} string
 * @property {('flat'|'sharp')} accidental
 */

/**
 * @param {String} string
 * @returns {KeyDeclaration}
 */
export default function parseKeyDeclaration(string) {
	if (!isKeyDeclaration(string)) {
		throw new TypeError('Expected key declaration, received: ' + string);
	}

	const found = clearSpaces(string).match(keyDeclarationRegexp);
	const keyString = found[1];

	return {
		string: keyString,
		accidental: getKeyAccidental(keyString),
	};
}
