module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ['**/src/**/*.js', '!**/node_modules/**'],
	coverageDirectory: '<rootDir>/coverage',
	coveragePathIgnorePatterns: [
		'node_modules',
		'packages/documentation',
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
	projects: [__dirname + '/packages/*/jest.config.js'],
};
