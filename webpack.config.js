/* eslint-env node */
const path = require('path');

const webpack = require('webpack');

const CleanWebpackPlugin    = require('clean-webpack-plugin');
const TerserPlugin       	= require('terser-webpack-plugin');
const BundleAnalyzerPlugin 	= require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const buildDir = 'dist';

const config = {
	target:'web',
	mode: 'production',
	devtool: 'source-map',

	entry: {
		'ucc': './src/ucc.js',
		'ucc-editor': './src/ucc-editor.js'
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

