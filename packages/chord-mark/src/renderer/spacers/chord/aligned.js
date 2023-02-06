import _cloneDeep from 'lodash/cloneDeep';
import symbols from '../../symbols';
import { getBeatString } from './getBeatString';
import { spaceBar } from './simple';

/**
 * @param {ChordLine} chordLineInput
 * @param {Array} maxBeatsWidth
 * @param {Object} options
 * @param {Boolean} options.shouldPrintBarSeparators
 * @param {Boolean} options.shouldPrintSubBeatDelimiters
 * @param {('chord'|'roman')} options.symbolType
 * @returns {ChordLine}
 */
export default function space(
	chordLineInput,
	maxBeatsWidth,
	{
		shouldPrintBarSeparators = true,
		shouldPrintSubBeatDelimiters = true,
		symbolType = 'chord',
	}
) {
	const chordLine = _cloneDeep(chordLineInput);

	chordLine.allBars.forEach((bar, barIndex) => {
		if (bar.lineHadTimeSignatureChange) {
			spaceBar(bar);
		} else {
			bar.allChords.forEach((chord) => {
				const beatString = getBeatString(bar, chord.beat, {
					shouldPrintSubBeatDelimiters,
					symbolType,
				});

				if (chord.isInSubBeatGroup && !chord.isLastOfSubBeat) {
					chord.spacesWithin = 0;
					chord.spacesAfter = symbols.spacesAfterSubBeatDefault;
				} else {
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
		}
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
