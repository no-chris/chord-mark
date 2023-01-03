import lineTpl from './tpl/line.js';

/**
 * @param {string} line
 * @param {Boolean} isFromAutoRepeatChords
 * @param {Boolean} isFromChordLineRepeater
 * @param {Boolean} isFromSectionCopy
 * @param {Boolean} isFromSectionMultiply
 * @param {Boolean} shouldOpenSection
 * @param {Array} sectionClasses
 * @param {Boolean} shouldCloseSection
 * @param {Boolean} closesFinalSection
 * @returns {String} rendered html
 */
export default function render(
	line,
	{
		isFromAutoRepeatChords = false,
		isFromChordLineRepeater = false,
		isFromSectionCopy = false,
		isFromSectionMultiply = false,
		shouldOpenSection = false,
		sectionClasses = [],
		shouldCloseSection = false,
		closesFinalSection = false,
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
		shouldOpenSection: shouldOpenSection,
		wrapperClasses: sectionClasses.join(' '),
		shouldCloseSection: shouldCloseSection,
		closesFinalSection: closesFinalSection,
	});
}
