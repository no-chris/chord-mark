const render = ({ keyDeclarationPrefix, key }) => {
	return (
		`<span class="cmKeyDeclaration">` +
		`${keyDeclarationPrefix}` +
		`${key}` +
		`</span>`
	);
};
export default render;
