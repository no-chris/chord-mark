module.exports = {
	'env': {
		'jest': true,
		'node': true,
	},
	'rules': {
		'max-len':                [ 'off' ],
		'max-lines':	 		  [ 'error', { max: 500, skipBlankLines: true, skipComments: true, } ],
		'max-lines-per-function': [ 'off' ],
		'max-params': 			  [ 'error', { max: 10 } ],

		'no-restricted-imports':  [ 'off' ],

		'no-unsanitized/property':[ 'off' ],
	}
};
