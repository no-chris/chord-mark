import chordLyricLineTpl from './tpl/chordLyricLine';

import _intersection from 'lodash/intersection';
import stripTags from '../../core/dom/stripTags';

/**
 * This is the most complex renderer because it works from the previously rendered
 * chords and lyrics markup, combining them into a merged chord/lyrics markup suitable for small screen,
 * instead of rendering directly from the model.
 * This is to avoid duplicating the significant rendering business logic of chord lines,
 * and also to avoid a too big refactoring in order to implement the small screen renderer
 * (e.g. wrappable chord/lyric lines).
 * @param {String} chordLine - html of a rendered chord line
 * @param {String} lyricLine - html of a rendered lyric line
 * @returns {String} rendered html
 */
export default function renderChordLyricLine(chordLine, lyricLine) {
	const allChordTokens = getAllChordTokens(chordLine);
	const allLyricTokens = getAllLyricTokens(lyricLine);

	const allBreakPoints = getAllBreakpoints(allChordTokens, allLyricTokens);

	const chordLyricsPairs = getChordLyricsPairs(
		allBreakPoints,
		allChordTokens,
		allLyricTokens
	);

	return chordLyricLineTpl({ chordLyricsPairs });
}

// eslint-disable-next-line max-lines-per-function
function getAllChordTokens(chordLine) {
	const breakPointsClasses = [
		'cmBarSeparator', //fixme:
		'cmChordSymbol',
		'cmTimeSignature',
		'cmSubBeatGroupOpener', //fixme:
		'cmSubBeatGroupCloser', //fixme:
	];

	const allChordTokens = [];
	// disbaling eslint warning since a chordLine is only made of ChordMark-generated html
	// eslint-disable-next-line no-unsanitized/method
	const chordLineNodes = document
		.createRange()
		.createContextualFragment(chordLine);

	let textIndex = 0;
	walkDom(chordLineNodes, allChordTokens, 0);

	allChordTokens.push({
		tokenText: '',
		tokenTextIndex: stripTags(chordLine).length,
	});

	function walkDom(startNode, allNodes) {
		startNode.childNodes.forEach((childNode) => {
			if (childNode.nodeType === Node.TEXT_NODE) {
				const textContent = childNode.textContent;
				if (isOnlySpaces(textContent)) {
					for (let i = 0; i < textContent.length; i++) {
						allNodes.push({
							tokenText: ' ',
							tokenTextIndex: textIndex,
						});
						textIndex++;
					}
				} else {
					//fixme: is this needed at all? yes, for sub beat group delimiters?
					allNodes.push({
						tokenText: childNode.textContent,
						tokenTextIndex: textIndex,
					});
					textIndex += childNode.textContent.length;
				}
			} else {
				if (breakPointsClasses.includes(childNode.classList.value)) {
					allNodes.push({
						tokenText: childNode.textContent,
						tokenTextIndex: textIndex,
						tokenHtml: childNode.outerHTML,
					});
					textIndex += childNode.textContent.length;
				} else {
					walkDom(childNode, allNodes);
				}
			}
		});
	}

	function isOnlySpaces(string) {
		return Array.from(string).every((char) => char === ' ');
	}

	return allChordTokens;
}

function getAllLyricTokens(lyricLine) {
	const allTextNodes = [];
	const textLyricLine = stripTags(lyricLine);

	let textToken = '';

	Array.from(textLyricLine).forEach((char, charIndex, allChars) => {
		if (char === ' ') {
			if (textToken) {
				allTextNodes.push({
					tokenText: textToken,
					tokenTextIndex: charIndex - textToken.length,
				});
				textToken = '';
			}
			allTextNodes.push({
				tokenText: ' ',
				tokenTextIndex: charIndex,
			});
		} else {
			textToken += char;
		}
		if (!allChars[charIndex + 1]) {
			allTextNodes.push({
				tokenText: textToken,
				tokenTextIndex: charIndex - textToken.length + 1,
			});
		}
	});
	allTextNodes.push({
		tokenText: '',
		tokenTextIndex: textLyricLine.length,
	});
	return allTextNodes;
}

function getAllBreakpoints(allChordTokens, allLyricTokens) {
	const chordLineBreakPoints = allChordTokens.map(
		(token) => token.tokenTextIndex
	);
	const lyricLineBreakPoints = allLyricTokens.map(
		(token) => token.tokenTextIndex
	);
	const allBreakpoints = _intersection(
		chordLineBreakPoints,
		lyricLineBreakPoints
	);

	const longestLine =
		chordLineBreakPoints[chordLineBreakPoints.length - 1] >
		lyricLineBreakPoints[lyricLineBreakPoints.length - 1]
			? chordLineBreakPoints
			: lyricLineBreakPoints;

	const lastBreakpoint = allBreakpoints[allBreakpoints.length - 1];
	const remainingBreakpoints = longestLine.slice(
		longestLine.indexOf(lastBreakpoint) + 1
	);
	if (remainingBreakpoints.length) {
		allBreakpoints.push(...remainingBreakpoints);
	}
	allBreakpoints.shift();

	return allBreakpoints;
}

function getChordLyricsPairs(allBreakpoints, allChordTokens, allLyricTokens) {
	const chordLyricsPairs = [];

	allBreakpoints.forEach((breakpoint) => {
		let chordLineFragment = '';
		let textLineFragment = '';
		while (
			allChordTokens.length &&
			allChordTokens[0].tokenTextIndex < breakpoint
		) {
			const currentNode = allChordTokens.shift();
			chordLineFragment += currentNode.tokenHtml
				? currentNode.tokenHtml
				: currentNode.tokenText;
		}

		while (
			allLyricTokens.length &&
			allLyricTokens[0].tokenTextIndex < breakpoint
		) {
			const currentNode = allLyricTokens.shift();
			textLineFragment += currentNode.tokenText;
		}

		chordLyricsPairs.push({
			index: breakpoint,
			chords: chordLineFragment,
			lyrics: textLineFragment,
		});
	});
	return chordLyricsPairs;
}
