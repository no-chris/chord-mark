import renderSong from '../../../../src/renderer/components/renderSong';
import htmlToElement from '../../../../src/core/dom/htmlToElement';
import parseSong from '../../../../src/parser/parseSong';
import toText from '../../helpers/toText';
import lineTypes from '../../../../src/parser/lineTypes';

function renderSongText(songTxt, options = {}) {
	return renderSong(parseSong(songTxt), options);
}

describe('renderSong', () => {
	test('Module', () => {
		expect(renderSong).toBeInstanceOf(Function);
	});

	test('Should return valid html', () => {
		const song = `A B
verseLine1
C.. D.. E
verseLine2`;
		const rendered = renderSongText(song);
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.nodeName).toBe('DIV');
		expect(element.childElementCount).toBe(4);
	});
});

describe('autoRepeatChords', () => {
	test('Should render auto repeated chords & other lines if autoRepeatChords === true', () => {
		const input = `#v
C G
line1-1
A D
line1-2

#v
line2-1
line2-2`;
		const expected = `Verse 1
|C  |G  |
line1-1
|A  |D  |
line1-2

Verse 2
|C  |G  |
line2-1
|A  |D  |
line2-2`;
		const rendered = renderSongText(input, {
			autoRepeatChords: true,
			alignBars: false,
		});
		expect(toText(rendered)).toBe(expected);
	});

	test('Should NOT render auto repeated chords & other lines if autoRepeatChords === false', () => {
		const input = `#v
C G
line1-1
A D
line1-2

#v
line2-1
line2-2`;
		const expected = `Verse 1
|C     |G     |
line1-1
|A     |D     |
line1-2

Verse 2
line2-1
line2-2`;
		const rendered = renderSongText(input, { autoRepeatChords: false });
		expect(toText(rendered)).toBe(expected);
	});
});

describe('alignChordsWithLyrics', () => {
	test('Should align chords with lyrics placeholders', () => {
		const input = `#v
C... CM7. F
_Imagine there's _no hea_ven
%
Imagine there's not placeholder`;
		const expected = `Verse
|C...            CM7. |F  |
 Imagine there's no heaven
|C...    CM7.|F     |
Imagine there's not placeholder`;
		const rendered = renderSongText(input, {
			alignChordsWithLyrics: true,
		});
		expect(toText(rendered)).toBe(expected);
	});

	test('Should ignore placeholders if chords positioning is disabled', () => {
		const input = `#v
C... CM7. F
_Imagine there's _no hea_ven`;
		const expected = `Verse
|C...    CM7.|F     |
Imagine there's no heaven`;
		const rendered = renderSongText(input, {
			alignChordsWithLyrics: false,
		});
		expect(toText(rendered)).toBe(expected);
	});
});

describe('expandSectionCopy', () => {
	test('should copy section when expandSectionCopy === true', () => {
		const input = `#v
A B
verseLine
#v
#v`;
		const expected = `Verse 1
|A     |B     |
verseLine
Verse 2
|A     |B     |
verseLine
Verse 3
|A     |B     |
verseLine`;
		const rendered = renderSongText(input, { expandSectionCopy: true });
		expect(toText(rendered)).toBe(expected);
	});

	test('should only repeat section label when expandSectionCopy === false', () => {
		const input = `#v
A B
verseLine
#v
#v`;
		const expected = `Verse 1
|A     |B     |
verseLine
Verse 2
Verse 3`;
		const rendered = renderSongText(input, { expandSectionCopy: false });
		expect(toText(rendered)).toBe(expected);
	});
});

