import stateToText from '../../../../src/editor/prosemirror/converters/stateToText';

import { EditorState } from 'prosemirror-state';
import { DOMParser as pmDOMParser } from 'prosemirror-model';
import editorSchema from '../../../../src/editor/prosemirror/schema';


describe('stateToText', () => {
	test('Module', () => {
		expect(stateToText).toBeInstanceOf(Function);
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
    <p>This line ends with a space outside all tags, and space will be lost</p> 
    <p>This line ends with a space inside p tag </p> 
    <p></p>
</div>`;

		const expected = `Two jumps in a week, I bet you think that's pretty clever don't you, boy?
Flying on your motorcycle, watching all the ground beneath you drop
You'd kill yourself for recognition; kill yourself to never ever stop
You broke another mirror; you're turning into something you are not

Don't leave me high, don't leave me dry
Don't leave me high, don't leave me dry
This line ends with a space outside all tags, and space will be lost
This line ends with a space inside p tag 
`;

		const div = document.createElement('div');
		div.innerHTML = input;

		const state = EditorState.create({
			doc: pmDOMParser.fromSchema(editorSchema).parse(div, { preserveWhitespace: 'full' }),
		});

		expect(stateToText(state)).toEqual(expected);
	});
});
