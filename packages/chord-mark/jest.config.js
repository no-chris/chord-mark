const baseConfig = require('../../jest.config.base');
const packageJson = require('./package');

module.exports = {
	...baseConfig,
	displayName: packageJson.name,
	rootDir: __dirname,
	testEnvironment: 'jsdom',
};
