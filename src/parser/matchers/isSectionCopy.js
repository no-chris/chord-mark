import syntax from '../syntax';

const sectionCopyRegexp = new RegExp(
	'^' + syntax.sectionCopy + '[a-zA-Z]+( x[2-9])?$'
);

export default function isSectionCopy(string) {
	const found = string.trim().match(sectionCopyRegexp);
	return found !== null;
}
