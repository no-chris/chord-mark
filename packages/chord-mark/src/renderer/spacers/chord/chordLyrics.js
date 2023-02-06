/* eslint-disable max-lines-per-function */
import _cloneDeep from 'lodash/cloneDeep';
import { getChordString } from './getBeatString';

import symbols from '../../symbols';

const chordSpaceAfterDefault = 1;

/**
 * Space chords and lyrics, so they are aligned with each other:
 * - for chords: adjust the spaceAfter property of each chord object
 * - for lyrics: create a new string with extra spaces where needed
 *
 * @param {ChordLine} chordLineInput
 * @param {LyricLine} lyricsLineInput
 * @param {Boolean} shouldPrintBarSeparators
 * @param {Boolean} shouldPrintSubBeatDelimiters
 * @param {Boolean} shouldPrintInlineTimeSignatures
 * @param {('chord'|'roman')} symbolType
 * @returns {Object}
 */
export default function space(
	chordLineInput,
	lyricsLineInput,
	{
		shouldPrintBarSeparators = true,
		shouldPrintSubBeatDelimiters = true,
		shouldPrintInlineTimeSignatures = true,
		symbolType = 'chord',
	} = {}
) {
	if (hasNoPositionMarkers(lyricsLineInput)) {
		return {
			chordLine: chordLineInput,
			lyricsLine: lyricsLineInput,
		};
	}

	const chordLine = _cloneDeep(chordLineInput);
	const lyricsLine = _cloneDeep(lyricsLineInput);

	const tokenizedLyrics = lyricsLine.chordPositions.map(
		(position, i, allPositions) => {
			return lyricsLine.lyrics.substring(position, allPositions[i + 1]);
		}
	);

	let timeSignatureString = '';
	let spacedLyricsLine = '';
	let chordToken;
	let lyricToken;

	chordLine.allBars.forEach((bar, barIndex) => {
		bar.allChords.forEach((chord, chordIndex, allChords) => {
			lyricToken = tokenizedLyrics.shift(); // get next lyric token

			if (lyricToken) {
				timeSignatureString =
					chordIndex === 0 &&
					shouldPrintInlineTimeSignatures &&
					bar.shouldPrintBarTimeSignature
						? bar.timeSignature.string +
						  symbols.spacesAfterTimeSignature
						: '';

				const shouldOffsetLyricsLine =
					barIndex === 0 &&
					chordIndex === 0 &&
					lyricsLine.chordPositions[0] === 0;

				chordToken = getChordToken(bar, chord, shouldOffsetLyricsLine);
				lyricToken = getAdjustedLyricToken(
					shouldOffsetLyricsLine,
					chord.isFirstOfSubBeat
				);

				const isLastChordOfBar = chordIndex === allChords.length - 1;
				const isFollowedBySubBeatGroup =
					allChords[chordIndex + 1] &&
					allChords[chordIndex + 1].isFirstOfSubBeat;

				if (lyricToken.length - chordToken.length > 0) {
					const isLastLyricToken = tokenizedLyrics.length === 0;
					// Warning: `getChordSpacesAfter()` has a side effect since its logic might result in updating
					// the lyricsToken with an extra space
					chord.spacesAfter = getChordSpacesAfter(
						isLastChordOfBar,
						isLastLyricToken,
						isFollowedBySubBeatGroup
					);
				} else {
					chord.spacesAfter = chordSpaceAfterDefault;
					lyricToken += symbols.lyricsSpacer.repeat(
						getLyricSpacesAfter(
							isLastChordOfBar,
							isFollowedBySubBeatGroup
						)
					);
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
		if (shouldPrintBarSeparators) {
			chordLine.offset--;
		}
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

	function getChordToken(bar, chord, shouldOffsetLyricsLine) {
		let token =
			timeSignatureString +
			getChordString(bar, chord, {
				shouldPrintSubBeatDelimiters:
					chord.isLastOfSubBeat && shouldPrintSubBeatDelimiters,
				symbolType,
			});
		if (shouldOffsetLyricsLine) {
			if (shouldPrintSubBeatDelimiters && chord.isFirstOfSubBeat)
				token = symbols.subBeatGroupOpener + token;
			if (shouldPrintBarSeparators) token = symbols.barSeparator + token;
		}
		return token;
	}

	function getAdjustedLyricToken(
		shouldOffsetLyricsLine,
		isFistOfSubBeatGroup
	) {
		let token = lyricToken;
		if (startsWithSpace(token)) {
			token = symbols.lyricsSpacer.repeat(chordToken.length - 1) + token;
		} else {
			if (shouldOffsetLyricsLine) {
				let offset = 0;
				if (shouldPrintBarSeparators) offset++;
				if (shouldPrintSubBeatDelimiters && isFistOfSubBeatGroup)
					offset++;
				token = symbols.lyricsSpacer.repeat(offset) + token;
			}
			if (timeSignatureString.length) {
				token = ' '.repeat(timeSignatureString.length) + token;
			}
		}

		return token;
	}

	function getChordSpacesAfter(
		isLastChordOfBar,
		isLastLyricToken,
		isFollowedBySubBeatGroup
	) {
		let spacesAfter = lyricToken.length - chordToken.length;

		const shouldMakeRoomForBarSep =
			isLastChordOfBar && shouldPrintBarSeparators && !isLastLyricToken;

		const shouldMakeRoomForSubBeatOpener =
			!isLastChordOfBar &&
			shouldPrintSubBeatDelimiters &&
			isFollowedBySubBeatGroup;

		if (shouldMakeRoomForBarSep || shouldMakeRoomForSubBeatOpener) {
			if (spacesAfter > 1) {
				spacesAfter -= 1;
			} else {
				lyricToken += symbols.lyricsSpacer; //duh!
			}
		}
		return spacesAfter;
	}

	function getLyricSpacesAfter(isLastChordOfBar, isFollowedBySubBeatGroup) {
		let lyricsSpaceAfter =
			chordToken.length - lyricToken.length + chordSpaceAfterDefault;

		if (isLastChordOfBar && shouldPrintBarSeparators) {
			lyricsSpaceAfter++;
		} else if (isFollowedBySubBeatGroup) {
			lyricsSpaceAfter++;
		}

		return lyricsSpaceAfter;
	}
}

const hasNoPositionMarkers = (lyricsLine) =>
	lyricsLine.chordPositions.length === 0;

const shouldOffsetChordLine = (lyricsLine) => lyricsLine.chordPositions[0] > 0;

// source: https://github.com/es-shims/String.prototype.trimEnd/blob/main/implementation.js
const trimEnd = (str) => {
	const endWhitespace =
		// eslint-disable-next-line max-len,no-control-regex
		/[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]*$/;
	return str.replace(endWhitespace, '');
};

const startsWithSpace = (str) => str.indexOf(' ') === 0;
