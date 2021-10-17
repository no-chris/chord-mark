import syntax from '../syntax';

export const sectionLabelRegexp = new RegExp(
	'^' + syntax.sectionLabel + '([a-zA-Z]+)([1-9])?( x[2-9])?$'
);

export default function isSectionLabel(string) {
	const found = string.trim().match(sectionLabelRegexp);
	return found !== null;
}
