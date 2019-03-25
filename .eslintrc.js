module.exports = {
	'env': {
		'browser': true,
		'es6': true
	},

	'extends': 'eslint:recommended',

	'plugins': [
		'import'
	],

	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},

	'parserOptions': {
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},

	'rules': {
		'complexity': [
			'error',
			{
				max: 10
			}
		],
		'indent': [
			'error',
			'tab',
			{
				'SwitchCase': 1
			}
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'max-lines': [
			'error',
			{
				max: 300,
				skipBlankLines: true,
				skipComments: true,
			}
		],
		'no-shadow': [
			'error',
			{
				'builtinGlobals': true
			}
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],

		'import/no-restricted-paths': [
			'error',
			{
				'zones': [
					{ 'target': './src/parser', 'from': './src/renderer' },
					{ 'target': './src/parser', 'from': './src/editor' },

					{ 'target': './src/renderer', 'from': './src/editor' },

					{ 'target': './src/editor', 'from': './src/renderer' },
				]
			}
		],
	}
};
