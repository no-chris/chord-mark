import createDOMPurify from 'dompurify';

export default (windowObject) => {
	return windowObject ? createDOMPurify(windowObject) : createDOMPurify;
};
