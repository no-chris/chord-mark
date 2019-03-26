import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { DOMParser as pmDOMParser } from 'prosemirror-model';

import addEventEmitter from '../core/addEventEmitter';

import getPlugins from './prosemirror/getPlugins';
import editorSchema from './prosemirror/schema';

import stateToText from './prosemirror/converters/stateToText';
import textToDom from './prosemirror/converters/textToDom';


/**
 * @param {Node} renderTo - Where to insert the editor
 */
export default function editorFactory(renderTo) {

	const editor = addEventEmitter({});
	const editorPlugins = getPlugins(editor);

	let editorView;

	editor.on('statechange', state => {
		editor.emit('change', stateToText(state));
	});

	return Object.assign(editor, {

		/**
		 * @param {String} text - UCC song to load in the editor
		 */
		load(text) {
			const textDom = textToDom(text);

			const editorState = EditorState.create({
				doc: pmDOMParser.fromSchema(editorSchema).parse(textDom, { preserveWhitespace: 'full' }),
				plugins: editorPlugins
			});

			if (!editorView) {
				editorView = new EditorView(renderTo, { state: editorState });

			} else {
				editorView.updateState(editorState);
			}
			editor.emit('statechange', editorState);
		},

		getContent() {
			return stateToText(editorView.state);
		}
	});
}
