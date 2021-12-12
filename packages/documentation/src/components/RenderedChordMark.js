import React from 'react';

import BrowserOnly from '@docusaurus/BrowserOnly';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

import ChordMarkBlock from './ChordMarkBlock';

const RenderedChordMark = ({ src, title = undefined, options }) => {
	let rendered;

	if (ExecutionEnvironment.canUseDOM) {
		// eslint-disable-next-line no-undef
		const { parseSong, renderSong } = require('chord-mark');

		const parsed = parseSong(src);
		rendered = renderSong(
			parsed,
			Object.assign(
				{
					printChordsDuration: 'uneven',
				},
				options
			)
		);
	}

	return <ChordMarkBlock title={title} content={rendered} />;
};

const RenderedChordMarkWrapper = (props) => (
	<BrowserOnly fallback={'loading...'}>
		{() => <RenderedChordMark {...props} />}
	</BrowserOnly>
);

export default RenderedChordMarkWrapper;
