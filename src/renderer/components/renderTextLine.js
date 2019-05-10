import textLineTpl from './tpl/textLine.hbs';

/**
 * @param {SongTextLine} textLine
 * @returns {String} rendered html
 */
export default function render(textLine) {
	return textLineTpl({ textLine: textLine.string });
}
