const longLabelToShort = {
	adlib: 'a',
	['ad-lib']: 'a',
	['ad.lib.']: 'a',
	bridge: 'b',
	chorus: 'c',
	intro: 'i',
	introduction: 'i',
	outro: 'o',
	prechorus: 'p',
	['pre-chorus']: 'p',
	['pre chorus']: 'p',
	solo: 's',
	interlude: 'u',
	verse: 'v',
};

const getSectionLabel = (input) => {
	let chordMarkLabel = '#';

	const rawLabelRe = '(.*?)';
	const sectionIndexRe = '([\\s]+[0-9]{1,2})?';
	const multiplierRe = '([\\s]+[x][0-9]{1,2})?';
	const sectionLabelRe = new RegExp(
		`^${rawLabelRe}${sectionIndexRe}${multiplierRe}$`
	);
	const [, rawLabel, , multiplier] = input.trim().match(sectionLabelRe);

	const labelKey = rawLabel.trim().toLowerCase();
	chordMarkLabel += longLabelToShort[labelKey] || rawLabel.trim();

	if (multiplier) {
		chordMarkLabel += ' ' + multiplier.trim();
	}
	return chordMarkLabel;
};

export default getSectionLabel;
