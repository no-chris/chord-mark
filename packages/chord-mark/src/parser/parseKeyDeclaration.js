import clearSpaces from './helper/clearSpaces';
import isKeyDeclaration, {
	keyDeclarationRegexp,
} from './matchers/isKeyDeclaration';
import { chordParserFactory, chordRendererFactory } from 'chord-symbol';

/**
 * @typedef {Object} KeyDeclaration
 * @type {Object}
 * @property {String} key
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
	const parseChord = chordParserFactory({ notationSystems: ['english'] });
	const renderChord = chordRendererFactory();

	return {
		key: renderChord(parseChord(found[1])),
	};
}
