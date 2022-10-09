import sectionLabelTpl from './tpl/sectionLabel.js';

/**
 * @param {SongSectionLabelLine} sectionLabelLine
 * @returns {String} rendered html
 */
export default function renderSectionLabel(sectionLabelLine) {
	return sectionLabelTpl(sectionLabelLine.model.rendered);
}
