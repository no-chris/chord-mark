/* eslint-env node */
module.exports = function(config) {
	config.set({
		mutator: 'javascript',
		packageManager: 'npm',
		reporters: ['clear-text', 'progress'],
		transpilers: [],
		coverageAnalysis: 'off',
		testRunner: 'jest',
		mutate: ['src/**/*.js'],
	});
};
