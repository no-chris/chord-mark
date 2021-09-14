import _cloneDeep from 'lodash/cloneDeep';
import symbols from '../../symbols';

const allMasks = {
	0: {
		'': [],
	},

	2: {
		2: [3], // 'A   '
		11: [3, 2], // 'A   B  ',
	},

	3: {
		3: [3], // 'A   '
		12: [2, 4], // 'A  B    '
		21: [6, 0], // 'A      C'
		111: [2, 2, 0], // 'A  B  C'
	},

	4: {
		4: [3], // 'A   ',
		13: [1, 4], // 'A B    ',
		22: [3, 2], // 'A   B  ',
		31: [5, 0], // 'A     B',
		112: [1, 1, 3], // 'A B C   ',
		121: [1, 4, 0], // 'A B    C',
		211: [4, 1, 0], // 'A    B C',
		1111: [2, 2, 2, 0], // 'A  B  C  D',
	},
};

/**
 * @param {ChordLine} chordLineInput
 */
export default function space(chordLineInput) {
	const chordLine = _cloneDeep(chordLineInput);

	let beatCount = 0;
	let chordCount = 0;
	let chordPattern = '';
	let chordSpaces = [];

	chordLine.allBars.forEach((bar) => {
		beatCount = 0;
		chordPattern = '';
		chordSpaces = [];
		chordCount = bar.allChords.length;

		bar.allChords.forEach((chord) => {
			chordPattern += chord.duration.toString();
			beatCount += chord.duration;
		});

		if (allMasks[beatCount] && allMasks[beatCount][chordPattern]) {
			chordSpaces = allMasks[beatCount][chordPattern];
		}

		for (let i = 0; i < chordCount; i++) {
			bar.allChords[i].spacesAfter =
				typeof chordSpaces[i] !== 'undefined'
					? chordSpaces[i]
					: symbols.spacesAfterDefault;
		}
	});

	return chordLine;
}
