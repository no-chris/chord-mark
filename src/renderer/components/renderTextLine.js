import textLineTpl from './tpl/textLine.hbs';

/**
 * @param {String} textLine
 * @returns {String} rendered html
 */
export default function render(textLine) {
	return textLineTpl({ textLine });
}
