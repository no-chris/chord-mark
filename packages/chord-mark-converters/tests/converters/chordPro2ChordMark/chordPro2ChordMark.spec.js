import fs from 'fs';
import path from 'path';

import chordPro2ChordMark from '../../../src/converters/chordPro2ChordMark';

const dataDir = path.resolve(__dirname + '/data');
const input1 = fs.readFileSync(dataDir + '/inputChordPro1.cho', 'utf-8');
const output1 = fs.readFileSync(dataDir + '/outputChordMark1.txt', 'utf-8');

describe('Module', () => {
	test('Should expose a function', () => {
		expect(typeof chordPro2ChordMark).toBe('function');
	});
});

describe('chordPro2ChordMark', () => {
	describe.each([['Sample song 1', input1, output1]])(
		'%s',
		(title, input, output) => {
			test('should produce expected ChordMark markup', () => {
				const converted = chordPro2ChordMark(input);
				expect(converted).toBe(output);
			});
		}
	);

	describe.each([
		// ===== Environment directives =====
		[
			'recognize verse',
			`{sov}
Verse content
{eov}`,
			`#v
Verse content`,
		],
		[
			'recognize chorus',
			`{soc}
Chorus content
{eoc}`,
			`#c
Chorus content`,
		],
		[
			'recognize bridge',
			`{sob}
Bridge content
{eob}`,
			`#b
Bridge content`,
		],
		[
			'recognize part as verse',
			`{sop}
Part content
{eop}`,
			`#v
Part content`,
		],
		[
			'lines without environment should be considered as verse',
			`Verse content without environment

{soc}
Chorus content
{eoc}

Another lonely verse`,
			`#v
Verse content without environment

#c
Chorus content

#v
Another lonely verse`,
		],

		// ===== Use label of environment directives =====
		[
			'use #c if label is "Chorus"',
			`{sop: Chorus}\nPart content\n{eop}`,
			`#c\nPart content`,
		],
		[
			'use #v if label is "Verse"',
			`{sop: Verse}\nPart content\n{eop}`,
			`#v\nPart content`,
		],
		[
			'use #b if label is "Bridge"',
			`{sop: Bridge}\nPart content\n{eop}`,
			`#b\nPart content`,
		],
		[
			'name section after label',
			`{sov: myVerse}\nVerse\n{eov}`,
			`#myVerse\nVerse`,
		],
		[
			'Label might generate an invalid section name',
			`{sov: My invalid sectionLabel}\nVerse\n{eov}`,
			`#My invalid sectionLabel\nVerse`,
		],

		// ===== Section repeat directives =====
		['chorus repeats', `{chorus}`, `#c`],
		['verse repeat', `{verse}`, `#v`],
		['bridge repeats', `{bridge}`, `#b`],
		['two chorus repeats', `{chorus}\n{chorus}`, `#c\n\n#c`],
		[
			'mixed repeats',
			`{chorus}\n{chorus}\n{verse}\n{bridge}`,
			`#c\n\n#c\n\n#v\n\n#b`,
		],
		['comment with label', `{comment:mySection}`, `#mySection`],
		['comment without label is considered as chorus', `{comment}`, `#c`],
		[
			'comment with long label yields invalid section label',
			`{comment: My Long Comment}`,
			`#My Long Comment`,
		],

		// ===== Directives parsing =====
		['base', `{comment:mySection}`, `#mySection`],
		['should tim key and value', `{ comment : mySection   }`, `#mySection`],
		['one character key/value', `{c:x}`, `#x`],
		[
			'should remove unsupported directives',
			`{start_of_abc}
{toccolour}
{define}
{x_custom_name}
{new_physical_page}
{whatever}`,
			``,
		],

		// ===== Comment lines =====
		['should remove comment', `# to-be-removed comment`, ``],
		[
			'should remove comment, even if no space after #',
			`#to-be-removed comment`,
			``,
		],

		// ===== Empty lines =====
		[
			'should keep empty lines inside sections',
			`A first line


A second line`,
			`#v
A first line


A second line`,
		],
		[
			'should keep only 1 line between sections',
			`Verse




{soc}
Chorus
{eoc}`,
			`#v
Verse

#c
Chorus`,
		],
		[
			'should trim start and end empty lines',
			`

{soc}
Chorus
{eoc}


`,
			`#c
Chorus`,
		],
	])('%s', (title, input, output) => {
		test('should produce expected ChordMark markup', () => {
			const converted = chordPro2ChordMark(input);
			expect(converted).toBe(output);
		});
	});
});
