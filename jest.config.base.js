module.exports = {
	testEnvironment: 'jsdom',
	rootDir: __dirname,

	collectCoverage: true,
	collectCoverageFrom: ['**/src/**/*.js', '!**/node_modules/**'],
	coverageDirectory: '<rootDir>/coverage',
	coveragePathIgnorePatterns: [
		'node_modules',
		'packages/documentation',
		'packages/chord-mark-jsdom',
		'packages/chord-mark-themes',
	],
	coverageReporters: ['json', 'lcov', 'text', 'clover'],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	testMatch: ['<rootDir>/packages/**/tests/**/*.spec.js'],

	transform: {
		'\\.js$': 'babel-jest',
	},
	// whitelisting local modules in the node_modules folder
	transformIgnorePatterns: [
		'<rootDir>.*(node_modules)(?!.*chord-(symbol|mark).*).*$',
	],
	moduleNameMapper: {
		'chord-mark': '<rootDir>/packages/chord-mark/src/chordMark.js',
	},
};
