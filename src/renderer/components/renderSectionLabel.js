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
 * @returns {String} rendered html
 */
export default function renderSectionLabel(sectionLabelLine, {
	expandSectionRepeats = false,
} = {}) {
	const { model, index } = sectionLabelLine;
	const labelRaw = labelsMapping[model.label]
		? labelsMapping[model.label]
		: model.label;

	let rendered = labelRaw[0].toUpperCase() + labelRaw.substring(1) + ' ' + index;

	if (!expandSectionRepeats && model.repeatTimes) {
		rendered += ' x' + model.repeatTimes;
	}

	return sectionLabelTpl({ sectionLabel: rendered });
}
