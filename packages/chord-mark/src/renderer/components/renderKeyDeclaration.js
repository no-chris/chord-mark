import keyDeclarationTpl from './tpl/keyDeclaration.js';
import symbols from '../symbols';

/**
 * @param {SongKeyDeclarationLine} keyDeclarationLine
 * @returns {String} rendered html
 */
export default function renderSectionLabel(keyDeclarationLine) {
	return keyDeclarationTpl({
		keyDeclarationPrefix: symbols.keyDeclarationPrefix,
		key: keyDeclarationLine.symbol,
	});
}
