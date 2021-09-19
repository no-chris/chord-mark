import _isFinite from 'lodash/isFinite';

import renderChordSymbol from './renderChordSymbol';
import barContentTpl from './tpl/barContent.hbs';

const space = ' ';

const defaultSpacesWithin = 0;
const defaultSpacesAfter = 2;

/**
 * @param {Bar} bar
 * @returns {String} rendered html
 */
export default function renderBarContent(bar) {
	let spacesWithin = 0;
	let spacesAfter = 0;

	const barContent = bar.allChords.reduce((rendering, chord) => {
		spacesWithin = _isFinite(chord.spacesWithin)
			? chord.spacesWithin
			: defaultSpacesWithin;
		spacesAfter = _isFinite(chord.spacesAfter)
			? chord.spacesAfter
			: defaultSpacesAfter;

		rendering +=
			renderChordSymbol(chord, bar.shouldPrintChordsDuration) +
			space.repeat(spacesWithin) +
			space.repeat(spacesAfter);

		return rendering;
	}, '');

	return barContentTpl({ barContent });
}