describe('expandSectionMultiply', () => {
	test('Should repeat section when expandSectionMultiply === true', () => {
		const input = `#v x2
A B
verseLine1
C.. D.. E
verseLine2`;
		const expected = `Verse 1
|A       |B     |
verseLine1
|C   D   |E     |
verseLine2
Verse 2
|A       |B     |
verseLine1
|C   D   |E     |
verseLine2`;
		const rendered = renderSongText(input, { expandSectionMultiply: true });
		expect(toText(rendered)).toBe(expected);
	});

	test('Should not repeat section when expandSectionMultiply === false, and display repeat string ("x2") after label', () => {
		const input = `#v x2
A B
verseLine1
C.. D.. E
verseLine2`;
		const expected = `Verse x2
|A       |B     |
verseLine1
|C   D   |E     |
verseLine2`;
		const rendered = renderSongText(input, {
			expandSectionMultiply: false,
		});
		expect(toText(rendered)).toBe(expected);
	});

	test('Should number repeats incrementally when expandSectionMultiply === true', () => {
		const input = `#v
#v x2
#v`;
		const expected = `Verse 1
Verse 2
Verse 3
Verse 4`;
		const rendered = renderSongText(input, { expandSectionMultiply: true });
		expect(toText(rendered)).toBe(expected);
	});

	test('Should number repeats incrementally when expandSectionMultiply === false', () => {
		const input = `4/4
#v
#v x2
#v`;
		const expected = `4/4
Verse 1
Verse 2 x2
Verse 3`;
		const rendered = renderSongText(input, {
			expandSectionMultiply: false,
		});
		expect(toText(rendered)).toBe(expected);
	});
});

describe('sectionsStats', () => {
	test('Should number section only if it is repeated', () => {
		const input = `#i
#v
#c
#v
#c
#s x2
#b
#c x2
#o`;
		const expected = `Intro
Verse 1
Chorus 1
Verse 2
Chorus 2
Solo 1
Solo 2
Bridge
Chorus 3
Chorus 4
Outro`;
		const rendered = renderSongText(input, { expandSectionMultiply: true });
		expect(toText(rendered)).toBe(expected);
	});
});

describe('chartType', () => {
	const input = `#v
A7 % % %
v1-line-1
D7 % A7 %
v1-line-2
E7 D7 A7 E7
v1-line-3

#v
v2-line-1
v2-line-2
v2-line-3
`;

	test('="all"', () => {
		const expected = `Verse 1
|A7     |%      |%      |%      |
v1-line-1
|D7     |%      |A7     |%      |
v1-line-2
|E7     |D7     |A7     |E7     |
v1-line-3

Verse 2
|A7     |%      |%      |%      |
v2-line-1
|D7     |%      |A7     |%      |
v2-line-2
|E7     |D7     |A7     |E7     |
v2-line-3
`;
		const rendered = renderSongText(input, {
			chartType: 'all',
			alignBars: true,
		});
		expect(toText(rendered)).toBe(expected);
	});

	test('= "chords"', () => {
		const expected = `Verse 1
|A7     |%      |%      |%      |
|D7     |%      |A7     |%      |
|E7     |D7     |A7     |E7     |

Verse 2
|A7     |%      |%      |%      |
|D7     |%      |A7     |%      |
|E7     |D7     |A7     |E7     |
`;
		const rendered = renderSongText(input, {
			chartType: 'chords',
			alignBars: true,
		});
		expect(toText(rendered)).toBe(expected);
	});

	test('= "chordsFirstLyricLine"', () => {
		const expected = `Verse 1
|A7     |%      |%      |%      |
v1-line-1
|D7     |%      |A7     |%      |
|E7     |D7     |A7     |E7     |

Verse 2
|A7     |%      |%      |%      |
v2-line-1
|D7     |%      |A7     |%      |
|E7     |D7     |A7     |E7     |
`;
		const rendered = renderSongText(input, {
			chartType: 'chordsFirstLyricLine',
			alignBars: true,
		});
		expect(toText(rendered)).toBe(expected);
	});

	test('= "lyrics"', () => {
		const expected = `Verse 1
v1-line-1
v1-line-2
v1-line-3

Verse 2
v2-line-1
v2-line-2
v2-line-3
`;
		const rendered = renderSongText(input, {
			chartType: 'lyrics',
			alignBars: true,
		});
		expect(toText(rendered)).toBe(expected);
	});
});

