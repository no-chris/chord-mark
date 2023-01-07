import path from 'path';
import fs from 'fs';

import _ from 'lodash';

import renderSong from '../../../../../src/renderer/components/renderSong';
import parseSong from '../../../../../src/parser/parseSong';
import toText from '../../../../unit/helpers/toText';

const dataFolder = path.resolve(__dirname, 'data');

describe('renderSong', () => {
	test('Factory', () => {
		expect(renderSong).toBeInstanceOf(Object);
	});
});

// used to automatically remove the line added by editorConfig configuration
function removeLastLine(fileContent) {
	return _.initial(fileContent.split('\n')).join('\n');
}

describe.each([
	['base rendering', 'song1-input.txt', 'song1-output-default.txt'],
	['default rendering', 'song1-input.txt', 'song1-output-default.txt', {}],
	[
		'explicit parameters',
		'song1-input.txt',
		'song1-output-default.txt',
		{
			alignBars: true,
			alignChordsWithLyrics: true,
			printChordsDuration: 'uneven',
		},
	],
	[
		'aligned bars, no chordLyrics alignment',
		'song1-input.txt',
		'song1-output-aligned.txt',
		{ alignChordsWithLyrics: false },
	],
	[
		'non-aligned bars, no chordLyrics alignment',
		'song1-input.txt',
		'song1-output-non-aligned.txt',
		{
			alignBars: false,
			alignChordsWithLyrics: false,
			printChordsDuration: 'never',
		},
	],
	[
		'transposed',
		'song1-input.txt',
		'song1-output-transposed.txt',
		{ transposeValue: -4, accidentalsType: 'flat' },
	],
	[
		'no bar separators',
		'song1-input.txt',
		'song1-output-no-bar-sep.txt',
		{ printBarSeparators: 'never' },
	],
	[
		'grids bar separators',
		'song1-input.txt',
		'song1-output-grids-bar-sep.txt',
		{ printBarSeparators: 'grids' },
	],
	[
		'section copy & multiply',
		'song2-input.txt',
		'song2-output-copy-and-multiply.txt',
		{ expandSectionCopy: true, expandSectionMultiply: true },
	],
	[
		'section copy',
		'song2-input.txt',
		'song2-output-copy.txt',
		{ expandSectionCopy: true, expandSectionMultiply: false },
	],
	[
		'section copy',
		'song2-input.txt',
		'song2-output-multiply.txt', // <= edge cases here, not sure what should be the expected behavior...
		{ expandSectionCopy: false, expandSectionMultiply: true },
	],
	[
		'section copy',
		'song2-input.txt',
		'song2-output-no-copy-no-multiply.txt',
		{ expandSectionCopy: false, expandSectionMultiply: false },
	],
	[
		'sub-beat delimiters',
		'song3-input.txt',
		'song3-output-sub-beats.txt',
		{ printSubBeatDelimiters: true },
	],
	[
		'sub-beat delimiters',
		'song3-input.txt',
		'song3-output-no-sub-beats.txt',
		{ printSubBeatDelimiters: false },
	],
	[
		'sub-beat delimiters',
		'song4-input.txt',
		'song4-output-inline-time-signatures.txt',
		{ printInlineTimeSignatures: true },
	],
	[
		'sub-beat delimiters',
		'song4-input.txt',
		'song4-output-no-inline-time-signatures.txt',
		{ printInlineTimeSignatures: false },
	],
])('Render components: %s', (title, inputFile, outputFile, options) => {
	test('produces expected rendering', () => {
		const input = removeLastLine(
			fs.readFileSync(path.resolve(dataFolder, inputFile), 'utf8')
		);
		const output = removeLastLine(
			fs.readFileSync(path.resolve(dataFolder, outputFile), 'utf8')
		);

		const parsedSong = parseSong(input);
		const rendered = renderSong(parsedSong, options);

		expect(toText(rendered)).toEqual(output);
	});
});
