module.exports = {
	'env': {
		'jest': true,
		'node': true,
	},
	'rules': {
		'max-len':                [ 'error', { 'code': 200 } ],
		'max-lines':	 		  [ 'error', { max: 500, skipBlankLines: true, skipComments: true, } ],
		'max-lines-per-function': [ 'error', { max: 200, skipBlankLines: true, skipComments: true, } ],
		'max-params': 			  [ 'error', { max: 10 } ],

		'no-restricted-imports':  [ 'off' ],

		'no-unsanitized/property':[ 'off' ],
	}
};
