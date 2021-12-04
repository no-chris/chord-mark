/* eslint-env node */
const presets = [
	[
		'@babel/preset-env',

		{
			targets: {
				browsers: 'defaults',
			},
			useBuiltIns: 'usage',
			corejs: '3',
		},
	],
	['@babel/preset-react'],
];

module.exports = { presets };
