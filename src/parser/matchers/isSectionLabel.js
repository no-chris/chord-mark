const sectionLabelRegexp = /^#[a-zA-Z]+( x[2-9])?$/;

export default function isSectionLabel(string) {
	const found = string
		.trim()
		.match(sectionLabelRegexp);
	return (found !== null);
}
