import barContentRenderer from '../../../../src/renderer/bar/barContent';

import parseChordLine from '../../../../src/parser/parseChordLine';
import isRenderer from '../../../../src/renderer/isRenderer';
import getChordSymbol from '../../../../src/renderer/getChordSymbol';
import stripTags from '../../../../src/core/dom/stripTags';
import htmlToElement from '../../../../src/core/dom/htmlToElement';

import { forEachChordInChordLine } from '../../../../src/renderer/helper/songs';

const chordRenderer = {
	render : chordSymbol => chordSymbol
};

describe('barContentRenderer', () => {
	test('Module', () => {
		expect(barContentRenderer).toBeInstanceOf(Object);
	});

	test('isRenderer', () => {
		expect(isRenderer(barContentRenderer)).toEqual(true);
	});
});

describe.each([

	['no parameters', undefined],
	['no renderer', { chordRenderer: undefined }],
	['invalid renderer', { chordRenderer: { renderFake() {} }}],

])('should throw with %s', (title, input) => {
	test('Throw if not given valid chordRenderer', () => {
		const parsed = parseChordLine('C');

		const throwingFn = () => barContentRenderer.render(parsed, input);

		expect(throwingFn).toThrow(TypeError);
		expect(throwingFn).toThrow('chordRenderer is not a valid renderer');
	});
});

describe.each([

	['1 bar / 1 chord / 4 bpb', 			'C', 			'C  '],
	['1 bar / 2 chords / 4 bpb (1/3)', 		'C. G...', 		'C  G  '],
	['1 bar / 2 chords / 4 bpb (2/2)',  	'C.. G..', 		'C  G  '],
	['1 bar / 2 chords / 4 bpb (3/1)',  	'C... G.', 		'C  G  '],
	['1 bar / 3 chords / 4 bpb (1/1/2)',  	'C. G. F..',	'C  G  F  '],
	['1 bar / 3 chords / 4 bpb (1/2/1)',  	'C. G.. F.',	'C  G  F  '],
	['1 bar / 3 chords / 4 bpb (2/1/1)',  	'C.. G. F.',	'C  G  F  '],
	['1 bar / 4 chords / 4 bpb (1/1/1/1)', 	'C. G. F. Am.',	'C  G  F  Am  '],

])('%s: %s', (title, input, output) => {
	test('Renders with default spacing: ' + output, () => {
		let parsed = parseChordLine(input);
		parsed = forEachChordInChordLine(parsed, chord => chord.symbol = getChordSymbol(chord.model));

		const rendered = barContentRenderer.render(
			parsed.allBars[0],
			{ chordRenderer }
		);
		expect(stripTags(rendered)).toEqual(output);
	});
});

describe.each([

	['spacesAfter = 0',  	'C. G. F..',	0, 'CGF'],
	['spacesAfter = 1',  	'C. G. F..',	1, 'C G F '],
	['spacesAfter = 2',  	'C. G. F..',	2, 'C  G  F  '],
	['spacesAfter = 3',  	'C. G. F..',	3, 'C   G   F   '],
	['spacesAfter = 4',  	'C. G. F..',	4, 'C    G    F    '],
	['spacesAfter = 5',  	'C. G. F..',	5, 'C     G     F     '],
	['spacesAfter = 6',  	'C. G. F..',	6, 'C      G      F      '],

])('%s: %s', (title, input, spacesAfter, output) => {
	test('Respect spacesAfter value: ' + output, () => {
		let parsed = parseChordLine(input);
		parsed = forEachChordInChordLine(parsed, chord => chord.symbol = getChordSymbol(chord.model));

		parsed.allBars[0].allChords.forEach(chord => {
			chord.spacesAfter = spacesAfter;
		});

		const rendered = barContentRenderer.render(
			parsed.allBars[0],
			{ chordRenderer }
		);

		expect(stripTags(rendered)).toEqual(output);
	});
});

describe.each([

	['spacesWithin = 0',  	'C. G. F..',	0, 'C  G  F  '],
	['spacesWithin = 1',  	'C. G. F..',	1, 'C   G   F   '],
	['spacesWithin = 2',  	'C. G. F..',	2, 'C    G    F    '],
	['spacesWithin = 3',  	'C. G. F..',	3, 'C     G     F     '],
	['spacesWithin = 4',  	'C. G. F..',	4, 'C      G      F      '],
	['spacesWithin = 5',  	'C. G. F..',	5, 'C       G       F       '],
	['spacesWithin = 6',  	'C. G. F..',	6, 'C        G        F        '],

])('%s: %s', (title, input, spacesWithin, output) => {
	test('Respect spacesWithin value: ' + output, () => {
		let parsed = parseChordLine(input);
		parsed = forEachChordInChordLine(parsed, chord => chord.symbol = getChordSymbol(chord.model));

		parsed.allBars[0].allChords.forEach(chord => {
			chord.spacesWithin = spacesWithin;
		});

		const rendered = barContentRenderer.render(
			parsed.allBars[0],
			{ chordRenderer }
		);

		expect(stripTags(rendered)).toEqual(output);
	});
});

describe('Behaviour', () => {
	test('Should return valid html', () => {
		let parsed = parseChordLine('C.. G. F.');
		parsed = forEachChordInChordLine(parsed, chord => chord.symbol = getChordSymbol(chord.model));

		const rendered = barContentRenderer.render(parsed.allBars[0], { chordRenderer });
		const element = htmlToElement(rendered);

		expect(element).toBeInstanceOf(Node);
		expect(element.nodeName).toBe('SPAN');
		expect(element.classList.contains('cp2-bar-content')).toBe(true);
	});
});
