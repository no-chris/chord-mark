import _cloneDeep from 'lodash/cloneDeep';
import { getChordString } from './getBeatString';

import symbols from '../../symbols';

const chordSpaceAfterDefault = 1;

/**
 * @param {ChordLine} chordLineInput
 * @param {LyricLine} lyricsLineInput
 * @param {Boolean} shouldPrintBarSeparators
 * @param {Boolean} shouldPrintSubBeatDelimiters
 * @returns {Object}
 */
export default function space(
	chordLineInput,
	lyricsLineInput,
	shouldPrintBarSeparators,
	shouldPrintSubBeatDelimiters
) {
	const chordLine = _cloneDeep(chordLineInput);
	const lyricsLine = _cloneDeep(lyricsLineInput);
	const barSeparatorToken = shouldPrintBarSeparators
		? symbols.barSeparator
		: '';

	if (hasNoPositionMarkers(lyricsLine)) {
		return {
			chordLine,
			lyricsLine,
		};
	}

	const tokenizedLyrics = lyricsLine.chordPositions.map(
		(position, i, allPositions) => {
			return lyricsLine.lyrics.substring(position, allPositions[i + 1]);
		}
	);
	let spacedLyricsLine = '';

	let chordToken;
	let lyricToken;
	let currentBarIndex = -1;

	chordLine.allBars.forEach((bar, barIndex) => {
		bar.allChords.forEach((chord) => {
			lyricToken = tokenizedLyrics.shift();

			if (lyricToken) {
				chordToken = getChordString(
					bar,
					chord,
					shouldPrintSubBeatDelimiters
				);

				if (isNewBar(currentBarIndex, barIndex)) {
					chordToken = barSeparatorToken + chordToken;
					currentBarIndex = barIndex;
				}

				if (startsWithSpace(lyricToken)) {
					lyricToken =
						symbols.lyricsSpacer.repeat(chordToken.length) +
						lyricToken;
				}

				if (lyricToken.length - chordToken.length > 0) {
					chord.spacesAfter = lyricToken.length - chordToken.length;
				} else {
					chord.spacesAfter = chordSpaceAfterDefault;
					const lyricsSpaceAfter =
						chordToken.length -
						lyricToken.length +
						chordSpaceAfterDefault;
					lyricToken += symbols.lyricsSpacer.repeat(lyricsSpaceAfter);
				}
				spacedLyricsLine += lyricToken;
			} else {
				chord.spacesAfter = chordSpaceAfterDefault;
			}
			chord.spacesWithin = 0;
		});
	});

	if (shouldOffsetChordLine(lyricsLine)) {
		const chordLineOffset = lyricsLine.chordPositions[0];
		chordLine.offset = chordLineOffset;
		spacedLyricsLine =
			lyricsLine.lyrics.substring(0, chordLineOffset) + spacedLyricsLine;
	}

	if (tokenizedLyrics.length) {
		spacedLyricsLine += tokenizedLyrics.join('');
	}
	lyricsLine.lyrics = trimEnd(spacedLyricsLine);

	return {
		chordLine,
		lyricsLine,
	};
}

const hasNoPositionMarkers = (lyricsLine) =>
	lyricsLine.chordPositions.length === 0;

const shouldOffsetChordLine = (lyricsLine) => lyricsLine.chordPositions[0] > 0;

const isNewBar = (currentBarIndex, barIndex) => currentBarIndex !== barIndex;

// source: https://github.com/es-shims/String.prototype.trimEnd/blob/main/implementation.js
const trimEnd = (str) => {
	const endWhitespace =
		// eslint-disable-next-line max-len,no-control-regex
		/[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]*$/;
	return str.replace(endWhitespace, '');
};

const startsWithSpace = (str) => str.indexOf(' ') === 0;
