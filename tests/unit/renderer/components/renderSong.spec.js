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
|C   |G   |
line1-1
|A   |D   |
line1-2
\xa0
Verse 2
|C   |G   |
line2-1
|A   |D   |
line2-2`;
		const rendered = renderSongText(input, { autoRepeatChords: true });
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
|C   |G   |
line1-1
|A   |D   |
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

describe('expandSectionRepeat', () => {
	test('Should repeat section when expandSectionRepeat === true', () => {
		const input = `#v x2
A B
verseLine1
C.. D.. E
verseLine2`;
		const expected = `Verse 1
|A   |B   |
verseLine1
|C   D  |E   |
verseLine2
Verse 2
|A   |B   |
verseLine1
|C   D  |E   |
verseLine2`;
		const rendered = renderSongText(input, { expandSectionRepeats: true });
		const element = htmlToElement(rendered);
		expect(element.textContent).toBe(expected);
	});

	test('Should not repeat section when expandSectionRepeat === false, and display repeat string (x3) after label', () => {
		const input = `#v x2
A B
verseLine1
C.. D.. E
verseLine2`;
		const expected = `Verse 1 x2
|A   |B   |
verseLine1
|C   D  |E   |
verseLine2`;
		const rendered = renderSongText(input, { expandSectionRepeats: false });
		const element = htmlToElement(rendered);
		expect(element.textContent).toBe(expected);
	});

	test('Should number repeats incrementally when expandSectionRepeat === true', () => {
		const input = `#v
#v x2
#v`;
		const expected = `Verse 1
Verse 2
Verse 3
Verse 4`;
		const rendered = renderSongText(input, { expandSectionRepeats: true });
		const element = htmlToElement(rendered);
		expect(element.textContent).toBe(expected);
	});

	test('Should number repeats incrementally when expandSectionRepeat === false', () => {
		const input = `#v
#v x2
#v`;
		const expected = `Verse 1
Verse 2 x2
Verse 3`;
		const rendered = renderSongText(input, { expandSectionRepeats: false });
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
		const rendered = renderSongText(input, { expandSectionRepeats: true });
		const element = htmlToElement(rendered);
		expect(element.textContent).toBe(expected);
	});
});
