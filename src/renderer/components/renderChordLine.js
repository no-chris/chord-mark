import chordLineTpl from './tpl/chordLine.hbs';

import renderBarContent from './renderBarContent';
import barSeparatorTpl from './tpl/barSeparator.hbs';

/**
 * @param {ChordLine} chordLineModel
 * @returns {String} rendered html
 */
export default function renderChordLine(chordLineModel) {
	const allBarsRendered = chordLineModel.allBars
		.map(bar => renderBarContent(bar));

	const barSeparator = barSeparatorTpl();

	const chordLine = barSeparator +
		allBarsRendered.join(barSeparator) +
		barSeparator;

	return chordLineTpl({ chordLine });
}
