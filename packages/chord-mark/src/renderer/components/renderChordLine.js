import chordLineTpl from './tpl/chordLine.js';

import renderBarContent from './renderBarContent';
import barSeparatorTpl from './tpl/barSeparator.js';

import symbols from '../symbols';

/**
 * @param {ChordLine} chordLineModel
 * @param {Boolean} shouldPrintBarSeparators
 * @param {Boolean} shouldPrintSubBeatDelimiters
 * @param {Boolean} shouldPrintInlineTimeSignatures
 * @returns {String} rendered html
 */
export default function renderChordLine(
	chordLineModel,
	{
		shouldPrintBarSeparators = true,
		shouldPrintSubBeatDelimiters = true,
		shouldPrintInlineTimeSignatures = true,
		symbolType = 'chord',
	} = {}
) {
	const allBarsRendered = chordLineModel.allBars.map((bar, i) => {
		const isLastBar = !chordLineModel.allBars[i + 1];
		const shouldPrintTimeSignature =
			shouldPrintInlineTimeSignatures && bar.shouldPrintBarTimeSignature;
		return renderBarContent(bar, isLastBar, {
			shouldPrintBarSeparators,
			shouldPrintSubBeatDelimiters,
			shouldPrintTimeSignature,
			symbolType,
		});
	});

	const barSeparator = shouldPrintBarSeparators
		? barSeparatorTpl({
				barSeparator: symbols.barSeparator,
		  })
		: '';

	const chordLine =
		barSeparator + allBarsRendered.join(barSeparator) + barSeparator;

	const chordLineOffset = symbols.chordLineOffsetSpacer.repeat(
		chordLineModel.offset || 0
	);

	return chordLineTpl({ chordLineOffset, chordLine, symbolType });
}
