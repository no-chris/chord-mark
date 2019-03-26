import escapeHTML from './escapeHTML';

export default function htmlToElement(html) {
	const template = document.createElement('template');
	template.innerHTML = escapeHTML(html);

	return template.content.firstChild;
}
