/* eslint-env node */
const path = require('path');
const webpack = require('webpack');

const buildDir = 'packages/chord-mark/lib';

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

	plugins: [new webpack.IgnorePlugin({ resourceRegExp: /\.scss|sass|css$/ })],

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.hbs$/,
				loader: 'handlebars-loader',
			},
		],
	},
};

module.exports = config;
