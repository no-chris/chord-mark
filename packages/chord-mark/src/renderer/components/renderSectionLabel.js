import sectionLabelTpl from './tpl/sectionLabel.hbs';

/**
 * @param {SongSectionLabelLine} sectionLabelLine
 * @returns {String} rendered html
 */
export default function renderSectionLabel(sectionLabelLine) {
	return sectionLabelTpl(sectionLabelLine.model.rendered);
}