describe('printBarSeparators', () => {
	const input = `#v
A7 %%%
_A first _line _with _positioned chords
D7 % A7 %
A second line without
E7 D7 A7 %
_And a _last _line _with

#s
A7 %%%
D7 % A7 %
E7 D7 A7 %
`;
	test('never', () => {
		const expected = `Verse
A7      %    %    %
A first line with positioned chords
D7     %      A7     %
A second line without
E7    D7   A7   %
And a last line with

Solo
A7     %      %      %
D7     %      A7     %
E7     D7     A7     %
`;
		const rendered = renderSongText(input, {
			printBarSeparators: 'never',
		});
		expect(toText(rendered)).toBe(expected);
	});

	test('grids', () => {
		const expected = `Verse
A7      %    %    %
A first line with positioned chords
|D7     |%      |A7     |%     |
A second line without
E7    D7   A7   %
And a last line with

Solo
|A7     |%      |%      |%     |
|D7     |%      |A7     |%     |
|E7     |D7     |A7     |%     |
`;
		const rendered = renderSongText(input, {
			printBarSeparators: 'grids',
		});
		expect(toText(rendered)).toBe(expected);
	});

	test('always', () => {
		const expected = `Verse
|A7     |%   |%   |%                |
 A first line with positioned chords
|D7     |%      |A7     |%     |
A second line without
|E7   |D7  |A7  |%   |
 And a last line with

Solo
|A7     |%      |%      |%     |
|D7     |%      |A7     |%     |
|E7     |D7     |A7     |%     |
`;
		const rendered = renderSongText(input, {
			printBarSeparators: 'always',
		});
		expect(toText(rendered)).toBe(expected);
	});

	describe.each([
		[
			'1 char chords, separated with 1 space',
			'A B\n_a_lyric',
			'A B\na lyric',
		],
		[
			'2 char chords, separated with 1 space',
			'A7 B7\n_a_lyric',
			'A7 B7\na  lyric',
		],
		[
			'2 char chords, 2 bars, separated with 1 space',
			'A7.. B7.. C7\n_a_l_yric',
			'A7 B7 C7\na  l  yric',
		],
		[
			'Aligned bars with a chord on the last beat',
			'A7. B7. C7. D7. C7',
			'A7  B7  C7  D7  C7',
		],
	])('%s', (title, source, expected, options = {}) => {
		test(source + ' => ' + expected, () => {
			const rendered = renderSongText(source, {
				printBarSeparators: 'never',
				...options,
			});
			expect(toText(rendered)).toBe(expected);
		});
	});
});

describe('printSubBeatDelimiters', () => {
	const input = `C.. G.. Am.. F..
No woman no cry
C.. {F C/E} {Dm7 C} C.. G..
No woman no cry

C.. G.. Am.. F..
_ No _woman no _cry
C.. {F C/E} {Dm7 C} C.. G..
_ No _wo_man _no _cry`;

	const outputWithDelimiters = `|C     G               |Am   F   |
No woman no cry
|C..   {F C/E}  {Dm7 C}|C    G   |
No woman no cry

|C   G       |Am F |
  No woman no cry
|C..  {F C/E} {Dm7 C} |C G |
    No woman   no  cry`;

	test('true by default', () => {
		const rendered = renderSongText(input);
		expect(toText(rendered)).toBe(outputWithDelimiters);
	});

	test('explicit true', () => {
		const rendered = renderSongText(input, {
			printSubBeatDelimiters: true,
		});
		expect(toText(rendered)).toBe(outputWithDelimiters);
	});

	test('explicit false', () => {
		const expected = `|C     G           |Am   F   |
No woman no cry
|C..   F C/E  Dm7 C|C    G   |
No woman no cry

|C   G       |Am F |
  No woman no cry
|C..   F C/E Dm7 C  |C G |
    No woman no  cry`;

		const rendered = renderSongText(input, {
			printSubBeatDelimiters: false,
		});
		expect(toText(rendered)).toBe(expected);
	});
});

describe('printInlineTimeSignatures', () => {
	const input = `2/4 G 4/4 G°
It was an _early morning _yesterday.
C/G G
_ I was up before the da_wn.`;

	const outputWithTimeSignatures = `         |2/4 G            |4/4 G°        |
It was an     early morning     yesterday.
|C/G                     |G  |
    I was up before the dawn.`;

	test('true by default', () => {
		const rendered = renderSongText(input);
		expect(toText(rendered)).toBe(outputWithTimeSignatures);
	});

	test('explicit true', () => {
		const rendered = renderSongText(input, {
			printInlineTimeSignatures: true,
		});
		expect(toText(rendered)).toBe(outputWithTimeSignatures);
	});

	test('explicit false', () => {
		const expected = `         |G            |G°        |
It was an early morning yesterday.
|C/G                     |G  |
    I was up before the dawn.`;

		const rendered = renderSongText(input, {
			printInlineTimeSignatures: false,
		});
		expect(toText(rendered)).toBe(expected);
	});

	test('time signature different than default', () => {
		const input2 = `6/8
Em D. C.
_ So close no matter _how far _
3/8 D 6/8 Em % 
_ But I _know`;
		const expected = `6/8
|Em                  |D       C |
   So close no matter how far
|3/8 D     |6/8 Em  |% |
      But I     know`;

		const rendered = renderSongText(input2, {
			printInlineTimeSignatures: true,
		});
		expect(toText(rendered)).toBe(expected);
	});
});

