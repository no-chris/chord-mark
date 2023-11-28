import _escapeRegExp from 'lodash/escapeRegExp';
import syntax from '../syntax';
import clearSpaces from '../helper/clearSpaces';

export const sectionLabelRegexp = new RegExp(
	'^' +
		_escapeRegExp(syntax.sectionLabel) +
		'([a-zA-Z]+)([1-9])?( x[1-9][0-9]?)?$'
);

export default function isSectionLabel(string) {
	const found = clearSpaces(string).match(sectionLabelRegexp);
	return found !== null;
}
