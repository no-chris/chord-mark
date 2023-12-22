import chordLyricLineTpl from './tpl/chordLyricLine';

import _intersection from 'lodash/intersection';
import _last from 'lodash/last';
import stripTags from '../../core/dom/stripTags';

const breakPointsClasses = [
	'cmBarSeparator', //fixme:
	'cmChordSymbol',
	'cmTimeSignature',
	'cmSubBeatGroupOpener', //fixme:
	'cmSubBeatGroupCloser', //fixme:
];

/**
 * This is by far the most complex renderer.
 * It does not render from the model but from the HTML markup of previously rendered chords and lyrics lines.
 * The existing markup is split and combined into a new markup suitable for small screens,
 * e.g. wrappable chord/lyric lines as a single entity.
 * Although complex, this approach was chosen to avoid:
 * - duplicating the significant rendering business logic of chord lines,
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
	const chordLineNodes = getNodesFromHtmlString(chordLine);

	const allChordTokens = [];
	let textIndex = { i: 0 }; // counter object to pass a reference in the recursive loop

	addChordTokens(chordLineNodes, allChordTokens, textIndex);

	// fixme:manually adding an extra empty token at the end of the line
	allChordTokens.push(getToken('', stripTags(chordLine).length));

	return allChordTokens;
}

function getNodesFromHtmlString(html) {
	// Since a chordLine is only made of ChordMark-generated html, we consider it safe
	// eslint-disable-next-line no-unsanitized/method
	return document.createRange().createContextualFragment(html);
}

// recursive
function addChordTokens(startNode, allNodes, textIndex) {
	startNode.childNodes.forEach((childNode) => {
		if (childNode.nodeType === Node.TEXT_NODE) {
			const textContent = childNode.textContent;
			if (stringContainsOnlySpaces(textContent)) {
				for (const space of textContent) {
					allNodes.push(getToken(space, textIndex.i));
					textIndex.i++;
				}
			} else {
				//fixme: is this needed at all? yes, for sub beat group delimiters?
				allNodes.push(getToken(childNode.textContent, textIndex.i));
				textIndex.i += childNode.textContent.length;
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

function stringContainsOnlySpaces(string) {
	return Array.from(string).every((char) => char === ' ');
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
	if (textToken) {
		allTextNodes.push(
			getToken(textToken, textLyricLine.length - textToken.length)
		);
	}

	// fixme:manually adding an extra token at the end of the line
	allTextNodes.push(getToken('', textLyricLine.length));
	return allTextNodes;
}

function getAllBreakpoints(allChordTokens, allLyricTokens) {
	const chordLineBreakPoints = getBreakpointsFromTokens(allChordTokens);
	const lyricLineBreakPoints = getBreakpointsFromTokens(allLyricTokens);

	const allBreakpoints = _intersection(
		chordLineBreakPoints,
		lyricLineBreakPoints
	);

	const longestLineBreakpoints =
		_last(chordLineBreakPoints) > _last(lyricLineBreakPoints)
			? chordLineBreakPoints
			: lyricLineBreakPoints;

	const lastBreakpoint = _last(allBreakpoints);
	const remainingBreakpoints = longestLineBreakpoints.slice(
		longestLineBreakpoints.indexOf(lastBreakpoint) + 1
	);
	if (remainingBreakpoints.length) {
		allBreakpoints.push(...remainingBreakpoints);
	}
	allBreakpoints.shift(); // fixme: duh! remove 0 index breakpoint

	return allBreakpoints;
}

function getBreakpointsFromTokens(allTokens) {
	return allTokens.map((token) => token.textIndex);
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
