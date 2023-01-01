const render = ({ song }) => {
	/**
	 * The extra opening and closing div accounts for the simple section 
	 * wrapping logic, which wraps sections in <div class="cmSection ..."> for
	 * the purpose of styling with themes. Yes, this does spawn one needless div 
	 * at the start of the song.
	 */
	return `<div class="cmSong"><div>${song}</div></div>`;
};
export default render;
