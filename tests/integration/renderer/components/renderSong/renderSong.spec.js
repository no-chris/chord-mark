import path from 'path';
import fs from 'fs';

import _ from 'lodash';

import renderSong from '../../../../../src/renderer/components/renderSong';
import stripTags from '../../../../../src/core/dom/stripTags';
import parseSong from '../../../../../src/parser/parseSong';

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
	['base rendering', 'song1-input.txt', 'song1-output-simple.txt'],
	[
		'base rendering, no params',
		'song1-input.txt',
		'song1-output-simple.txt',
		{},
	],
	[
		'no transposing',
		'song1-input.txt',
		'song1-output-simple.txt',
		{ alignBars: false, harmonizeAccidentals: false },
	],
	[
		'aligned rendering',
		'song1-input.txt',
		'song1-output-aligned.txt',
		{ alignBars: true },
	],
	[
		'transposed',
		'song1-input.txt',
		'song1-output-transposed.txt',
		{ transposeValue: -4, accidentalsType: 'flat' },
	],
	[
		'chords-lyrics aligned',
		'song1-input.txt',
		'song1-output-chordslyrics.txt',
		{ alignChordsWithLyrics: true },
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

		expect(stripTags(rendered)).toEqual(output);
	});
});
