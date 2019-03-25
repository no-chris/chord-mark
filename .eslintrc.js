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
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'no-shadow': [
			'error',
			{
				'builtinGlobals': true
			}
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
