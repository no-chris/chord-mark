import lineTpl from './tpl/line.hbs';

/**
 * @param {string} line
 * @param {Boolean} isFromSectionRepeat
 * @param {Boolean} isFromAutoRepeatChords
 * @param {Boolean} isFromChordLineRepeater
 * @returns {String} rendered html
 */
export default function render(
	line,
	{
		isFromSectionRepeat = false,
		isFromAutoRepeatChords = false,
		isFromChordLineRepeater = false,
	} = {}
) {
	const lineClasses = ['cmLine'];
	if (isFromSectionRepeat) {
		lineClasses.push('cmLine--isFromSectionRepeat');
	}
	if (isFromAutoRepeatChords) {
		lineClasses.push('cmLine--isFromAutoRepeatChords');
	}
	if (isFromChordLineRepeater) {
		lineClasses.push('cmLine--isFromChordLineRepeater');
	}

	return lineTpl({
		line,
		lineClasses: lineClasses.join(' '),
	});
}
