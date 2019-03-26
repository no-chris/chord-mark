import escapeHTML from './toSafeHtml';

/**
 * @param {String} text
 * @returns {HTMLElement}
 */
export default function textToDom(text) {
	const html = escapeHTML(text)
		.split('\n')
		.map(line => `<p>${line}</p>`)
		.join('');

	const div = document.createElement('div');
	div.innerHTML = escapeHTML(html);

	return div;
}
