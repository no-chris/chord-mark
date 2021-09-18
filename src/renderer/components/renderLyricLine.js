import lyricLineTpl from './tpl/lyricLine.hbs';

/**
 * @param {SongLyricLine} lyricLine
 * @param {Boolean} alignChordsWithLyrics
 * @param {('all'|'lyrics'|'chords')} chordsAndLyricsDisplay
 * @returns {String} rendered html
 */
export default function render(
	lyricLine,
	{ alignChordsWithLyrics = false, chordsAndLyricsDisplay = 'all' } = {}
) {
	const trimmedLyricLine = shouldTrimLine(
		alignChordsWithLyrics,
		chordsAndLyricsDisplay
	)
		? lyricLine.model.lyrics.trim()
		: lyricLine.model.lyrics;
	return lyricLineTpl({ lyricLine: trimmedLyricLine });
}

const shouldTrimLine = (alignChordsWithLyrics, chordsAndLyricsDisplay) =>
	!alignChordsWithLyrics || chordsAndLyricsDisplay === 'lyrics';
