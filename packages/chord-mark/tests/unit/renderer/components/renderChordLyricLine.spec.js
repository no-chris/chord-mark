import { parseSong, renderSong } from '../../../../src/chordMark';
import htmlToElement from '../../../../src/core/dom/htmlToElement';
import stripTags from '../../../../src/core/dom/stripTags';

describe('renderChordLyricLine', () => {
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
			/**/
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
					['&nbsp;', ' '],
					['&nbsp;', 'bar'],
					['&nbsp;', ' '],
					['&nbsp;', 'separators'],
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
			[
				'Text ends with space',
				'C G',
				'_Ends with spaces  _   ',
				//|C                |G  |
				// Ends with spaces      //
				[
					['|', ' '],
					['C   ', 'Ends'],
					[' ', ' '],
					['    ', 'with'],
					[' ', ' '],
					['      ', 'spaces'],
					[' ', ''],
					['|', ''],
					['G', ''],
					[' ', ''],
					[' ', ''],
					['|', ''],
				],
			],
			[
				'With inline time signature changes',
				'C 2/4 G 3/4 E7',
				'_With _time signature _changes',
				//|C   |2/4 G             |3/4 E7     |
				// With     time signature     changes
				[
					['|', ' '],
					['C   ', 'With'],
					['|', ' '],
					['2/4', '   '],
					[' ', ' '],
					['G   ', 'time'],
					[' ', ' '],
					['         ', 'signature'],
					['|', ' '],
					['3/4', '   '],
					[' ', ' '],
					['E7     ', 'changes'],
					['|', ''],
				],
			],
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
			test(`${chordLine} ${lyricLine}`, () => {
				const parsed = parseSong(chordLine + '\n' + lyricLine);
				const renderedMerged = renderSong(parsed, {
					...options,
					wrapChordLyricLines: true,
				});
				const allChordTokens = getAllNodesOf(
					renderedMerged,
					'cmChordLine'
				);
				const allLyricTokens = getAllNodesOf(
					renderedMerged,
					'cmLyricLine'
				);
				expect(allChordTokens.length).toBe(pairs.length);
				expect(allLyricTokens.length).toBe(pairs.length);

				pairs.forEach(([chord, lyric], i) => {
					expect(stripTags(allChordTokens[i])).toEqual(chord);
					expect(stripTags(allLyricTokens[i])).toEqual(lyric);
				});
			});
		});
	});

	test('Markup test', () => {
		const expected =
			'<div class="cmSong">' +
			'<p class="cmLine">' +
			'<span class="cmChordLyricLine">' +
			'<span class="cmChordLyricPair">' +
			'<span class="cmChordLine">' +
			'<span class="cmBarSeparator">|</span>' +
			'</span>' +
			'<span class="cmLyricLine"> </span>' +
			'</span>' +
			'<span class="cmChordLyricPair">' +
			'<span class="cmChordLine"><span class="cmChordSymbol">Am<span class="cmChordDuration">.</span></span></span>' +
			'<span class="cmLyricLine">   </span>' +
			'</span>' +
			'<span class="cmChordLyricPair">' +
			'<span class="cmChordLine">      </span>' +
			'<span class="cmLyricLine">Mother</span>' +
			'</span>' +
			'<span class="cmChordLyricPair">' +
			'<span class="cmChordLine"><span class="cmSubBeatGroupOpener">[</span></span>' +
			'<span class="cmLyricLine"> </span>' +
			'</span>' +
			'<span class="cmChordLyricPair">' +
			'<span class="cmChordLine"><span class="cmChordSymbol">Am</span></span>' +
			'<span class="cmLyricLine">Ma</span>' +
			'</span>' +
			'<span class="cmChordLyricPair">' +
			'<span class="cmChordLine"> </span>' +
			'<span class="cmLyricLine"> </span>' +
			'</span>' +
			'<span class="cmChordLyricPair">' +
			'<span class="cmChordLine"><span class="cmChordSymbol">Am/G</span></span>' +
			'<span class="cmLyricLine">ry  </span>' +
			'</span>' +
			'<span class="cmChordLyricPair">' +
			'<span class="cmChordLine"><span class="cmSubBeatGroupCloser">]</span></span>' +
			'<span class="cmLyricLine"> </span>' +
			'</span>' +
			'<span class="cmChordLyricPair"><span class="cmChordLine"> </span>' +
			'<span class="cmLyricLine"> </span>' +
			'</span>' +
			'<span class="cmChordLyricPair">' +
			'<span class="cmChordLine"><span class="cmChordSymbol">FM7<span class="cmChordDuration">.</span></span> </span>' +
			'<span class="cmLyricLine">comes</span>' +
			'</span>' +
			'<span class="cmChordLyricPair">' +
			'<span class="cmChordLine"> </span>' +
			'<span class="cmLyricLine"> </span>' +
			'</span>' +
			'<span class="cmChordLyricPair">' +
			'<span class="cmChordLine">  </span>' +
			'<span class="cmLyricLine">to</span>' +
			'</span>' +
			'<span class="cmChordLyricPair">' +
			'<span class="cmChordLine"> </span>' +
			'<span class="cmLyricLine"> </span>' +
			'</span>' +
			'<span class="cmChordLyricPair">' +
			'<span class="cmChordLine"><span class="cmChordSymbol">F6<span class="cmChordDuration">.</span></span></span>' +
			'<span class="cmLyricLine">me</span>' +
			'</span>' +
			'<span class="cmChordLyricPair">' +
			'<span class="cmChordLine"> </span>' +
			'<span class="cmLyricLine"></span>' +
			'</span>' +
			'<span class="cmChordLyricPair">' +
			'<span class="cmChordLine"><span class="cmBarSeparator">|</span></span>' +
			'<span class="cmLyricLine"></span>' +
			'</span>' +
			'</span>' +
			'</p>' +
			'</div>';
		const parsed = parseSong(
			'Am. [Am Am/G] FM7. F6.\n_ Mother _Ma_ry _comes to _me'
		);
		const rendered = renderSong(parsed, {
			wrapChordLyricLines: true,
		});
		expect(rendered).toEqual(expected);
	});

	// helpers functions
	function getAllNodesOf(html, className) {
		const allNodesOf = [];
		const startNode = htmlToElement(html);
		addNodesOf(startNode, className, allNodesOf);
		return allNodesOf;
	}

	function addNodesOf(startNode, className, allNodesOf) {
		startNode.childNodes.forEach((childNode) => {
			if (childNode.nodeType !== Node.TEXT_NODE) {
				if (childNode.classList.value.indexOf(className) !== -1) {
					allNodesOf.push(childNode.innerHTML);
				} else {
					addNodesOf(childNode, className, allNodesOf);
				}
			}
		});
	}
});
