import textToDom from '../../../../src/editor/prosemirror/converters/textToDom';

describe('textToDom', () => {
	test('Module', () => {
		expect(textToDom).toBeInstanceOf(Function);
	});
});

describe('Behaviour', () => {
	test('Should wrap each line in <p>', () => {
		const input =`
This is a text
that spans multiple lines
  sometimes starts with spaces
sometimes ends with spaces  

sometimes with empty lines
sometimes with <strong>embedded</strong> HTML
that will be <u>deleted</u>removed
`;

		const expected = `<p></p>
<p>This is a text</p>
<p>that spans multiple lines</p>
<p>  sometimes starts with spaces</p>
<p>sometimes ends with spaces  </p>
<p></p>
<p>sometimes with empty lines</p>
<p>sometimes with  HTML</p>
<p>that will be removed</p>
<p></p>
`.replace(/\n/g, '');

		const actual = textToDom(input);
		expect(actual.innerHTML).toEqual(expected);

		expect(actual.nodeType).toEqual(1);
		expect(actual.nodeName).toEqual('DIV');
	});
});
