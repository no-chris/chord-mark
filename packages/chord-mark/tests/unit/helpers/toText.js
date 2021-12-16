import stripTags from '../../../src/core/dom/stripTags';

const toText = (chordMark) => {
	return chordMark
		.split('</p>')
		.map((line) => stripTags(line))
		.map((line) => (line === '&nbsp;' ? '' : line))
		.slice(0, -1) // the <p> to line conversion adds an extra "\n" that we remove here
		.join('\n');
};
export default toText;
