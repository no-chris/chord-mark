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
			'branches': 95,
			'functions': 95,
			'lines': 95,
			'statements': -10
		}
	},

	transform: {
		'\\.js$': 'babel-jest',
		'\\.hbs$': 'jest-handlebars',
	},

	moduleNameMapper: {
		'\\.(css|scss)$': '<rootDir>/scss/__mocks__/styleMock.js'
	}

};
