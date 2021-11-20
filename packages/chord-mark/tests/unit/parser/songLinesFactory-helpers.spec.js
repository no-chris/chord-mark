import parseSectionLabel from '../../../src/parser/parseSectionLabel';

export function getSectionLine(
	sectionStr,
	id,
	index,
	{ fromCopy = false, fromRepeat = false } = {}
) {
	const sectionLine = {
		type: 'sectionLabel',
		string: sectionStr,
		index: index,
		indexWithoutMultiply: index,
		model: parseSectionLabel(sectionStr),
		id,
	};
	if (fromCopy) {
		sectionLine.isFromSectionCopy = true;
	}
	if (fromRepeat) {
		sectionLine.isFromSectionMultiply = true;
	}
	return sectionLine;
}

function getLine(
	type,
	lineString,
	{ fromCopy = false, fromRepeat = false } = {}
) {
	const line = {
		type,
		string: lineString,
	};
	if (type !== 'emptyLine') {
		line.model = lineString;
	}
	if (fromCopy) {
		line.isFromSectionCopy = true;
	}
	if (fromRepeat) {
		line.isFromSectionMultiply = true;
	}
	return line;
}

export function getLyricLine(lineStr, options) {
	return getLine('lyric', lineStr, options);
}

export function getChordLine(lineStr, options) {
	return getLine('chord', lineStr, options);
}

export function getEmptyLine(options) {
	return getLine('emptyLine', '', options);
}

describe('getSectionLine()', () => {
	describe.each([
		[
			'base: #v',
			'#v',
			'v1',
			1,
			{},
			{
				type: 'sectionLabel',
				string: '#v',
				index: 1,
				indexWithoutMultiply: 1,
				model: parseSectionLabel('#v'),
				id: 'v1',
			},
		],
		[
			'base: #c',
			'#c',
			'c2',
			2,
			{},
			{
				type: 'sectionLabel',
				string: '#c',
				index: 2,
				indexWithoutMultiply: 2,
				model: parseSectionLabel('#c'),
				id: 'c2',
			},
		],
		[
			'repeat & copy',
			'#v2 x3',
			'v2',
			2,
			{ fromCopy: true, fromRepeat: true },
			{
				type: 'sectionLabel',
				string: '#v2 x3',
				index: 2,
				indexWithoutMultiply: 2,
				model: parseSectionLabel('#v2 x3'),
				id: 'v2',
				isFromSectionCopy: true,
				isFromSectionMultiply: true,
			},
		],
	])(
		'Section Line: %s',
		(title, sectionStr, id, index, options, expected) => {
			test('getSectionLine', () => {
				const actual = getSectionLine(sectionStr, id, index, options);
				expect(actual).toEqual(expected);
			});
		}
	);
});

describe('getLyricLine()', () => {
	describe.each([
		[
			'base',
			undefined,
			undefined,
			{ type: 'lyric', model: 'lyricContent', string: 'lyricContent' },
		],
		[
			'no copy, no repeat',
			false,
			false,
			{ type: 'lyric', model: 'lyricContent', string: 'lyricContent' },
		],
		[
			'copy, no repeat',
			true,
			false,
			{
				type: 'lyric',
				model: 'lyricContent',
				string: 'lyricContent',
				isFromSectionCopy: true,
			},
		],
		[
			'no copy, repeat',
			false,
			true,
			{
				type: 'lyric',
				model: 'lyricContent',
				string: 'lyricContent',
				isFromSectionMultiply: true,
			},
		],
		[
			'copy, repeat',
			true,
			true,
			{
				type: 'lyric',
				model: 'lyricContent',
				string: 'lyricContent',
				isFromSectionCopy: true,
				isFromSectionMultiply: true,
			},
		],
	])('Lyric line: %s', (title, fromCopy, fromRepeat, expected) => {
		test('getLyricLine', () => {
			const actual = getLyricLine('lyricContent', {
				fromCopy,
				fromRepeat,
			});
			expect(actual).toEqual(expected);
		});
	});
});

describe('getChordLine()', () => {
	describe.each([
		[
			'base',
			undefined,
			undefined,
			{ type: 'chord', model: 'chordContent', string: 'chordContent' },
		],
		[
			'no copy, no repeat',
			false,
			false,
			{ type: 'chord', model: 'chordContent', string: 'chordContent' },
		],
		[
			'copy, no repeat',
			true,
			false,
			{
				type: 'chord',
				model: 'chordContent',
				string: 'chordContent',
				isFromSectionCopy: true,
			},
		],
		[
			'no copy, repeat',
			false,
			true,
			{
				type: 'chord',
				model: 'chordContent',
				string: 'chordContent',
				isFromSectionMultiply: true,
			},
		],
		[
			'copy, repeat',
			true,
			true,
			{
				type: 'chord',
				model: 'chordContent',
				string: 'chordContent',
				isFromSectionCopy: true,
				isFromSectionMultiply: true,
			},
		],
	])('Chord line: %s', (title, fromCopy, fromRepeat, expected) => {
		test('getChordLine()', () => {
			const actual = getChordLine('chordContent', {
				fromCopy,
				fromRepeat,
			});
			expect(actual).toEqual(expected);
		});
	});
});

describe('getEmptyLine()', () => {
	describe.each([
		['base', undefined, undefined, { type: 'emptyLine', string: '' }],
		['no copy, no repeat', false, false, { type: 'emptyLine', string: '' }],
		[
			'copy, no repeat',
			true,
			false,
			{ type: 'emptyLine', string: '', isFromSectionCopy: true },
		],
		[
			'no copy, repeat',
			false,
			true,
			{ type: 'emptyLine', string: '', isFromSectionMultiply: true },
		],
		[
			'copy, repeat',
			true,
			true,
			{
				type: 'emptyLine',
				string: '',
				isFromSectionCopy: true,
				isFromSectionMultiply: true,
			},
		],
	])('Empty line: %s', (title, fromCopy, fromRepeat, expected) => {
		test('getEmptyLine()', () => {
			const actual = getEmptyLine({
				fromCopy,
				fromRepeat,
			});
			expect(actual).toEqual(expected);
		});
	});
});
