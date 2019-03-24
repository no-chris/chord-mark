/* eslint-env node */
const path = require('path');

const webpack = require('webpack');

const CleanWebpackPlugin    = require('clean-webpack-plugin');
const TerserPlugin       	= require('terser-webpack-plugin');

const buildDir = 'dist';

const config = {
	target:'web',
	mode: 'production',
	devtool: 'source-map',

	entry: {
		'ucc': './src/index.js',
		'ucc-editor': './src/index-editor.js'
	},

	output: {
		filename: '[name].js',
		path: path.resolve(process.cwd(), buildDir),
	},

	optimization: {
		minimizer: [
			new TerserPlugin({
				sourceMap: true,
			}),
		],
	},

	plugins: [
		new CleanWebpackPlugin(),
		new webpack.IgnorePlugin(/\.scss|sass|css$/)
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

