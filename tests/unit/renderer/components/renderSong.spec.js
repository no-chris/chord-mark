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
		const song =
`A B
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


describe('expandSectionRepeat', () => {
	test('Should repeat section when expandSectionRepeat === true', () => {
		const input =
`#v x2
A B
verseLine1
C.. D.. E
verseLine2`;
		const expected =
`Verse 1
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
		const input =
`#v x2
A B
verseLine1
C.. D.. E
verseLine2`;
		const expected =
`Verse 1 x2
|A   |B   |
verseLine1
|C   D  |E   |
verseLine2`;
		const rendered = renderSongText(input, { expandSectionRepeats: false });
		const element = htmlToElement(rendered);
		expect(element.textContent).toBe(expected);
	});
});

