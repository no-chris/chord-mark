import { parseSong } from '../../src/chordMark';
import song from './helpers/songInput';
import {
	singleChord,
	multipleChords,
	multipleBars,
	barRepeat,
	chordLineRepeat,
	noChord,
	subBeatGroup,
	multipleSubBeatGroups,
	positionedChords,
} from './fixtures/songs';

describe('parseSong - chords', () => {
	test('parses a single chord line', () => {
		const parsed = parseSong(singleChord());
		expect(parsed.allLines).toHaveLength(1);
		expect(parsed.allLines[0].type).toBe('chord');
		expect(parsed.allLines[0].model.allBars).toHaveLength(1);
		expect(parsed.allLines[0].model.allBars[0].allChords).toHaveLength(1);
		expect(parsed.allLines[0].model.allBars[0].allChords[0].duration).toBe(
			4
		);
	});

	test('parses multiple chords with beat dots', () => {
		const parsed = parseSong(multipleChords());
		const bar = parsed.allLines[0].model.allBars[0];
		expect(bar.allChords).toHaveLength(2);
		expect(bar.allChords[0].duration).toBe(2);
		expect(bar.allChords[1].duration).toBe(2);
		expect(bar.hasUnevenChordsDurations).toBe(false);
	});

	test('parses multiple bars (one chord per bar)', () => {
		const parsed = parseSong(multipleBars());
		expect(parsed.allLines[0].model.allBars).toHaveLength(4);
	});

	test('parses bar repeat (%)', () => {
		const parsed = parseSong(song('C G %'));
		const bars = parsed.allLines[0].model.allBars;
		expect(bars).toHaveLength(3);
		expect(bars[0].isRepeated).toBe(false);
		expect(bars[1].isRepeated).toBe(false);
		expect(bars[2].isRepeated).toBe(true);
	});

	test('parses chord line repeat (%%)', () => {
		// %% repeats the 2nd-to-last chord line
		const parsed = parseSong(
			song('C.. G..', 'First line', 'Am.. F..', 'Second line', '%%')
		);
		const chordLines = parsed.allLines.filter((l) => l.type === 'chord');
		expect(chordLines).toHaveLength(3);
		expect(chordLines[0].isFromChordLineRepeater).toBeFalsy();
		expect(chordLines[1].isFromChordLineRepeater).toBeFalsy();
		expect(chordLines[2].isFromChordLineRepeater).toBe(true);
		// %% repeats the 1st chord line (C.. G..), not the 2nd (Am.. F..)
		expect(chordLines[2].model.allBars[0].allChords[0].string).toBe('C..');
		expect(chordLines[2].model.allBars[0].allChords[1].string).toBe('G..');
	});

	test('parses no-chord (NC)', () => {
		const parsed = parseSong(song('C NC'));
		const bars = parsed.allLines[0].model.allBars;
		expect(bars).toHaveLength(2);
		// NC chords have a special model structure
		expect(bars[0].allChords[0].string).toBe('C');
		expect(bars[1].allChords[0].string).toBe('NC');
	});

	test('parses sub-beat groups', () => {
		const parsed = parseSong(song('C... [Am G]'));
		const bar = parsed.allLines[0].model.allBars[0];
		expect(bar.allChords).toHaveLength(3);
		expect(bar.allChords[0].isInSubBeatGroup).toBe(false);
		expect(bar.allChords[0].duration).toBe(3);
		expect(bar.allChords[1].isInSubBeatGroup).toBe(true);
		expect(bar.allChords[1].isFirstOfSubBeat).toBe(true);
		expect(bar.allChords[1].isLastOfSubBeat).toBe(false);
		expect(bar.allChords[1].duration).toBe(0.5);
		expect(bar.allChords[2].isInSubBeatGroup).toBe(true);
		expect(bar.allChords[2].isFirstOfSubBeat).toBe(false);
		expect(bar.allChords[2].isLastOfSubBeat).toBe(true);
		expect(bar.allChords[2].duration).toBe(0.5);
	});

	test('parses multiple sub-beat groups', () => {
		const parsed = parseSong(song('C.. [Am G] [F E]'));
		const bar = parsed.allLines[0].model.allBars[0];
		expect(bar.allChords).toHaveLength(5);
		expect(bar.allChords[0].isInSubBeatGroup).toBe(false);
		expect(bar.allChords[0].string).toBe('C..');
		expect(bar.allChords[1].isInSubBeatGroup).toBe(true);
		expect(bar.allChords[1].isFirstOfSubBeat).toBe(true);
		expect(bar.allChords[2].isInSubBeatGroup).toBe(true);
		expect(bar.allChords[2].isLastOfSubBeat).toBe(true);
		expect(bar.allChords[3].isInSubBeatGroup).toBe(true);
		expect(bar.allChords[3].isFirstOfSubBeat).toBe(true);
		expect(bar.allChords[4].isInSubBeatGroup).toBe(true);
		expect(bar.allChords[4].isLastOfSubBeat).toBe(true);
	});

	test('parses positioned chords with _ markers', () => {
		const parsed = parseSong(positionedChords());
		expect(parsed.allLines[0].type).toBe('chord');
		expect(parsed.allLines[0].model.hasPositionedChords).toBe(true);
		expect(parsed.allLines[1].type).toBe('lyric');
		expect(parsed.allLines[1].model.chordPositions).toEqual([0, 8, 10, 13, 22]);
		expect(parsed.allLines[1].model.lyrics).toBe(' Mother Mary comes to me');
	});

	test('allChords aggregates unique chords with occurrences and duration', () => {
		const parsed = parseSong(song('C G C Am'));
		expect(parsed.allChords).toHaveLength(3);
		const chordC = parsed.allChords.find(
			(c) => c.model.formatted.rootNote === 'C' && !c.model.formatted.bassNote
		);
		expect(chordC).toBeDefined();
		expect(chordC.occurrences).toBe(2);
		expect(chordC.duration).toBe(8);
	});

	test('allChords marks first and last chord', () => {
		const parsed = parseSong(song('C G Am'));
		expect(parsed.allChords).toHaveLength(3);
		expect(parsed.allChords[0].isFirst).toBe(true);
		expect(parsed.allChords[0].model.formatted.rootNote).toBe('C');
		expect(parsed.allChords[2].isLast).toBe(true);
		expect(parsed.allChords[2].model.formatted.rootNote).toBe('A');
	});

	test('chord beat property indicates position in bar', () => {
		const parsed = parseSong(song('C. D. E. F.'));
		const chords = parsed.allLines[0].model.allBars[0].allChords;
		expect(chords[0].beat).toBe(1);
		expect(chords[1].beat).toBe(2);
		expect(chords[2].beat).toBe(3);
		expect(chords[3].beat).toBe(4);
	});

	test('hasUnevenChordsDurations flag is set correctly', () => {
		const parsed = parseSong(song('C... G.'));
		const bar = parsed.allLines[0].model.allBars[0];
		expect(bar.hasUnevenChordsDurations).toBe(true);
	});

	test('bar timeSignature defaults to 4/4', () => {
		const parsed = parseSong(song('C.. G..'));
		const bar = parsed.allLines[0].model.allBars[0];
		expect(bar.timeSignature.string).toBe('4/4');
		expect(bar.timeSignature.beatCount).toBe(4);
	});
});
