import { lineTypes } from '../../../chord-mark/src/chordMark';

import trimArray from '../helpers/trimArray';
import insertAt from '../helpers/insertAt';

/**
 * TODO:
 * - remove pandoc on parsing
 * - use insertAt (with Min(length, at) as argument?) in convert2ChordPro
 * - space bar separators in alignedChordWithLyrics rendering
 * - support grids and comments for sections with chords only
 * - fix auto detection
 */

/**
 *
 * @param {Object} options
 * @param {Boolean} options.keepWhatever
 * @returns {any}
 */
const chordMark2ChordPro = (options = {}) => {
	return convert2ChordPro.bind(null, options);
};

const convert2ChordPro = (
	{ showBarSeparators = true, useGrid = false } = {},
	allLines,
	{ alignBars = true, alignChordsWithLyrics = true }
) => {
	const chordProLines = [];
	let chordLine;

	getAllSections(allLines).forEach((section, i) => {
		if (section.sectionLine) {
			if (i > 0) chordProLines.push('');
			chordProLines.push(getOpenSectionDirective(section.sectionLine));
		}
		section.allLines.forEach((line, j, allSectionLines) => {
			switch (line.type) {
				case lineTypes.CHORD:
					if (!isFollowedByLyricLine(allSectionLines, j)) {
						chordProLines.push(getChordLine(line));
					} else {
						chordLine = line;
					}
					break;
				case lineTypes.LYRIC:
					chordProLines.push(
						getLyricLine(line, chordLine, {
							alignChordsWithLyrics,
							alignBars,
						})
					);
					chordLine = undefined;
					break;
				case lineTypes.EMPTY_LINE:
					chordProLines.push('');
					chordLine = undefined;
					break;
			}
		});
		if (section.sectionLine) {
			chordProLines.push(getEndSectionDirective(section.sectionLine));
		}
	});

	return chordProLines.join('\n');
};

const getAllSections = (allLines) => {
	const allSections = [];
	let currentSection;

	const commitCurrentSection = () => {
		if (currentSection) {
			allSections.push(currentSection);
			currentSection = undefined;
		}
	};

	const initCurrentSection = (line) => {
		currentSection = {
			sectionLine: line,
			allLines: [],
		};
	};

	allLines.forEach((line) => {
		if (line.type === lineTypes.SECTION_LABEL) {
			commitCurrentSection();
			initCurrentSection(line);
		} else {
			if (!currentSection) {
				initCurrentSection();
			}
			currentSection.allLines.push(line);
		}
	});
	commitCurrentSection();

	return allSections.map((section) => {
		section.allLines = trimArray(
			section.allLines,
			(el) => el.type === lineTypes.EMPTY_LINE
		);
		return section;
	});
};

/**
 * @param {SongSectionLabelLine} line
 */
function getOpenSectionDirective(line) {
	return getEnvironmentDirective(line, 'start');
}

/**
 * @param {SongSectionLabelLine} line
 */
function getEndSectionDirective(line) {
	return getEnvironmentDirective(line, 'end');
}

/**
 * @param {SongSectionLabelLine} line
 * @param {('start'|'end')} startEnd
 */
function getEnvironmentDirective(line, startEnd) {
	let sectionName;
	switch (line.model.label) {
		case 'b':
			sectionName = 'bridge' + getSectionTitle(line, startEnd, 'Bridge');

			break;
		case 'c':
			sectionName = 'chorus' + getSectionTitle(line, startEnd, 'Chorus');

			break;
		default:
		case 'v':
			sectionName = 'verse' + getSectionTitle(line, startEnd, 'Verse');
			break;
	}
	return `{${startEnd}_of_${sectionName}}`;
}

function getSectionTitle(line, startEnd, title) {
	return startEnd === 'start'
		? `: ${title} ${line.indexWithoutMultiply}`
		: '';
}

function isFollowedByLyricLine(allSectionLines, i) {
	const nextLine = allSectionLines[i + 1];
	return nextLine && nextLine.type === lineTypes.LYRIC;
}

/**
 * @param {SongChordLine} line
 */
function getChordLine(line) {
	let chordLine = '';

	line.model.allBars.map((bar) => {
		chordLine += '|';
		bar.allChords.map((chord) => {
			chordLine +=
				chord.symbol +
				' '.repeat(
					(chord.spacesWithin || 0) + (chord.spacesAfter || 0)
				);
		});
	});
	chordLine += '|';

	return chordLine.trim();
}

/**
 * @param {SongLyricLine} line
 * @param {SongChordLine} chordLine
 * @param {Boolean} alignChordsWithLyrics
 * @param {Boolean} alignBars
 */
function getLyricLine(line, chordLine, { alignChordsWithLyrics, alignBars }) {
	let lyrics = line.string.trim(); // fixme: keep trim()?

	if (chordLine && chordLine.type === lineTypes.CHORD) {
		if (chordLine.model.hasPositionedChords && alignChordsWithLyrics) {
			lyrics = getLyricLineWithPositionedChords(lyrics, chordLine);
		} else {
			lyrics = getLyricLineWithNonPositionedChords(
				lyrics,
				chordLine,
				alignBars
			);
		}
	}
	return lyrics;
}

const getLyricLineWithPositionedChords = (srcLyrics, chordLine) => {
	let lyrics = srcLyrics;

	chordLine.model.allBars.map((bar) => {
		bar.allChords.map((chord, i) => {
			let [chordProSymbol] = getChordSymbol(bar, chord);

			if (i === 0) {
				const nextPositionMarker = lyrics.indexOf('_');
				if (nextPositionMarker > -1) {
					lyrics = insertAt(lyrics, '[|] ', nextPositionMarker);
				} else {
					lyrics = insertAt(lyrics, '[|]', lyrics.length + 1);
				}
			}

			if (lyrics.indexOf('_') > -1) {
				lyrics = lyrics.replace('_', chordProSymbol);
			} else {
				lyrics = insertAt(lyrics, chordProSymbol, lyrics.length + 1);
			}
		});
	});
	lyrics = lyrics.replace(/_/g, '').trim();
	lyrics += ' [|]';
	return lyrics;
};

const getLyricLineWithNonPositionedChords = (
	srcLyrics,
	chordLine,
	alignBars
) => {
	let lyrics = srcLyrics.replace(/_/g, '');
	let chordOffset = 0;

	chordLine.model.allBars.map((bar) => {
		bar.allChords.map((chord, i) => {
			let [chordProSymbol, rawSymbol] = getChordSymbol(bar, chord);

			if (i === 0) {
				lyrics = insertAt(lyrics, '[|]', chordOffset);
				chordOffset += '[|]'.length + '| '.length;
			}

			lyrics = insertAt(lyrics, chordProSymbol, chordOffset);

			const extraSpaceOnLastChord =
				alignBars && !bar.allChords[i + 1] ? 1 : 0; //todo only if no spaces after?

			chordOffset +=
				chordProSymbol.length +
				rawSymbol.length +
				(chord.spacesAfter || 0) +
				(chord.spacesWithin || 0) +
				extraSpaceOnLastChord; // compensate for the fact that most chordpro programs add a space between
		});
	});
	lyrics = insertAt(lyrics, '[|]', chordOffset);
	return lyrics;
};

const getChordSymbol = (bar, chord) => {
	const symbol = bar.shouldPrintChordsDuration
		? chord.symbol + '.'.repeat(chord.duration)
		: chord.symbol;

	return [`[${symbol}]`, symbol];
};

export default chordMark2ChordPro;
