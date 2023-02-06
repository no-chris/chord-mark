const render = ({ chordLineOffset, chordLine, symbolType }) => {
	const chordLineClasses = ['cmChordLine'];
	if (symbolType === 'roman')
		chordLineClasses.push('cmChordLine-romanNumeral');

	return `<span class="${chordLineClasses.join(' ')}">${
		chordLineOffset
			? `<span class="cmChordLineOffset">${chordLineOffset}</span>`
			: ''
	}${chordLine}</span>`;
};
export default render;
