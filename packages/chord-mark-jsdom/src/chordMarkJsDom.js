import {
	parseSong as parseSongOriginal,
	renderSong as renderSongOriginal,
} from 'chord-mark';

import { JSDOM } from 'jsdom';
const windowObject = new JSDOM('').window;

function parseSong(songSrc) {
	return parseSongOriginal(songSrc, { windowObject });
}

function renderSong(parsed, options) {
	return renderSongOriginal(parsed, { ...options, windowObject });
}

export { parseSong, renderSong };
