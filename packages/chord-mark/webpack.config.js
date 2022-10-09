/* eslint-env node */
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require('path');

const buildDir = 'lib';

const config = {
	context: __dirname,
	target: 'web',
	mode: 'production',
	devtool: 'source-map',

	entry: {
		'chord-mark': './src/chordMark.js',
	},

	output: {
		filename: '[name].js',
		clean: true,
		path: path.resolve(__dirname, buildDir),
		library: 'chord-mark',
		libraryTarget: 'umd',
		// https://github.com/webpack/webpack/pull/8625
		//globalObject: "typeof self !== 'undefined' ? self : this",
	},

	optimization: {
		minimize: false,
	},

	performance: {
		hints: false,
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		],
	},
	plugins: [
		/* * /new BundleAnalyzerPlugin() /**/
	],
};

module.exports = config;
