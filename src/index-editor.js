import parseSongLib from './parser/parseSong';
import editorFactoryLib from './editor/prosemirror/editor';
import songRendererFactory from './renderer/song/song';

import '../scss/ucc-editor.scss';

export const parseSong = parseSongLib;
export const editorFactory = editorFactoryLib;
export const songRenderer = songRendererFactory;
