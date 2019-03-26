import * as ucc from '../../src/ucc';
import * as uccEditor from '../../src/ucc-editor';

describe('Public API', () => {
	test('ucc', () => {
		expect(Object.keys(ucc).length).toEqual(2);
		expect(ucc.parseSong).toBeInstanceOf(Function);
		expect(ucc.renderSong).toBeInstanceOf(Function);
	});

	test('ucc-editor', () => {
		expect(Object.keys(uccEditor).length).toEqual(3);
		expect(uccEditor.parseSong).toBeInstanceOf(Function);
		expect(uccEditor.renderSong).toBeInstanceOf(Function);
		expect(uccEditor.editorFactory).toBeInstanceOf(Function);
	});
});
