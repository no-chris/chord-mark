import chordPro2ChordMark from './converters/chordPro2ChordMark';
import chordsOverLyrics2ChordMark from './converters/chordsOverLyrics2ChordMark';

const allInputFormats = {
	AUTO: 'auto',
	CP: 'chordPro',
	COL: 'chordsOverLyrics',
};

const convert2ChordMark = (
	input,
	{ inputFormat = allInputFormats.AUTO } = {}
) => {
	checkInputFormat(inputFormat);

	const inputTab = getInputTab(input);

	let finalInputFormat = inputFormat;
	if (inputFormat === allInputFormats.AUTO) {
		finalInputFormat = hasBracketedChords(inputTab)
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
	return converter(inputTab.join('\n'));
};

const checkInputFormat = (inputFormat) => {
	if (!Object.values(allInputFormats).includes(inputFormat)) {
		throw new Error('unknown input format: ' + inputFormat);
	}
};

const getInputTab = (inputRaw) => {
	return inputRaw
		.replace(/\r\n/g, '\n')
		.replace(/\[\/?ch]/g, '') //
		.replace(/\[\/?tab]/g, '')
		.split('\n');
};

const hasBracketedChords = (input) => {
	const bracketedChordsRe = /\[([^\]]*)]/g;

	return input.some((line) => !!line.match(bracketedChordsRe));
};

export default convert2ChordMark;
