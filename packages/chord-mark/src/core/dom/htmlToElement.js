import getDomPurify from './getDomPurify.js';

export default function htmlToElement(html, windowObject) {
	return getDomPurify(windowObject).sanitize(html, {
		RETURN_DOM_FRAGMENT: true,
	}).firstChild;
}
