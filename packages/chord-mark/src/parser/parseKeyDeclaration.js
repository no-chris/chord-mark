import clearSpaces from './helper/clearSpaces';
import isKeyDeclaration, {
	keyDeclarationRegexp,
} from './matchers/isKeyDeclaration';
import { chordParserFactory, chordRendererFactory } from 'chord-symbol';

/**
 * @typedef {Object} KeyDeclaration
 * @type {Object}
 * @property {String} string
 * @property {ChordDef} chordModel
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
	const parseChord = chordParserFactory();
	const renderChord = chordRendererFactory();
	const chordModel = parseChord(found[1]);

	return {
		string: renderChord(chordModel),
		chordModel,
	};
}
