import fs from 'fs';
import path from 'path';

import chordsOverLyrics2ChordMark from '../../../src/converters/chordsOverLyrics2ChordMark';

const dataDir = path.resolve(__dirname + '/data');
const input1 = fs.readFileSync(dataDir + '/inputGuitarTabs1.txt', 'utf-8');
const output1 = fs.readFileSync(dataDir + '/outputGuitarTabs1.txt', 'utf-8');

describe('Module', () => {
	test('Should expose a function', () => {
		expect(typeof chordsOverLyrics2ChordMark).toBe('function');
	});
});

describe('chordsOverLyrics2ChordMark', () => {
	describe.each([['Sample song 1', input1, output1]])(
		'%s',
		(title, input, output) => {
			test('should produce expected ChordMark markup', () => {
				const converted = chordsOverLyrics2ChordMark(input);
				expect(converted).toBe(output);
			});
		}
	);
});
