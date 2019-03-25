import parseSongLib from './parser/parseSong';
import songRendererFactory from './renderer/components/renderSong';

import '../scss/ucc.scss';

export const parseSong = parseSongLib;
export const songRenderer = songRendererFactory;
