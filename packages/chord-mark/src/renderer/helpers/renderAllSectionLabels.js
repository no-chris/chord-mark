import lineTypes from '../../parser/lineTypes';

// reminder: update converters whenever a new shortcut is added here!
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

export default function renderAllSectionsLabels(
	allLines,
	{ expandSectionMultiply }
) {
	const sectionsStats = getSectionsStats(allLines);

	allLines.forEach((/** SongSectionLabelLine */ line) => {
		if (line.type === lineTypes.SECTION_LABEL) {
			const { model: lineModel, index, indexWithoutMultiply } = line;
			const labelRaw = labelsMapping[lineModel.label]
				? labelsMapping[lineModel.label]
				: lineModel.label;

			let rendered = labelRaw[0].toUpperCase() + labelRaw.substring(1);
			let multiplier;

			if (sectionsStats[lineModel.label] > 1) {
				rendered += ' ';
				rendered += expandSectionMultiply
					? index
					: indexWithoutMultiply;
			}

			if (!expandSectionMultiply && lineModel.multiplyTimes) {
				multiplier = 'x' + lineModel.multiplyTimes;
			}

			line.model.rendered = {
				label: rendered,
				multiplier,
			};
		}
	});
	return allLines;
}

/**
 * Returns the number of usage of each section label
 *
 * @param {SongSectionLabelLine[]} allLines
 * @returns {Object} key = label, value = number of usage
 */
function getSectionsStats(allLines) {
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
