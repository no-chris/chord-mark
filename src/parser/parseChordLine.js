import _isEqual from 'lodash/isEqual';
import _cloneDeep from 'lodash/cloneDeep';

import syntax from './syntax';
import clearSpaces from './helper/clearSpaces';

import parseChord from './parseChord';
import parseTimeSignature from './parseTimeSignature';

import IncorrectBeatCountException from './exceptions/IncorrectBeatCountException';
import InvalidChordRepetitionException from './exceptions/InvalidChordRepetitionException';

const chordBeatCountSymbols = new RegExp(syntax.chordBeatCount, 'g');
const barRepeatSymbols = new RegExp('^' + syntax.barRepeat + '+$');
const defaultTimeSignature = parseTimeSignature('4/4');

/**
 * @typedef {Object} ChordLine
 * @type {Object}
 * @property {Number} chordCount - number of chords in the line
 * @property {Bar[]} allBars
 */

/**
 * @typedef {Object} Bar
 * @type {Object}
 * @property {TimeSignature} timeSignature
 * @property {ChordLineChord[]} allChords
 * @property {Boolean} isRepeated
 * @property {Boolean} hasPositionedChords
 * @property {Boolean} hasUnevenChordsDurations
 */

/**
 * @typedef {Object} ChordLineChord
 * @type {Object}
 * @property {String} string - original chord string
 * @property {ChordDef|String} model - parsed chord or "NC" if "no chord" symbol
 * @property {Number} duration - number of beats the chord lasts
 * @property {Number} beat - beat on which the chord starts
 * @property {Boolean} isPositioned - whether this chord has been positioned over a specific lyric or not
 */

/**
 * @param {String} chordLine
 * @param {TimeSignature} timeSignature
 * @returns {ChordLine}
 */
export default function parseChordLine(
	chordLine,
	{ timeSignature = defaultTimeSignature } = {}
) {
	const { beatCount } = timeSignature;

	const allBars = [];
	const emptyBar = { allChords: [] };

	let bar = _cloneDeep(emptyBar);
	let chord = {};
	let tokenWithoutBeatCount;
	let currentBeatCount = 0;
	let chordCount = 0;
	let previousBar;

	const allTokens = clearSpaces(chordLine).split(' ');
	allTokens.forEach((token, tokenIndex) => {
		if (token.match(barRepeatSymbols)) {
			if (previousBar) {
				const repeatedBar = _cloneDeep(previousBar);
				repeatedBar.isRepeated = true;

				for (let i = 0; i < token.length; i++) {
					allBars.push(_cloneDeep(repeatedBar));
				}
			} else {
				throw new Error(
					'A chord line cannot start with the barRepeat symbol'
				);
			}
		} else {
			tokenWithoutBeatCount = token.replace(chordBeatCountSymbols, '');
			chord = {
				string: token,
				duration: getChordDuration(token, beatCount),
				model: isNoChordSymbol(tokenWithoutBeatCount)
					? syntax.noChord
					: parseChord(tokenWithoutBeatCount),
				beat: currentBeatCount + 1,
			};
			currentBeatCount += chord.duration;

			checkInvalidChordRepetition(bar, chord);

			bar.allChords.push(chord);
			chordCount++;

			if (shouldChangeBar(currentBeatCount, beatCount)) {
				bar.timeSignature = timeSignature;
				bar.hasUnevenChordsDurations = hasUnevenChordsDurations(bar);
				const barClone = _cloneDeep(bar);

				bar.isRepeated = _isEqual(bar, previousBar);

				allBars.push(_cloneDeep(bar));

				previousBar = barClone;

				bar = _cloneDeep(emptyBar);
				currentBeatCount = 0;
			} else {
				checkInvalidBeatCount(
					chord,
					currentBeatCount,
					beatCount,
					allTokens.length === tokenIndex + 1
				);
			}
		}
	});

	return {
		chordCount,
		allBars,
	};
}

function isNoChordSymbol(token) {
	return token === syntax.noChord;
}

function getChordDuration(token, beatCount) {
	return (token.match(chordBeatCountSymbols) || []).length || beatCount;
}

function checkInvalidChordRepetition(bar, currentChord) {
	if (bar.allChords.length > 0) {
		const previousChord = bar.allChords[bar.allChords.length - 1];
		if (_isEqual(previousChord.model, currentChord.model)) {
			throw new InvalidChordRepetitionException({
				string: currentChord.string,
			});
		}
	}
}

function shouldChangeBar(currentBeatCount, beatCount) {
	return currentBeatCount === beatCount;
}

function checkInvalidBeatCount(chord, currentBeatCount, beatCount, isLast) {
	if (hasInvalidBeatCount(currentBeatCount, beatCount, isLast)) {
		throw new IncorrectBeatCountException({
			message: '',
			string: chord.string,
			duration: chord.duration,
			currentBeatCount,
			beatCount,
		});
	}
}
function hasInvalidBeatCount(currentBeatCount, barBeatCount, isLast) {
	return (
		hasTooManyBeats(currentBeatCount, barBeatCount) ||
		hasTooFewBeats(currentBeatCount, barBeatCount, isLast)
	);
}
function hasTooManyBeats(currentBeatCount, barBeatCount) {
	return currentBeatCount > barBeatCount;
}
function hasTooFewBeats(currentBeatCount, barBeatCount, isLast) {
	return isLast && currentBeatCount < barBeatCount;
}

function hasUnevenChordsDurations(bar) {
	let firstChordDuration = bar.allChords[0].duration;
	return bar.allChords.some((chord) => chord.duration !== firstChordDuration);
}
