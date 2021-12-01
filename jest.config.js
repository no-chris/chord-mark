/* eslint-env node */
module.exports = {
	testEnvironment: 'jsdom',
	rootDir: __dirname,

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
	testMatch: ['<rootDir>/packages/**/tests/**/*.spec.js'],

	transform: {
		'\\.js$': 'babel-jest',
		'\\.hbs$': 'jest-handlebars',
	},
	// whitelisting local modules in the node_modules folder
	transformIgnorePatterns: ['<rootDir>.*(node_modules)(?!.*chord-mark.*).*$'],
	moduleNameMapper: {
		'\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
		'chord-mark': '<rootDir>/packages/chord-mark/src/chordMark.js',
	},
};
