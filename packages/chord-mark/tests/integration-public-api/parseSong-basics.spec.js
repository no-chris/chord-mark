import { parseSong, lineTypes } from '../../src/chordMark';
import song from './helpers/songInput';
import {
	lyricsOnly,
	emptyLines,
	singleChordWithLyrics,
	lyricWithColonPrefix,
	htmlInInput,
} from './fixtures/songs';

describe('parseSong - basics', () => {
	test('accepts a multiline string as input', () => {
		const parsed = parseSong(singleChordWithLyrics());
		expect(parsed).toHaveProperty('allLines');
		expect(parsed).toHaveProperty('allChords');
		expect(parsed).toHaveProperty('allKeys');
	});

	test('accepts an array as input', () => {
		const input = [
			'When I find myself in times of trouble',
			'Mother Mary comes to me',
		];
		const parsed = parseSong(input);
		expect(parsed.allLines).toHaveLength(2);
		expect(parsed.allLines[0].type).toBe('lyric');
		expect(parsed.allLines[1].type).toBe('lyric');
	});

	test('parses lyrics only', () => {
		const parsed = parseSong(lyricsOnly());
		expect(parsed.allLines).toHaveLength(2);
		parsed.allLines.forEach((line) => {
			expect(line.type).toBe('lyric');
		});
		expect(parsed.allLines[0].string).toBe(
			'When I find myself in times of trouble'
		);
		expect(parsed.allLines[0].model.lyrics).toBe(
			'When I find myself in times of trouble'
		);
		expect(parsed.allLines[0].model.chordPositions).toEqual([]);
	});

	test('parses empty lines', () => {
		const parsed = parseSong(emptyLines());
		const emptyLineTypes = parsed.allLines.filter(
			(l) => l.type === 'emptyLine'
		);
		expect(emptyLineTypes.length).toBe(2);
	});

	test('handles lyric line with : prefix', () => {
		const parsed = parseSong(lyricWithColonPrefix());
		expect(parsed.allLines).toHaveLength(1);
		expect(parsed.allLines[0].type).toBe('lyric');
		expect(parsed.allLines[0].model.lyrics).toBe(
			'This is an escaped lyric line'
		);
	});

	test('strips HTML from input', () => {
		const parsed = parseSong(htmlInInput());
		expect(parsed.allLines).toHaveLength(2);
		parsed.allLines.forEach((line) => {
			expect(line.string).not.toContain('<');
			expect(line.string).not.toContain('>');
		});
	});

	test('returns correct allChords for lyrics only', () => {
		const parsed = parseSong(lyricsOnly());
		expect(parsed.allChords).toEqual([]);
	});

	test('returns correct allKeys for no key declaration', () => {
		const parsed = parseSong(lyricsOnly());
		expect(parsed.allKeys.explicit).toEqual([]);
	});

	test('returns allLines with type, string, and model', () => {
		const parsed = parseSong(song('C', 'A lyric'));
		parsed.allLines.forEach((line) => {
			expect(line).toHaveProperty('type');
			expect(line).toHaveProperty('string');
			expect(line).toHaveProperty('model');
		});
	});

	test('line types match lineTypes enum values', () => {
		const parsed = parseSong(
			song('4/4', 'key C', '#v', 'C G', 'A lyric', '')
		);
		const types = parsed.allLines.map((l) => l.type);
		expect(types).toContain(lineTypes.TIME_SIGNATURE);
		expect(types).toContain(lineTypes.KEY_DECLARATION);
		expect(types).toContain(lineTypes.SECTION_LABEL);
		expect(types).toContain(lineTypes.CHORD);
		expect(types).toContain(lineTypes.LYRIC);
		expect(types).toContain(lineTypes.EMPTY_LINE);
	});

	test('empty string input produces empty result', () => {
		const parsed = parseSong('');
		expect(parsed.allLines).toHaveLength(1);
		expect(parsed.allLines[0].type).toBe('emptyLine');
	});
});
