import stripTags from '../helpers/stripTags';
import { lineTypes } from 'chord-mark';

const chordMark2UltimateGuitar = () => {
	return convert2UltimateGuitar.bind(null);
};

const convert2UltimateGuitar = (allLines, allRenderedLines) => {
	return allRenderedLines
		.map((line, i) => {
			const srcLine = allLines[i];
			const renderedLine = stripTags(line);

			if (srcLine.type === lineTypes.SECTION_LABEL) {
				return `[${renderedLine}]`;
			} else if (srcLine.type === lineTypes.CHORD) {
				return getChordLine(srcLine, renderedLine);
			}
			return renderedLine.replace('&nbsp;', '');
		})
		.join('\n');
};

const getChordLine = (srcLine, renderedLine) => {
	const chordSymbolRe = /([^\s.|]+)/g;
	const chordSymbolReplaceWith = '[ch]$1[/ch]';

	return renderedLine.replace(chordSymbolRe, chordSymbolReplaceWith);
};

export default chordMark2UltimateGuitar;
