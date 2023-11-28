import _cloneDeep from 'lodash/cloneDeep';

import lineTypes from './lineTypes';
import { guessKey } from './helper/keyHelpers';

/**
 * @param {SongLine[]} allLines
 * @param {SongChord[]} allChords
 * @returns {SongKeys}
 */
export default function getAllKeysInSong(allLines, allChords) {
	const allKeys = {
		auto: undefined,
		explicit: [],
	};

	allLines.forEach((line) => {
		if (line.type === lineTypes.KEY_DECLARATION) {
			allKeys.explicit.push(_cloneDeep(line.model));
		}
	});

	if (allKeys.explicit.length === 0) {
		const autoDetectedKey = guessKey(allChords);
		if (autoDetectedKey) {
			allKeys.auto = autoDetectedKey;
		}
	}

	return allKeys;
}
