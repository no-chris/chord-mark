import transposeSong from '../../../../src/renderer/modifiers/transposeSong';
import parseSong from '../../../../src/parser/parseSong';

describe('transposeSong', () => {
	test('Module', () => {
		expect(transposeSong).toBeInstanceOf(Function);
	});

	test('Does not mutate input', () => {
		const parsed = parseSong('C.. Dm.. E.. F. G.');
		const transposedLines = transposeSong(parsed.allLines, parsed.allChords, { harmonizeAccidentals: false});

		expect(transposedLines).not.toBe(parsed.allLines);
		expect(transposedLines).toEqual(parsed.allLines);
	});
});


describe.each([

	[ 'auto harmonize to sharp by default', 		'C# Bb A F', 	['C#', 'A#', 'A', 'F'] ],
	[ 'auto harmonize to sharp by default', 		'C# Bb A F', 	['C#', 'A#', 'A', 'F'], 	{ harmonizeAccidentals: true, accidentalsType: 'auto' } ],
	[ 'auto harmonize to flat if more flats', 		'Db Bb Ab F#', 	['Db', 'Bb', 'Ab', 'Gb'], 	{ harmonizeAccidentals: true, accidentalsType: 'auto' } ],
	[ 'auto harmonize to sharp if more sharps',		'C# Bb A# F#', 	['C#', 'A#', 'A#', 'F#'], 	{ harmonizeAccidentals: true, accidentalsType: 'auto' } ],

	[ 'force harmonize to flat',					'C# Bb A# F#', 	['Db', 'Bb', 'Bb', 'Gb'], 	{ harmonizeAccidentals: true, accidentalsType: 'flat' } ],
	[ 'force harmonize to sharp',					'Db Bb Gb Eb', 	['C#', 'A#', 'F#', 'D#'], 	{ harmonizeAccidentals: true, accidentalsType: 'sharp' } ],

	[ 'transpose +7 to flats',						'C# D# A# F#', 	['Ab', 'Bb', 'F', 'Db'], 	{ accidentalsType: 'flat', transposeValue: 7 } ],
	[ 'transpose -5 to flats',						'C# D# A# F#', 	['Ab', 'Bb', 'F', 'Db'], 	{ accidentalsType: 'flat', transposeValue: -5 } ],
	[ 'transpose +7 to sharps',						'Db Eb Bb Gb', 	['G#', 'A#', 'F', 'C#'], 	{ accidentalsType: 'sharp', transposeValue: 7 } ],
	[ 'transpose -5 to sharps',						'Db Eb Bb Gb', 	['G#', 'A#', 'F', 'C#'], 	{ accidentalsType: 'sharp', transposeValue: -5 } ],

])('Should %s', (title, song, transposedRootNotes, options) => {
	test('Correctly transpose with ' + JSON.stringify(options), () => {
		const parsed = parseSong(song);
		const transposed = transposeSong(parsed.allLines, parsed.allChords, options);

		expect(transposed[0].model.allBars[0].allChords[0].transposedModel.symbol.rootNote).toBe(transposedRootNotes[0]);
		expect(transposed[0].model.allBars[1].allChords[0].transposedModel.symbol.rootNote).toBe(transposedRootNotes[1]);
		expect(transposed[0].model.allBars[2].allChords[0].transposedModel.symbol.rootNote).toBe(transposedRootNotes[2]);
		expect(transposed[0].model.allBars[3].allChords[0].transposedModel.symbol.rootNote).toBe(transposedRootNotes[3]);
	});
});

describe.each([

	[ 'no harmonizeAccidentals, transposeValue of 0', 		'C# Bb A F', { transposeValue: 0, harmonizeAccidentals: false } ],
	[ 'no harmonizeAccidentals, default transposeValue', 	'C# Bb A F', { harmonizeAccidentals: false } ],

])('Should not transpose when: %s', (title, song, options) => {
	test('does not transpose with ' + JSON.stringify(options), () => {
		const parsed = parseSong(song);
		const transposed = transposeSong(parsed.allLines, parsed.allChords, options);

		expect(transposed[0].model.allBars[0].allChords[0].transposedModel).toBeUndefined();
		expect(transposed[0].model.allBars[1].allChords[0].transposedModel).toBeUndefined();
		expect(transposed[0].model.allBars[2].allChords[0].transposedModel).toBeUndefined();
		expect(transposed[0].model.allBars[3].allChords[0].transposedModel).toBeUndefined();
	});
});

