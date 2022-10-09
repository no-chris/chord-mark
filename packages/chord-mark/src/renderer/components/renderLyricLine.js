import lyricLineTpl from './tpl/lyricLine.js';

/**
 * @param {SongLyricLine} lyricLine
 * @param {Boolean} alignChordsWithLyrics
 * @param {('all'|'lyrics'|'chords'|'chordsFirstLyricLine')} chartType
 * @returns {String} rendered html
 */
export default function render(
	lyricLine,
	{ alignChordsWithLyrics = false, chartType = 'all' } = {}
) {
	const trimmedLyricLine = shouldTrimLine(alignChordsWithLyrics, chartType)
		? lyricLine.model.lyrics.trim()
		: lyricLine.model.lyrics;
	return lyricLineTpl({ lyricLine: trimmedLyricLine });
}

const shouldTrimLine = (alignChordsWithLyrics, chartType) =>
	!alignChordsWithLyrics || chartType === 'lyrics';
