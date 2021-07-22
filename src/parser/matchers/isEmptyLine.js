import clearSpaces from '../helper/clearSpaces';

export default function isEmptyLine(string) {
	return clearSpaces(string) === '';
}
