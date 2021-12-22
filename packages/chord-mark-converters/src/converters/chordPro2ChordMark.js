const lineTypes = {
	EMPTY: 'empty',
	DIRECTIVE: 'directive',
	COMMENT: 'comment',
	CHORDS: 'chords',
	LYRICS: 'lyrics',
	CHORDS_LYRICS: 'chordsLyrics',
	SECTION_START: 'sectionStart',
	SECTION_CLOSE: 'sectionClose',
	SECTION_REPEAT: 'sectionRepeat',
};

const repeatSectionDirectives = [
	'chorus',
	'verse',
	'bridge',
	// {Comment} seems to be mostly used to declare repeated sections
	'comment',
	'comment_italic',
	'comment_bold',
	'c',
	'ci',
	'cb',
];

const startSectionDirectives = [
	'start_of_chorus',
	'start_of_verse',
	'start_of_bridge',
	'start_of_part',
	'soc',
	'sov',
	'sob',
	'sop',
];

const endSectionDirectives = [
	'end_of_chorus',
	'end_of_verse',
	'end_of_bridge',
	'end_of_part',
	'eoc',
	'eov',
	'eob',
	'sop',
];

const directivesToSectionLabel = {
	chorus: 'c',
	verse: 'v',
	bridge: 'b',
	start_of_chorus: 'c',
	start_of_verse: 'v',
	start_of_bridge: 'b',
	start_of_part: 'v',
	soc: 'c',
	sov: 'v',
	sob: 'b',
	sop: 'v',
	// if no value, consider {comment} as a chorus mention ¯\_(ツ)_/¯
	c: 'c',
	ci: 'c',
	cb: 'c',
	comment: 'c',
	comment_italic: 'c',
	comment_bold: 'c',
};

const chordPro2ChordMark = (chordProInput) => {
	const cmOutput = [];

	const srcLines = chordProInput
		.split('\n')
		.map((line) => getLineModel(line))
		.filter((lineModel) => isSupportedLine(lineModel));

	const allSections = getAllSections(srcLines);

	allSections.forEach((section, i) => {
		cmOutput.push('#' + section.label);
		section.allLines.forEach((line) => {
			cmOutput.push(line);
		});
		if (i < allSections.length - 1) {
			cmOutput.push('');
		}
	});

	return cmOutput.join('\n');
};

const getLineModel = (line) => {
	const lineModel = { content: line };

	if (isCommentLine(line)) {
		lineModel.type = lineTypes.COMMENT;
	} else if (isEmtpyLine(line)) {
		lineModel.type = lineTypes.EMPTY;
	} else if (isDirective(line)) {
		const [key, value] = getDirectiveKV(line);
		lineModel.key = key;
		lineModel.value = value;

		if (startSectionDirectives.includes(key)) {
			lineModel.type = lineTypes.SECTION_START;
		} else if (endSectionDirectives.includes(key)) {
			lineModel.type = lineTypes.SECTION_CLOSE;
		} else if (repeatSectionDirectives.includes(key)) {
			lineModel.type = lineTypes.SECTION_REPEAT;
		} else {
			lineModel.type = lineTypes.DIRECTIVE;
		}
	} else if (isChordsLyrics(line)) {
		lineModel.type = lineTypes.CHORDS_LYRICS;
		const [chords, lyrics] = getChordsLyrics(line);
		lineModel.chords = chords;
		lineModel.lyrics = lyrics;
	} else {
		lineModel.type = lineTypes.LYRICS;
	}

	return lineModel;
};

const isCommentLine = (line) => {
	const commentLineRe = /^#.*$/;
	const found = line.trim().match(commentLineRe);
	return found !== null;
};

const isEmtpyLine = (line) => {
	return line.trim() === '';
};

const directiveRe = /^{([^:]+):?(.*)?}$/;

const isDirective = (line) => {
	const found = line.trim().match(directiveRe);
	return found !== null;
};

const getDirectiveKV = (directive) => {
	const found = directive.trim().match(directiveRe);
	const key = found[1].trim();
	const value = found[2] ? found[2].trim() : undefined;
	return [key, value];
};

const chordsLyricsRe = /\[([^\]]*)]/g;

const isChordsLyrics = (line) => {
	const found = line.trim().match(chordsLyricsRe);
	return found !== null;
};

const getChordsLyrics = (directive) => {
	const found = directive.trim().match(chordsLyricsRe);
	const chords = found
		.map((chord) => {
			return chord.replace('[', '').replace(']', '');
		})
		.join(' ');
	const lyrics = directive.replace(chordsLyricsRe, '_');
	return [chords, lyrics];
};

const isSupportedLine = (lineModel) => {
	const unSupportedLineTypes = [lineTypes.COMMENT, lineTypes.DIRECTIVE];
	return !unSupportedLineTypes.includes(lineModel.type);
};

const getAllSections = (allLines) => {
	let allSections = [];
	let currentSection;

	const commitCurrentSection = () => {
		if (currentSection) {
			allSections.push(currentSection);
			currentSection = undefined;
		}
	};

	const initCurrentSection = (line) => {
		currentSection = {
			label: line ? getSectionLabel(line) : 'v',
			allLines: [],
		};
	};

	allLines.forEach((line) => {
		if (line.type === lineTypes.SECTION_START) {
			commitCurrentSection();
			initCurrentSection(line);
		} else if (line.type === lineTypes.SECTION_CLOSE) {
			commitCurrentSection();
		} else if (line.type === lineTypes.SECTION_REPEAT) {
			commitCurrentSection();
			initCurrentSection(line);
			commitCurrentSection();
		} else if (line.type === lineTypes.EMPTY) {
			if (currentSection) {
				currentSection.allLines.push(line.content);
			}
		} else {
			if (!currentSection) {
				initCurrentSection();
			}
			if (line.type === lineTypes.CHORDS_LYRICS) {
				currentSection.allLines.push(line.chords);
				currentSection.allLines.push(line.lyrics);
			} else {
				currentSection.allLines.push(line.content);
			}
		}
	});

	commitCurrentSection();

	return allSections.map(trimSection);
};

const getSectionLabel = (lineModel) => {
	const labelToShortLabel = {
		chorus: 'c',
		verse: 'v',
		bridge: 'b',
	};

	let label;

	if (lineModel.value) {
		label =
			directivesToSectionLabel[lineModel.value.toLowerCase()] ||
			lineModel.value;
	} else {
		label = directivesToSectionLabel[lineModel.key];
	}
	return labelToShortLabel[label] || label;
};

const trimSection = (section) => {
	while (section.allLines.length && section.allLines[0] === '') {
		section.allLines.shift();
	}
	while (
		section.allLines.length &&
		section.allLines[section.allLines.length - 1] === ''
	) {
		section.allLines.pop();
	}
	return section;
};

export default chordPro2ChordMark;
