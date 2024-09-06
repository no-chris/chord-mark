const path = require('path');
const webpack = require('webpack');

const buildDir = 'lib';

const config = {
	context: __dirname,
	target: 'node',
	mode: 'production',
	devtool: 'source-map',

	entry: {
		'chord-mark-jsdom': './src/chordMarkJsDom.js',
	},

	output: {
		filename: '[name].js',
		clean: true,
		path: path.resolve(__dirname, buildDir),
		library: {
			name: 'chord-mark-jsdom',
			type: 'umd',
		},
	},

	optimization: {
		minimize: false,
	},

	performance: {
		hints: false,
	},

	externals: {
		bufferutil: 'bufferutil',
		canvas: 'canvas',
		'utf-8-validate': 'utf-8-validate',
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
};

module.exports = config;
