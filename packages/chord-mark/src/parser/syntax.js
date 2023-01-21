import parseTimeSignature from './parseTimeSignature';

export default {
	barRepeat: '%',
	chordBeatCount: '.',
	chordLineRepeat: '%',
	chordPositionMarker: '_',
	keyDeclarationPrefix: 'key ',
	noChord: 'NC',
	noLyrics: 'NL',
	sectionLabel: '#',
	subBeatOpener: '[',
	subBeatCloser: ']',
};

export const defaultTimeSignature = parseTimeSignature('4/4');
