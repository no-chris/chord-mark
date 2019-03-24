import { Plugin as pmPlugin } from 'prosemirror-state';

export default function onStateChangeFactory(editor) {
	return new pmPlugin({
		key: 'onStateChange',
		view: () => {
			return {
				update(editorView) {
					editor.emit('statechange', editorView.state);
				}
			};
		},
	});
}
