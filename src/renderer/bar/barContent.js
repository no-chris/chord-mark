import _ from 'lodash';

import isRenderer from '../isRenderer';

import barContentTpl from './barContent.hbs';

const space = ' ';

const defaultSpacesWithin = 0;
const defaultSpacesAfter = 2;

export default {
	render(bar, { chordRenderer } = {}) {
		let spacesWithin = 0;
		let spacesAfter = 0;

		if (! isRenderer(chordRenderer)) {
			throw new TypeError('chordRenderer is not a valid renderer');
		}

		const barContent = bar.allChords.reduce((rendering, chord) => {
			spacesWithin = _.isFinite(chord.spacesWithin) ? chord.spacesWithin : defaultSpacesWithin;
			spacesAfter = _.isFinite(chord.spacesAfter) ? chord.spacesAfter : defaultSpacesAfter;

			rendering +=
				chordRenderer.render(chord.symbol) +
				space.repeat(spacesWithin) +
				space.repeat(spacesAfter);

			return rendering;
		}, '');

		return barContentTpl({ barContent });
	}
};
