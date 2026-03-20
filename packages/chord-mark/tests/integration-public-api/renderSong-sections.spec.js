import { parseSong, renderSong } from '../../src/chordMark';
import toText from './helpers/toText';
import song from './helpers/songInput';

function render(input, options = {}) {
	return renderSong(parseSong(input), options);
}

describe('renderSong - sections', () => {
	describe('section label rendering', () => {
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
		])('renders %s as %s', (input, expected) => {
			test(`${input} => ${expected}`, () => {
				const text = toText(
					render(song(input), { expandSectionMultiply: true })
				);
				expect(text).toBe(expected);
			});
		});

		test('renders custom section with capitalized first letter', () => {
			const text = toText(
				render(song('#special'), { expandSectionMultiply: true })
			);
			expect(text).toBe('Special');
		});
	});

	describe('section numbering', () => {
		test('unique section has no index', () => {
			const text = toText(render(song('#v')));
			expect(text).toBe('Verse');
		});

		test('repeated sections get numbered', () => {
			const text = toText(render(song('#v', '#v', '#v')));
			expect(text).toBe('Verse 1\nVerse 2\nVerse 3');
		});

		test('different section types are not numbered if unique', () => {
			const text = toText(render(song('#v', '#c')));
			expect(text).toBe('Verse\nChorus');
		});
	});

	describe('expandSectionCopy', () => {
		test('copies section content when true', () => {
			const input = song(
				'#v',
				'A B',
				'verseLine',
				'#v',
				'#v'
			);
			const text = toText(
				render(input, { expandSectionCopy: true })
			);
			expect(text).toContain('Verse 1');
			expect(text).toContain('Verse 2');
			expect(text).toContain('Verse 3');
			// Content appears multiple times
			expect(text.match(/verseLine/g).length).toBe(3);
		});

		test('only shows label when false', () => {
			const input = song(
				'#v',
				'A B',
				'verseLine',
				'#v',
				'#v'
			);
			const text = toText(
				render(input, { expandSectionCopy: false })
			);
			expect(text).toContain('Verse 1');
			expect(text).toContain('Verse 2');
			expect(text).toContain('Verse 3');
			expect(text.match(/verseLine/g).length).toBe(1);
		});
	});

	describe('expandSectionMultiply', () => {
		test('repeats section when true', () => {
			const input = song('#v x2', 'A B', 'verseLine1');
			const text = toText(
				render(input, { expandSectionMultiply: true })
			);
			expect(text).toContain('Verse 1');
			expect(text).toContain('Verse 2');
			expect(text.match(/verseLine1/g).length).toBe(2);
		});

		test('shows repeat string when false', () => {
			const input = song('#v x2', 'A B', 'verseLine1');
			const text = toText(
				render(input, { expandSectionMultiply: false })
			);
			expect(text).toContain('Verse x2');
			expect(text.match(/verseLine1/g).length).toBe(1);
		});

		test('numbers sections incrementally', () => {
			const input = song('#v', '#v x2', '#v');
			const text = toText(
				render(input, { expandSectionMultiply: true })
			);
			expect(text).toBe('Verse 1\nVerse 2\nVerse 3\nVerse 4');
		});
	});

	describe('autoRepeatChords', () => {
		test('repeats chords when true', () => {
			const input = song(
				'#v',
				'C G',
				'line1',
				'',
				'#v',
				'line2'
			);
			const text = toText(
				render(input, { autoRepeatChords: true, alignBars: false })
			);
			expect(text).toContain('|C  |G  |');
			expect(text.match(/\|C  \|G  \|/g).length).toBe(2);
		});

		test('does not repeat chords when false', () => {
			const input = song(
				'#v',
				'C G',
				'line1',
				'',
				'#v',
				'line2'
			);
			const text = toText(
				render(input, { autoRepeatChords: false })
			);
			expect(text.match(/\|C/g).length).toBe(1);
		});
	});

	describe('section CSS classes', () => {
		test('wraps sections in divs with CSS classes', () => {
			const rendered = render(
				song('#v', 'C G', 'line', '#c', 'F G', 'line')
			);
			expect(rendered).toContain('cmSection');
			expect(rendered).toContain('cmSection-Verse');
			expect(rendered).toContain('cmSection-Chorus');
		});

		test('no section wrapper when no sections', () => {
			const rendered = render(song('C G', 'A line'));
			expect(rendered).not.toContain('cmSection');
		});
	});
});
