const render = ({ line, lineClasses, isNewSection, wrapperClasses }) => {
	if (isNewSection) {
		return `</div><div class="${wrapperClasses}"><p class="${lineClasses}">${line}</p>`;
	} else {
		return `<p class="${lineClasses}">${line}</p>`;
	}
};
export default render;
