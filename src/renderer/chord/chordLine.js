import chordLineTpl from './chordLine.hbs';
import barSeparatorTpl from '../bar/barSeparator.hbs';
import isRenderer from '../isRenderer';

export default {
	render(chordLineModel, {
		barContentRenderer,
		chordRenderer
	} = {}) {

		if (! isRenderer(barContentRenderer)) {
			throw new TypeError('barContentRenderer is not a valid renderer');
		}

		const allBarsRendered = chordLineModel.allBars
			.map(bar => barContentRenderer.render(bar, { chordRenderer }));

		const barSeparator = barSeparatorTpl();

		const chordLine = barSeparator +
			allBarsRendered.join(barSeparator) +
			barSeparator;

		return chordLineTpl({ chordLine });
	}
};