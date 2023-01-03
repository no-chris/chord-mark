import renderBarContent from '../../../../src/renderer/components/renderBarContent';
import parseChordLine from '../../../../src/parser/parseChordLine';
import simpleSpacer from '../../../../src/renderer/spacers/chord/simple';
import getChordSymbol from '../../../../src/renderer/helpers/getChordSymbol';
import stripTags from '../../../../src/core/dom/stripTags';
import htmlToElement from '../../../../src/core/dom/htmlToElement';

import { forEachChordInChordLine } from '../../../../src/parser/helper/songs';

describe('renderBarContent', () => {
	test('Module', () => {
		expect(renderBarContent).toBeInstanceOf(Function);
	});

	test('Should return valid html', () => {
		let parsed = parseChordLine('C.. G. F.');
		parsed = forEachChordInChordLine(
			parsed,
			(chord) => (chord.symbol = getChordSymbol(chord.model))
		);

		const rendered = renderBarContent(parsed.allBars[0]);
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.nodeName).toBe('SPAN');
		expect(element.classList.contains('cmBarContent')).toBe(true);
	});
});

describe.each([
	['1 bar / 1 chord / 4 bpb', 'C', 'C  '],
	['1 bar / 2 chords / 4 bpb (1/3)', 'C. G...', 'C  G  '],
	['1 bar / 2 chords / 4 bpb (2/2)', 'C.. G..', 'C  G  '],
	['1 bar / 2 chords / 4 bpb (3/1)', 'C... G.', 'C  G  '],
	['1 bar / 3 chords / 4 bpb (1/1/2)', 'C. G. F..', 'C  G  F  '],
	['1 bar / 3 chords / 4 bpb (1/2/1)', 'C. G.. F.', 'C  G  F  '],
	['1 bar / 3 chords / 4 bpb (2/1/1)', 'C.. G. F.', 'C  G  F  '],
	['1 bar / 4 chords / 4 bpb (1/1/1/1)', 'C. G. F. Am.', 'C  G  F  Ami  '],
])('%s: %s', (title, input, output) => {
	test('Renders with default spacing: ' + output, () => {
		let parsed = parseChordLine(input);
		parsed = forEachChordInChordLine(
			parsed,
			(chord) => (chord.symbol = getChordSymbol(chord.model))
		);

		const rendered = renderBarContent(parsed.allBars[0]);
		expect(stripTags(rendered)).toEqual(output);
	});
});

describe.each([
	['spacesAfter = 0', 'C. G. F..', 0, 'CGF'],
	['spacesAfter = 1', 'C. G. F..', 1, 'C G F '],
	['spacesAfter = 2', 'C. G. F..', 2, 'C  G  F  '],
	['spacesAfter = 3', 'C. G. F..', 3, 'C   G   F   '],
	['spacesAfter = 4', 'C. G. F..', 4, 'C    G    F    '],
	['spacesAfter = 5', 'C. G. F..', 5, 'C     G     F     '],
	['spacesAfter = 6', 'C. G. F..', 6, 'C      G      F      '],
])('%s: %s', (title, input, spacesAfter, output) => {
	test('Respect spacesAfter value: ' + output, () => {
		let parsed = parseChordLine(input);
		parsed = forEachChordInChordLine(
			parsed,
			(chord) => (chord.symbol = getChordSymbol(chord.model))
		);

		parsed.allBars[0].allChords.forEach((chord) => {
			chord.spacesAfter = spacesAfter;
		});

		const rendered = renderBarContent(parsed.allBars[0]);

		expect(stripTags(rendered)).toEqual(output);
	});
});

describe.each([
	['spacesWithin = 0', 'C. G. F..', 0, 'C  G  F  '],
	['spacesWithin = 1', 'C. G. F..', 1, 'C   G   F   '],
	['spacesWithin = 2', 'C. G. F..', 2, 'C    G    F    '],
	['spacesWithin = 3', 'C. G. F..', 3, 'C     G     F     '],
	['spacesWithin = 4', 'C. G. F..', 4, 'C      G      F      '],
	['spacesWithin = 5', 'C. G. F..', 5, 'C       G       F       '],
	['spacesWithin = 6', 'C. G. F..', 6, 'C        G        F        '],
])('%s: %s', (title, input, spacesWithin, output) => {
	test('Respect spacesWithin value: ' + output, () => {
		let parsed = parseChordLine(input);
		parsed = forEachChordInChordLine(
			parsed,
			(chord) => (chord.symbol = getChordSymbol(chord.model))
		);

		parsed.allBars[0].allChords.forEach((chord) => {
			chord.spacesWithin = spacesWithin;
		});

		const rendered = renderBarContent(parsed.allBars[0]);

		expect(stripTags(rendered)).toEqual(output);
	});
});

