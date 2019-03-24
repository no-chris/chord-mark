import htmlToElement from './htmlToElement';

export default function stripTags(html) {
	return htmlToElement(html).textContent;
}