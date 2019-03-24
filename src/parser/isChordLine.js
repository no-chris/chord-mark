import isChord from './isChord';

export default function isChordLine(line = '') {
	return line
		.replace(/\t+/g, ' ')
		.replace(/  +/g, ' ')
		.trim()
		.split(' ')
		.map(potentialChord => potentialChord.replace(/\.*$/g, ''))
		.every(potentialChord => isChord(potentialChord));
}
