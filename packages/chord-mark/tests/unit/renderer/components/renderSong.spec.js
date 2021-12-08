import renderSong from '../../../../src/renderer/components/renderSong';
import htmlToElement from '../../../../src/core/dom/htmlToElement';
import parseSong from '../../../../src/parser/parseSong';

function renderSongText(songTxt, options = {}) {
	return '<div>' + renderSong(parseSong(songTxt), options) + '</div>';
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
\xa0
Verse 2
|C  |G  |
line2-1
|A  |D  |
line2-2`;
		const rendered = renderSongText(input, {
			autoRepeatChords: true,
			alignBars: false,
		});
		const element = htmlToElement(rendered);
		expect(element.textContent).toBe(expected);
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
\xa0
Verse 2
line2-1
line2-2`;
		const rendered = renderSongText(input, { autoRepeatChords: false });
		const element = htmlToElement(rendered);
		expect(element.textContent).toBe(expected);
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
|C...           CM7.  |F |
Imagine there's no heaven
|C...    CM7.|F     |
Imagine there's not placeholder`;
		const rendered = renderSongText(input, {
			alignChordsWithLyrics: true,
		});
		const element = htmlToElement(rendered);
		expect(element.textContent).toBe(expected);
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
		const element = htmlToElement(rendered);
		expect(element.textContent).toBe(expected);
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
		const element = htmlToElement(rendered);
		expect(element.textContent).toBe(expected);
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
		const element = htmlToElement(rendered);
		expect(element.textContent).toBe(expected);
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
		const element = htmlToElement(rendered);
		expect(element.textContent).toBe(expected);
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
		const element = htmlToElement(rendered);
		expect(element.textContent).toBe(expected);
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
		const element = htmlToElement(rendered);
		expect(element.textContent).toBe(expected);
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
\xa0
Verse 2
|A7     |%      |%      |%      |
v2-line-1
|D7     |%      |A7     |%      |
v2-line-2
|E7     |D7     |A7     |E7     |
v2-line-3
\xa0`;
		const rendered = renderSongText(input, {
			chartType: 'all',
			alignBars: true,
		});
		const element = htmlToElement(rendered);
		expect(element.textContent).toBe(expected);
	});

	test('= "chords"', () => {
		const expected = `Verse 1
|A7     |%      |%      |%      |
|D7     |%      |A7     |%      |
|E7     |D7     |A7     |E7     |
\xa0
Verse 2
|A7     |%      |%      |%      |
|D7     |%      |A7     |%      |
|E7     |D7     |A7     |E7     |
\xa0`;
		const rendered = renderSongText(input, {
			chartType: 'chords',
			alignBars: true,
		});
		const element = htmlToElement(rendered);
		expect(element.textContent).toBe(expected);
	});

	test('= "chordsFirstLyricLine"', () => {
		const expected = `Verse 1
|A7     |%      |%      |%      |
v1-line-1
|D7     |%      |A7     |%      |
|E7     |D7     |A7     |E7     |
\xa0
Verse 2
|A7     |%      |%      |%      |
v2-line-1
|D7     |%      |A7     |%      |
|E7     |D7     |A7     |E7     |
\xa0`;
		const rendered = renderSongText(input, {
			chartType: 'chordsFirstLyricLine',
			alignBars: true,
		});
		const element = htmlToElement(rendered);
		expect(element.textContent).toBe(expected);
	});

	test('= "lyrics"', () => {
		const expected = `Verse 1
v1-line-1
v1-line-2
v1-line-3
\xa0
Verse 2
v2-line-1
v2-line-2
v2-line-3
\xa0`;
		const rendered = renderSongText(input, {
			chartType: 'lyrics',
			alignBars: true,
		});
		const element = htmlToElement(rendered);
		expect(element.textContent).toBe(expected);
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
\xa0
3/4
|A7       |
|A7  B    |
|A7     B |
|A7  B  C7|
\xa0`;
		const rendered = renderSongText(input, {
			printChordsDuration: 'never',
			alignBars: true,
		});
		const element = htmlToElement(rendered);
		expect(element.textContent).toBe(expected);
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
\xa0
3/4
|A7               |
|A7.    B..       |
|A7..         B.  |
|A7     B     C7  |
\xa0`;
		const rendered = renderSongText(input, {
			printChordsDuration: 'uneven',
			alignBars: true,
		});
		const element = htmlToElement(rendered);
		expect(element.textContent).toBe(expected);
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
\xa0
3/4
|A7               |
|A7.    B..       |
|A7..         B.  |
|A7.    B.    C7. |
\xa0`;
		const rendered = renderSongText(input, {
			printChordsDuration: 'always',
			alignBars: true,
		});
		const element = htmlToElement(rendered);
		expect(element.textContent).toBe(expected);
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
});
