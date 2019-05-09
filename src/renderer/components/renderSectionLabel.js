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
 * @param {Boolean} expandSectionRepeats
 * @param {Object} sectionsStats - key = section label, value = section count in song
 * @returns {String} rendered html
 */
export default function renderSectionLabel(sectionLabelLine, {
	expandSectionRepeats = true,
	sectionsStats = {},
} = {}) {
	const { model, index, indexWithoutRepeats } = sectionLabelLine;
	const labelRaw = labelsMapping[model.label]
		? labelsMapping[model.label]
		: model.label;


	let rendered = labelRaw[0].toUpperCase() + labelRaw.substring(1);

	if (sectionsStats[model.label] > 1) {
		rendered += ' ';
		rendered += (expandSectionRepeats) ? index : indexWithoutRepeats;
	}

	if (!expandSectionRepeats && model.repeatTimes) {
		rendered += ' x' + model.repeatTimes;
	}

	return sectionLabelTpl({ sectionLabel: rendered });
}
