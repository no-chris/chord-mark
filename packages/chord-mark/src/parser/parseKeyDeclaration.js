import clearSpaces from './helper/clearSpaces';
import isKeyDeclaration, {
	keyDeclarationRegexp,
} from './matchers/isKeyDeclaration';
import { chordParserFactory, chordRendererFactory } from 'chord-symbol';
import { getKeyAccidental } from './helper/keyHelpers';

/**
 * @typedef {Object} KeyDeclaration
 * @type {Object}
 * @property {String} string
 * @property {ChordDef} chordModel
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

	const parseChord = chordParserFactory();
	const renderChord = chordRendererFactory({ useShortNamings: true });

	const found = clearSpaces(string).match(keyDeclarationRegexp);
	const chordModel = parseChord(found[1]);
	const keyString = renderChord(chordModel);

	return {
		string: keyString,
		chordModel,
		accidental: getKeyAccidental(keyString),
	};
}
