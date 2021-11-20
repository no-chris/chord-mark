module.exports = {
	env: {
		jest: true,
		node: true,
	},
	rules: {
		'max-len': ['off'],
		'max-lines': ['off'],
		'max-lines-per-function': ['off'],
		'max-params': ['off'],

		'no-restricted-imports': ['off'],

		'no-unsanitized/property': ['off'],
	},
};
