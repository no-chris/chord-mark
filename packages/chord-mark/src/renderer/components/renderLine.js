import lineTpl from './tpl/line.js';

/**
 * @param {string} line
 * @param {Boolean} isFromAutoRepeatChords
 * @param {Boolean} isFromChordLineRepeater
 * @param {Boolean} isFromSectionCopy
 * @param {Boolean} isFromSectionMultiply
 * @param {Boolean} shouldOpenSection
 * @param {Boolean} shouldClosePriorSection
 * @param {Boolean} shouldCloseFinalSection
 * @param {Array} sectionWrapperClasses
 * @returns {String} rendered html
 */
// eslint-disable-next-line complexity
export default function render(
	line,
	{
		isFromAutoRepeatChords = false,
		isFromChordLineRepeater = false,
		isFromSectionCopy = false,
		isFromSectionMultiply = false,
		shouldOpenSection = false,
		shouldClosePriorSection = false,
		shouldCloseFinalSection = false,
		sectionWrapperClasses = [],
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
		shouldOpenSection,
		sectionWrapperClasses: sectionWrapperClasses.join(' '),
		shouldClosePriorSection,
		shouldCloseFinalSection,
	});
}
