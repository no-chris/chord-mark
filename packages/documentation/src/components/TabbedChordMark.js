import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

import ChordMarkBlock from './ChordMarkBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const TabbedChordMark = ({ src, srcLines, renderLines, options }) => {
	let srcSnippet;
	let renderSnippet;

	if (ExecutionEnvironment.canUseDOM) {
		// eslint-disable-next-line no-undef
		const { parseSong, renderSong } = require('chord-mark');

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
		srcSnippet = getSnippet(toHtml(src), srcLines);
		renderSnippet = getSnippet(rendered, renderLines);
	}

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

function toHtml(text) {
	return text
		.split('\n')
		.map((line) => (line === '' ? '&nbsp;' : line))
		.map((line) => `<p>${line}</p>`)
		.join('');
}

function getSnippet(html, linesRange = '') {
	const range = getStartEnd(linesRange);
	const allLines = html.match(/(<p.*?>.*?<\/p>)/gm);
	return allLines.slice(range.start, range.end).join('');
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

const TabbedChordMarkWrapper = (props) => (
	<BrowserOnly fallback={'loading...'}>
		{() => <TabbedChordMark {...props} />}
	</BrowserOnly>
);

export default TabbedChordMarkWrapper;
