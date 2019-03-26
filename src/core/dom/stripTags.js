import htmlToElement from './htmlToElement';

export default function stripTags(html) {
	return (html === '') ? '' : htmlToElement(html).textContent;
}
