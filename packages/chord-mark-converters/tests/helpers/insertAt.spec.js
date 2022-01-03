import insertAt from '../../src/helpers/insertAt';

describe('insertAt', () => {
	test('Module', () => {
		expect(typeof insertAt).toBe('function');
	});

	describe.each([
		['Position 0', 'nsert something', 'I', 0, 'Insert something'],
		[
			'Random position',
			'Insert something ere',
			'h',
			'Insert something '.length,
			'Insert something here',
		],
		[
			'End of string',
			'Insert something her',
			'e',
			'Insert something her'.length,
			'Insert something here',
		],
		[
			'Pad string if "at" > string length',
			'Insert after',
			'me',
			'Insert after'.length + 5,
			'Insert after     me',
		],
	])('%s', (title, insertInto, toInsert, at, expected) => {
		test('should insert a character in the proper position', () => {
			const inserted = insertAt(insertInto, toInsert, at);
			expect(inserted).toBe(expected);
		});
	});
});
