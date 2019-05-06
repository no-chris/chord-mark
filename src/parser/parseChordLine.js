import _isEqual from 'lodash/isEqual';
import _cloneDeep from 'lodash/cloneDeep';

import syntax from './syntax';
import clearSpaces from './helper/clearSpaces';

import parseChord from './parseChord';
import parseTimeSignature from './parseTimeSignature';

import IncorrectBeatCountException from './exceptions/IncorrectBeatCountException';
import InvalidChordRepetitionException from './exceptions/InvalidChordRepetitionException';

const chordBeatCountSymbols = new RegExp(syntax.chordBeatCount, 'g');
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
 */

/**
 * @typedef {Object} ChordLineChord
 * @type {Object}
 * @property {String} string - original chord string
 * @property {ChordDef} model
 * @property {Number} duration - number of beats the chord lasts
 * @property {Number} beat - beat on which the chord starts
 */

/**
 * @param {String} chordLine
 * @param {TimeSignature} timeSignature
 * @returns {ChordLine}
 */
export default function parseChordLine(
	chordLine,
	{
		timeSignature = defaultTimeSignature
	} = {}
) {
	const { beatCount } = timeSignature;

	const allBars = [];
	const emptyBar = { allChords: [] };

	let bar = _cloneDeep(emptyBar);
	let chord = {};
	let currentBeatCount = 0;
	let chordCount = 0;

	const allTokens = clearSpaces(chordLine).split(' ');
	allTokens.forEach((token, tokenIndex) => {
		chord = {
			string: token,
			duration: getChordDuration(token, beatCount),
			model: parseChord(token.replace(chordBeatCountSymbols, '')),
			beat: currentBeatCount + 1,
		};
		currentBeatCount += chord.duration;

		checkInvalidChordRepetition(bar, chord);

		bar.allChords.push(chord);
		chordCount++;

		if (shouldChangeBar(currentBeatCount, beatCount)) {
			bar.timeSignature = timeSignature;
			allBars.push(_cloneDeep(bar));

			bar = _cloneDeep(emptyBar);
			currentBeatCount = 0;

		} else {
			checkInvalidBeatCount(chord, currentBeatCount, beatCount, (allTokens.length === (tokenIndex + 1)));
		}
	});

	return {
		chordCount,
		allBars
	};
}

function getChordDuration(token, beatCount) {
	return ((token.match(chordBeatCountSymbols) || []).length) || beatCount;
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
	return hasTooManyBeats(currentBeatCount, barBeatCount)
		|| hasTooFewBeats(currentBeatCount, barBeatCount, isLast);
}
function hasTooManyBeats(currentBeatCount, barBeatCount) {
	return currentBeatCount > barBeatCount;
}
function hasTooFewBeats(currentBeatCount, barBeatCount, isLast) {
	return isLast && currentBeatCount < barBeatCount;
}
