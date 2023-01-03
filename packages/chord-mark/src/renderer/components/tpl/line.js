const render = ({ 
	line, 
	lineClasses, 
	shouldOpenSection, 
	wrapperClasses, 
	shouldCloseSection, 
	closesFinalSection 
}) => {
	let wrapper = '';
	
	if (shouldCloseSection) {
		wrapper = '</div>';
	}
	
	if (shouldOpenSection) {
		wrapper = `${wrapper}<div class="${wrapperClasses}">`;
	}

	wrapper = `${wrapper}<p class="${lineClasses}">${line}</p>`;
	
	if (closesFinalSection) {
		wrapper = `${wrapper}</div>`
	}
	
	return wrapper;
};
export default render;
