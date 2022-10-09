import _isFinite from 'lodash/isFinite';

import renderChordSymbol from './renderChordSymbol';
import barContentTpl from './tpl/barContent.js';

const space = ' ';

const defaultSpacesWithin = 0;
const defaultSpacesAfter = 2;

/**
 * @param {Bar} bar
 * @param {Boolean} isLastBar
 * @param {Boolean} shouldPrintBarSeparators
 * @returns {String} rendered html
 */
export default function renderBarContent(
	bar,
	isLastBar,
	shouldPrintBarSeparators
) {
	let spacesWithin = 0;
	let spacesAfter = 0;

	const barContent = bar.allChords.reduce((rendering, chord, i) => {
		const isLastChordOfBar = !bar.allChords[i + 1];

		spacesWithin = _isFinite(chord.spacesWithin)
			? chord.spacesWithin
			: defaultSpacesWithin;
		spacesAfter = _isFinite(chord.spacesAfter)
			? chord.spacesAfter
			: defaultSpacesAfter;

		rendering += renderChordSymbol(chord, bar.shouldPrintChordsDuration);

		if (shouldPrintChordSpaces()) {
			rendering += space.repeat(spacesWithin) + space.repeat(spacesAfter);
		}

		function shouldPrintChordSpaces() {
			const isLastChordOfLine = isLastChordOfBar && isLastBar;
			return (
				!isLastChordOfLine ||
				(isLastChordOfLine && shouldPrintBarSeparators)
			);
		}

		return rendering;
	}, '');

	return barContentTpl({ barContent });
}
