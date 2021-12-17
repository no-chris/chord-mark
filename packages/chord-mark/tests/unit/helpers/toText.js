import stripTags from '../../../src/core/dom/stripTags';

const toText = (chordMark) => {
	const allLines = chordMark.match(/(<p.*?>.*?<\/p>)/gm);

	return allLines
		.map((line) => stripTags(line))
		.map((line) => (line === '&nbsp;' ? '' : line))
		.join('\n');
};
export default toText;
