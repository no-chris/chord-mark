import getMaxBeatsWidth from '../spacers/chord/getMaxBeatsWidth';

import simpleChordSpacer from '../spacers/chord/simple';
import alignedChordSpacer from '../spacers/chord/aligned';

import transposeSong from '../modifiers/transposeSong';
import { forEachChordInSong } from '../../parser/helper/songs';

import renderChordLine from './renderChordLine';
import renderEmptyLine from './renderEmptyLine';
import renderSectionLabel from './renderSectionLabel';
import renderTextLine from './renderTextLine';
import renderTimeSignature from './renderTimeSignature';

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
 * @param {Boolean} autoRepeatChords
 * @returns {String} rendered HTML
 */
export default function renderSong(parsedSong, {
	alignBars = false,
	transposeValue = 0,
	accidentalsType = 'auto',
	harmonizeAccidentals = true,
	expandSectionRepeats = true,
	autoRepeatChords = true,
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
			let rendered;

			if (line.type === lineTypes.CHORD) {
				// todo: move this in renderChordLine
				const spaced = (alignBars)
					? alignedChordSpacer(line.model, maxBeatsWidth)
					: simpleChordSpacer(line.model);

				rendered = renderChordLine(spaced);

			} else if (line.type === lineTypes.EMPTY_LINE) {
				rendered = renderEmptyLine();

			} else if (line.type === lineTypes.SECTION_LABEL) {
				rendered = renderSectionLabel(line, { sectionsStats, expandSectionRepeats });

			} else if (line.type === lineTypes.TIME_SIGNATURE) {
				rendered = renderTimeSignature(line);

			} else {
				rendered = renderTextLine(line);
			}
			return rendered;
		})
		.filter(Boolean)
		.join('\n');


	function shouldRenderLine(line) {
		if (line.type === lineTypes.SECTION_LABEL) {
			shouldSkipRepeatedSectionLine = (line.isFromSectionRepeat === true && !expandSectionRepeats);
		}
		const shouldSkipAutoRepeatChordLine = (line.isFromAutoRepeatChords && !autoRepeatChords);

		return !shouldSkipRepeatedSectionLine && !shouldSkipAutoRepeatChordLine;
	}

	return songTpl({ song });
}


