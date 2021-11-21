/* eslint-env node */
module.exports = {
	rules: {
		'import/no-restricted-paths': [
			'error',
			{
				zones: [{ target: './src/parser', from: './src/renderer' }],
			},
		],
	},
};
