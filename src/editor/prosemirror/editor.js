import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { DOMParser as pmDOMParser } from 'prosemirror-model';
import getPlugins from './getPlugins';
import editorSchema from './schema';

import stateToArray from './helpers/stateToArray';

import { EventEmitter2 } from 'eventemitter2';

import 'prosemirror-view/style/prosemirror.css';


/**
 * @param {Node} renderTo
 */
export default function editorFactory(renderTo) {

	const editor = new EventEmitter2();
	const editorPlugins = getPlugins(editor);

	let editorView;

	editor.on('statechange', state => {
		editor.emit('change', stateToArray(state));
	});

	return Object.assign(editor, {
		load(newContent) {
			const newState = EditorState.create({
				doc: pmDOMParser.fromSchema(editorSchema).parse(newContent),
				plugins: editorPlugins
			});

			if (editorView) {
				editorView.updateState(newState);

			} else {
				editorView = new EditorView(renderTo, { state: newState });
			}
			editor.emit('statechange', newState);
		},

		getContent() {
			return stateToArray(editorView.state);
		}
	});
}
