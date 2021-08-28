import _cloneDeep from 'lodash/cloneDeep';
import { forEachChordInChordLine } from '../../../parser/helper/songs';

import syntax from '../../syntax'; //fixme rename

const chordSpaceAfterDefault = 1;

/**
 * @param {ChordLine} chordLineInput
 * @param {LyricLine} lyricsLineInput
 */
export default function space(chordLineInput, lyricsLineInput) {
	const chordLine = _cloneDeep(chordLineInput);
	const lyricsLine = _cloneDeep(lyricsLineInput);

	const tokenizedLyrics = lyricsLine.chordPositions.map(
		(position, i, allPositions) => {
			return lyricsLine.lyrics.substring(position, allPositions[i + 1]);
		}
	);

	let chordToken;
	let lyricToken;
	let currentBarIndex = 0;
	let spacedLyricsLine = '';

	const spacedChordLine = forEachChordInChordLine(
		chordLine,
		(chord, chordIndex, barIndex) => {
			lyricToken = tokenizedLyrics.shift();

			if (lyricToken) {
				chordToken = chord.symbol;
				if (isFirstChord(barIndex, chordIndex)) {
					chordToken = syntax.barSeparator + chordToken;
				} else if (isNewBar(currentBarIndex, barIndex)) {
					chordToken = syntax.barSeparator + chordToken;
					currentBarIndex = barIndex;
				}
				if (lyricToken.length - chordToken.length > 0) {
					chord.spacesAfter = lyricToken.length - chordToken.length;
				} else {
					chord.spacesAfter = chordSpaceAfterDefault;
					lyricToken += syntax.lyricsSpacer.repeat(
						chordToken.length -
							lyricToken.length +
							chordSpaceAfterDefault
					);
				}
				spacedLyricsLine += lyricToken;
			}
		}
	);

	if (tokenizedLyrics.length) {
		spacedLyricsLine += tokenizedLyrics.join('');
	}
	lyricsLine.lyrics = spacedLyricsLine.trim();

	return {
		chordLine: spacedChordLine,
		lyricsLine,
	};
}

const isFirstChord = (barIndex, chordIndex) =>
	barIndex === 0 && chordIndex === 0;
const isNewBar = (currentBarIndex, barIndex) => currentBarIndex !== barIndex;
