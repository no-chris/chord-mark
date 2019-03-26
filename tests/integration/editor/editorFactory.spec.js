import editorFactory from '../../../src/editor/editorFactory';

describe('editorFactory', () => {
	test('Module', () => {
		expect(editorFactory).toBeInstanceOf(Function);
	});
});

describe.each([
	['load'],
	['getContent'],
])('API: .%s()', (method) => {
	test('Test details', () => {
		const editor = editorFactory();
		expect(editor[method]).toBeInstanceOf(Function);
	});
});

describe('Behaviour', () => {
	test('Should allow loading and retrieving text', () => {
		document.body.innerHTML = `
<div id="editor-container"></div>
		`;

		const content = `6/8
Am C D F
There is a house in New Orleans
Am C E E
They call the rising sun
Am C D F
And its been the ruins of many a poor boy
Am E7 
And god I know I'm one
Am C D F
Am E7 Am E7

My mother was a taylor
She sewed my new blue jeans
My father was a gambling man
This line ends with a space 

Now the only thing a gambler needs
Is a suitcase and a trunk
And the only time you keep him satisfied
Is when hes all a drunk`;

		const editorContainer = document.getElementById('editor-container');
		const editor = editorFactory(editorContainer);

		editor.load(content);

		expect(editor.getContent()).toEqual(content);
	});

	test('Loading should replace existing text', () => {
		document.body.innerHTML = `
<div id="editor-container"></div>
		`;

		let content = 'This is my initial content';

		const editorContainer = document.getElementById('editor-container');
		const editor = editorFactory(editorContainer);

		editor.load(content);

		const proseMirror = editorContainer.querySelector('.ProseMirror');
		expect(proseMirror).toBeInstanceOf(Node);

		expect(editor.getContent()).toEqual(content);
		expect(proseMirror.textContent).toEqual(content);


		content = 'This is my new content';

		editor.load(content);

		expect(editor.getContent()).toEqual(content);
		expect(proseMirror.textContent).toEqual(content);
	});
});
