import React from 'react';
import canUseDom from './canUseDom';

import ChordMarkBlock from './ChordMarkBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import { parseSong, renderSong } from 'chord-mark';

const TabbedChordMark = ({ src, srcLines, renderLines, options }) => {
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
				//chordsAndLyricsDisplay: 'chords',
			},
			options
		)
	);
	const srcSnippet = getSnippet(src, srcLines);
	const renderSnippet = getSnippet(rendered, renderLines);

	return (
		<Tabs>
			<TabItem value={'chordmark'} label={'ChordMark'}>
				<ChordMarkBlock content={srcSnippet} />
			</TabItem>
			<TabItem value={'text'} label={'Rendered'}>
				<ChordMarkBlock content={renderSnippet} />
			</TabItem>
		</Tabs>
	);
};

function getSnippet(string, linesRange = '') {
	const allLines = string.split('\n');
	const range = getStartEnd(linesRange);
	const snippetTab = allLines.slice(range.start, range.end);
	return snippetTab.join('\n');
}

function getStartEnd(rangeStr) {
	const range = {};
	const rangeTab = rangeStr.split('-').map((x) => Number.parseInt(x));
	range.start = rangeTab[0] > 0 ? rangeTab[0] - 1 : undefined;
	if (range.start !== undefined) {
		range.end = rangeTab[1] || range.start + 1;
	}
	return range;
}

export default TabbedChordMark;