describe.each([
	[
		'do not display chord duration (default)',
		'C. G. F..',
		undefined,
		'C  G  F  ',
	],
	['do not display chord duration', 'C. G. F..', false, 'C  G  F  '],
	['display chord duration', 'C. G. F..', true, 'C.  G.  F..  '],
	[
		'do not display chord duration in sub-beat groups',
		'{C G} F...',
		true,
		'{C  G}  F...  ',
	],
])(
	'Chord duration markers',
	(title, input, shouldPrintChordsDuration, output) => {
		test(title, () => {
			let parsed = parseChordLine(input);
			parsed = forEachChordInChordLine(
				parsed,
				(chord) => (chord.symbol = getChordSymbol(chord.model))
			);

			parsed.allBars[0].shouldPrintChordsDuration =
				shouldPrintChordsDuration;
			parsed.allBars[0].allChords.forEach((chord) => {
				chord.spacesAfter = 2;
			});

			const rendered = renderBarContent(parsed.allBars[0]);

			expect(stripTags(rendered)).toEqual(output);
		});
	}
);

describe.each([
	['1 chord / not last bar / bar sep', 'C', false, true, 'C   '],
	['1 chord / not last bar / no bar sep', 'C', false, false, 'C   '],
	['1 chord / last bar / bar sep', 'C', true, true, 'C   '],
	['1 chord / last bar / no bar sep', 'C', true, false, 'C'],
	['2 chords / not last bar / bar sep', 'C.. F..', false, true, 'C   F   '],
	[
		'2 chords / not last bar / no bar sep',
		'C.. F..',
		false,
		false,
		'C   F   ',
	],
	['2 chords / last bar / bar sep', 'C.. F..', true, true, 'C   F   '],
	['2 chords / last bar / no bar sep', 'C.. F..', true, false, 'C   F'],
])(
	'no bar separator: %s',
	(title, input, isLastBar, shouldPrintBarSeparators, output) => {
		test('When shouldPrintBarSeparators = false, do not space last chord of line', () => {
			const spacesWithin = 1;
			const spacesAfter = 2;

			let parsed = parseChordLine(input);
			parsed = forEachChordInChordLine(parsed, (chord) => {
				chord.symbol = getChordSymbol(chord.model);
				chord.spacesWithin = spacesWithin;
				chord.spacesAfter = spacesAfter;
			});

			const rendered = renderBarContent(
				parsed.allBars[0],
				isLastBar,
				shouldPrintBarSeparators
			);

			expect(stripTags(rendered)).toEqual(output);
		});
	}
);

describe.each([
	['1 group, 8th notes, 1st beat', '{C G} F...', '{C G}  F  '],
	['1 group, 8th notes, 2nd beat', 'F. {C G} Em..', 'F  {C G}  Emi  '],
	['1 group, 8th notes, 3rd beat', 'F.. {C G} Em.', 'F  {C G}  Emi  '],
	['1 group, 8th notes, 4th beat', 'F... {C G}', 'F  {C G}  '],
	['1 group, 8thT notes, 1st beat', '{C A7 G} F...', '{C A7 G}  F  '],
	['1 group, 8thT notes, 2nd beat', 'F. {C A7 G} Em..', 'F  {C A7 G}  Emi  '],
	['1 group, 8thT notes, 3rd beat', 'F.. {C A7 G} Em.', 'F  {C A7 G}  Emi  '],
	['1 group, 8thT notes, 4th beat', 'F... {C A7 G}', 'F  {C A7 G}  '],
	['2 groups, beats 1 & 2', '{C G} {A7 B7} F..', '{C G}  {A7 B7}  F  '],
	['2 groups, beats 1 & 3', '{C G} F. {A7 B7} F.', '{C G}  F  {A7 B7}  F  '],
	['2 groups, beats 1 & 4', '{C G} F.. {A7 B7}', '{C G}  F  {A7 B7}  '],
	['2 groups, beats 2 & 3', 'F. {C G} {A7 B7} F.', 'F  {C G}  {A7 B7}  F  '],
	['2 groups, beats 2 & 4', 'F. {C G} F. {A7 B7}', 'F  {C G}  F  {A7 B7}  '],
	['2 groups, beats 3 & 4', 'F.. {C G} {A7 B7}', 'F  {C G}  {A7 B7}  '],
	['no sub-beat delimiters', 'F.. {C G} {A7 B7}', 'F  C G  A7 B7  ', false],
])('%s: %s', (title, input, output, shouldPrintSubBeatDelimiters = true) => {
	test('Renders sub-beat groups: ' + output, () => {
		const parsed = forEachChordInChordLine(
			parseChordLine(input),
			(chord) => (chord.symbol = getChordSymbol(chord.model))
		);
		const spaced = simpleSpacer(parsed);

		const rendered = renderBarContent(
			spaced.allBars[0],
			undefined,
			true,
			shouldPrintSubBeatDelimiters
		);

		expect(stripTags(rendered)).toEqual(output);
	});
});
