import convert2ChordMark from '../src/convert2ChordMark';

const chordProInput = `MySong
[A]Some [B]lyrics`;

const chordProOutput = `#v
MySong
A B
_Some _lyrics`;

const chordsOverLyricsInput = `MySong
[Verse]
A    B
Some lyrics`;

const chordsOverLyricsOutput = `MySong
#v
A B
_Some _lyrics`;

describe('convert2ChordMark', () => {
	test('Module', () => {
		expect(typeof convert2ChordMark).toBe('function');
	});

	test('Should throw in given invalid inputFormat', () => {
		const shouldThrow = () => {
			convert2ChordMark('', { inputFormat: 'something' });
		};
		expect(shouldThrow).toThrow('unknown input format: something');
	});
});

describe('ChordPro input', () => {
	test('Should detect chordPro input by default', () => {
		expect(convert2ChordMark(chordProInput)).toBe(chordProOutput);
	});

	test('Should detect chordPro input with inputFormat === auto', () => {
		expect(convert2ChordMark(chordProInput, { inputFormat: 'auto' })).toBe(
			chordProOutput
		);
	});

	test('Should process chordPro input with inputFormat === chordPro', () => {
		expect(
			convert2ChordMark(chordProInput, { inputFormat: 'chordPro' })
		).toBe(chordProOutput);
	});

	test('Should not change chordPro input with inputFormat === chordsOverLyrics', () => {
		expect(
			convert2ChordMark(chordProInput, {
				inputFormat: 'chordsOverLyrics',
			})
		).toBe(chordProInput);
	});
});

describe('ChordsOverLyrics input', () => {
	test('Should detect ChordsOverLyrics input by default', () => {
		expect(convert2ChordMark(chordsOverLyricsInput)).toBe(
			chordsOverLyricsOutput
		);
	});

	test('Should detect ChordsOverLyrics input with inputFormat === auto', () => {
		expect(
			convert2ChordMark(chordsOverLyricsInput, { inputFormat: 'auto' })
		).toBe(chordsOverLyricsOutput);
	});

	test('Should process ChordsOverLyrics input with inputFormat === chordsOverLyrics', () => {
		expect(
			convert2ChordMark(chordsOverLyricsInput, {
				inputFormat: 'chordsOverLyrics',
			})
		).toBe(chordsOverLyricsOutput);
	});

	test('Should not change ChordsOverLyrics input with inputFormat === chordPro', () => {
		expect(
			convert2ChordMark(chordsOverLyricsInput, {
				inputFormat: 'chordPro',
			})
		).toBe('#v\n' + chordsOverLyricsInput);
	});
});
