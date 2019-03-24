import textLineTpl from './textLine.hbs';

export default {
	render(textLine) {
		return textLineTpl({ textLine });
	}
};