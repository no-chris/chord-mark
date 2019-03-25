module.exports = {
	'rules': {
		'no-restricted-imports': [
			'error',
			{
				paths: [
					{
						name: 'lodash',
						message: 'Please do not import lodash as a whole: import submodules instead.'
					}
				]
			}
		],
	}
};
