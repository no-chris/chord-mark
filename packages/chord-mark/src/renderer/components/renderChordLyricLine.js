import chordLyricLineTpl from './tpl/chordLyricLine';

import _intersection from 'lodash/intersection';
import _last from 'lodash/last';
import stripTags from '../../core/dom/stripTags';
import htmlToElement from '../../core/dom/htmlToElement';

const breakPointsClasses = [
	'cmChordSymbol',
	'cmTimeSignature',
	//fixme: consider smarter breakpoints rules at some point
	// as it would be better not to always break on those symbols
	'cmBarSeparator',
	'cmSubBeatGroupOpener',
	'cmSubBeatGroupCloser',
];

/**
 * This is by far the most complex renderer.
 * It does not render from the model but from the HTML markup of previously rendered chords and lyrics lines.
 * The existing markup is split and combined into a new markup suitable for small screens,
 * e.g. wrappable chord/lyric lines as a single entity.
 * Although complex, this approach was chosen to avoid:
 * - duplicating the significant rendering business logic of chord lines and/or
 * - refactoring entirely the chord/lyrics line rendering to implement the small screen renderer
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

function getAllChordTokens(chordLine) {
	const chordLineNodes = htmlToElement(chordLine);

	const allChordTokens = [];
	// using an object as a counter instead of an integer
	// so the counter can be used in a recursive loop
	let textIndex = { i: 0 };

	addChordTokens(chordLineNodes, allChordTokens, textIndex);

	return allChordTokens;
}

// recursive
function addChordTokens(startNode, allNodes, textIndex) {
	startNode.childNodes.forEach((childNode) => {
		if (childNode.nodeType === Node.TEXT_NODE) {
			const textContent = childNode.textContent;
			// if we reach a text node, then it has to be composed of spaces only
			for (const space of textContent) {
				allNodes.push(getToken(space, textIndex.i));
				textIndex.i++;
			}
		} else {
			if (breakPointsClasses.includes(childNode.classList.value)) {
				allNodes.push(
					getToken(
						childNode.textContent,
						textIndex.i,
						childNode.outerHTML
					)
				);
				textIndex.i += childNode.textContent.length;
			} else {
				addChordTokens(childNode, allNodes, textIndex);
			}
		}
	});
}

function getToken(text, textIndex, html) {
	return {
		text,
		textIndex,
		html,
	};
}

function getAllLyricTokens(lyricLine) {
	const allTextNodes = [];
	const textLyricLine = stripTags(lyricLine);

	let textToken = '';

	Array.from(textLyricLine).forEach((char, charIndex) => {
		if (char === ' ') {
			if (textToken) {
				allTextNodes.push(
					getToken(textToken, charIndex - textToken.length)
				);
				textToken = '';
			}
			allTextNodes.push(getToken(' ', charIndex));
		} else {
			textToken += char;
		}
	});
	allTextNodes.push(
		getToken(textToken, textLyricLine.length - textToken.length)
	);
	return allTextNodes;
}

function getAllBreakpoints(allChordTokens, allLyricTokens) {
	const chordLineBreakPoints = getBreakpointsFromTokens(allChordTokens);
	const lyricLineBreakPoints = getBreakpointsFromTokens(allLyricTokens);

	const allBreakpoints = _intersection(
		chordLineBreakPoints,
		lyricLineBreakPoints
	);

	let shortestLineBreakpoints;
	let longestLineBreakpoints;

	if (_last(chordLineBreakPoints) > _last(lyricLineBreakPoints)) {
		longestLineBreakpoints = chordLineBreakPoints;
		shortestLineBreakpoints = lyricLineBreakPoints;
	} else {
		longestLineBreakpoints = lyricLineBreakPoints;
		shortestLineBreakpoints = chordLineBreakPoints;
	}

	const remainingBreakpoints = longestLineBreakpoints.filter(
		(bp) => bp > _last(shortestLineBreakpoints)
	);

	if (remainingBreakpoints.length) {
		allBreakpoints.push(...remainingBreakpoints);
	}
	// remove the 0-index breakpoint of the first token
	allBreakpoints.shift();

	return allBreakpoints;
}

function getBreakpointsFromTokens(allTokens) {
	const allBreakPoints = allTokens.map((token) => token.textIndex);
	const lastBreakpoint = allTokens.reduce((originalLine, token) => {
		return originalLine + token.text;
	}, '').length;
	allBreakPoints.push(lastBreakpoint);
	return allBreakPoints;
}

function getChordLyricsPairs(allBreakpoints, allChordTokens, allLyricTokens) {
	const chordLyricsPairs = [];

	allBreakpoints.forEach((breakpoint) => {
		let chordLineFragment = '';
		let textLineFragment = '';
		while (
			allChordTokens.length &&
			allChordTokens[0].textIndex < breakpoint
		) {
			const token = allChordTokens.shift();
			chordLineFragment += token.html || token.text;
		}

		while (
			allLyricTokens.length &&
			allLyricTokens[0].textIndex < breakpoint
		) {
			const currentNode = allLyricTokens.shift();
			textLineFragment += currentNode.text;
		}

		chordLyricsPairs.push({
			chords: chordLineFragment,
			lyrics: textLineFragment,
		});
	});
	return chordLyricsPairs;
}
