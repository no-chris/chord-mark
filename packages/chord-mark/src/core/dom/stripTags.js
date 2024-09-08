import getDomPurify from './getDomPurify.js';

export default function stripTags(html, windowObject) {
	return getDomPurify(windowObject).sanitize(html, {
		ALLOWED_TAGS: ['#text'],
		KEEP_CONTENT: true,
	});
}
