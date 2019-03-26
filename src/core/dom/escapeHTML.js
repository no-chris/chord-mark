import domPurify from 'dompurify';

export default function escapeHTML(unescaped) {
	return domPurify.sanitize(unescaped);
}
