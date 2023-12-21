import { mergeChordLineWithLyrics } from '../../../../src/renderer/helpers/mergeChordLineWithLyrics';
import { parseSong, renderSong } from '../../../../src/chordMark';
import stripTags from '../../../../src/core/dom/stripTags';

describe('mergeChordLineWithLyrics', () => {
	test('Module', () => {
		expect(mergeChordLineWithLyrics).toBeInstanceOf(Function);
	});

	describe('should properly split the chord lyrics lines into breakable blocs', () => {
		describe.each([
			/**/
			[
				'Longer chord line, 1',
				'C',
				'_Clean ending',
				//|C           |
				// Clean ending
				[
					['|', ' '],
					['C    ', 'Clean'],
					[' ', ' '],
					['      ', 'ending'],
					['|', ''],
				],
			],
			[
				'Longer chord line, 2',
				'C G',
				'_Extra Chord',
				//|C          |G  |
				// Extra Chord
				[
					['|', ' '],
					['C    ', 'Extra'],
					[' ', ' '],
					['     ', 'Chord'],
					['|', ''],
					['G', ''],
					[' ', ''],
					['|', ''],
				],
			],
			[
				'Longer text line',
				'C',
				'_No bar separators',
				//C
				//No bar separators
				[
					['C', 'No'],
					['', ' '],
					['', 'bar'],
					['', ' '],
					['', 'separators'],
				],
				{ printBarSeparators: false },
			],
			[
				'Exact same length',
				'C Am7',
				'_Same len_gth',
				//C       Am7
				//Same length
				[
					['C   ', 'Same'],
					[' ', ' '],
					['   Am7', 'length'],
				],
				{ printBarSeparators: false },
			],
			/**/
			[
				'Let it be, 1',
				'C.. G..',
				'When I _find myself in _times of trouble',
				//      |C              G               |
				//When I find myself in times of trouble
				[
					['    ', 'When'],
					[' ', ' '],
					[' ', 'I'],
					['|', ' '],
					['C   ', 'find'],
					[' ', ' '],
					['      ', 'myself'],
					[' ', ' '],
					['  ', 'in'],
					[' ', ' '],
					['G    ', 'times'],
					[' ', ' '],
					['  ', 'of'],
					[' ', ' '],
					['       ', 'trouble'],
					['|', ''],
				],
			],
			/* */
			[
				'Let it be, 2',
				'Am. [Am Am/G] FM7. F6.',
				'_ Mother _Ma_ry _comes to _me',
				//|Am.      [Am Am/G] FM7.     F6. |
				//    Mother Ma ry    comes to me
				[
					['|', ' '],
					['Am.', '   '],
					['      ', 'Mother'],
					['[', ' '],
					['Am', 'Ma'],
					[' ', ' '],
					['Am/G', 'ry  '],
					[']', ' '],
					[' ', ' '],
					['FM7. ', 'comes'],
					[' ', ' '],
					['  ', 'to'],
					[' ', ' '],
					['F6.', 'me'],
					[' ', ''],
					['|', ''],
				],
			],
			[
				'Let it be, 3',
				'C.. G..',
				'_Speaking words of _wisdom',
				//|C                 G     |
				// Speaking words of wisdom
				[
					['|', ' '],
					['C       ', 'Speaking'],
					[' ', ' '],
					['     ', 'words'],
					[' ', ' '],
					['  ', 'of'],
					[' ', ' '],
					['G     ', 'wisdom'],
					['|', ''],
				],
			],
			[
				'Let it be, 4',
				'F. [C/E Dm7] C..',
				'Let it _be _ _ _',
				//      |F. [C/E Dm7] C.. |
				//Let it be
				[
					['   ', 'Let'],
					[' ', ' '],
					['  ', 'it'],
					['|', ' '],
					['F.', 'be'],
					[' ', ''],
					['[', ''],
					['C/E', ''],
					[' ', ''],
					['Dm7', ''],
					[']', ''],
					[' ', ''],
					['C..', ''],
					[' ', ''],
					['|', ''],
				],
			],
			/* */
		])('%s', (title, chordLine, lyricLine, pairs, options) => {
			test('returns ', () => {
				const parsed = parseSong(chordLine + '\n' + lyricLine);
				const renderedMerged = renderSong(parsed, {
					...options,
					chordLineRendering: 'merged',
				});
				const allChordTokens = getAllNodesOf(
					renderedMerged,
					'cmChordLyricPair--chords'
				);
				const allLyricTokens = getAllNodesOf(
					renderedMerged,
					'cmChordLyricPair--lyrics'
				);
				expect(allChordTokens.length).toBe(pairs.length);
				expect(allLyricTokens.length).toBe(pairs.length);

				pairs.forEach(([chord, lyric], i) => {
					console.log('===', allChordTokens[i], '===');
					console.log('===', stripTags(allChordTokens[i]), '===');
					expect(stripTags(allChordTokens[i])).toEqual(chord);
					expect(stripTags(allLyricTokens[i])).toEqual(lyric);
				});
			});
		});

		//todo: markup test
	});

	// helpers functions
	function getAllNodesOf(html, className) {
		const allNodesOf = [];
		// eslint-disable-next-line no-unsanitized/method
		const startNode = document.createRange().createContextualFragment(html);
		searchForNodesOf(startNode, className, allNodesOf);
		return allNodesOf;
	}

	function searchForNodesOf(startNode, className, allNodesOf) {
		startNode.childNodes.forEach((childNode) => {
			if (childNode.nodeType !== Node.TEXT_NODE) {
				if (childNode.classList.value.indexOf(className) !== -1) {
					allNodesOf.push(childNode.innerHTML);
				} else {
					searchForNodesOf(childNode, className, allNodesOf);
				}
			}
		});
	}
});
