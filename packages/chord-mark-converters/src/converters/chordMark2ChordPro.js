import { lineTypes } from 'chord-mark';
import trimArray from '../helpers/trimArray';

const chordMark2ChordPro = (allLines, { alignChordsWithLyrics = true }) => {
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
					if (
						!isFollowedByLyricLine(allSectionLines, j) ||
						!alignChordsWithLyrics
					) {
						chordProLines.push(getChordLine(line));
					} else {
						chordLine = line;
					}
					break;
				case lineTypes.LYRIC:
					chordProLines.push(getLyricLine(line, chordLine));
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
 */
function getLyricLine(line, chordLine) {
	let lyrics = line.string;

	if (chordLine && chordLine.type === lineTypes.CHORD) {
		let chordPosition = 0;

		chordLine.model.allBars.map((bar) => {
			bar.allChords.map((chord, i) => {
				const symbol = bar.shouldPrintChordsDuration
					? chord.symbol + '.'.repeat(chord.duration)
					: chord.symbol;
				let originalChordToken = symbol;
				let toInsert = '';
				if (i === 0) {
					toInsert += '[|]';
					originalChordToken += '|';
				}

				toInsert += `[${symbol}]`;

				if (chordLine.model.hasPositionedChords) {
					if (lyrics.indexOf('_') > -1) {
						lyrics = lyrics.replace('_', toInsert);
					} else {
						lyrics += ' ' + toInsert;
					}
				} else {
					lyrics = insertAt(lyrics, toInsert, chordPosition);

					chordPosition +=
						toInsert.length +
						originalChordToken.length +
						(chord.spacesAfter || 0) +
						(chord.spacesWithin || 0);
				}
			});
		});
		lyrics = lyrics.replace(/_/g, '').trim();
		if (chordPosition) {
			lyrics = insertAt(lyrics, '[|]', chordPosition);
		} else {
			lyrics += ' [|]';
		}
	}
	return lyrics.trim();
}

const insertAt = (insertInto, toInsert, at) => {
	return at > insertInto.length
		? insertInto + ' ' + toInsert
		: insertInto.slice(0, at) + toInsert + insertInto.slice(at);
};

export default chordMark2ChordPro;
