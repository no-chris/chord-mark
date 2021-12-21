import fs from 'fs';
import path from 'path';

import chordPro2ChordMark from '../../../src/converters/chordPro2ChordMark';

const dataDir = path.resolve(__dirname + '/data');
const input1 = fs.readFileSync(dataDir + '/inputChordPro1.cho', 'utf-8');
const output1 = fs.readFileSync(dataDir + '/outputChordMark1.txt', 'utf-8');

describe('Module', () => {
	test('Should expose a function', () => {
		expect(typeof chordPro2ChordMark).toBe('function');
	});
});

describe('chordPro2ChordMark', () => {
	describe.each([['base test', input1, output1]])(
		'%s',
		(title, input, output) => {
			test('should produce expected ChordMark markup', () => {
				const converted = chordPro2ChordMark(input);
				expect(converted).toBe(output);
			});
		}
	);
});
