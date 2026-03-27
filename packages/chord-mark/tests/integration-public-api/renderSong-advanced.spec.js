import { parseSong, renderSong, lineTypes } from '../../src/chordMark';
import toText from './helpers/toText';
import song from './helpers/songInput';

function render(input, options = {}) {
	return renderSong(parseSong(input), options);
}

describe('renderSong - advanced', () => {
	describe('wrapChordLyricLines', () => {
		test('wraps chord+lyric pairs when enabled', () => {
			const input = song(
				'C... CM7. F',
				"_Imagine there's _no hea_ven"
			);
			const rendered = render(input, { wrapChordLyricLines: true });
			// When wrapped, chord and lyric lines are merged into a single element
			expect(rendered).toContain('cmChordLyricLine');
		});

		test('does not wrap when disabled (default)', () => {
			const input = song(
				'C... CM7. F',
				"_Imagine there's _no hea_ven"
			);
			const rendered = render(input, { wrapChordLyricLines: false });
			expect(rendered).not.toContain('cmChordLyricLine');
		});
	});

	describe('customRenderer', () => {
		test('returns result of custom renderer', () => {
			const customRenderer = jest.fn().mockReturnValue('custom output');
			const rendered = render(song('#v', 'C G', 'line1'), {
				customRenderer,
			});
			expect(rendered).toBe('custom output');
		});

		test('passes allLines and allRenderedLines to custom renderer', () => {
			const customRenderer = jest.fn().mockReturnValue('');
			render(song('#v', 'C G', 'line1'), { customRenderer });

			const allLines = customRenderer.mock.calls[0][0];
			const allRenderedLines = customRenderer.mock.calls[0][1];

			expect(allLines.length).toBe(3);
			expect(allLines[0].type).toBe(lineTypes.SECTION_LABEL);
			expect(allLines[1].type).toBe(lineTypes.CHORD);
			expect(allLines[2].type).toBe(lineTypes.LYRIC);

			expect(allRenderedLines.length).toBe(3);
		});

		test('passes options to custom renderer', () => {
			const customRenderer = jest.fn().mockReturnValue('');
			render(song('#v', 'C G', 'line1'), {
				customRenderer,
				alignChordsWithLyrics: true,
				alignBars: false,
			});

			const options = customRenderer.mock.calls[0][2];
			expect(options).toStrictEqual({
				alignChordsWithLyrics: true,
				alignBars: false,
			});
		});
	});

	describe('key declaration rendering', () => {
		test('renders key declaration as "key: X"', () => {
			const text = toText(render(song('key C', 'C G')));
			expect(text).toContain('key: C');
		});

		test('renders multiple key declarations', () => {
			const text = toText(
				render(
					song('key C', 'C G', 'line', 'key G', 'G D', 'line')
				)
			);
			expect(text).toContain('key: C');
			expect(text).toContain('key: G');
		});
	});

	describe('CSS classes for source types', () => {
		test('isFromSectionMultiply class', () => {
			const rendered = render(song('#v x2', 'C G', 'line'), {
				expandSectionMultiply: true,
			});
			expect(rendered).toContain('cmLine--isFromSectionMultiply');
		});

		test('isFromAutoRepeatChords class', () => {
			const rendered = render(
				song('#v', 'C G', 'line1', '', '#v', 'line2'),
				{ autoRepeatChords: true, alignBars: false }
			);
			expect(rendered).toContain('cmLine--isFromAutoRepeatChords');
		});

		test('isFromChordLineRepeater class', () => {
			// %% needs 2 preceding chord lines to work
			const rendered = render(
				song('C G', 'line1', 'Am F', 'line2', '%%', 'line3')
			);
			expect(rendered).toContain('cmLine--isFromChordLineRepeater');
		});

		test('isFromSectionCopy class', () => {
			const rendered = render(
				song('#v', 'C G', 'line', '#v'),
				{ expandSectionCopy: true }
			);
			expect(rendered).toContain('cmLine--isFromSectionCopy');
		});
	});
});
