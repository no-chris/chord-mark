import { keymap } from 'prosemirror-keymap';
import { baseKeymap } from 'prosemirror-commands';
import { undo, redo, history as pmHistory } from 'prosemirror-history';
import onStateChange from './plugins/onStateChange';

export default function getPlugins(editor) {
	return [
		pmHistory(),
		keymap({ 'Mod-z': undo, 'Mod-y': redo }),
		keymap(baseKeymap),
		onStateChange(editor)
	];
}
