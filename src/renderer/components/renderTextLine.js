import textLineTpl from './tpl/textLine.hbs';

/**
 * @param {LyricLine} textLine
 * @returns {String} rendered html
 */
export default function render(textLine) {
	return textLineTpl({ textLine: textLine.model.lyrics });
}
