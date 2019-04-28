import textLineTpl from './tpl/textLine.hbs';
import emptyLineTpl from './tpl/emptyLine.hbs';

/**
 * @param {String} textLine
 * @returns {String} rendered html
 */
export default function render(textLine) {
	return (textLine === '')
		? emptyLineTpl()
		: textLineTpl({ textLine });
}
