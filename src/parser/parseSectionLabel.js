import isSectionLabel from './matchers/isSectionLabel';

const labelsShortcuts = {
	i: 'intro',
	v: 'verse',
	p: 'pre-chorus',
	c: 'chorus',
	b: 'bridge',
	s: 'solo',
	o: 'outro',
	a: 'adlib',
};

/**
 * @typedef {Object} SectionLabel
 * @type {Object}
 * @property {String} string - original string
 * @property {String} label - label of the section
 * @property {Number} repeatTimes - number of times the section should be repeated
 */

/**
 * @param {String} string
 * @returns {SectionLabel}
 */
export default function parseSectionLabel(string) {
	if (!isSectionLabel(string)) {
		throw new TypeError('Expected section identifier string, received: ' + string);
	}

	const [ labelSrc, repeatSrc ] = string.trim().split(' ');

	return {
		string,
		label: labelSrc.substring(1),
		repeatTimes: (repeatSrc) ? Number.parseInt(repeatSrc.substring(1)) : 0
	};
}

