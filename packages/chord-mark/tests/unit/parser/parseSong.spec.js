jest.mock('../../../src/parser/songLinesFactory');
jest.mock('../../../src/parser/getAllChordsInSong');
jest.mock('../../../src/parser/getAllKeysInSong');

import songLinesFactory from '../../../src/parser/songLinesFactory';
import getAllChordsInSong from '../../../src/parser/getAllChordsInSong';
import getAllKeysInSong from '../../../src/parser/getAllKeysInSong';

import parseSong from '../../../src/parser/parseSong';

describe('parseSong', () => {
	test('Module', () => {
		expect(parseSong).toBeInstanceOf(Function);
	});
});

const flagPositionedChords = jest.fn();

describe('parseSong()', () => {
	getAllChordsInSong.mockReturnValue([]);
	getAllKeysInSong.mockReturnValue({});
	songLinesFactory.mockImplementation(() => {
		const allLines = [];
		return {
			addLine(line) {
				allLines.push(line);
			},
			asArray() {
				return allLines;
			},
			flagPositionedChords,
		};
	});

	test('Remove any html tag', () => {
		const input = '<p>this is a text line</p>';

		const expected = {
			allLines: ['this is a text line'],
			allChords: [],
			allKeys: {},
		};

		const parsed = parseSong(input);
		expect(parsed).toEqual(expected);
	});

	test('Accept an array as input', () => {
		const input = ['C.. G..', 'line1-1', 'Am.. F..', 'line1-2'];

		const expected = {
			allLines: ['C.. G..', 'line1-1', 'Am.. F..', 'line1-2'],
			allChords: [],
			allKeys: {},
		};

		const parsed = parseSong(input);
		expect(parsed).toEqual(expected);
	});

	test('Accept a multiline string as input', () => {
		const input = `C.. G..
line1-1
Am.. F..
line1-2`;

		const expected = {
			allLines: ['C.. G..', 'line1-1', 'Am.. F..', 'line1-2'],
			allChords: [],
			allKeys: {},
		};

		const parsed = parseSong(input);
		expect(parsed).toEqual(expected);
	});

	test('flagPositionedChords() is called', () => {
		flagPositionedChords.mockClear();
		const input = ['C.. G..', 'line1-1', 'Am.. F..', 'line1-2'];
		parseSong(input);
		expect(flagPositionedChords.mock.calls.length).toBe(1);
	});
});
