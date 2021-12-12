import React from 'react';

const ChordMarkBlock = ({ content }) => {
	const contentOk = content
		.replace(/<p/g, '<span')
		.replace(/<\/p>/g, '</span>');

	return (
		<div className={'chordMarkBlockContainer'}>
			<div className={'chordMarkBlockContent'}>
				<pre className={'chordMarkBlock'}>
					<code
						className={'chordMarkBlockLines'}
						dangerouslySetInnerHTML={{ __html: contentOk }}
					/>
				</pre>
			</div>
		</div>
	);
};

export default ChordMarkBlock;
