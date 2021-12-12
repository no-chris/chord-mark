import lineTypes from '../parser/lineTypes';
import symbols from './symbols';

const replaceRepeatedBars = (line, { alignChordsWithLyrics }) => {
	if (line.type === lineTypes.CHORD) {
		line.model.allBars.forEach((bar) => {
			if (shouldReplaceWithBarRepeat(line, bar, alignChordsWithLyrics)) {
				bar.allChords = [
					{
						string: symbols.barRepeat,
						model: symbols.barRepeat,
						symbol: symbols.barRepeat,
						duration: bar.timeSignature.beatCount,
						beat: 1,
					},
				];
				bar.shouldPrintChordsDuration = false;
			}
		});
	}

	return line;
};

const shouldReplaceWithBarRepeat = (line, bar, alignChordsWithLyrics) => {
	return (
		bar.isRepeated &&
		!barHasMultiplePositionedChords(line, bar, alignChordsWithLyrics)
	);
};

const barHasMultiplePositionedChords = (line, bar, alignChordsWithLyrics) => {
	return (
		alignChordsWithLyrics &&
		line.model.hasPositionedChords &&
		bar.allChords.length > 1 &&
		bar.allChords.some((chord) => chord.isPositioned)
	);
};

export default replaceRepeatedBars;
