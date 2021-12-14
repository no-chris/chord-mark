/* eslint-env node */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const buildDir = 'lib';

const config = {
	context: __dirname,
	target: 'web',
	mode: 'production',
	devtool: 'source-map',

	entry: {
		'chord-mark': './src/chordMarkThemes.js',
	},

	output: {
		filename: '[name].js',
		clean: true,
		path: path.resolve(__dirname, buildDir),
		library: 'chord-mark-themes',
		libraryTarget: 'umd',
	},

	optimization: {
		minimize: false,
	},

	performance: {
		hints: false,
	},

	plugins: [new HtmlWebpackPlugin(), new MiniCssExtractPlugin()],

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
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},

	devServer: {
		compress: true,
		port: 9000,
		watchFiles: {
			options: { usePolling: true },
		},
	},
};

module.exports = config;
