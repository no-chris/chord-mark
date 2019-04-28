import domPurify from 'dompurify';

export default function stripTags(html) {
	return domPurify.sanitize(html, {
		ALLOWED_TAGS: ['#text'],
		KEEP_CONTENT: true,
	});
}
