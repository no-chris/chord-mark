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

	transform: {
		'\\.js$': 'babel-jest',
		'\\.hbs$': 'jest-handlebars',
	},

};
