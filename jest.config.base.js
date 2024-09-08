module.exports = {
	testMatch: ['<rootDir>//tests/**/*.spec.js'],

	transform: {
		'\\.js$': 'babel-jest',
	},
	// whitelisting local modules in the node_modules folder
	transformIgnorePatterns: [
		'<rootDir>.*(node_modules)(?!.*chord-(symbol|mark).*).*$',
	],
	moduleNameMapper: {
		'chord-mark': '<rootDir>/../../packages/chord-mark/src/chordMark.js',
	},
};
