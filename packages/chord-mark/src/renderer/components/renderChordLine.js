import chordLineTpl from './tpl/chordLine.js';

import renderBarContent from './renderBarContent';
import barSeparatorTpl from './tpl/barSeparator.js';

import symbols from '../symbols';

/**
 * @param {ChordLine} chordLineModel
 * @param {Boolean} shouldPrintBarSeparators
 * @param {Boolean} shouldPrintSubBeatDelimiters
 * @param {Boolean} shouldPrintInlineTimeSignatures
 * @param {('chord'|'roman')} options.symbolType
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
		const isLastBar =
			!chordLineModel.allBars[i + 1] && !chordLineModel.hasContinuation;
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

	const firstBar = chordLineModel.allBars[0];
	const startSep =
		firstBar && firstBar.isContinuation ? '' : barSeparator;
	const endSep = chordLineModel.hasContinuation ? '' : barSeparator;

	const chordLine =
		startSep + allBarsRendered.join(barSeparator) + endSep;

	const chordLineOffset = symbols.chordLineOffsetSpacer.repeat(
		chordLineModel.offset || 0
	);

	return chordLineTpl({ chordLineOffset, chordLine, symbolType });
}
