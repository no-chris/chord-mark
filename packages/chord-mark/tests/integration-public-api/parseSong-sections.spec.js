import { parseSong } from '../../src/chordMark';
import song from './helpers/songInput';
import {
	sectionWithContent,
	sectionCopy,
	sectionMultiply,
	customSection,
} from './fixtures/songs';

describe('parseSong - sections', () => {
	describe.each([
		['#v', 'v'],
		['#c', 'c'],
		['#i', 'i'],
		['#b', 'b'],
		['#o', 'o'],
		['#s', 's'],
		['#a', 'a'],
		['#p', 'p'],
		['#u', 'u'],
	])('parses section label %s', (input, expectedLabel) => {
		test(`recognizes ${input} as sectionLabel`, () => {
			const parsed = parseSong(song(input));
			expect(parsed.allLines[0].type).toBe('sectionLabel');
			expect(parsed.allLines[0].model.label).toBe(expectedLabel);
		});
	});

	test('parses section with content', () => {
		const parsed = parseSong(sectionWithContent());
		const sectionLabels = parsed.allLines.filter(
			(l) => l.type === 'sectionLabel'
		);
		expect(sectionLabels).toHaveLength(2);
		expect(sectionLabels[0].model.label).toBe('v');
		expect(sectionLabels[1].model.label).toBe('c');
	});

	test('section copy repeats chord and lyric lines', () => {
		const parsed = parseSong(sectionCopy());
		const sectionLabels = parsed.allLines.filter(
			(l) => l.type === 'sectionLabel'
		);
		expect(sectionLabels).toHaveLength(3);

		// Each section gets its own chord line (original + 2 copies)
		const chordLines = parsed.allLines.filter((l) => l.type === 'chord');
		expect(chordLines).toHaveLength(3);
		// Copied chord lines have the same content
		expect(chordLines[1].string).toBe('C G');
		expect(chordLines[2].string).toBe('C G');
	});

	test('section copy marks exactly the copied lines as isFromSectionCopy', () => {
		const parsed = parseSong(sectionCopy());
		const copiedLines = parsed.allLines.filter(
			(l) => l.isFromSectionCopy
		);
		// 2 copied sections × 3 lines each (sectionLabel + chord + lyric)
		expect(copiedLines).toHaveLength(6);
		expect(copiedLines.map((l) => l.type)).toEqual([
			'sectionLabel',
			'chord',
			'lyric',
			'sectionLabel',
			'chord',
			'lyric',
		]);
	});

	test('section multiply x2 duplicates section lines', () => {
		const parsed = parseSong(sectionMultiply());
		const sectionLabels = parsed.allLines.filter(
			(l) => l.type === 'sectionLabel'
		);
		// x2 creates 2 section label lines (original + multiplied)
		expect(sectionLabels).toHaveLength(2);
		expect(sectionLabels[0].model.multiplyTimes).toBe(2);
		expect(sectionLabels[1].isFromSectionMultiply).toBe(true);
	});

	test('section multiply marks exactly the multiplied lines', () => {
		const parsed = parseSong(sectionMultiply());
		const multipliedLines = parsed.allLines.filter(
			(l) => l.isFromSectionMultiply
		);
		// x2 creates 1 additional copy: sectionLabel + chord + lyric = 3 lines
		expect(multipliedLines).toHaveLength(3);
		expect(multipliedLines.map((l) => l.type)).toEqual([
			'sectionLabel',
			'chord',
			'lyric',
		]);
	});

	test('parses custom section label', () => {
		const parsed = parseSong(customSection());
		expect(parsed.allLines[0].type).toBe('sectionLabel');
		expect(parsed.allLines[0].model.label).toBe('special');
		expect(parsed.allLines[0].model.string).toBe('#special');
	});

	test('section label with index', () => {
		const parsed = parseSong(song('#v', '#v', '#v'));
		const sectionLabels = parsed.allLines.filter(
			(l) => l.type === 'sectionLabel'
		);
		expect(sectionLabels).toHaveLength(3);
		expect(sectionLabels[0].index).toBe(1);
		expect(sectionLabels[1].index).toBe(2);
		expect(sectionLabels[2].index).toBe(3);
	});

	test('auto-repeat chords marks exactly the repeated chord line', () => {
		const parsed = parseSong(
			song('#v', 'C G', 'line1', '', '#v', 'line2')
		);
		const autoRepeatLines = parsed.allLines.filter(
			(l) => l.isFromAutoRepeatChords
		);
		// Only the chord line in verse 2 is auto-repeated
		expect(autoRepeatLines).toHaveLength(1);
		expect(autoRepeatLines[0].type).toBe('chord');
		expect(autoRepeatLines[0].string).toBe('C G');
	});
});
