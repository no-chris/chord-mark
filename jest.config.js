/* eslint-env node */
module.exports = {

	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.js',
		'!**/node_modules/**'
	],
	coverageDirectory: '<rootDir>/coverage',
	coveragePathIgnorePatterns: ['node_modules'],
	coverageReporters: ['json', 'lcov', 'text', 'clover'],
	coverageThreshold: {
		'global': {
			'branches': 90,
			'functions': 90,
			'lines': 90,
			'statements': -20
		}
	},

	transform: {
		'\\.js$': 'babel-jest',
		'\\.hbs$': 'jest-handlebars',
	},

};
