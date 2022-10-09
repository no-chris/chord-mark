const render = ({ chordLineOffset, chordLine }) => {
	return `<span class="cmChordLine">${
		chordLineOffset
			? `<span class="cmChordLineOffset">${chordLineOffset}</span>`
			: ''
	}${chordLine}</span>`;
};
export default render;
