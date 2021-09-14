import lyricLineTpl from './tpl/lyricLine.hbs';

/**
 * @param {SongLyricLine} lyricLine
 * @param {Boolean} alignChordsWithLyrics
 * @returns {String} rendered html
 */
export default function render(lyricLine, alignChordsWithLyrics = false) {
	const trimmedLyricLine = alignChordsWithLyrics
		? lyricLine.model.lyrics
		: lyricLine.model.lyrics.trim();
	return lyricLineTpl({ lyricLine: trimmedLyricLine });
}
