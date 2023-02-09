import _isFinite from 'lodash/isFinite';

import symbols from '../symbols';

import renderChordSymbol from './renderChordSymbol';
import renderTimeSignature from './renderTimeSignature';
import barContentTpl from './tpl/barContent.js';

const space = ' ';

const defaultSpacesWithin = 0;
const defaultSpacesAfter = 2;

/**
 * @param {Bar} bar
 * @param {Boolean} isLastBar
 * @param {Boolean} shouldPrintBarSeparators
 * @param {Boolean} shouldPrintSubBeatDelimiters
 * @param {Boolean} shouldPrintTimeSignature
 * @param {('chord'|'roman')} options.symbolType
 * @returns {String} rendered html
 */
export default function renderBarContent(
	bar,
	isLastBar = false,
	{
		shouldPrintBarSeparators = true,
		shouldPrintSubBeatDelimiters = true,
		shouldPrintTimeSignature = false,
		symbolType = 'chord',
	} = {}
) {
	let spacesWithin = 0;
	let spacesAfter = 0;
	let barContent = '';

	if (shouldPrintTimeSignature) {
		barContent +=
			renderTimeSignature(bar.timeSignature) +
			' '.repeat(symbols.spacesAfterTimeSignature);
	}

	barContent += bar.allChords.reduce((rendering, chord, i) => {
		spacesWithin = _isFinite(chord.spacesWithin)
			? chord.spacesWithin
			: defaultSpacesWithin;
		spacesAfter = _isFinite(chord.spacesAfter)
			? chord.spacesAfter
			: defaultSpacesAfter;

		rendering += renderChordSymbol(chord, {
			shouldPrintChordsDuration: chord.isInSubBeatGroup
				? false
				: bar.shouldPrintChordsDuration,
			shouldPrintSubBeatOpener:
				shouldPrintSubBeatDelimiters && chord.isFirstOfSubBeat,
			shouldPrintSubBeatCloser:
				shouldPrintSubBeatDelimiters && chord.isLastOfSubBeat,
			symbolType,
		});

		if (shouldPrintChordSpaces()) {
			rendering += space.repeat(spacesWithin) + space.repeat(spacesAfter);
		}

		function shouldPrintChordSpaces() {
			const isLastChordOfLine = isLastChordOfBar(bar, i) && isLastBar;
			return (
				!isLastChordOfLine ||
				(isLastChordOfLine && shouldPrintBarSeparators)
			);
		}

		return rendering;
	}, '');

	return barContentTpl({ barContent });
}

function isLastChordOfBar(bar, i) {
	return !bar.allChords[i + 1];
}
