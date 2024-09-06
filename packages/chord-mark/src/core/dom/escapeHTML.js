import getDomPurify from './getDomPurify.js';

export default function escapeHTML(unescaped, windowObject) {
	return getDomPurify(windowObject).sanitize(unescaped);
}
