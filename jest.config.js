/* eslint-env node */
module.exports = {
	testEnvironment: 'jsdom',

	collectCoverage: true,
	collectCoverageFrom: ['**/src/**/*.js', '!**/node_modules/**'],
	coverageDirectory: '<rootDir>/coverage',
	coveragePathIgnorePatterns: ['node_modules'],
	coverageReporters: ['json', 'lcov', 'text', 'clover'],
	coverageThreshold: {
		global: {
			branches: 99,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},

	transform: {
		'\\.js$': 'babel-jest',
		'\\.hbs$': 'jest-handlebars',
	},

	moduleNameMapper: {
		'\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
	},
};