describe('printChordsDuration', () => {
	const input = `4/4
A7
A7. B...
A7.. B..
A7... B.
A7.. B. C7.
A7. B.. C7.
A7. B. C7..
A7. B. C7. D.
A... F. %

3/4
A7
A7. B..
A7.. B.
A7. B. C7.
`;

	test('="never"', () => {
		const expected = `4/4
|A7           |
|A7  B        |
|A7     B     |
|A7         B |
|A7     B   C7|
|A7  B      C7|
|A7  B  C7    |
|A7  B  C7  D |
|A          F |%     |

3/4
|A7       |
|A7  B    |
|A7     B |
|A7  B  C7|
`;
		const rendered = renderSongText(input, {
			printChordsDuration: 'never',
			alignBars: true,
		});
		expect(toText(rendered)).toBe(expected);
	});

	test('="uneven"', () => {
		const expected = `4/4
|A7                    |
|A7.    B...           |
|A7           B        |
|A7...              B. |
|A7..         B.    C7.|
|A7.    B..         C7.|
|A7.    B.    C7..     |
|A7     B     C7    D  |
|A...               F. |%     |

3/4
|A7               |
|A7.    B..       |
|A7..         B.  |
|A7     B     C7  |
`;
		const rendered = renderSongText(input, {
			printChordsDuration: 'uneven',
			alignBars: true,
		});
		expect(toText(rendered)).toBe(expected);
	});

	test('="always"', () => {
		const expected = `4/4
|A7                    |
|A7.    B...           |
|A7..         B..      |
|A7...              B. |
|A7..         B.    C7.|
|A7.    B..         C7.|
|A7.    B.    C7..     |
|A7.    B.    C7.   D. |
|A...               F. |%     |

3/4
|A7               |
|A7.    B..       |
|A7..         B.  |
|A7.    B.    C7. |
`;
		const rendered = renderSongText(input, {
			printChordsDuration: 'always',
			alignBars: true,
		});
		expect(toText(rendered)).toBe(expected);
	});
});

describe('customRenderer', () => {
	test('Should return the result of the custom renderer', () => {
		const customRenderer = jest.fn();
		customRenderer.mockImplementation(() => 'custom rendered');

		const input = `#v
C G
line1-1
A D
line1-2`;

		const rendered = renderSongText(input, { customRenderer });
		expect(rendered).toContain('custom rendered');
	});

	test('Should forward allLines and allRenderedLines to custom renderer', () => {
		const customRenderer = jest.fn();
		customRenderer.mockImplementation(() => 'custom rendered');

		const input = `#v
C G
line1-1`;

		renderSongText(input, { customRenderer });
		const allLines = customRenderer.mock.calls[0][0];
		const allRenderedLines = customRenderer.mock.calls[0][1];

		expect(allLines.length).toBe(3);
		expect(allLines[0].type).toBe(lineTypes.SECTION_LABEL);
		expect(allLines[1].type).toBe(lineTypes.CHORD);
		expect(allLines[2].type).toBe(lineTypes.LYRIC);

		expect(toText(allRenderedLines[0])).toBe('Verse');
		expect(toText(allRenderedLines[1])).toBe('|C     |G     |');
		expect(toText(allRenderedLines[2])).toBe('line1-1');
	});

	test('Should forward parameters to custom renderer', () => {
		const customRenderer = jest.fn();
		customRenderer.mockImplementation(() => 'custom rendered');

		const input = `#v
C G
line1-1
A D
line1-2`;

		// call 1
		renderSongText(input, {
			alignChordsWithLyrics: true,
			alignBars: true,
			customRenderer,
		});
		expect(customRenderer.mock.calls[0][2]).toStrictEqual({
			alignChordsWithLyrics: true,
			alignBars: true,
		});

		// call 2
		renderSongText(input, {
			alignChordsWithLyrics: false,
			alignBars: false,
			customRenderer,
		});
		expect(customRenderer.mock.calls[1][2]).toStrictEqual({
			alignChordsWithLyrics: false,
			alignBars: false,
		});
	});
});

