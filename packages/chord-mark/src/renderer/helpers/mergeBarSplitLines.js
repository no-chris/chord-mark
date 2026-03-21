import _cloneDeep from 'lodash/cloneDeep';

import lineTypes from '../../parser/lineTypes';

/**
 * In chords-only mode, merge split chord lines back into single lines.
 * The incomplete bar (last bar of split line) is merged with the continuation
 * bar (first bar of next chord line) into one complete bar.
 * Remaining bars from the continuation line become a separate chord line.
 *
 * @param {SongLine[]} lines
 * @returns {SongLine[]}
 */
export default function mergeBarSplitLines(lines) {
	const result = [];
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		if (
			line.type === lineTypes.CHORD &&
			line.model.hasContinuation
		) {
			const nextChordIndex = lines.findIndex(
				(l, j) => j > i && l.type === lineTypes.CHORD
			);
			const continuationLine = lines[nextChordIndex];
			lines.splice(nextChordIndex, 1);

			const mergedModel = _cloneDeep(line.model);
			mergedModel.hasContinuation =
				continuationLine.model.hasContinuation;
			mergedModel.pendingBar = null;

			const contBars = _cloneDeep(
				continuationLine.model.allBars
			);

			// Merge the incomplete bar (last of line 1) with
			// the continuation bar (first of line 2) into one bar
			const incompleteBar =
				mergedModel.allBars[mergedModel.allBars.length - 1];
			const contFirstBar = contBars.shift();

			incompleteBar.allChords.push(...contFirstBar.allChords);
			incompleteBar.hasUnevenChordsDurations =
				incompleteBar.allChords.length > 1 &&
				incompleteBar.allChords.some(
					(c) =>
						c.duration !==
						incompleteBar.allChords[0].duration
				);

			// Remaining bars from the continuation stay on their own line
			if (contBars.length > 0) {
				const remainingModel = _cloneDeep(
					continuationLine.model
				);
				remainingModel.allBars = contBars;
				remainingModel.hasContinuation =
					continuationLine.model.hasContinuation;
				remainingModel.pendingBar =
					continuationLine.model.pendingBar;
				lines.splice(nextChordIndex, 0, {
					...continuationLine,
					model: remainingModel,
				});
				// The merged line no longer has an incomplete bar
				mergedModel.hasContinuation = false;
			}

			result.push({ ...line, model: mergedModel });
		} else {
			result.push(line);
		}
	}
	return result;
}
