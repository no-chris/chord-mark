import clearSpaces from './helper/clearSpaces';
import isSectionLabel, { sectionLabelRegexp } from './matchers/isSectionLabel';

/**
 * @typedef {Object} SectionLabel
 * @type {Object}
 * @property {String} string - original string
 * @property {String} label - label of the section
 * @property {Number} multiplyTimes - number of times the section should be multiplied
 * @property {Number} copyIndex - index of the section that should be copied
 * Render-time properties
 * @property {Object} [rendered]
 * @property {String} [rendered.label]
 * @property {String} [rendered.multiplier]
 */

/**
 * @param {String} string
 * @returns {SectionLabel}
 */
export default function parseSectionLabel(string) {
	if (!isSectionLabel(string)) {
		throw new TypeError(
			'Expected section identifier string, received: ' + string
		);
	}

	const found = clearSpaces(string).match(sectionLabelRegexp);

	return {
		string,
		label: found[1],
		copyIndex: found[2] ? Number.parseInt(found[2]) : 1,
		multiplyTimes: found[3]
			? Number.parseInt(found[3].replace(' x', ''))
			: 0,
	};
}
