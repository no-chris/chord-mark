import { parseSong } from '../../src/chordMark';
import song from './helpers/songInput';

describe('parseSong - time signatures', () => {
	test('parses standalone time signature line', () => {
		const parsed = parseSong(song('4/4', 'C'));
		expect(parsed.allLines[0].type).toBe('timeSignature');
		expect(parsed.allLines[0].string).toBe('4/4');
		expect(parsed.allLines[0].model.string).toBe('4/4');
		expect(parsed.allLines[0].model.beatCount).toBe(4);
	});

	test('default time signature is 4/4', () => {
		const parsed = parseSong(song('C.. G..'));
		const bar = parsed.allLines[0].model.allBars[0];
		expect(bar.timeSignature.string).toBe('4/4');
	});

	describe.each([
		['1/2', 2],
		['2/2', 4],
		['3/2', 6],
		['4/2', 8],
		['1/4', 1],
		['2/4', 2],
		['3/4', 3],
		['4/4', 4],
		['5/4', 5],
		['6/4', 6],
		['7/4', 7],
		['9/4', 9],
		['10/4', 10],
		['3/8', 1],
		['4/8', 4 / 3],
		['5/8', 5 / 3],
		['6/8', 2],
		['7/8', 7 / 3],
		['9/8', 3],
		['12/8', 4],
	])('parses %s time signature', (ts, expectedBeatCount) => {
		test(`${ts} has beatCount ${expectedBeatCount}`, () => {
			const parsed = parseSong(song(ts, 'C'));
			const tsLine = parsed.allLines.find(
				(l) => l.type === 'timeSignature'
			);
			expect(tsLine).toBeDefined();
			expect(tsLine.model.string).toBe(ts);
			expect(tsLine.model.beatCount).toBe(expectedBeatCount);
		});
	});

	test('3/4 affects chord parsing', () => {
		const parsed = parseSong(song('3/4', 'C. D. E.'));
		const bar = parsed.allLines[1].model.allBars[0];
		expect(bar.timeSignature.string).toBe('3/4');
		expect(bar.allChords).toHaveLength(3);
		bar.allChords.forEach((chord) => {
			expect(chord.duration).toBe(1);
		});
	});

	test('inline time signature change', () => {
		const parsed = parseSong(song('4/4', '2/4 G 4/4 Am'));
		const chordLine = parsed.allLines[1];
		expect(chordLine.type).toBe('chord');
		const bars = chordLine.model.allBars;
		expect(bars).toHaveLength(2);
		expect(bars[0].timeSignature.string).toBe('2/4');
		expect(bars[1].timeSignature.string).toBe('4/4');
		expect(bars[0].lineHadTimeSignatureChange).toBe(true);
	});

	test('6/8 time signature', () => {
		const parsed = parseSong(song('6/8', 'Am F'));
		const bars = parsed.allLines[1].model.allBars;
		expect(bars[0].timeSignature.string).toBe('6/8');
		expect(bars).toHaveLength(2);
		expect(bars[0].allChords[0].duration).toBe(2);
		expect(bars[1].allChords[0].duration).toBe(2);
	});
});
