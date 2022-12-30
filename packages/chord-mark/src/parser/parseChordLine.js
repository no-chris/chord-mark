import _isEqual from 'lodash/isEqual';
import _cloneDeep from 'lodash/cloneDeep';

import syntax from './syntax';
import clearSpaces from './helper/clearSpaces';

import parseChord from './parseChord';
import parseTimeSignature from './parseTimeSignature';

import IncorrectBeatCountException from './exceptions/IncorrectBeatCountException';
import InvalidChordRepetitionException from './exceptions/InvalidChordRepetitionException';
import {
	getParseableChordLine,
	opensSubBeatGroup,
	closesSubBeatGroup,
	cleanToken,
} from './matchers/isChordLine';

const chordBeatCountSymbols = new RegExp(syntax.chordBeatCount, 'g');
const barRepeatSymbols = new RegExp('^' + syntax.barRepeat + '+$');
const defaultTimeSignature = parseTimeSignature('4/4');

/**
 * @typedef {Object} ChordLine
 * @type {Object}
 * @property {Bar[]} allBars
 * @property {Boolean} hasPositionedChords
 */

/**
 * @typedef {Object} Bar
 * @type {Object}
 * @property {TimeSignature} timeSignature
 * @property {ChordLineChord[]} allChords
 * @property {Boolean} isRepeated
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
 * @property {Boolean} isInSubBeatGroup - whether this chord has a sub-beat duration
 * @property {Number} [subBeatChordIndex] - number of beats the chord lasts. Only present if `isInSubBeatGroup` is true.
 * @property {Number} [subBeatChordCount] - number of chords in the sub-beat group. Only present if `isInSubBeatGroup` is true.
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
	const subBeatGroupsChordCount = {};

	let bar = _cloneDeep(emptyBar);
	let chord = {};
	let cleanedToken;
	let currentBeatCount = 0;
	let previousBar;
	let isInSubBeatGroup = false;
	let subBeatGroupIndex = 0; //todo => index?

	const allTokens = clearSpaces(getParseableChordLine(chordLine)).split(' ');
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
					'A chord line cannot start with the barRepeat symbol' //todo convert to own exception
				);
			}
		} else {
			if (opensSubBeatGroup(token)) {
				isInSubBeatGroup = true;
			}
			if (isInSubBeatGroup) {
				if (hasBeatCount(token)) {
					throw new Error(
						'Chords in a sub-beat group cannot have a duration' //todo convert to own exception
					);
				}
				if (subBeatGroupsChordCount[subBeatGroupIndex]) {
					subBeatGroupsChordCount[subBeatGroupIndex]++;
				} else {
					subBeatGroupsChordCount[subBeatGroupIndex] = 1;
				}
				//todo: throw if > 5
				//todo: throw if hasBeatCount
			}

			cleanedToken = cleanToken(token);
			chord = {
				string: token,
				duration: getChordDuration(token, beatCount, isInSubBeatGroup),
				model: isNoChordSymbol(cleanedToken)
					? syntax.noChord
					: parseChord(cleanedToken),
				beat: currentBeatCount + 1,
				isInSubBeatGroup,
			};
			currentBeatCount += chord.duration;

			checkInvalidChordRepetition(bar, chord);

			bar.allChords.push(chord);

			if (closesSubBeatGroup(token)) {
				isInSubBeatGroup = false;
				subBeatGroupIndex++;
				currentBeatCount += 1;
				//todo: throw if === 1? Will not work with current code
			}

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
	setSubBeatInfo(allBars, subBeatGroupsChordCount);

	return {
		allBars,
	};
}

function hasBeatCount(token) {
	const regex = new RegExp(syntax.chordBeatCount, 'g');
	return (token.match(regex) || []).length > 0;
}

function isNoChordSymbol(token) {
	return token === syntax.noChord;
}

function getChordDuration(token, beatCount, isInSubBeatGroup) {
	if (isInSubBeatGroup) return 0; // duration is computed during post-processing for sub-beats duration
	return (token.match(chordBeatCountSymbols) || []).length || beatCount;
}

function checkInvalidChordRepetition(bar, currentChord) {
	if (bar.allChords.length > 0) {
		const previousChord = bar.allChords[bar.allChords.length - 1];
		if (
			_isEqual(previousChord.model, currentChord.model) &&
			!isChordRepetitionAllowed(previousChord, currentChord)
		) {
			throw new InvalidChordRepetitionException({
				string: currentChord.string,
			});
		}
	}
}

function isChordRepetitionAllowed(previousChord, currentChord) {
	return (
		opensSubBeatGroup(currentChord.string) ||
		(closesSubBeatGroup(previousChord.string) &&
			!currentChord.model.isInSubBeatGroup)
	);
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

function setSubBeatInfo(allBars, subBeatGroupsChordCount) {
	let subBeatGroupIndex = -1;
	let subBeatChordIndex = 0;
	let previousChordBeatId = '';

	allBars.forEach((bar, barIndex) => {
		bar.allChords.forEach((chord) => {
			if (chord.isInSubBeatGroup) {
				const chordBeatId = barIndex + chord.beat;
				if (chordBeatId !== previousChordBeatId) {
					subBeatGroupIndex++;
					subBeatChordIndex = 0;
				}

				const durationString = (
					1 / subBeatGroupsChordCount[subBeatGroupIndex]
				).toPrecision(2);

				chord.duration = Number.parseFloat(durationString);
				chord.subBeatChordIndex = subBeatChordIndex;
				chord.subBeatChordCount =
					subBeatGroupsChordCount[subBeatGroupIndex];

				previousChordBeatId = chordBeatId;
				subBeatChordIndex++;
			}
		});
	});
}
