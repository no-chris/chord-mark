import {
	forEachBarInSong,
	forEachChordInSong,
	forEachChordInChordLine,
	getNthOfLabel,
} from '../../../../src/parser/helper/songs';

import parseSong from '../../../../src/parser/parseSong';
import parseChordLine from '../../../../src/parser/parseChordLine';

const song = `
E E... Eb.
You don't have to be rich to be my girl
D D... Eb.
You don't have to be cool to rule my world
E E... Eb.
Ain't no particular sign I'm more compatible with
D D... Eb.
I just want your extra time and your...Kiss`;

describe('forEachBarInSong', () => {
	test('Does not mutate input', () => {
		const parsed = parseSong(song);
		const applied = forEachBarInSong(parsed.allLines, () => true);

		expect(parsed).not.toBe(applied);
	});

	test('Should apply function on each bar', () => {
		expect.assertions(8);

		const parsed = parseSong(song);
		const applied = forEachBarInSong(
			parsed.allLines,
			(bar) => (bar.applied = true)
		);

		applied.forEach((line) => {
			if (line.type === 'chord') {
				line.model.allBars.forEach((bar) => {
					expect(bar.applied).toBe(true);
				});
			}
		});
	});
});

describe('forEachChordInSong', () => {
	test('Module', () => {
		expect(forEachChordInSong).toBeInstanceOf(Function);
	});

	test('Does not mutate input', () => {
		const parsed = parseSong(song);
		const applied = forEachChordInSong(parsed.allLines, () => true);

		expect(parsed).not.toBe(applied);
	});

	test('Should apply function on each chord', () => {
		expect.assertions(12);

		const parsed = parseSong(song);
		const applied = forEachChordInSong(
			parsed.allLines,
			(chord) => (chord.applied = true)
		);

		applied.forEach((line) => {
			if (line.type === 'chord') {
				line.model.allBars.forEach((bar) => {
					bar.allChords.forEach((chord) => {
						expect(chord.applied).toBe(true);
					});
				});
			}
		});
	});
});

describe('forEachChordInChordLine', () => {
	test('Module', () => {
		expect(forEachChordInChordLine).toBeInstanceOf(Function);
	});

	test('Does not mutate input', () => {
		const chordLine = 'Am... G/B. C';
		const parsed = parseChordLine(chordLine);
		const applied = forEachChordInChordLine(parsed, () => true);

		expect(parsed).not.toBe(applied);
	});

	test('Should apply function on each chord', () => {
		expect.assertions(3);

		const chordLine = 'Am... G/B. C';
		const parsed = parseChordLine(chordLine);
		const applied = forEachChordInChordLine(
			parsed,
			(chord) => (chord.applied = true)
		);

		applied.allBars.forEach((bar) => {
			bar.allChords.forEach((chord) => {
				expect(chord.applied).toBe(true);
			});
		});
	});

	test('Should provide the proper barIndex and chordIndex', () => {
		expect.assertions(32);

		const chordLine = 'Am... G/B.   C    E. F. G. B7.    Em';
		const parsed = parseChordLine(chordLine);
		const applied = forEachChordInChordLine(
			parsed,
			(chord, chordIndex, barIndex) => {
				chord.chordIndex = chordIndex;
				chord.barIndex = barIndex;
			}
		);

		let i = 0;
		const expected = [
			[0, 0],
			[0, 1],

			[1, 0],

			[2, 0],
			[2, 1],
			[2, 2],
			[2, 3],

			[3, 0],
		];
		applied.allBars.forEach((bar, barIndex) => {
			bar.allChords.forEach((chord, chordIndex) => {
				expect(chord.barIndex).toBe(expected[i][0]);
				expect(chord.barIndex).toBe(barIndex);
				expect(chord.chordIndex).toBe(expected[i][1]);
				expect(chord.chordIndex).toBe(chordIndex);
				i++;
			});
		});
	});
});

describe('getNthOfLabel', () => {
	test('Module', () => {
		expect(getNthOfLabel).toBeInstanceOf(Function);
	});

	test('Should return the section identified by its label and index', () => {
		const song2 = `
#v
Verse1-line1
Verse1-line2
Verse1-line3
Verse1-line4

#v
Verse2-line1
Verse2-line2
Verse2-line3
Verse2-line4

#v
Verse3-line1
Verse3-line2
Verse3-line3
Verse3-line4`;
		const parsed = parseSong(song2);

		const v1 = [
			'Verse1-line1',
			'Verse1-line2',
			'Verse1-line3',
			'Verse1-line4',
			'',
		];
		const v2 = [
			'Verse2-line1',
			'Verse2-line2',
			'Verse2-line3',
			'Verse2-line4',
			'',
		];
		const v3 = [
			'Verse3-line1',
			'Verse3-line2',
			'Verse3-line3',
			'Verse3-line4',
		];

		expect(getNthOfLabel(parsed.allLines, 'v', 0)).toEqual([]);
		expect(
			getNthOfLabel(parsed.allLines, 'v', 1).map((line) => line.string)
		).toEqual(v1);
		expect(
			getNthOfLabel(parsed.allLines, 'v', 2).map((line) => line.string)
		).toEqual(v2);
		expect(
			getNthOfLabel(parsed.allLines, 'v', 3).map((line) => line.string)
		).toEqual(v3);
		expect(getNthOfLabel(parsed.allLines, 'v', 4)).toEqual([]);
	});
});
