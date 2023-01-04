import _cloneDeep from 'lodash/cloneDeep';
import _isEqual from 'lodash/isEqual';

import chordLineTpl from './tpl/chordLine.js';

import renderBarContent from './renderBarContent';
import barSeparatorTpl from './tpl/barSeparator.js';

import { defaultTimeSignature } from '../../parser/syntax';
import symbols from '../symbols';

/**
 * @param {ChordLine} chordLineModel
 * @param {TimeSignature} contextTimeSignature
 * @param {Boolean} shouldPrintBarSeparators
 * @param {Boolean} shouldPrintSubBeatDelimiters
 * @param {Boolean} shouldPrintInlineTimeSignatures
 * @returns {String} rendered html
 */
export default function renderChordLine(
	chordLineModel,
	contextTimeSignature = defaultTimeSignature,
	{
		shouldPrintBarSeparators = true,
		shouldPrintSubBeatDelimiters = true,
		shouldPrintInlineTimeSignatures = true,
	} = {}
) {
	let previousTimeSignature = _cloneDeep(contextTimeSignature);
	const allBarsRendered = chordLineModel.allBars.map((bar, i) => {
		const isLastBar = !chordLineModel.allBars[i + 1];
		const shouldPrintTimeSignature =
			shouldPrintInlineTimeSignatures &&
			!_isEqual(bar.timeSignature, previousTimeSignature);
		const barContent = renderBarContent(bar, isLastBar, {
			shouldPrintBarSeparators,
			shouldPrintSubBeatDelimiters,
			shouldPrintTimeSignature,
		});
		previousTimeSignature = _cloneDeep(bar.timeSignature);
		return barContent;
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

	return chordLineTpl({ chordLineOffset, chordLine });
}
