import sectionLabelTpl from './tpl/sectionLabel.hbs';

const labelsMapping = {
	a: 'adlib',
	b: 'bridge',
	c: 'chorus',
	i: 'intro',
	o: 'outro',
	p: 'pre-chorus',
	s: 'solo',
	u: 'interlude',
	v: 'verse',
};


/**
 * @param {SectionLabel} sectionLabel
 * @param {Number} index
 * @param {Boolean} expandSectionRepeats
 * @returns {String} rendered html
 */
export default function renderSectionLabel(sectionLabel, index, {
	expandSectionRepeats = false,
} = {}) {
	const labelRaw = labelsMapping[sectionLabel.label]
		? labelsMapping[sectionLabel.label]
		: sectionLabel.label;

	let rendered = labelRaw[0].toUpperCase() + labelRaw.substring(1) + ' ' + index;

	if (!expandSectionRepeats && sectionLabel.repeatTimes) {
		rendered += ' x' + sectionLabel.repeatTimes;
	}

	return sectionLabelTpl({ sectionLabel: rendered });
}
