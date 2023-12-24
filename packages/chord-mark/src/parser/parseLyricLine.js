import syntax from './syntax';

/**
 * @typedef {Object} LyricLine
 * @type {Object}
 * @property {String} lyrics
 * @property {Number[]} chordPositions
 */

/**
 * @param {String} string
 * @returns {LyricLine}
 */
export default function parseLyricLine(string) {
	const stringWithoutForceLyricSymbol = string.startsWith(syntax.lyricLine)
		? string.substring(1)
		: string;

	const regexp = new RegExp(syntax.chordPositionMarker, 'g');
	const stringWithoutPositionMarkers = stringWithoutForceLyricSymbol.replace(
		regexp,
		''
	);

	const chordPositions = [];
	let tmpString = stringWithoutForceLyricSymbol;
	let position;

	while ((position = tmpString.indexOf(syntax.chordPositionMarker)) !== -1) {
		if (!chordPositions.includes(position)) {
			chordPositions.push(position);
		}
		tmpString = tmpString.replace(syntax.chordPositionMarker, '');
	}
	return {
		lyrics: stringWithoutPositionMarkers,
		chordPositions,
	};
}
