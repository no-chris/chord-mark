import symbols from '../../symbols';

/**
 * Returns the rendered string of a given beat, e.g. a single chord or a sub-beat group of chords.
 * This is useful for the purpose of measuring a beat length (e.g. alignment)
 * @param {Bar} bar
 * @param {Number} beat
 * @returns {String}
 */
export function getBeatString(bar, beat) {
	const beatChords = bar.allChords.filter((chord) => chord.beat === beat);

	switch (beatChords.length) {
		case 0:
			return '';
		case 1: {
			return getChordString(bar, beatChords[0]);
		}
		default: {
			return beatChords.reduce((allChords, chord, i) => {
				const spacesBefore =
					i > 0 ? ' '.repeat(symbols.spacesAfterSubBeatDefault) : '';
				return allChords + spacesBefore + getChordString(bar, chord);
			}, '');
		}
	}
}

export function getChordString(bar, chord) {
	if (!chord.isInSubBeatGroup) {
		const chordDuration = bar.shouldPrintChordsDuration
			? symbols.chordBeat.repeat(chord.duration)
			: '';
		return chord.symbol + chordDuration;
	} else {
		if (chord.isFirstOfSubBeat) {
			return symbols.subBeatGroupOpener + chord.symbol;
		} else if (chord.isLastOfSubBeat) {
			return chord.symbol + symbols.subBeatGroupCloser;
		} else {
			return chord.symbol;
		}
	}
}
