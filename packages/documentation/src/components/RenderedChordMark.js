import React from 'react';

import ChordMarkBlock from './ChordMarkBlock';
import canUseDom from './canUseDom';

import { parseSong, renderSong } from 'chord-mark';

const RenderedChordMark = ({ src, title = undefined, options }) => {
	if (!canUseDom()) {
		return <p>ChordMark code block</p>;
	}

	const parsed = parseSong(src);
	const rendered = renderSong(
		parsed,
		Object.assign(
			{
				alignBars: true,
				alignChordsWithLyrics: true,
				printChordsDuration: 'uneven',
			},
			options
		)
	);

	return <ChordMarkBlock title={title} content={rendered} />;
};

export default RenderedChordMark;
