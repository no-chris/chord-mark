import symbols from '../../symbols';

/**
 * Returns the rendered string of a given beat, e.g. a single chord or a sub-beat group of chords.
 * This is useful for the purpose of measuring a beat length (e.g. alignment)
 * @param {Bar} bar
 * @param {Number} beatIndex
 * @param {Object} options
 * @param {Boolean} options.shouldPrintSubBeatDelimiters
 * @param {('chord'|'roman')} options.symbolType
 * @returns {String}
 */
export function getBeatString(
	bar,
	beatIndex,
	{ shouldPrintSubBeatDelimiters = true, symbolType = 'chord' } = {}
) {
	const beatChords = bar.allChords.filter(
		(chord) => chord.beat === beatIndex
	);

	switch (beatChords.length) {
		case 0:
			return '';
		case 1: {
			return getChordString(bar, beatChords[0], {
				shouldPrintSubBeatDelimiters,
				symbolType,
			});
		}
		default: {
			return beatChords.reduce((allChords, chord, i) => {
				const spacesBefore =
					i > 0 ? ' '.repeat(symbols.spacesAfterSubBeatDefault) : '';
				return (
					allChords +
					spacesBefore +
					getChordString(bar, chord, {
						shouldPrintSubBeatDelimiters,
						symbolType,
					})
				);
			}, '');
		}
	}
}

/**
 * Returns the rendered string of a given chord
 * This is useful for the purpose of measuring a beat length (e.g. alignment)
 * @param {Bar} bar
 * @param {ChordDef} chord
 * @param {Object} options
 * @param {Boolean} options.shouldPrintSubBeatDelimiters
 * @param {('chord'|'roman')} options.symbolType
 * @returns {String}
 */
export function getChordString(
	bar,
	chord,
	{ shouldPrintSubBeatDelimiters, symbolType = 'chord' }
) {
	const shouldPrintChordSymbol =
		symbolType === 'chord' ||
		chord.model === symbols.barRepeat ||
		chord.model === symbols.noChordSymbol;

	const symbol = shouldPrintChordSymbol
		? chord.symbol
		: chord.model.numeral.symbol;

	if (!chord.isInSubBeatGroup) {
		const chordDuration = bar.shouldPrintChordsDuration
			? symbols.chordBeat.repeat(chord.duration)
			: '';
		return symbol + chordDuration;
	} else {
		if (shouldPrintSubBeatDelimiters && chord.isFirstOfSubBeat) {
			return symbols.subBeatGroupOpener + symbol;
		} else if (shouldPrintSubBeatDelimiters && chord.isLastOfSubBeat) {
			return symbol + symbols.subBeatGroupCloser;
		} else {
			return symbol;
		}
	}
}
