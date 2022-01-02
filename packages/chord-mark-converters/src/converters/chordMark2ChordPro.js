import { lineTypes } from 'chord-mark';

import trimArray from '../helpers/trimArray';
import insertAt from '../helpers/insertAt';

const chordMark2ChordPro = (options = {}) => {
	return convert2ChordPro.bind(null, options);
};

const convert2ChordPro = (
	{ showBarSeparators = true },
	allLines,
	allRenderedLines,
	{ alignBars, alignChordsWithLyrics }
) => {
	const chordProLines = [];
	let chordLine;

	getAllSections(allLines).forEach((section, i) => {
		if (section.sectionLine) {
			if (section.allLines.length > 0) {
				if (i > 0) chordProLines.push('');
				chordProLines.push(
					getOpenSectionDirective(section.sectionLine)
				);
			} else {
				chordProLines.push(
					getCommentLine(
						getSectionTitle(section.sectionLine.model.rendered)
					)
				);
			}
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
							showBarSeparators,
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
		if (section.sectionLine && section.allLines.length > 0) {
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
	return `{start_of_${getEnvironmentType(
		line.model.label
	)}: ${getSectionTitle(line.model.rendered)}}`;
}

/**
 * @param {SongSectionLabelLine} line
 */
function getEndSectionDirective(line) {
	return `{end_of_${getEnvironmentType(line.model.label)}}`;
}

function getEnvironmentType(label) {
	switch (label) {
		case 'b':
		case 'bridge':
			return 'bridge';
		case 'c':
		case 'chorus':
			return 'chorus';
		default:
		case 'v':
		case 'verse':
			return 'verse';
	}
}

function getSectionTitle({ label, multiplier }) {
	return multiplier ? `${label} ${multiplier}` : label;
}

function getCommentLine(comment) {
	return `{c:${comment}}`;
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
				' '.repeat(chord.spacesWithin + chord.spacesAfter);
		});
	});
	chordLine += '|';

	return getCommentLine(chordLine.trim());
}

/**
 * @param {SongLyricLine} line
 * @param {SongChordLine} chordLine
 * @param {Boolean} alignChordsWithLyrics
 * @param {Boolean} alignBars
 * @param {Boolean} showBarSeparators
 */
function getLyricLine(
	line,
	chordLine,
	{ alignChordsWithLyrics, alignBars, showBarSeparators }
) {
	let lyrics = line.string.trim(); // fixme: keep trim()?

	if (chordLine && chordLine.type === lineTypes.CHORD) {
		if (chordLine.model.hasPositionedChords && alignChordsWithLyrics) {
			lyrics = getLyricLineWithPositionedChords(lyrics, chordLine, {
				showBarSeparators,
			});
		} else {
			lyrics = getLyricLineWithNonPositionedChords(lyrics, chordLine, {
				showBarSeparators,
				alignBars,
			});
		}
	}
	return lyrics;
}

const getLyricLineWithPositionedChords = (
	srcLyrics,
	chordLine,
	{ showBarSeparators }
) => {
	let lyrics = srcLyrics;

	chordLine.model.allBars.map((bar) => {
		bar.allChords.map((chord, i) => {
			let [chordProSymbol] = getChordSymbol(bar, chord);

			if (i === 0 && showBarSeparators) {
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
	if (showBarSeparators) {
		lyrics += ' [|]';
	}
	return lyrics;
};

const getLyricLineWithNonPositionedChords = (
	srcLyrics,
	chordLine,
	{ showBarSeparators, alignBars }
) => {
	let lyrics = srcLyrics.replace(/_/g, '');
	let chordOffset = 0;

	chordLine.model.allBars.map((bar) => {
		bar.allChords.map((chord, i) => {
			let [chordProSymbol, rawSymbol] = getChordSymbol(bar, chord);

			if (i === 0 && showBarSeparators) {
				lyrics = insertAt(lyrics, '[|]', chordOffset);
				chordOffset += '[|]'.length + '| '.length;
			}

			lyrics = insertAt(lyrics, chordProSymbol, chordOffset);

			const extraSpaceOnLastChord =
				alignBars && !bar.allChords[i + 1] ? 1 : 0;

			chordOffset +=
				chordProSymbol.length +
				rawSymbol.length +
				chord.spacesAfter +
				chord.spacesWithin +
				extraSpaceOnLastChord; // compensate for the fact that most chordpro programs add a space between
		});
	});
	if (showBarSeparators) {
		lyrics = insertAt(lyrics, '[|]', chordOffset);
	}
	return lyrics;
};

const getChordSymbol = (bar, chord) => {
	const symbol = bar.shouldPrintChordsDuration
		? chord.symbol + '.'.repeat(chord.duration)
		: chord.symbol;

	return [`[${symbol}]`, symbol];
};

export default chordMark2ChordPro;
