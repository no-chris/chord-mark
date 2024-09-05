const react = require('eslint-plugin-react');
const noUnsanitized = require('eslint-plugin-no-unsanitized');
const globals = require('globals');
const js = require('@eslint/js');

module.exports = [
	js.configs.recommended,
	{
		ignores: [
			'**/coverage',
			'**/lib',
			'**/node_modules',
			'**/build',
			'packages/documentation/.docusaurus',
		],
	},
	{
		files: [
			'**/babel.config.js',
			'**/eslint.config.js',
			'**/jest.config.js',
			'**/jest.config.base.js',
			'**/webpack.config.js',
			// docusaurus-specific
			'packages/documentation/docusaurus.config.js',
			'packages/documentation/sidebars.js',
		],
		languageOptions: {
			globals: {
				...globals.node,
			},
			sourceType: 'commonjs',
		},
	},
	{
		plugins: {
			'no-unsanitized': noUnsanitized,
		},

		languageOptions: {
			globals: {
				...globals.browser,
				Atomics: 'readonly',
				SharedArrayBuffer: 'readonly',
			},

			ecmaVersion: 'latest',
			sourceType: 'module',
		},

		rules: {
			complexity: ['error', { max: 12 }],
			'linebreak-style': ['error', 'unix'],
			'max-depth': ['error', 4],
			'max-len': ['error', { code: 150 }],
			'max-lines': [
				'error',
				{ max: 300, skipBlankLines: true, skipComments: true },
			],
			'max-lines-per-function': [
				'warn',
				{ max: 55, skipBlankLines: true, skipComments: true },
			],
			'max-params': ['warn', { max: 4 }],
			'no-mixed-spaces-and-tabs': ['off'],
			'no-shadow': ['error', { builtinGlobals: true }],
			semi: ['error', 'always'],

			'no-unsanitized/property': [
				'error',
				{ escape: { methods: ['escapeHTML'] } },
			],
			'no-unsanitized/method': ['error'],
		},
	},
	{
		files: ['packages/chord-mark**/src/**/*'],
		rules: {
			'no-restricted-imports': [
				'error',
				{
					paths: [
						{
							name: 'lodash',
							message:
								'Please do not import lodash as a whole: import individual lodash functions instead.',
						},
					],
				},
			],
		},
	},
	{
		files: ['packages/chord-mark**/tests/**/*'],
		languageOptions: {
			globals: {
				...globals.node,
				...globals.jest,
			},
		},
		rules: {
			'max-len': ['off'],
			'max-lines': ['off'],
			'max-lines-per-function': ['off'],
			'max-params': ['off'],
			'no-unsanitized/property': ['off'],
		},
	},

	{
		...react.configs.flat.recommended,
		files: ['packages/documentation/src/**/*'],
		plugins: {
			react,
		},
		settings: { react: { version: 'detect' } },
		rules: {
			'react/prop-types': 0,
			'react/jsx-uses-react': 'error',
			'react/jsx-uses-vars': 'error',
		},
	},
];
