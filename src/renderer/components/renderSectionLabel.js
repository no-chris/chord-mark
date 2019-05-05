import sectionLabelTpl from './tpl/sectionLabel.hbs';

const labelsMapping = {
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
 * @param {SectionLabel} sectionLabel
 * @param {Number} index
 * @returns {String} rendered html
 */
export default function renderChordSymbol (sectionLabel, index) {
	const labelRaw = labelsMapping[sectionLabel.label]
		? labelsMapping[sectionLabel.label]
		: sectionLabel.label;

	const rendered = labelRaw[0].toUpperCase() + labelRaw.substring(1) + ' ' + index;

	return sectionLabelTpl({ sectionLabel: rendered });
}
