import getSectionLabel from '../../src/helpers/getSectionLabel';

describe('getSectionLabel', () => {
	test('Module', () => {
		expect(getSectionLabel).toBeInstanceOf(Function);
	});
});

describe.each([
	/* */
	['short label: Adlib', 'Adlib', '#a'],
	['short label: Ad-lib', 'Ad-lib', '#a'],
	['short label: Ad.lib.', 'Ad.lib.', '#a'],
	['short label: Bridge', 'Bridge', '#b'],
	['short label: Chorus', 'Chorus', '#c'],
	['short label: Intro', 'Intro', '#i'],
	['short label: Introduction', 'Introduction', '#i'],
	['short label: Outro', 'Outro', '#o'],
	['short label: PreChorus', 'PreChorus', '#p'],
	['short label: Pre-Chorus', 'Pre-Chorus', '#p'],
	['short label: Pre Chorus', 'Pre Chorus', '#p'],
	['short label: Solo', 'Solo', '#s'],
	['short label: Interlude', 'Interlude', '#u'],
	['short label: Verse', 'Verse', '#v'],

	['should keep multiplier', 'Verse x2', '#v x2'],
	['should keep multiplier, 2 digits', 'Verse x22', '#v x22'],
	['should skip index', 'Verse 3', '#v'],
	['should skip index, 2 digits', 'Verse 13', '#v'],
	['should skip index, keep multiplier', 'Verse 5 x2', '#v x2'],
	['should skip index, keep multiplier, 2 digits', 'Verse 10 x12', '#v x12'],

	['should trim input, spaces', '   Verse   ', '#v'],
	['should trim input with multiplier, spaces', '   Verse    x2   ', '#v x2'],
	[
		'should trim input with index & multiplier, spaces',
		'   Verse    12   x2   ',
		'#v x2',
	],
	['should trim input, tabs', '\t\tVerse\t\t', '#v'],
	['should trim input with multiplier, tabs', '\tVerse\tx2\t', '#v x2'],
	[
		'should trim input with index & multiplier, tabs',
		'\tVerse\t12\tx2\t',
		'#v x2',
	],

	/* */
	['doesnt detect index if no space before', 'Verse1', '#Verse1'],
	['doesnt detect multiplier if no space before', 'Verse1x2', '#Verse1x2'],
	['should keep unknown label', 'myLabel', '#myLabel'],
	['should keep "invalid" label', 'my Invalid Label', '#my Invalid Label'],
])('%s', (title, input, output) => {
	test(`${input} => ${output}`, () => {
		expect(getSectionLabel(input)).toEqual(output);
	});
});
