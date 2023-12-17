import stripTags from '../../core/dom/stripTags';
import symbols from '../symbols';
import isTimeSignatureString from '../../parser/matchers/isTimeSignatureString';

const barSeparatorsRe = /<[^<]*?cmBarSeparator.*?span>/gm;
const chordSymbolRe = /<[^<]*?cmChordSymbol.*?span>/gm;
const timeSignatureRe = /<[^<]*?cmTimeSignature.*?span>/gm;
const subBeatGroupOpenerRe = /<[^<]*?cmSubBeatGroupOpener.*?span>/gm;
const subBeatGroupCloserRe = /<[^<]*?cmSubBeatGroupCloser.*?span>/gm;

/**
 *
 * @param {String} chordLine
 * @param {String} lyricLine
 * @returns {String}
 */
// eslint-disable-next-line max-lines-per-function
export function mergeChordLineWithLyrics(chordLine, lyricLine) {
	const allTokens = [];
	let currentToken = '';

	let barSeparatorIndex = 0;
	let chordSymbolIndex = 0;
	let timeSignatureIndex = 0;
	let subBeatGroupOpenerIndex = 0;
	let subBeatGroupCloserIndex = 0;

	let allBarSeparators = [...chordLine.matchAll(barSeparatorsRe)];
	let allChordSymbols = [...chordLine.matchAll(chordSymbolRe)];
	let allTimeSignatures = [...chordLine.matchAll(timeSignatureRe)];
	let allSbgOpeners = [...chordLine.matchAll(subBeatGroupOpenerRe)];
	let allSbgClosers = [...chordLine.matchAll(subBeatGroupCloserRe)];

	Array.from(stripTags(chordLine)).forEach((char, charIndex) => {
		switch (char) {
			case ' ': //fixme: handle spaces in chord symbol
				if (currentToken) {
					addToken(currentToken, charIndex - currentToken.length);
					currentToken = '';
				}
				break;
			case symbols.barSeparator:
				if (currentToken) {
					addToken(currentToken, charIndex - currentToken.length);
				}
				addToken(char, charIndex);
				currentToken = '';
				break;
			case symbols.subBeatGroupOpener:
				if (currentToken) {
					addToken(currentToken, charIndex - currentToken.length);
				}
				addToken(char, charIndex);
				currentToken = '';
				break;
			case symbols.subBeatGroupCloser:
				if (currentToken) {
					addToken(currentToken, charIndex - currentToken.length);
				}
				addToken(char, charIndex);
				currentToken = '';
				break;
			default:
				currentToken += char;
				break;
		}
	});

	function addToken(string, index) {
		let html;
		if (string === symbols.barSeparator) {
			html = allBarSeparators[barSeparatorIndex][0];
			barSeparatorIndex++;
		} else if (string === symbols.subBeatGroupOpener) {
			html = allSbgOpeners[subBeatGroupOpenerIndex][0];
			subBeatGroupOpenerIndex++;
		} else if (string === symbols.subBeatGroupCloser) {
			html = allSbgClosers[subBeatGroupCloserIndex][0];
			subBeatGroupCloserIndex++;
		} else if (isTimeSignatureString(string)) {
			html = allTimeSignatures[timeSignatureIndex][0];
			timeSignatureIndex++;
		} else {
			html = allChordSymbols[chordSymbolIndex][0];
			chordSymbolIndex++;
		}
		allTokens.push({ string, html, index });
	}

	let offset = 0;
	let mergedLine = stripTags(lyricLine); // fixme: do that properly
	allTokens.forEach((token) => {
		mergedLine = insertAt(mergedLine, token.html, token.index + offset);
		offset += token.html.length;
	});
	return '<span class="cmChordLyricsLine">' + mergedLine + '</span>'; //fixme: move to render helper
}

const insertAt = (insertInto, toInsert, at) => {
	if (at > insertInto.length) {
		insertInto += ' '.repeat(at - insertInto.length);
	}
	return insertInto.slice(0, at) + toInsert + insertInto.slice(at);
};
