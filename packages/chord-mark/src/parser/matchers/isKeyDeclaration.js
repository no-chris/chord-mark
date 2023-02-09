import _escapeRegExp from 'lodash/escapeRegExp';
import syntax from '../syntax';
import clearSpaces from '../helper/clearSpaces';
import { isKey } from '../helper/keyHelpers';

export const keyDeclarationRegexp = new RegExp(
	'^' + _escapeRegExp(syntax.keyDeclarationPrefix) + '([ABCDEFG].*)$'
);

export default function isKeyDeclaration(string) {
	const found = clearSpaces(string).match(keyDeclarationRegexp);
	if (found === null) return false;

	return isKey(found[1]);
}
