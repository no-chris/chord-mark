import getMaxBeatsWidth from '../../../../../src/renderer/spacers/chord/getMaxBeatsWidth';

import parseSong from '../../../../../src/parser/parseSong';

import getChordSymbol from '../../../../../src/renderer/helpers/getChordSymbol';
import { forEachChordInSong } from '../../../../../src/parser/helper/songs';

describe('getMaxBeatsWidth', () => {
	test('Module', () => {
		expect(getMaxBeatsWidth).toBeInstanceOf(Function);
	});
});

describe.each([

	[
		'2 lines / 1 bar / 1 chord, same width ',
		[
			'A',
			'B'
		],
		[
			{ 1: 1, 	2: 0, 	3: 0, 	4: 0 },
		]
	],

	[
		'2 lines / 1 bar / 1 chord, different width',
		[
			'A',
			'Bm7'
		],
		[
			{ 1: 3, 	2: 0, 	3: 0, 	4: 0 },
		]
	],

	[
		'2 lines / 1 bar / 4 chords per bar',
		[
			'A. Bm7. C. Dm7.',
			'E7. A7. G7. D7/G.'
		],
		[
			{ 1: 2, 	2: 3, 	3: 2, 	4: 4 },
		]
	],

	[
		'2 lines / 1 bar / 3 chords / gap on beat 2 and 4',
		[
			'A.. Bm7..',
			'E7'
		],
		[
			{ 1: 2, 	2: 0, 	3: 3, 	4: 0 },
		]
	],

	[
		'2 lines / 1 bar / 3 chords / gap on beat 2',
		[
			'A.. Bm7..',
			'E7... A7.'
		],
		[
			{ 1: 2, 	2: 0, 	3: 3, 	4: 2 },
		]
	],

	[
		'2 lines / 1 bar / 3 chords / gap on beat 3',
		[
			'A. Bm7...',
			'E7... A7.'
		],
		[
			{ 1: 2, 	2: 3, 	3: 0, 	4: 2 },
		]
	],

	[
		'2 lines / 1 bar / 3 chords / gap on beat 4',
		[
			'A. Bm7...',
			'E7.. A7..'
		],
		[
			{ 1: 2, 	2: 3, 	3: 2, 	4: 0 },
		]
	],

	[
		'3 lines / 1 bar / 4 chords ',
		[
			'A. Bm7. C. Dm7.',
			'E7. A7. G7. D7.',
			'E7/G. A. G. Dadd9.'
		],
		[
			{ 1: 4, 	2: 3, 	3: 2, 	4: 5 },
		]
	],

	[
		'3 lines / 1 bar / different beat per line ',
		[
			'A',
			'E7. A7...',
			'D7.. A..',
			'Dm7... Cmaj7.',
		],
		[
			{ 1: 3, 	2: 2, 	3: 1, 	4: 5 },
		]
	],

	[
		'3 lines / 3 bars / different beat per line ',
		[
			'A             A             B',
			'E7. A7...     E7... A7.     Gadd11',
			'D7.. A..      D7.. Aadd9..  D7.. Csus4..',
			'Dm7... Cmaj7. Gmaj7. Dm7... B7',
		],
		[
			{ 1: 3, 	2: 2, 	3: 1, 	4: 5 },
			{ 1: 5, 	2: 3, 	3: 5, 	4: 2 },
			{ 1: 6, 	2: 0, 	3: 5, 	4: 0 },
		]
	],

	[
		'3 lines / uneven bars per line',
		[
			'A   A           B   C  G.. E7..',
			'G7',
			'G   Bm7.. Am7.. E7',
		],
		[
			{ 1: 2, 	2: 0, 	3: 0, 	4: 0 },
			{ 1: 3, 	2: 0, 	3: 3, 	4: 0 },
			{ 1: 2, 	2: 0, 	3: 0, 	4: 0 },
			{ 1: 1, 	2: 0, 	3: 0, 	4: 0 },
			{ 1: 1, 	2: 0, 	3: 2, 	4: 0 },
		]
	],

])('getMaxBeatsWidth(): %s', (title, input, output) => {
	test('Correctly computes the maximum width for each beat', () => {
		const parsedSong = parseSong(input);
		let { allLines } = parsedSong;

		allLines = forEachChordInSong(allLines, chord => chord.symbol = getChordSymbol(chord.model));

		const maxBeatsWidth = getMaxBeatsWidth(allLines);
		expect(maxBeatsWidth).toEqual(output);
	});
});
