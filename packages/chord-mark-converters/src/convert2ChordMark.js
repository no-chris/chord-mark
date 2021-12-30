import stripTags from './core/stripTags';
import { isChordLine, isChordsLyricsLine } from './helpers/chordMatchers';
import chordPro2ChordMark from './converters/chordPro2ChordMark';
import chordsOverLyrics2ChordMark from './converters/chordsOverLyrics2ChordMark';

const allInputFormats = {
	AUTO: 'auto',
	CP: 'chordPro',
	COL: 'chordsOverLyrics',
};

/**
 *
 * @param {String} input
 * @param {('chordPro'|'chordsOverLyrics')} inputFormat
 * @returns {String}
 */
const convert2ChordMark = (
	input,
	{ inputFormat = allInputFormats.AUTO } = {}
) => {
	checkInputFormat(inputFormat);

	const allLines = getAllLines(input);

	let finalInputFormat = inputFormat;
	if (inputFormat === allInputFormats.AUTO) {
		finalInputFormat = looksLikeChordPro(allLines)
			? allInputFormats.CP
			: allInputFormats.COL;
	}

	let converter;
	switch (finalInputFormat) {
		case allInputFormats.CP:
			converter = chordPro2ChordMark;
			break;
		case allInputFormats.COL:
			converter = chordsOverLyrics2ChordMark;
			break;
	}
	return converter(allLines);
};

const checkInputFormat = (inputFormat) => {
	if (!Object.values(allInputFormats).includes(inputFormat)) {
		throw new Error('unknown input format: ' + inputFormat);
	}
};

const getAllLines = (inputRaw) => {
	return stripTags(inputRaw)
		.replace(/\r\n/g, '\n')
		.replace(/\n\r/g, '\n')
		.replace(/\r/g, '\n')
		.replace(/\[\/?ch]/g, '') // ultimate guitar markup
		.replace(/\[\/?tab]/g, '') // ultimate guitar markup
		.split('\n');
};

const looksLikeChordPro = (allLines) => {
	const chordsLyricsLines = allLines.filter(isChordsLyricsLine);
	const chordLines = allLines.filter(isChordLine);
	return chordsLyricsLines.length > chordLines.length;
};

export default convert2ChordMark;
