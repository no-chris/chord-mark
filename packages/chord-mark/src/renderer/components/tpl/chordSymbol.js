const render = ({
	chordSymbol,
	chordDuration,
	subBeatGroupOpener,
	subBeatGroupCloser,
}) => {
	const groupOpen = subBeatGroupOpener
		? `<span class="cmSubBeatGroupOpener">${subBeatGroupOpener}</span>`
		: '';

	const groupClose = subBeatGroupCloser
		? `<span class="cmSubBeatGroupCloser">${subBeatGroupCloser}</span>`
		: '';

	return `${groupOpen}<span class="cmChordSymbol">${chordSymbol}${
		chordDuration
			? `<span class="cmChordDuration">${chordDuration}</span>`
			: ''
	}</span>${groupClose}`;
};
export default render;
