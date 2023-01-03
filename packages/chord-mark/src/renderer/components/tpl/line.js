const render = ({ 
	line, 
	lineClasses, 
	shouldOpenSection, 
	sectionWrapperClasses, 
	shouldClosePriorSection, 
	shouldCloseFinalSection 
}) => {
	let wrapper = '';
	
	if (shouldClosePriorSection) {
		wrapper += '</div>';
	}
	
	if (shouldOpenSection) {
		wrapper += `<div class="${sectionWrapperClasses}">`;
	}

	wrapper += `<p class="${lineClasses}">${line}</p>`;
	
	if (shouldCloseFinalSection) {
		wrapper += `</div>`
	}
	
	return wrapper;
};
export default render;
