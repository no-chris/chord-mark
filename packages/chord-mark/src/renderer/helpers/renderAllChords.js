import { chordRendererFactory } from 'chord-symbol';
import getChordSymbol from '../helpers/getChordSymbol';

import lineTypes from '../../parser/lineTypes';
import {
	transposeKey,
	getSemitonesBetweenKeys,
} from '../../parser/helper/keyHelpers';

// eslint-disable-next-line max-lines-per-function
export default function renderAllChords(
	allLines,
	detectedKey,
	{
		transposeValue,
		accidentalsType,
		chordSymbolRenderer,
		simplifyChords,
		useShortNamings,
	}
) {
	let currentKey;
	let originalKey;

	if (detectedKey) {
		currentKey = transposeKey(detectedKey, transposeValue, accidentalsType);
	}

	let renderChord = getChordSymbolRenderer();

	function renderChords(line) {
		if (line.type === lineTypes.KEY_DECLARATION) {
			currentKey = transposeKey(
				line.model,
				transposeValue,
				accidentalsType
			);
			line.symbol = currentKey.string;

			if (!originalKey) {
				originalKey = currentKey;
			}
		} else if (line.type === lineTypes.CHORD) {
			let transposeOffSet = 0;
			if (
				line.isFromAutoRepeatChords ||
				line.isFromSectionCopy ||
				line.isFromChordLineRepeater
			) {
				transposeOffSet = getSemitonesBetweenKeys(
					originalKey && originalKey.string,
					currentKey && currentKey.string
				);
			}
			renderChord = getChordSymbolRenderer(transposeOffSet);

			line.model.allBars.forEach((bar) => {
				bar.allChords.forEach((chord) => {
					chord.symbol = getChordSymbol(chord.model, renderChord);
				});
			});
		}
		return line;
	}

	function getChordSymbolRenderer(transposeOffSet) {
		if (typeof chordSymbolRenderer === 'function') {
			return chordSymbolRenderer;
		}
		const accidental =
			accidentalsType === 'auto'
				? currentKey
					? currentKey.accidental
					: 'sharp'
				: accidentalsType;

		return chordRendererFactory({
			simplify: simplifyChords,
			useShortNamings,
			transposeValue: transposeValue + transposeOffSet,
			accidental,
		});
	}

	return allLines.map(renderChords);
}
