import onStateChange from '../../../../src/editor/prosemirror/plugins/onStateChange';

import addEventEmitter from '../../../../src/core/addEventEmitter';

import { Plugin as pmPlugin } from 'prosemirror-state';

describe('onStateChange', () => {
	test('Module', () => {
		expect(onStateChange).toBeInstanceOf(Function);
	});
	test('Factory', () => {
		expect(onStateChange()).toBeInstanceOf(pmPlugin);
	});
});

describe('Behaviour', () => {
	test('Trigger statechange event on view call', (done) => {
		const editor = addEventEmitter({});
		const plugin = onStateChange(editor);
		const state = 'I am a state';

		editor.on('statechange', newState => {
			expect(newState).toEqual(state);
			done();
		});

		plugin.spec.view().update({ state });
	});
});
