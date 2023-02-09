import stripTags from '../../../../../src/core/dom/stripTags';

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
		'|A     |D     |A             |E     |',
		' Put me on top of the correct lyrics',
	],
	[
		'Long chords names',
		'Am Dm7 A7(b9) E7',
		'_Put me _on top _of the correct _lyrics',
		'|Ami   |Dmi7  |A7(b9)        |E7    |',
		' Put me on top of the correct lyrics',
	],
	[
		'Multiple chords per bar',
		'A.. B.. Dm7 A.. Gmi. F7. E7',
		'_Put _me _on top _of _the _correct _lyrics',
		'|A   B |Dmi7  |A  Gmi F7     |E7    |',
		' Put me on top of the correct lyrics',
	],
	[
		'Lyrics shorter than chords names should be spaced',
		'A7(b9).. BmiMa7.. Dmi7 A7(b9).. Gmi13. F7(b9,#11). E7',
		'_Put _me _on top _of _the _correct _lyrics',
		'|A7(b9) BmiMa7 |Dmi7  |A7(b9) Gmi13 F7(b9,#11) |E7    |',
		' Put    me      on top of     the   correct     lyrics',
	],
	[
		'Chord symbol length equals lyric token length',
		'Ami7 Bmi D13 F13',
		'_Put _me _on _top',
		'|Ami7 |Bmi |D13 |F13 |',
		' Put   me   on   top',
	],
	[
		'Chord symbol length equals lyric token length minus 1',
		'Ami B7 D7 F13',
		'_Put _me _on _top',
		'|Ami |B7 |D7 |F13 |',
		' Put  me  on  top',
	],
	[
		'Chord symbol length equals lyric token length minus 2',
		'A7 B D F7',
		'_Put _me _on _top',
		'|A7 |B |D |F7 |',
		' Put me on top',
	],
	[
		'Chord token size (incl separator and space) equals lyric token size',
		'A7 B D F7',
		'_Put _me _on _top',
		'|A7 |B |D |F7 |',
		' Put me on top',
	],
	[
		'Extra chord position markers should be ignored',
		'A7 B',
		'_Put _me _on _top',
		'|A7 |B |',
		' Put me on top',
	],
	[
		'Spacing of extra chords should be reset to 1 (= default spacing for chordLyricsSpacer)',
		'A7 B C7 B7 F7',
		'_Put me _on top',
		'|A7    |B     |C7 |B7 |F7 |',
		' Put me on top',
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
		'|A |B |C |D |',
		'',
	],
	[
		'A position marker followed by a space should create space for the full chord name',
		'Ami7(#11) B7(b9)',
		'_ A _ second chord shortly after the first one',
		'|Ami7(#11) |B7(b9)                                        |',
		'          A       second chord shortly after the first one',
	],
	[
		'Starts with a chord before the lyric',
		'A B7',
		'_ A lyric _line',
		'|A       |B7  |',
		'  A lyric line',
	],
	[
		'offset the chord rendering if the first position marker is > 0',
		'Ami7(#11) B7(b9)',
		'The first chord comes a bit _later, nice _hu?',
		'                           |Ami7(#11)  |B7(b9) |',
		'The first chord comes a bit later, nice hu?',
	],
	[
		'take chords duration markers into account',
		'C13.. Dmi. E.',
		'_ a chord _li_ne',
		'|C13..        Dmi. E. |',
		'      a chord li   ne',
		{ shouldPrintChordsDuration: true },
	],
	[
		'take printBarSeparators into account',
		'A.. B.. Dm7 A.. Gmi. F7. E7',
		'_Put _me _on top _of _the _correct _lyrics',
		'A   B  Dmi7   A  Gmi F7      E7',
		'Put me on top of the correct lyrics',
		{ shouldPrintBarSeparators: false },
	],
	[
		'take printBarSeparators into account, with lyrics tokens starting with space',
		'A.. B.. Dm7 A.. Gmi. F7. E7',
		'_ Put _me _ on top _of _the _cor_rect lyrics',
		'A    B  Dmi7       A  Gmi F7 E7',
		' Put me     on top of the correct lyrics',
		{ shouldPrintBarSeparators: false },
	],
	[
		'take printBarSeparators into account, with offset',
		'A.. B.. Dm7 A.. Gmi. F7. E7',
		'Put _me _on top _of _the _cor_rect _lyrics',
		'    A  B      Dmi7 A   Gmi F7   E7',
		'Put me on top of   the cor rect lyrics',
		{ shouldPrintBarSeparators: false },
	],
	[
		'sub-beat groups: correctly position chords',
		'[A B Dm7] A.. [G13 F7 E7]',
		'_Put _me _on top _of _the _correct _lyrics',
		'|[A   B  Dmi7]  A [G13 F7      E7]   |',
		'  Put me on top of the correct lyrics',
	],
	[
		'sub-beat groups: adjust lyric token with extra space(s) before sub-beat group opener',
		'A.. BbmiMa7. [G13 F7 E7]',
		'_Put me on _top _of the _correct _lyrics',
		'|A         BbmiMa7 [G13    F7      E7]   |',
		' Put me on top      of the correct lyrics',
	],
	[
		'sub-beat groups: two consecutive groups (it is really the same test as above)',
		'C.. [F C/E] [Dm C] C.. G..',
		'_ No _wo_man _no _cry _',
		'|C  [F C/E] [Dmi C] |C G |',
		'  No woman   no  cry',
	],
	[
		'sub-beat group: hide delimiters',
		'[A B Dm7] A.. [Gmi F7 E7]',
		'_Put _me _on top _of _the _correct _lyrics',
		'|A   B  Dmi7   A  Gmi F7      E7    |',
		' Put me on top of the correct lyrics',
		{ shouldPrintSubBeatDelimiters: false },
	],
	[
		'sub-beat group: show delimiters, hide bar seps',
		'[A B Dm7] A.. [Gmi F7 E7]',
		'_Put _me _on top _of _the _correct _lyrics',
		'[A   B  Dmi7]  A [Gmi F7      E7]',
		' Put me on top of the correct lyrics',
		{ shouldPrintBarSeparators: false },
	],
	[
		'time signature: bar starts at the beginning',
		'2/4 G 4/4 Gdim',
		'_It was an _early morning yesterday',
		'|2/4 G        |4/4 Gdim                   |',
		'     It was an     early morning yesterday',
		{ shouldPrintBarTimeSignature: true },
	],
	[
		'time signature: lyrics starts after chord',
		'2/4 G 4/4 Gdim',
		'_ It was an _early morning yesterday',
		'|2/4 G         |4/4 Gdim                   |',
		'      It was an     early morning yesterday',
		{ shouldPrintBarTimeSignature: true },
	],
	[
		'time signature: bar starts in the middle of the lyrics',
		'2/4 G 4/4 Gdim',
		'It was an _early morning _yesterday',
		'         |2/4 G            |4/4 Gdim     |',
		'It was an     early morning     yesterday',
		{ shouldPrintBarTimeSignature: true },
	],
	[
		'time signature: Chord symbol length equals lyric token length',
		'2/4 Ami7 3/4 Bmi 4/4 D13 5/4 F13',
		'_Put _me _on _top',
		'|2/4 Ami7 |3/4 Bmi |4/4 D13 |5/4 F13 |',
		'     Put       me       on       top',
		{ shouldPrintBarTimeSignature: true },
	],
	[
		'time signature: Chord symbol length equals lyric token length minus 1',
		'2/4 Ami 3/4 B7 4/4 D7 5/4 F13',
		'_Put _me _on _top',
		'|2/4 Ami |3/4 B7 |4/4 D7 |5/4 F13 |',
		'     Put      me      on      top',
		{ shouldPrintBarTimeSignature: true },
	],
	[
		'time signature: Chord symbol length equals lyric token length minus 2',
		'2/4 A7 3/4 B 4/4 D 5/4 F7',
		'_Put _me _on _top',
		'|2/4 A7 |3/4 B |4/4 D |5/4 F7 |',
		'     Put     me     on     top',
		{ shouldPrintBarTimeSignature: true },
	],
	[
		'time signature: Chord without lyrics',
		'2/4 Gmi7 4/4 Ami13 5/4 G13',
		'_Put _ _me on top',
		'|2/4 Gmi7 |4/4 Ami13 |5/4 G13      |',
		'     Put                  me on top',
		{ shouldPrintBarTimeSignature: true },
	],
	[
		'time signature: disable',
		'2/4 G 4/4 Gdim',
		'It was an _early morning _yesterday',
		'         |G            |Gdim     |',
		'It was an early morning yesterday',
		{
			shouldPrintBarTimeSignature: true,
			shouldPrintInlineTimeSignatures: false,
		},
	],
	[
		'time signature: lyrics shorter than chords names',
		'3/4 A7(b9). BmiMa7.. 4/4 Dmi7 5/4 A7(b9).. Gmi13.. F7(b9,#11). 4/4 E7',
		'_Put _me _on top _of _the _correct _lyrics',
		'|3/4 A7(b9). BmiMa7.. |4/4 Dmi7.... |5/4 A7(b9).. Gmi13.. F7(b9,#11). |4/4 E7.... |',
		'     Put     me            on top        of       the     correct          lyrics',
		{ shouldPrintBarTimeSignature: true, shouldPrintChordsDuration: true },
	],
	[
		'Roman numeral symbols',
		'C Dm Em F G B°',
		'_Put me _on top _of _the _correct _lyrics',
		'|I     |ii    |iii |IV |V      |vii°  |',
		' Put me on top of   the correct lyrics',
		{ symbolType: 'roman' },
	],
])(
	'%s',
	(
		title,
		chordLineInput,
		lyricsLineInput,
		chordsLineOutput,
		LyricsLineOutput,
		options
	) => {
		test('Correctly space chord & lyrics lines', () => {
			// setup
			const parsedLyrics = parseLyricLine(lyricsLineInput);

			const parsedChords = parseChordLine(chordLineInput, {
				key: { string: 'C' },
			});
			parsedChords.allBars.map((bar) => {
				bar.allChords.map((chord) => {
					chord.symbol = getChordSymbol(chord.model);
				});
				bar.shouldPrintChordsDuration = !!(options || {})
					.shouldPrintChordsDuration;
				bar.shouldPrintBarTimeSignature = !!(options || {})
					.shouldPrintBarTimeSignature;
			});

			// test

			const { chordLine, lyricsLine } = chordLyricsSpacer(
				parsedChords,
				parsedLyrics,
				options
			);

			// assertions

			const renderedChords = renderChordLine(chordLine, {
				...options,
			});
			const renderedLyrics = renderLyricLine(
				{ model: lyricsLine },
				{ alignChordsWithLyrics: true }
			);

			expect(stripTags(renderedChords)).toEqual(chordsLineOutput);
			expect(stripTags(renderedLyrics)).toEqual(LyricsLineOutput);
		});
	}
);
