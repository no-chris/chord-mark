import stateToArray from '../../../../src/editor/prosemirror/helpers/stateToArray';

import { EditorState } from 'prosemirror-state';
import { DOMParser as pmDOMParser } from 'prosemirror-model';
import editorSchema from '../../../../src/editor/prosemirror/schema';


describe('stateToArray', () => {
	test('Module', () => {
		expect(stateToArray).toBeInstanceOf(Function);
	});
});

describe('Behaviour', () => {
	test('Should convert state to an array of lines with plain text', () => {
		const input =
`<div>
    <p>Two jumps in a week, I bet you think that's pretty clever don't you, boy?</p>
    <p>Flying on your <em>motorcycle</em>, watching all the ground beneath you drop</p>
    <p>You'd kill yourself for <u>recognition</u>; kill yourself to never ever stop</p>
    <p>You broke another mirror; you're turning into something you are not</p>
    <p></p>
    <p><strong>Don't leave me high, don't leave me <em>dry</em></strong></p>
    <p><strong>Don't leave me high, don't leave me <em>dry</em></strong></p>
    <p></p>
</div>`;

		const expected = [
			'Two jumps in a week, I bet you think that\'s pretty clever don\'t you, boy?',
			'Flying on your motorcycle, watching all the ground beneath you drop',
			'You\'d kill yourself for recognition; kill yourself to never ever stop',
			'You broke another mirror; you\'re turning into something you are not',
			'',
			'Don\'t leave me high, don\'t leave me dry',
			'Don\'t leave me high, don\'t leave me dry',
			'',
		];

		const div = document.createElement('div');
		div.innerHTML = input;

		const state = EditorState.create({
			doc: pmDOMParser.fromSchema(editorSchema).parse(div),
		});

		expect(stateToArray(state)).toEqual(expected);
	});
});
