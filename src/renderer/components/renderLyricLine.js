import lyricLineTpl from './tpl/lyricLine.hbs';

/**
 * @param {SongLyricLine} lyricLine
 * @returns {String} rendered html
 */
export default function render(lyricLine) {
	return lyricLineTpl({ lyricLine: lyricLine.model.lyrics });
}
