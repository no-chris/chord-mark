import mergeBarSplitLines from '../../../../src/renderer/helpers/mergeBarSplitLines';

function chordLine(
	allBars,
	{ hasContinuation = false, pendingBar = null } = {}
) {
	return {
		type: 'chord',
		model: { allBars, hasContinuation, pendingBar },
	};
}

function bar(chords, { isContinuation = false } = {}) {
	return {
		allChords: chords.map((c) => ({
			symbol: c.symbol,
			duration: c.duration,
		})),
		isContinuation,
		hasUnevenChordsDurations: false,
	};
}

function chord(symbol, duration = 4) {
	return { symbol, duration };
}

function lyricLine(text) {
	return { type: 'lyric', string: text };
}

describe('mergeBarSplitLines', () => {
	test('returns lines unchanged when no splits', () => {
		const lines = [
			chordLine([bar([chord('A'), chord('B')])]),
			lyricLine('lyrics'),
		];
		const result = mergeBarSplitLines([...lines]);
		expect(result.length).toBe(2);
		expect(result[0].type).toBe('chord');
		expect(result[1].type).toBe('lyric');
	});

	test('merges incomplete bar with continuation bar', () => {
		const lines = [
			chordLine([bar([chord('A')]), bar([chord('D', 3)])], {
				hasContinuation: true,
			}),
			lyricLine('lyrics'),
			chordLine([bar([chord('G', 1)], { isContinuation: true })]),
			lyricLine('lyrics 2'),
		];
		const result = mergeBarSplitLines(lines);

		expect(result.length).toBe(3);
		// Merged chord line
		expect(result[0].type).toBe('chord');
		expect(result[0].model.allBars.length).toBe(2);
		expect(result[0].model.allBars[0].allChords[0].symbol).toBe('A');
		const mergedBar = result[0].model.allBars[1];
		expect(mergedBar.allChords.length).toBe(2);
		expect(mergedBar.allChords[0].symbol).toBe('D');
		expect(mergedBar.allChords[1].symbol).toBe('G');
		// hasContinuation cleared after merge
		expect(result[0].model.hasContinuation).toBe(false);
		// Lyrics preserved
		expect(result[1].type).toBe('lyric');
		expect(result[1].string).toBe('lyrics');
		expect(result[2].type).toBe('lyric');
		expect(result[2].string).toBe('lyrics 2');
	});

	test('remaining bars from continuation go to separate line', () => {
		const lines = [
			chordLine([bar([chord('A')]), bar([chord('D', 3)])], {
				hasContinuation: true,
			}),
			lyricLine('lyrics'),
			chordLine([
				bar([chord('G', 1)], { isContinuation: true }),
				bar([chord('C')]),
				bar([chord('E')]),
			]),
			lyricLine('lyrics 2'),
		];
		const result = mergeBarSplitLines(lines);

		expect(result.length).toBe(4);
		// Merged line: |A| |D G|
		expect(result[0].model.allBars.length).toBe(2);
		expect(result[0].model.allBars[0].allChords[0].symbol).toBe('A');
		const mergedBar = result[0].model.allBars[1];
		expect(mergedBar.allChords.length).toBe(2);
		expect(mergedBar.allChords[0].symbol).toBe('D');
		expect(mergedBar.allChords[1].symbol).toBe('G');
		expect(result[0].model.hasContinuation).toBe(false);
		// Lyric line
		expect(result[1].type).toBe('lyric');
		expect(result[1].string).toBe('lyrics');
		// Remaining bars: |C| |E|
		expect(result[2].type).toBe('chord');
		expect(result[2].model.allBars.length).toBe(2);
		expect(result[2].model.allBars[0].allChords[0].symbol).toBe('C');
		expect(result[2].model.allBars[1].allChords[0].symbol).toBe('E');
		// Second lyrics
		expect(result[3].type).toBe('lyric');
		expect(result[3].string).toBe('lyrics 2');
	});

	test('chained splits merge correctly across three lines', () => {
		const lines = [
			chordLine([bar([chord('C')]), bar([chord('G', 3)])], {
				hasContinuation: true,
			}),
			lyricLine('line 1'),
			chordLine(
				[
					bar([chord('D', 1)], { isContinuation: true }),
					bar([chord('A')]),
					bar([chord('D2', 3)]),
				],
				{ hasContinuation: true }
			),
			lyricLine('line 2'),
			chordLine([
				bar([chord('G2', 1)], { isContinuation: true }),
				bar([chord('C2')]),
			]),
			lyricLine('line 3'),
		];
		const result = mergeBarSplitLines(lines);

		expect(result.length).toBe(6);
		// Line 1 merged: |C| |G D|
		expect(result[0].model.allBars.length).toBe(2);
		expect(result[0].model.allBars[0].allChords[0].symbol).toBe('C');
		expect(result[0].model.allBars[1].allChords.length).toBe(2);
		expect(result[0].model.allBars[1].allChords[0].symbol).toBe('G');
		expect(result[0].model.allBars[1].allChords[1].symbol).toBe('D');
		expect(result[0].model.hasContinuation).toBe(false);
		// Lyric 1
		expect(result[1].type).toBe('lyric');
		expect(result[1].string).toBe('line 1');
		// Remaining from first continuation becomes new split: |A| |D2|
		// which merges with third chord line: |A| |D2 G2|
		expect(result[2].model.allBars.length).toBe(2);
		expect(result[2].model.allBars[0].allChords[0].symbol).toBe('A');
		expect(result[2].model.allBars[1].allChords.length).toBe(2);
		expect(result[2].model.allBars[1].allChords[0].symbol).toBe('D2');
		expect(result[2].model.allBars[1].allChords[1].symbol).toBe('G2');
		expect(result[2].model.hasContinuation).toBe(false);
		// Lyric 2
		expect(result[3].type).toBe('lyric');
		expect(result[3].string).toBe('line 2');
		// Remaining from second continuation: |C2|
		expect(result[4].model.allBars.length).toBe(1);
		expect(result[4].model.allBars[0].allChords[0].symbol).toBe('C2');
		// Lyric 3
		expect(result[5].type).toBe('lyric');
		expect(result[5].string).toBe('line 3');
	});

	test('sets hasUnevenChordsDurations on merged bar', () => {
		const lines = [
			chordLine([bar([chord('D', 3)])], { hasContinuation: true }),
			chordLine([bar([chord('G', 1)], { isContinuation: true })]),
		];
		const result = mergeBarSplitLines(lines);

		const mergedBar = result[0].model.allBars[0];
		expect(mergedBar.hasUnevenChordsDurations).toBe(true);
	});

	test('even durations do not flag hasUnevenChordsDurations', () => {
		const lines = [
			chordLine([bar([chord('C', 2)])], { hasContinuation: true }),
			chordLine([bar([chord('D', 2)], { isContinuation: true })]),
		];
		const result = mergeBarSplitLines(lines);

		const mergedBar = result[0].model.allBars[0];
		expect(mergedBar.hasUnevenChordsDurations).toBe(false);
	});

	test('skips single lyric line between split and continuation', () => {
		const lines = [
			chordLine([bar([chord('A')]), bar([chord('D', 3)])], {
				hasContinuation: true,
			}),
			lyricLine('lyric 1'),
			chordLine([bar([chord('G', 1)], { isContinuation: true })]),
		];
		const result = mergeBarSplitLines(lines);

		expect(result.length).toBe(2);
		// Merged chord line: |A| |D G|
		expect(result[0].type).toBe('chord');
		expect(result[0].model.allBars.length).toBe(2);
		const mergedBar = result[0].model.allBars[1];
		expect(mergedBar.allChords.length).toBe(2);
		expect(mergedBar.allChords[0].symbol).toBe('D');
		expect(mergedBar.allChords[1].symbol).toBe('G');
		// Lyric preserved
		expect(result[1].type).toBe('lyric');
		expect(result[1].string).toBe('lyric 1');
	});

	test('clears pendingBar on merged model', () => {
		const pendingBar = { currentBeatCount: 3 };
		const lines = [
			chordLine([bar([chord('D', 3)])], {
				hasContinuation: true,
				pendingBar,
			}),
			chordLine([bar([chord('G', 1)], { isContinuation: true })]),
		];
		const result = mergeBarSplitLines(lines);
		expect(result[0].model.pendingBar).toBeNull();
	});
});
