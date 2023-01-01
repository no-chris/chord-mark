import lineTpl from './tpl/line.js';

/**
 * @param {string} line
 * @param {Boolean} isFromAutoRepeatChords
 * @param {Boolean} isFromChordLineRepeater
 * @param {Boolean} isFromSectionCopy
 * @param {Boolean} isFromSectionMultiply
 * @param {Boolean} isNewSection
 * @param {Array} sectionClasses
 * @returns {String} rendered html
 */
export default function render(
	line,
	{
		isFromAutoRepeatChords = false,
		isFromChordLineRepeater = false,
		isFromSectionCopy = false,
		isFromSectionMultiply = false,
		isNewSection = false,
		sectionClasses = [],
	} = {}
) {
	const lineClasses = ['cmLine'];
	if (isFromAutoRepeatChords) {
		lineClasses.push('cmLine--isFromAutoRepeatChords');
	}
	if (isFromChordLineRepeater) {
		lineClasses.push('cmLine--isFromChordLineRepeater');
	}
	if (isFromSectionCopy) {
		lineClasses.push('cmLine--isFromSectionCopy');
	}
	if (isFromSectionMultiply) {
		lineClasses.push('cmLine--isFromSectionMultiply');
	}
	
	return lineTpl({
		line,
		lineClasses: lineClasses.join(' '),
		isNewSection: isNewSection,
		wrapperClasses: sectionClasses.join(' '),
	});
}
