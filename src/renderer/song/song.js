import parseSong from '../../parser/parseSong';

import getMaxBeatsWidth from '../getMaxBeatsWidth';

import simpleChordSpacer from '../spacer/chord/simple';
import alignedChordSpacer from '../spacer/chord/aligned';

import transposeSong from '../transposeSong';
import { forEachChordInSong } from '../../parser/helper/songs';

import barContentRenderer from '../bar/barContent';
import chordLineRenderer from '../chord/chordLine';
import chordSymbolRenderer from '../chord/chordSymbol';
import textLineRenderer from '../text/textLine';

import songTpl from './song.hbs';
import getChordSymbol from '../getChordSymbol';


export default {
	render(songTxt, {
		alignBars = false,
		transposeValue = 0,
		accidentalsType = 'auto',
		harmonizeAccidentals = true
	}) {
		const parsedSong = parseSong(songTxt);
		let { allLines, allChords } = parsedSong;

		allLines = transposeSong(allLines, allChords,  {
			transposeValue,
			accidentalsType,
			harmonizeAccidentals
		});
		allLines = forEachChordInSong(allLines, (chord) => {
			chord.symbol = (chord.transposedModel)
				? getChordSymbol(chord.transposedModel)
				: getChordSymbol(chord.model);
		});

		const maxBeatsWidth = getMaxBeatsWidth(allLines);

		const song = allLines
			.map(line => {

				if (line.type === 'chord') {
					const spaced = (alignBars)
						? alignedChordSpacer(line.model, maxBeatsWidth)
						: simpleChordSpacer(line.model);

					line.rendered = chordLineRenderer.render(spaced, {
						barContentRenderer: barContentRenderer,
						chordRenderer: chordSymbolRenderer,
					});

				} else if (line.type === 'text') {
					line.rendered = textLineRenderer.render(line.string);
				}
				return line;
			})
			.filter(line => line.rendered)
			.map(line => line.rendered)
			.join('\n');

		return songTpl({ song });
	}
};
