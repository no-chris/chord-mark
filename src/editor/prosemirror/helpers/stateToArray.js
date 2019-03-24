/**
 * Convert a prosemirror state to an array of lines, with only text and no formatting
 */
export default function stateToArray(state) {
	const json = state.toJSON();

	return json.doc.content.map(paragraph => {
		if (!paragraph.content) {
			return '';
		}
		return paragraph.content.reduce((acc, current) => {
			acc += current.text;
			return acc;
		}, '');
	});
}