/**
 * Convert a proseMirror state to plain text
 */
export default function stateToText(state) {
	const json = state.toJSON();

	return json.doc.content
		.map(paragraph => {
			if (!paragraph.content) {
				return '';
			}
			return paragraph.content.reduce((acc, current) => {
				acc += current.text;
				return acc;
			}, '');
		})
		.join('\n');
}
