import parseTimeSignature from './parseTimeSignature';

export default {
	barRepeat: '%',
	chordBeatCount: '.',
	chordLineRepeat: '%',
	chordPositionMarker: '_',
	lyricLine: ':',
	keyDeclarationPrefix: 'key ',
	noChord: 'NC',
	sectionLabel: '#',
	subBeatOpener: '[',
	subBeatCloser: ']',
	barSplitMarker: '\\',
};

export const defaultTimeSignature = parseTimeSignature('4/4');
