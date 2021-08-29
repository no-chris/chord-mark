import lineTypes from '../../parser/lineTypes';

/**
 * Returns the number of usage of each section label
 *
 * @param {SongSectionLabelLine[]} allLines
 * @returns {Object} key = label, value = number of usage
 */
export default function getSectionsStats(allLines) {
	const stats = {};

	allLines
		.filter((line) => line.type === lineTypes.SECTION_LABEL)
		.forEach((line) => {
			if (!stats[line.model.label]) {
				stats[line.model.label] = 1;
			} else {
				stats[line.model.label]++;
			}
		});

	return stats;
}
