import fs from 'fs';
import path from 'path';

import { parseSong, renderSong } from 'chord-mark';
import chordMark2ChordPro from '../../src/chordMark2ChordPro';

const dataDir = path.resolve(__dirname + '/data');
const input1 = fs.readFileSync(dataDir + '/inputChordMark1.txt', 'utf-8');
const output1 = fs.readFileSync(dataDir + '/outputChordPro1.cho', 'utf-8');

describe('Module', () => {
	test('Should expose a function', () => {
		expect(typeof chordMark2ChordPro).toBe('function');
	});
});

describe('chordMark2Chordpro', () => {
	describe.each([['base test', input1, output1]])(
		'%s',
		(title, input, output) => {
			test('should produce expected rendering', () => {
				const parsed = parseSong(input);
				const rendered = renderSong(parsed, {
					customRenderer: chordMark2ChordPro,
				});
				expect(rendered).toBe(output);
			});
		}
	);
});
