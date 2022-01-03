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
				return getChordLine(renderedLine);
			}
			return renderedLine.replace('&nbsp;', '');
		})
		.join('\n');
};

const getChordLine = (line) => {
	return line
		.replace(/([^\s|]+)/g, (_, chordSymbol) => {
			const withoutParenthesis = chordSymbol.replace(/[()]/g, '');
			return withoutParenthesis.length < chordSymbol.length
				? withoutParenthesis + '  '
				: chordSymbol;
		})
		.replace(/([^\s.|]+)/g, '[ch]$1[/ch]');
};

export default chordMark2UltimateGuitar;
