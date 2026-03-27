import song from '../helpers/songInput';

// ============ Basic ============

export const lyricsOnly = () =>
	song(
		'When I find myself in times of trouble',
		'Mother Mary comes to me'
	);

export const emptyLines = () =>
	song(
		'First line',
		'',
		'Second line',
		'',
		'Third line'
	);

export const singleChordWithLyrics = () =>
	song(
		'C.. G..',
		'When I find myself in times of trouble'
	);

export const lyricWithColonPrefix = () =>
	song(
		':This is an escaped lyric line'
	);

export const htmlInInput = () =>
	song(
		'<p>Some HTML content</p>',
		'<b>Bold text</b> and normal'
	);

// ============ Chords ============

export const singleChord = () => song('C');
export const multipleChords = () => song('C.. G..');
export const chordsWithDots = () => song('C... G.');
export const multipleBars = () => song('C G Am F');
export const barRepeat = () => song('C.. G.. %');
export const chordLineRepeat = () =>
	song(
		'C.. G..',
		'First line',
		'%%',
		'Second line'
	);

export const noChord = () => song('C.. NC.. G.. NC..');

export const subBeatGroup = () => song('C.. [Am G]');
export const multipleSubBeatGroups = () => song('C. [Am G] [F E].');

export const positionedChords = () =>
	song(
		'Am. [Am Am/G] FM7. F6.',
		'_ Mother _Ma_ry _comes to _me'
	);

// ============ Sections ============

export const allSectionTypes = () =>
	song('#v', '#c', '#i', '#b', '#o', '#s', '#a', '#p', '#u');

export const sectionWithContent = () =>
	song(
		'#v',
		'C G',
		'First verse line',
		'Am F',
		'Second verse line',
		'',
		'#c',
		'F G',
		'Chorus line'
	);

export const sectionCopy = () =>
	song(
		'#v',
		'C G',
		'verse line',
		'#v',
		'#v'
	);

export const sectionMultiply = () =>
	song(
		'#v x2',
		'C G',
		'verse line'
	);

export const customSection = () => song('#special');

// ============ Time Signatures ============

export const timeSignature4_4 = () => song('4/4', 'C.. G..');
export const timeSignature3_4 = () => song('3/4', 'C. D. E.');
export const timeSignature6_8 = () => song('6/8', 'Am F G');

export const inlineTimeSignatureChange = () =>
	song(
		'4/4',
		'2/4 G 4/4 Am',
		'_A line _with changes'
	);

// ============ Keys ============

export const explicitKey = () =>
	song(
		'key G',
		'C.. G..'
	);

export const explicitKeyMinor = () =>
	song(
		'key Am',
		'Am.. Dm..'
	);

export const multipleKeyChanges = () =>
	song(
		'key C',
		'C.. G..',
		'line 1',
		'key G',
		'G.. D..',
		'line 2'
	);

export const autoDetectedKey = () => song('F.. Bb..');

// ============ Complex / Full Songs ============

export const fullSong = () =>
	song(
		'4/4',
		'key G',
		'#v',
		'C.. G..',
		'When I find myself in times of trouble',
		'Am. [Am Am/G] FM7. F6.',
		'_ Mother _Ma_ry _comes to _me',
		'%%',
		'Speaking words of wisdom',
		'F. [C/E Dm7] C..',
		'Let it _be _ _ _',
		'',
		'#c',
		'Am.. G..',
		'Let it be',
		'',
		'key Am',
		'#v'
	);

// ============ Error Cases ============

export const invalidBeatCount = () => song('C.');
export const invalidBeatCount5beats = () => song('C..... ');
export const invalidSubBeatGroupDuration = () => song('A... [B7. D7.]');
export const invalidSubBeatGroupUnclosed = () => song('A... [B7 D7');
export const invalidSubBeatGroupNested = () => song('A... [B7 [D7');
export const invalidSubBeatGroupSingle = () => song('A... [C]');
export const invalidBarRepeatFirst = () => song('% A');
export const invalidBarRepeatIncomplete = () => song('A... % A');
export const invalidChordRepetition = () => song('A. A...');
