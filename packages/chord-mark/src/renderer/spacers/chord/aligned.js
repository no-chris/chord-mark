import _cloneDeep from 'lodash/cloneDeep';
import symbols from '../../symbols';
import { getBeatString } from './getBeatString';

/**
 * @param {ChordLine} chordLineInput
 * @param {Array} maxBeatsWidth
 * @param {Boolean} shouldPrintBarSeparators
 * @param {Boolean} shouldPrintSubBeatDelimiters
 * @returns {ChordLine}
 */
export default function space(
	chordLineInput,
	maxBeatsWidth,
	shouldPrintBarSeparators,
	shouldPrintSubBeatDelimiters
) {
	const chordLine = _cloneDeep(chordLineInput);

	chordLine.allBars.forEach((bar, barIndex) => {
		bar.allChords.forEach((chord) => {
			const beatString = getBeatString(
				bar,
				chord.beat,
				shouldPrintSubBeatDelimiters
			);

			if (chord.isInSubBeatGroup && !chord.isLastOfSubBeat) {
				chord.spacesWithin = 0;
				chord.spacesAfter = symbols.spacesAfterSubBeatDefault;
			} else if (!chord.isInSubBeatGroup || chord.isLastOfSubBeat) {
				chord.spacesWithin =
					maxBeatsWidth[barIndex][chord.beat] - beatString.length;
				chord.spacesAfter = 0;
			}

			if (shouldFillEmptyBeats(bar, chord)) {
				chord.spacesAfter =
					symbols.spacesAfterDefault +
					getEmptyBeatsWidth(bar, chord, maxBeatsWidth[barIndex]);
			}

			if (shouldSpaceLastBeat(bar, chord, shouldPrintBarSeparators)) {
				chord.spacesAfter = symbols.spacesAfterDefault;
			}
		});
	});

	return chordLine;
}

const shouldFillEmptyBeats = (bar, chord) => {
	return (
		(!chord.isInSubBeatGroup || chord.isLastOfSubBeat) &&
		!isLastBeatOfBar(bar, chord)
	);
};

const getEmptyBeatsWidth = (bar, chord, maxBeatsWidthForBar) => {
	let spacesAfter = 0;

	for (let i = chord.beat + 1; i < chord.beat + chord.duration; i++) {
		const beatMaxWidth = maxBeatsWidthForBar[i];

		spacesAfter += beatMaxWidth ? beatMaxWidth : symbols.emptyBeatSpaces;

		if (i !== bar.timeSignature.beatCount && beatMaxWidth) {
			spacesAfter += symbols.spacesAfterDefault;
		}
	}
	return spacesAfter;
};

const isLastBeatOfBar = (bar, chord) => {
	return chord.beat === bar.timeSignature.beatCount;
};

const shouldSpaceLastBeat = (bar, chord, shouldPrintBarSeparators) => {
	return (
		!shouldPrintBarSeparators &&
		isLastBeatOfBar(bar, chord) &&
		(!chord.isInSubBeatGroup || chord.isLastOfSubBeat)
	);
};
