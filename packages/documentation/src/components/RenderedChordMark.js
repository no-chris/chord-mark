import React from 'react';

import CodeBlock from '@theme/CodeBlock';

import { parseSong, renderSong } from 'chord-mark';
import stripTags from '../stripTags';

const RenderedChordMark = ({ src, title = undefined, options }) => {
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

	return (
		<CodeBlock title={title}>
			{stripTags(rendered.replace(/&nbsp;/g, ''))}
		</CodeBlock>
	);
};

export default RenderedChordMark;
