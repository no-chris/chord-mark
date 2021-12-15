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
 * @param {SongSectionLabelLine} sectionLabelLine
 * @param {Boolean} expandSectionMultiply
 * @param {Object} sectionsStats - key = section label, value = section count in song
 * @returns {String} rendered html
 */
export default function renderSectionLabel(
	sectionLabelLine,
	{ expandSectionMultiply = true, sectionsStats = {} } = {}
) {
	const { model, index, indexWithoutMultiply } = sectionLabelLine;
	const labelRaw = labelsMapping[model.label]
		? labelsMapping[model.label]
		: model.label;

	let rendered = labelRaw[0].toUpperCase() + labelRaw.substring(1);
	let multiplier;

	if (sectionsStats[model.label] > 1) {
		rendered += ' ';
		rendered += expandSectionMultiply ? index : indexWithoutMultiply;
	}

	if (!expandSectionMultiply && model.multiplyTimes) {
		multiplier = 'x' + model.multiplyTimes;
	}

	return sectionLabelTpl({ sectionLabel: rendered, multiplier });
}
