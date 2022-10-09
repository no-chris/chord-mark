const render = ({ label, multiplier }) => {
	return `<span class="cmSectionLabel">${label}${
		multiplier
			? `<span class="cmSectionMultiplier"> ${multiplier}</span>`
			: ''
	}</span>`;
};
export default render;
