import parseSongLib from './parser/parseSong';
import songRendererFactory from './renderer/song/song';

import '../scss/ucc.scss';

export const parseSong = parseSongLib;
export const songRenderer = songRendererFactory;
