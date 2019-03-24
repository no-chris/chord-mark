/* eslint-env node */
const presets = [
	[
		'@babel/env',
		{
			targets: {
				node: 'current'
			},
			useBuiltIns: 'usage',
		},
	],
];

module.exports = { presets };