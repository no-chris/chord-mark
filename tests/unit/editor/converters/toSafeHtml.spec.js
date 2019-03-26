import toSafeHtml from '../../../../src/editor/prosemirror/converters/toSafeHtml';

describe('toSafeHtml', () => {
	test('Module', () => {
		expect(toSafeHtml).toBeInstanceOf(Function);
	});
});

describe.each([

	['plain text', 	'this is some plain text', 												'this is some plain text'],
	['p tag', 		'this is some <p>text with an allowed p tag</p>', 			 			'this is some <p>text with an allowed p tag</p>'],
	['div tag', 	'this is some <div>this should not be returned</div>plain text', 		'this is some plain text'],
	['strong tag', 	'this is some <strong>this should not be returned</strong>plain text', 	'this is some plain text'],
	['keep spaces', ' this is some plain text<span>this should not be returned</span> ', 	' this is some plain text '],

])('With %s', (title, input, output) => {
	test('Returns expected value', () => {
		const safe = toSafeHtml(input);
		expect(safe).toEqual(output);
	});
});
