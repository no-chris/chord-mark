import getMaxBeatsWidth from '../spacers/chord/getMaxBeatsWidth';

import simpleChordSpacer from '../spacers/chord/simple';
import alignedChordSpacer from '../spacers/chord/aligned';

import transposeSong from '../modifiers/transposeSong';
import { forEachChordInSong } from '../../parser/helper/songs';

import renderChordLine from './renderChordLine';
import renderEmptyLine from './renderEmptyLine';
import renderTextLine from './renderTextLine';
import renderSectionLabel from './renderSectionLabel';

import songTpl from './tpl/song.hbs';
import getChordSymbol from '../helpers/getChordSymbol';
import getSectionsStats from '../helpers/getSectionsStats';

import lineTypes from '../../parser/lineTypes';

/**
 * @param {Song} parsedSong
 * @param {Boolean} alignBars
 * @param {Number} transposeValue
 * @param {('auto'|'flat'|'sharp')} accidentalsType
 * @param {Boolean} harmonizeAccidentals
 * @param {Boolean} expandSectionRepeats
 * @returns {String} rendered HTML
 */
export default function renderSong(parsedSong, {
	alignBars = false,
	transposeValue = 0,
	accidentalsType = 'auto',
	harmonizeAccidentals = true,
	expandSectionRepeats = true,
} = {}) {
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

	const sectionsStats = getSectionsStats(allLines);
	const maxBeatsWidth = getMaxBeatsWidth(allLines);

	let shouldSkipRepeatedSectionLine = false;

	const song = allLines
		.filter(shouldRenderLine)
		.map(line => {
			if (line.type === lineTypes.CHORD) {
				// todo: move this in renderChordLine
				const spaced = (alignBars)
					? alignedChordSpacer(line.model, maxBeatsWidth)
					: simpleChordSpacer(line.model);

				line.rendered = renderChordLine(spaced);

			} else if (line.type === lineTypes.EMPTY_LINE) {
				line.rendered = renderEmptyLine();

			} else if (line.type === lineTypes.SECTION_LABEL) {
				line.rendered = renderSectionLabel(line, { sectionsStats, expandSectionRepeats });

			} else if (line.type === lineTypes.TEXT) {
				line.rendered = renderTextLine(line);
			}
			return line;
		})
		.filter(line => line.rendered)
		.map(line => line.rendered)
		.join('\n');


	function shouldRenderLine(line) {
		if (line.type === lineTypes.SECTION_LABEL) {
			shouldSkipRepeatedSectionLine = (line.isFromSectionRepeat === true && !expandSectionRepeats);
		}
		return !shouldSkipRepeatedSectionLine;
	}

	return songTpl({ song });
}


