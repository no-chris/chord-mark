import stripTags from '../../../../../src/core/dom/stripTags';
import { forEachChordInChordLine } from '../../../../../src/parser/helper/songs';

import chordLyricsSpacer from '../../../../../src/renderer/spacers/chord/chordLyrics';
import parseLyricLine from '../../../../../src/parser/parseLyricLine';
import parseChordLine from '../../../../../src/parser/parseChordLine';
import renderLyricLine from '../../../../../src/renderer/components/renderLyricLine';
import renderChordLine from '../../../../../src/renderer/components/renderChordLine';
import getChordSymbol from '../../../../../src/renderer/helpers/getChordSymbol';

describe('chordLyricsSpacer', () => {
	test('Module', () => {
		expect(chordLyricsSpacer).toBeInstanceOf(Function);
	});
});

describe.each([
	[
		'Single character chords',
		'A D A E',
		'_Put me _on top _of the correct _lyrics',
		'|A     |D     |A             |E    |',
		'Put me on top of the correct lyrics',
	],
	[
		'Long chords names',
		'Am Dm7 A7(b9) E7',
		'_Put me _on top _of the correct _lyrics',
		'|Ami   |Dmi7  |A7(b9)        |E7   |',
		'Put me on top of the correct lyrics',
	],
	[
		'Multiple chords per bar',
		'A.. B.. Dm7 A.. Gmi. F7. E7',
		'_Put _me _on top _of _the _correct _lyrics',
		'|A  B  |Dmi7  |A Gmi F7      |E7   |',
		'Put me on top of the correct lyrics',
	],
	[
		'Lyrics shorter than chords names should be spaced',
		'A7(b9).. BmiMa7.. Dmi7 A7(b9).. Gmi13. F7(b9,#11). E7',
		'_Put _me _on top _of _the _correct _lyrics',
		'|A7(b9) BmiMa7 |Dmi7  |A7(b9) Gmi13 F7(b9,#11) |E7   |',
		'Put     me     on top of      the   correct    lyrics',
	],
	[
		'Chord symbol size equals lyric token size',
		'Ami7 Bmi D13 F13',
		'_Put _me _on _top',
		'|Ami7 |Bmi |D13 |F13 |',
		'Put   me   on   top',
	],
	[
		'Chord token size (incl separator and space) equals lyric token size',
		'A7 B D F7',
		'_Put _me _on _top',
		'|A7 |B |D |F7 |',
		'Put me on top',
	],
	[
		'Extra chord position markers should be ignored',
		'A7 B',
		'_Put _me _on _top',
		'|A7 |B |',
		'Put me on top',
	],
	[
		'Spacing of extra chords should be kept (2 by default)',
		'A7 B C7 B7 F7',
		'_Put me _on top',
		'|A7    |B    |C7  |B7  |F7  |',
		'Put me on top',
	],
	[
		'No position markers: default spacing should be kept (2 by default)',
		'A B C D',
		'I do not know where to put the chords',
		'|A  |B  |C  |D  |',
		'I do not know where to put the chords',
	],
	[
		'Edge case: no lyrics, single character chord!',
		'A B C D',
		'_ _ _ _',
		'|A |B |C |D  |',
		'',
	],
	[
		'A position marker followed by a space should create space for the full chord name',
		'Ami7(#11) B7(b9)',
		'_ A _ second chord shortly after the first one',
		'|Ami7(#11)   |B7(b9)                                         |',
		'           A         second chord shortly after the first one',
	],
	[
		'offset the chord rendering if the first position marker is > 0',
		'Ami7(#11) B7(b9)',
		'The first chord comes a bit _later, nice _hu?',
		'                            |Ami7(#11)  |B7(b9) |',
		'The first chord comes a bit later, nice hu?',
	],
])(
	'%s',
	(
		title,
		chordLineInput,
		LyricsLineInput,
		chordsLineOutput,
		LyricsLineOutput
	) => {
		test('Correctly space chord & lyrics lines', () => {
			const parsedLyrics = parseLyricLine(LyricsLineInput);

			const parsedChords = parseChordLine(chordLineInput);
			const parsedChordsWithSymbols = forEachChordInChordLine(
				parsedChords,
				(chord) => {
					chord.symbol = getChordSymbol(chord.model);
				}
			);
			const { chordLine, lyricsLine } = chordLyricsSpacer(
				parsedChordsWithSymbols,
				parsedLyrics
			);

			const renderedChords = renderChordLine(chordLine);
			const renderedLyrics = renderLyricLine({ model: lyricsLine });

			expect(stripTags(renderedChords)).toEqual(chordsLineOutput);
			expect(stripTags(renderedLyrics)).toEqual(LyricsLineOutput);
		});
	}
);
