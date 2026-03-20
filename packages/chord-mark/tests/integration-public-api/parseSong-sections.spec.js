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

	test('section copy repeats chord lines', () => {
		const parsed = parseSong(sectionCopy());
		const sectionLabels = parsed.allLines.filter(
			(l) => l.type === 'sectionLabel'
		);
		expect(sectionLabels).toHaveLength(3);

		// Copied sections should have chords from auto-repeat
		const chordLines = parsed.allLines.filter((l) => l.type === 'chord');
		expect(chordLines.length).toBeGreaterThanOrEqual(2);
	});

	test('section copy marks lines as isFromSectionCopy', () => {
		const parsed = parseSong(sectionCopy());
		const copiedLines = parsed.allLines.filter(
			(l) => l.isFromSectionCopy
		);
		expect(copiedLines.length).toBeGreaterThan(0);
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

	test('section multiply marks lines as isFromSectionMultiply', () => {
		const parsed = parseSong(sectionMultiply());
		const multipliedLines = parsed.allLines.filter(
			(l) => l.isFromSectionMultiply
		);
		expect(multipliedLines.length).toBeGreaterThan(0);
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

	test('auto-repeat chords marks lines as isFromAutoRepeatChords', () => {
		const parsed = parseSong(
			song('#v', 'C G', 'line1', '', '#v', 'line2')
		);
		const autoRepeatLines = parsed.allLines.filter(
			(l) => l.isFromAutoRepeatChords
		);
		expect(autoRepeatLines.length).toBeGreaterThan(0);
	});
});
