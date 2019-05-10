export default function clearSpaces(string) {
	return string
		.replace(/\t+/g, ' ')
		.replace(/  +/g, ' ')
		.trim();
}