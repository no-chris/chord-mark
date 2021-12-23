/**
 * Return the printed length of a string, taking into accounts tabs
 * @param {string} input
 * @returns {number}
 */
const getSpaceLength = (input) => {
	const TAB_WIDTH = 4;

	// inspired by https://github.com/gromnitsky/untabify/blob/master/index.js
	let offset = 0;
	const withoutTabs = input.replace(/\t/g, (_, idx) => {
		let max = TAB_WIDTH - ((idx + offset) % TAB_WIDTH);
		offset += max - 1;
		return ' '.repeat(max);
	});

	return withoutTabs.length;
};

export default getSpaceLength;
