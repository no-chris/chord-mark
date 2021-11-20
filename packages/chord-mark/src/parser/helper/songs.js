import _cloneDeep from 'lodash/cloneDeep';

import lineTypes from '../lineTypes';

/**
 * @param {SongLine[]} allLines
 * @param {Function} fn - to execute on each bar
 * @returns {SongLine[]}
 */
export function forEachBarInSong(allLines, fn) {
	const newLines = _cloneDeep(allLines);

	newLines.forEach((line) => {
		if (line.type === lineTypes.CHORD) {
			line.model.allBars.forEach((bar) => {
				fn(bar);
			});
		}
	});
	return newLines;
}

/**
 * @param {SongLine[]} allLines
 * @param {Function} fn - to execute on each chord
 * @returns {SongLine[]}
 */
export function forEachChordInSong(allLines, fn) {
	const newLines = _cloneDeep(allLines);

	newLines.forEach((line) => {
		if (line.type === lineTypes.CHORD) {
			line.model.allBars.forEach((bar) => {
				bar.allChords.forEach((chord) => {
					fn(chord);
				});
			});
		}
	});
	return newLines;
}

/**
 * @param {ChordLine} chordLine
 * @param {Function} fn - to execute on each chord
 * @returns {ChordLine}
 */
export function forEachChordInChordLine(chordLine, fn) {
	const newChordLine = _cloneDeep(chordLine);

	newChordLine.allBars.forEach((bar, barIndex) => {
		bar.allChords.forEach((chord, chordIndex) => {
			fn(chord, chordIndex, barIndex);
		});
	});

	return newChordLine;
}

/**
 * @param {SongLine[]} allLines
 * @param {String} label - the label to select
 * @param {Number} n - the index of the section to select
 * @returns {SongLine[]} all lines of the requested section
 */
export function getNthOfLabel(allLines, label, n) {
	const selected = [];
	const typesCount = {};

	let enableSelect = false;
	let currentLabel = '';

	allLines.forEach((line) => {
		if (line.type === lineTypes.SECTION_LABEL) {
			currentLabel = line.model.label;

			if (!typesCount[currentLabel]) {
				typesCount[currentLabel] = 1;
			} else {
				typesCount[currentLabel]++;
			}

			enableSelect = line.id === label + n;
		} else if (enableSelect) {
			selected.push(line);
		}
	});
	return selected;
}
