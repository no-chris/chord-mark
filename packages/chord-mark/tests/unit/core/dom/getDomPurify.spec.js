import getDomPurify from '../../../../src/core/dom/getDomPurify';
import DOMPurify from 'dompurify';

describe('getDomPurify', () => {
	test('Module', () => {
		expect(getDomPurify).toBeInstanceOf(Function);
	});

	test('should return un-modified domPurify if not given a window object', () => {
		expect(getDomPurify()).toBe(DOMPurify);
	});

	test('should return a new instance of domPurify if given a window object', () => {
		expect(getDomPurify({ window: 'object' })).not.toBe(DOMPurify);
	});
});
