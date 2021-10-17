import lineTpl from './tpl/line.hbs';

/**
 * @param {string} line
 * @param {Boolean} isFromSectionRepeat
 * @param {Boolean} isFromAutoRepeatChords
 * @param {Boolean} isFromChordLineRepeater
 * @param {Boolean} isFromSectionCopy
 * @returns {String} rendered html
 */
export default function render(
	line,
	{
		isFromSectionRepeat = false,
		isFromAutoRepeatChords = false,
		isFromChordLineRepeater = false,
		isFromSectionCopy = false,
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
	if (isFromSectionCopy) {
		lineClasses.push('cmLine--isFromSectionCopy');
	}

	return lineTpl({
		line,
		lineClasses: lineClasses.join(' '),
	});
}
