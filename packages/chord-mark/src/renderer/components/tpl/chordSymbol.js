const render = ({
	chordSymbol,
	chordDuration,
	subBeatGroupOpener,
	subBeatGroupCloser,
	numeralType,
}) => {
	const groupOpen = subBeatGroupOpener
		? `<span class="cmSubBeatGroupOpener">${subBeatGroupOpener}</span>`
		: '';

	const groupClose = subBeatGroupCloser
		? `<span class="cmSubBeatGroupCloser">${subBeatGroupCloser}</span>`
		: '';

	const symbolClasses = ['cmChordSymbol'];

	if (numeralType) {
		symbolClasses.push(`cmRomanNumeral`, `cmRomanNumeral-${numeralType}`);
	}

	return `${groupOpen}<span class="${symbolClasses.join(
		' '
	)}">${chordSymbol}${
		chordDuration
			? `<span class="cmChordDuration">${chordDuration}</span>`
			: ''
	}</span>${groupClose}`;
};
export default render;
