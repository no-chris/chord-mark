import isSectionLabel, { sectionLabelRegexp } from './matchers/isSectionLabel';

/**
 * @typedef {Object} SectionLabel
 * @type {Object}
 * @property {String} string - original string
 * @property {String} label - label of the section
 * @property {Number} repeatTimes - number of times the section should be repeated
 * @property {Number} copyIndex - index of the section that should be repeated
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

	const found = string.trim().match(sectionLabelRegexp);

	return {
		string,
		label: found[1],
		copyIndex: found[2] ? Number.parseInt(found[2]) : 1,
		repeatTimes: found[3] ? Number.parseInt(found[3].replace(' x', '')) : 0,
	};
}
