module.exports = {
	'env': {
		'jest': true,
		'node': true,
	},
	'rules': {
		'max-lines': [
			'error',
			{
				max: 500,
				skipBlankLines: true,
				skipComments: true,
			}
		],
	}
};
