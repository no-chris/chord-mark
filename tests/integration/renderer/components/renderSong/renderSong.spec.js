import path from 'path';
import fs from 'fs';

import renderSong from '../../../../../src/renderer/components/renderSong';
import stripTags from '../../../../../src/core/dom/stripTags';
import parseSong from '../../../../../src/parser/parseSong';

const dataFolder = path.resolve(__dirname, 'data');

describe('renderSong', () => {
	test('Factory', () => {
		expect(renderSong).toBeInstanceOf(Object);
	});
});

describe.each([

	['base rendering', 		'song1-input.txt', 'song1-output-simple.txt', 		{} ],
	['no transposing', 		'song1-input.txt', 'song1-output-simple.txt', 		{ alignBars: false, harmonizeAccidentals: false } ],
	['aligned rendering', 	'song1-input.txt', 'song1-output-aligned.txt', 		{ alignBars: true } ],
	['transposed', 			'song1-input.txt', 'song1-output-transposed.txt', 	{ transposeValue: -5 } ],

])('Render components: %s', (title, inputFile, outputFile, options) => {
	test('produces expected rendering', () => {
		const input = fs.readFileSync(path.resolve(dataFolder, inputFile), 'utf8');
		const output = fs.readFileSync(path.resolve(dataFolder, outputFile), 'utf8');

		const parsedSong = parseSong(input);
		const rendered = renderSong(parsedSong, options);

		expect(stripTags(rendered)).toEqual(output);
	});
});
