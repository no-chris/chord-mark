const render = ({ chordLyricsPairs }) => {
	let chordLyricLine = '<span class="cmChordLyricLine">';

	chordLyricsPairs.forEach((pair) => {
		chordLyricLine +=
			'<span class="cmChordLyricPair">' +
			`<span class="cmChordLine">${pair.chords || '&nbsp;'}</span>` +
			`<span class="cmLyricLine">${pair.lyrics}</span>` +
			'</span>';
	});

	chordLyricLine += '</span>';

	return chordLyricLine;
};
export default render;
