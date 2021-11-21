import { lineTypes } from 'chord-mark';

const chordMark2ChordPro = (allLines) => {
	const chordProLines = [];
	let currentLabel;

	allLines.forEach((line, index) => {
		switch (line.type) {
			case lineTypes.SECTION_LABEL:
				addLabel(line);
				break;
			case lineTypes.CHORD:
				addChordLine(line);
				break;
			case lineTypes.LYRIC:
				addLyricLine(line, index);
				break;
			case lineTypes.EMPTY_LINE:
				chordProLines.push('');
				break;
		}
	});

	if (currentLabel) {
		chordProLines.push(getEndSectionDirective(currentLabel));
	}

	/**
	 * @param {SongSectionLabelLine} line
	 */
	function addLabel(line) {
		if (currentLabel) {
			const endLine = getEndSectionDirective(currentLabel);
			const lastNonEmptyLineIndex = findLastIndex(
				chordProLines,
				(i) => i !== ''
			);
			if (lastNonEmptyLineIndex !== -1) {
				chordProLines.splice(lastNonEmptyLineIndex + 1, 0, endLine);
			} else {
				chordProLines.push(endLine);
			}
		}
		currentLabel = { ...line };
		chordProLines.push(getOpenSectionDirective(line));
	}

	function getOpenSectionDirective(line) {
		return getEnvironmentDirective(line, 'start');
	}

	function getEndSectionDirective(line) {
		return getEnvironmentDirective(line, 'end');
	}

	function getEnvironmentDirective(line, startEnd) {
		let sectionName;
		switch (line.model.label) {
			case 'b':
				sectionName =
					'bridge' + getSectionTitle(line, startEnd, 'Bridge');

				break;
			case 'c':
				sectionName =
					'chorus' + getSectionTitle(line, startEnd, 'Chorus');

				break;
			default:
			case 'v':
				sectionName =
					'verse' + getSectionTitle(line, startEnd, 'Verse');
				break;
		}
		return `{${startEnd}_of_${sectionName}}`;
	}

	function getSectionTitle(line, startEnd, title) {
		return startEnd === 'start'
			? `: ${title} ${line.indexWithoutMultiply}`
			: '';
	}

	/**
	 * @param {SongChordLine} line
	 */
	function addChordLine(line) {
		if (line.model.hasPositionedChords) return;

		const allSymbols = [];
		line.model.allBars.map((bar) => {
			bar.allChords.map((chord) => {
				allSymbols.push('[' + chord.symbol + ']');
			});
		});

		chordProLines.push(allSymbols.join(' '));
	}

	/**
	 * @param {SongLyricLine} line
	 * @param {Number} index
	 */
	function addLyricLine(line, index) {
		let lyrics = line.string;

		if (line.model.chordPositions.length && index > 0) {
			const chordLine = allLines[index - 1];
			if (chordLine.type === lineTypes.CHORD) {
				const allSymbols = [];
				chordLine.model.allBars.map((bar) => {
					bar.allChords.map((chord) => {
						allSymbols.push('[' + chord.symbol + ']');
					});
				});

				let previousSymbol = '';
				while (allSymbols.length) {
					let inlineSymbol = allSymbols.shift();
					if (lyrics.indexOf('_') !== -1) {
						const replaceString = ![previousSymbol, '[%]'].includes(
							inlineSymbol
						)
							? inlineSymbol
							: '';
						lyrics = lyrics.replace('_', replaceString);
					} else {
						lyrics += ' ' + inlineSymbol;
					}
					previousSymbol = inlineSymbol;
				}
				// remove extra position markers
				lyrics = lyrics.replace(/_/g, '');
			}
		}
		chordProLines.push(lyrics.trim());
	}

	return chordProLines.join('\n');
};

// https://stackoverflow.com/a/40929530
function findLastIndex(array, fn) {
	const index = array
		.slice()
		.reverse()
		.findIndex((x) => fn(x));

	const maxIndex = array.length - 1;
	return index >= 0 ? maxIndex - index : index;
}

export default chordMark2ChordPro;
