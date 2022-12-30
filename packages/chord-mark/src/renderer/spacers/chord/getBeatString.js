import symbols from '../../symbols';

/**
 * Returns the rendered string of a given beat, e.g. a single chord or a sub-beat group of chords.
 * This is useful for the purpose of measuring a beat length (e.g. alignment)
 * @param {Bar} bar
 * @param {Number} beat
 * @returns {String}
 */
export default function getBeatString(bar, beat) {
	const beatChords = bar.allChords.filter((chord) => chord.beat === beat);

	switch (beatChords.length) {
		case 0:
			return '';
		case 1: {
			const chordDuration = bar.shouldPrintChordsDuration
				? symbols.chordBeat.repeat(beatChords[0].duration)
				: '';
			return beatChords[0].symbol + chordDuration;
		}
		default: {
			return (
				symbols.subBeatGroupOpener +
				beatChords.reduce((allChords, chord, i) => {
					const spacesBefore =
						i > 0
							? ' '.repeat(symbols.spacesAfterSubBeatDefault)
							: '';
					return allChords + spacesBefore + chord.symbol;
				}, '') +
				symbols.subBeatGroupCloser
			);
		}
	}
}
