import React from 'react';

import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import stripTags from '../stripTags';
import { parseSong, renderSong } from 'chord-mark';

const TabbedChordMark = ({ src, srcLines, renderLines, options }) => {
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
	const renderSnippet = getSnippet(
		stripTags(rendered.replace(/&nbsp;/g, '')),
		renderLines
	);

	return (
		<Tabs>
			<TabItem value={'chordmark'} label={'ChordMark'}>
				<CodeBlock>{srcSnippet}</CodeBlock>
			</TabItem>
			<TabItem value={'text'} label={'Rendered'}>
				<CodeBlock>{renderSnippet}</CodeBlock>
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
