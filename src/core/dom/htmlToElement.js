import domPurify from 'dompurify';

export default function htmlToElement(html) {
	return domPurify.sanitize(html, {
		RETURN_DOM_FRAGMENT: true
	}).firstChild;
}
