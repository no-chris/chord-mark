import { forEachChordInSong, forEachChordInChordLine } from '../../../../src/renderer/helper/songs';

import parseSong from '../../../../src/parser/parseSong';
import parseChordLine from '../../../../src/parser/parseChordLine';

describe('forEachChordInSong', () => {
	test('Module', () => {
		expect(forEachChordInSong).toBeInstanceOf(Function);
	});

	test('Does not mutate input', () => {
		const song = `
E E
You don't have to be rich to be my girl
D D
You don't have to be cool to rule my world
E E
Ain't no particular sign I'm more compatible with
D D
I just want your extra time and your...Kiss
		`;
		const parsed = parseSong(song);
		const applied = forEachChordInSong(parsed.allLines, () => true);

		expect(parsed).not.toBe(applied);
	});

	test('Should apply function on each chord', () => {
		expect.assertions(8);

		const song = `
E E
You don't have to be rich to be my girl
D D
You don't have to be cool to rule my world
E E
Ain't no particular sign I'm more compatible with
D D
I just want your extra time and your...Kiss
		`;
		const parsed = parseSong(song);
		const applied = forEachChordInSong(parsed.allLines, chord => chord.applied = true);

		applied.forEach(line => {
			if (line.type === 'chord') {
				line.model.allBars.forEach(bar => {
					bar.allChords.forEach(chord => {
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
		const applied = forEachChordInChordLine(parsed, chord => chord.applied = true);

		applied.allBars.forEach(bar => {
			bar.allChords.forEach(chord => {
				expect(chord.applied).toBe(true);
			});
		});
	});
});
