import domPurify from 'dompurify';

/**
 * Minimal wrapper around DOMPurify library.
 * Pretty drastic also: anything that is HTML is just simply ignored, including text content of tags.
 *
 * @param {String} dirty
 * @returns {String} clean HTML
 */
export default function toSafeHtml(dirty) {
	const config = {
		ALLOWED_TAGS: ['p', '#text'],
		KEEP_CONTENT: false,
	};

	return domPurify.sanitize(dirty, config);
}
