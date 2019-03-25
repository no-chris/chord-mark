import getMaxBeatsWidth from '../spacers/chord/getMaxBeatsWidth';

import simpleChordSpacer from '../spacers/chord/simple';
import alignedChordSpacer from '../spacers/chord/aligned';

import transposeSong from '../modifiers/transposeSong';
import { forEachChordInSong } from '../../parser/helper/songs';

import renderChordLine from './renderChordLine';
import renderTextLine from './renderTextLine';

import songTpl from './tpl/song.hbs';
import getChordSymbol from '../helpers/getChordSymbol';

/**
 * @param {Song} parsedSong
 * @param {Boolean} alignBars
 * @param {Number} transposeValue
 * @param {('auto'|'flat'|'sharp')} accidentalsType
 * @param {Boolean} harmonizeAccidentals
 */
export default function renderSong(parsedSong, {
	alignBars = false,
	transposeValue = 0,
	accidentalsType = 'auto',
	harmonizeAccidentals = true
}) {
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

				line.rendered = renderChordLine(spaced);

			} else if (line.type === 'text') {
				line.rendered = renderTextLine(line.string);
			}
			return line;
		})
		.filter(line => line.rendered)
		.map(line => line.rendered)
		.join('\n');

	return songTpl({ song });
}


