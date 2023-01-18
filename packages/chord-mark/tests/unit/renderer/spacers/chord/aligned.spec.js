import alignedSpacer from '../../../../../src/renderer/spacers/chord/aligned';
import parseChordLine from '../../../../../src/parser/parseChordLine';
import getChordSymbol from '../../../../../src/renderer/helpers/getChordSymbol';
import { forEachChordInChordLine } from '../../../../../src/parser/helper/songs';

describe('alignedSpacer', () => {
	test('Module', () => {
		expect(alignedSpacer).toBeInstanceOf(Function);
	});
});

const defaultSpacesAfter = 2;
const defaultSubBeatSpacesAfter = 1;
const emptyBeatSpaces = 1;

describe.each([
	[
		'fills second, third and fourth beat',
		'A',
		[{ 1: 1, 2: 0, 3: 0, 4: 0 }],
		[0],
		[
			defaultSpacesAfter +
				emptyBeatSpaces +
				emptyBeatSpaces +
				emptyBeatSpaces,
		],
	],

	[
		'fills second and fourth beat',
		'A.. D7..',
		[{ 1: 1, 2: 0, 3: 2, 4: 0 }],
		[0, 0],
		[
			defaultSpacesAfter + emptyBeatSpaces,
			defaultSpacesAfter + emptyBeatSpaces,
		],
	],

	[
		'fills second beat',
		'A.. D7. E7.',
		[{ 1: 1, 2: 0, 3: 2, 4: 2 }],
		[0, 0, 0],
		[defaultSpacesAfter + emptyBeatSpaces, defaultSpacesAfter, 0],
	],

	[
		'fills third beat',
		'A. Dmi7.. E7.',
		[{ 1: 1, 2: 4, 3: 0, 4: 2 }],
		[0, 0, 0],
		[defaultSpacesAfter, defaultSpacesAfter + emptyBeatSpaces, 0],
	],

	[
		'fills space within for "full" beats',
		'A. Dmi7.. E7.',
		[{ 1: 3, 2: 6, 3: 0, 4: 3 }],
		[2, 2, 1],
		[defaultSpacesAfter, defaultSpacesAfter + emptyBeatSpaces, 0],
	],

	[
		'fills space within for "empty" beats',
		'A.. D7..',
		[{ 1: 3, 2: 6, 3: 3, 4: 7 }],
		[2, 1],
		[defaultSpacesAfter + 6 + defaultSpacesAfter, defaultSpacesAfter + 7],
	],

	[
		'take chords durations markers into account',
		'A. Dmi7.. E7.',
		[{ 1: 3, 2: 6, 3: 2, 4: 5 }],
		[1, 0, 2],
		[defaultSpacesAfter, defaultSpacesAfter + 2 + defaultSpacesAfter, 0],
		true,
	],

	[
		'DO NOT space last chord if bar separators are displayed',
		'A. B. C. D.',
		[{ 1: 1, 2: 1, 3: 1, 4: 1 }],
		[0, 0, 0, 0],
		[defaultSpacesAfter, defaultSpacesAfter, defaultSpacesAfter, 0],
		undefined,
		true,
	],

	[
		'space last chord if bar separators are NOT displayed',
		'A. B. C. D.',
		[{ 1: 1, 2: 1, 3: 1, 4: 1 }],
		[0, 0, 0, 0],
		[
			defaultSpacesAfter,
			defaultSpacesAfter,
			defaultSpacesAfter,
			defaultSpacesAfter,
		],
		undefined,
		false,
	],

	[
		'space chords in sub-beat group with 1 space',
		'A. [C Ami G] C. D.',
		[{ 1: 1, 2: 9, 3: 1, 4: 1 }],
		[0, 0, 0, 0, 0, 0],
		[
			defaultSpacesAfter,
			defaultSubBeatSpacesAfter,
			defaultSubBeatSpacesAfter,
			defaultSpacesAfter,
			defaultSpacesAfter,
			0,
		],
	],

	[
		'space sub-beat group as a whole, filling spacesWithin property of the last chord',
		'A. [C Ami G] C. D.',
		[{ 1: 1, 2: 20, 3: 1, 4: 1 }],
		[0, 0, 0, 11, 0, 0],
		[
			defaultSpacesAfter,
			defaultSubBeatSpacesAfter,
			defaultSubBeatSpacesAfter,
			defaultSpacesAfter,
			defaultSpacesAfter,
			0,
		],
	],

	[
		'sub-beat group at the end, with bar separators',
		'A. C. D. [C Ami G]',
		[{ 1: 1, 2: 1, 3: 1, 4: 9 }],
		[0, 0, 0, 0, 0, 0],
		[
			defaultSpacesAfter,
			defaultSpacesAfter,
			defaultSpacesAfter,
			defaultSubBeatSpacesAfter,
			defaultSubBeatSpacesAfter,
			0,
		],
		false,
		true,
	],

	[
		'sub-beat group at the end, no bar separators',
		'A. C. D. [C Ami G]',
		[{ 1: 1, 2: 1, 3: 1, 4: 9 }],
		[0, 0, 0, 0, 0, 0],
		[
			defaultSpacesAfter,
			defaultSpacesAfter,
			defaultSpacesAfter,
			defaultSubBeatSpacesAfter,
			defaultSubBeatSpacesAfter,
			defaultSpacesAfter,
		],
		false,
		false,
	],

	[
		'uses simple spacer after an inline time signature change',
		'A.. E7.. 3/4 C.. D. 2/4 D. E.',
		[
			{ 1: 20, 2: 20, 3: 20, 4: 20 },
			{ 1: 20, 2: 20, 3: 20, 4: 20 },
			{ 1: 20, 2: 20, 3: 20, 4: 20 },
		],
		[17, 16, 0, 0, 0, 0],
		[
			defaultSpacesAfter + 20 + defaultSpacesAfter,
			defaultSpacesAfter + 20,
			defaultSpacesAfter,
			defaultSpacesAfter,
			defaultSpacesAfter,
			defaultSpacesAfter,
		],
		true,
		true,
	],
])(
	'Aligned spacer: %s',
	(
		title,
		chordLine,
		maxBeatWidth,
		spacesWithin,
		spacesAfter,
		shouldPrintChordsDuration = false,
		shouldPrintBarSeparators = true
	) => {
		test('Correctly fills .spacesWithin and .spacesAfter properties', () => {
			let parsed = parseChordLine(chordLine);
			parsed = forEachChordInChordLine(
				parsed,
				(chord) => (chord.symbol = getChordSymbol(chord.model))
			);

			parsed.allBars.map((bar) => {
				bar.shouldPrintChordsDuration = !!shouldPrintChordsDuration;
			});

			const spaced = alignedSpacer(
				parsed,
				maxBeatWidth,
				shouldPrintBarSeparators
			);

			const actualSpacesWithin = [];
			const actualSpacesAfter = [];

			spaced.allBars.forEach((bar) => {
				bar.allChords.forEach((chord) => {
					expect(chord).toHaveProperty('spacesWithin');
					actualSpacesWithin.push(chord.spacesWithin);

					expect(chord).toHaveProperty('spacesAfter');
					actualSpacesAfter.push(chord.spacesAfter);
				});
			});

			expect(actualSpacesWithin).toEqual(spacesWithin);
			expect(actualSpacesAfter).toEqual(spacesAfter);
		});
	}
);
