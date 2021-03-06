/* eslint-env node */
const path = require('path');

const webpack = require('webpack');

const { CleanWebpackPlugin }= require('clean-webpack-plugin');
const BundleAnalyzerPlugin 	= require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const buildDir = 'lib';

const config = {
	target: 'web',
	mode: 'production',
	devtool: 'source-map',

	entry: {
		'chord-mark': './src/chordMark.js',
	},

	output: {
		filename: '[name].js',
		path: path.resolve(process.cwd(), buildDir),
		library: 'chord-mark',
		libraryTarget: 'umd',
		// https://github.com/webpack/webpack/pull/8625
		globalObject: 'typeof self !== \'undefined\' ? self : this',
	},

	optimization: {
		minimize: false,
	},

	performance: {
		hints: false
	},

	plugins: [
		new CleanWebpackPlugin(),
		new webpack.IgnorePlugin(/\.scss|sass|css$/),
		new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			openAnalyzer: false,
		}),
	],

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.hbs$/,
				loader: 'handlebars-loader'
			},
		]
	}
};

module.exports = config;

