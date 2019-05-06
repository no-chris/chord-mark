import _isEqual from 'lodash/isEqual';
import _cloneDeep from 'lodash/cloneDeep';

import syntax from './syntax';
import clearSpaces from './helper/clearSpaces';

import parseChord from './parseChord';
import parseTimeSignature from './parseTimeSignature';

import IncorrectBeatCountException from './exceptions/IncorrectBeatCountException';
import InvalidChordRepetitionException from './exceptions/InvalidChordRepetitionException';

const chordBeatCountSymbols = new RegExp(syntax.chordBeatCount, 'g');

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
		timeSignature = parseTimeSignature('4/4')
	} = {}
) {
	const { beatCount } = timeSignature;

	const allTokens = clearSpaces(chordLine)
		.split(' ');
	const allBars = [];

	let bar = { allChords: []};
	let chord = {};
	let model = {};
	let currentBeatCount = 0;
	let chordCount = 0;
	let previousChord = {};

	allTokens.forEach(token => {
		model = parseChord(token.replace(chordBeatCountSymbols, ''));
		chord = {
			string: token,
			duration: ((token.match(chordBeatCountSymbols) || []).length) || beatCount,
			model,
		};
		chord.beat = currentBeatCount + 1;
		currentBeatCount += chord.duration;

		if (bar.allChords.length > 0) {
			previousChord = bar.allChords[bar.allChords.length - 1];
			if (_isEqual(previousChord.model, chord.model)) {
				throw new InvalidChordRepetitionException({
					string: chord.string,
				});
			}
		}

		bar.allChords.push(chord);
		chordCount++;

		if (currentBeatCount === beatCount) {
			bar.timeSignature = timeSignature;

			allBars.push(_cloneDeep(bar));

			bar = { allChords: []};
			currentBeatCount = 0;
			previousChord = {};

		} else if (currentBeatCount > beatCount) {
			throw new IncorrectBeatCountException({
				message: '',
				string: chord.string,
				duration: chord.duration,
				currentBeatCount,
				beatCount,
			});
		}
	});

	if (currentBeatCount > 0 && (currentBeatCount < beatCount)) {
		throw new IncorrectBeatCountException({
			message: '',
			string: chord.string,
			duration: chord.duration,
			currentBeatCount,
			beatCount,
		});
	}

	return {
		chordCount,
		allBars
	};
}