describe('Section Labels', () => {
	describe('Shortcuts and case', () => {
		describe.each([
			['#a', 'Adlib'],
			['#b', 'Bridge'],
			['#c', 'Chorus'],
			['#i', 'Intro'],
			['#o', 'Outro'],
			['#p', 'Pre-chorus'],
			['#s', 'Solo'],
			['#u', 'Interlude'],
			['#v', 'Verse'],
		])('Should replace shortcuts', (input, expected) => {
			test('replace ' + input + ' with ' + expected, () => {
				const rendered = renderSongText(input, {
					expandSectionMultiply: true,
				});
				expect(toText(rendered)).toBe(expected);
			});
		});

		describe.each([
			['#inter', 'Inter'],
			['#special', 'Special'],
			['#other', 'Other'],
		])(
			'Should render custom sections with a capital first letter',
			(input, expected) => {
				test('renders ' + input + ' to ' + expected, () => {
					const rendered = renderSongText(input, {
						expandSectionMultiply: true,
					});
					expect(toText(rendered)).toBe(expected);
				});
			}
		);
	});

	describe('Label indexes', () => {
		describe.each([
			['unique section', '#v', 'Verse'],
			['2 unique sections', '#v\n#c', 'Verse\nChorus'],
			['2 sections, append index', '#v\n#v', 'Verse 1\nVerse 2'],
			[
				'3 sections, append index',
				'#v\n#v\n#v',
				'Verse 1\nVerse 2\nVerse 3',
			],
			[
				'multiplier does not influence index if expandSectionMultiply === false',
				'#v x4\n#v',
				'Verse 1 x4\nVerse 2',
				{ expandSectionMultiply: false },
			],
			[
				'multiplier influences index if expandSectionMultiply === true',
				'#v x4\n#v',
				'Verse 1\nVerse 2\nVerse 3\nVerse 4\nVerse 5',
				{ expandSectionMultiply: true },
			],
		])(
			'Should append index to section label',
			(title, input, expected, options = {}) => {
				test(title, () => {
					const rendered = renderSongText(input, options);
					expect(toText(rendered)).toBe(expected);
				});
			}
		);
	});
});

describe('Custom ChordSymbol renderer', () => {
	test('should use custom chordSymbol renderer', () => {
		const chordSymbolRenderer = () => 'Custom';
		const input = 'A B C';
		const parsed = parseSong(input);
		const rendered = renderSong(parsed, { chordSymbolRenderer });
		expect(toText(rendered)).toBe('|Custom     |Custom     |Custom     |');
	});
});

describe('Wrap Sections in Divs', () => {
	test('Correctly create and class sections', () => {
		const song = `4/4
#verse
A B
verseLine1
C.. D.. E
verseLine2

#v
A B
verseLine1

#c
A B
chorusLine1

#b
A B
brigeLine1

#c`;
		const rendered = renderSongText(song);
		const element = htmlToElement(rendered);

		expect(element.childElementCount).toBe(6);
		expect(element.childNodes[0].nodeName).toBe('P');
		expect(element.childNodes[1].nodeName).toBe('DIV');
		expect(element.childNodes[1].className).toBe(
			'cmSection cmSection-Verse'
		);
		expect(element.childNodes[2].nodeName).toBe('DIV');
		expect(element.childNodes[2].className).toBe(
			'cmSection cmSection-Verse'
		);
		expect(element.childNodes[3].nodeName).toBe('DIV');
		expect(element.childNodes[3].className).toBe(
			'cmSection cmSection-Chorus'
		);
		expect(element.childNodes[4].nodeName).toBe('DIV');
		expect(element.childNodes[4].className).toBe(
			'cmSection cmSection-Bridge'
		);
		expect(element.childNodes[5].nodeName).toBe('DIV');
		expect(element.childNodes[5].className).toBe(
			'cmSection cmSection-Chorus'
		);
	});

	test('If no sections are given, create no DIV wrappers', () => {
		const song = `A B
verseLine1`;
		const rendered = renderSongText(song);
		const element = htmlToElement(rendered);

		expect(element.childElementCount).toBe(2);
		expect(element.nodeName).toBe('DIV');
		expect(element.childNodes[0].nodeName).toBe('P');
		expect(element.childNodes[1].nodeName).toBe('P');
	});
});
