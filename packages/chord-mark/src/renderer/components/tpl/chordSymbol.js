const render = ({ chordSymbol, chordDuration }) => {
	return `<span class="cmChordSymbol">${chordSymbol}${
		chordDuration
			? `<span class="cmChordDuration">${chordDuration}</span>`
			: ''
	}</span>`;
};
export default render;
