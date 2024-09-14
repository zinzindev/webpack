const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
	},

	module: {
		rules: [
			{
				test: [/.js$/],
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
		rules: [
			{
				test: [/.css$/],
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'],
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'assets/images',
				},
			},
		],
	},

	plugins: [
		new htmlWebpackPlugin({
			title: 'Webpack 4 starter',
			template: './src/index.html',
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: false,
			},
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css',
		}),
	],

	resolve: {
		extensions: ['.js', '.ts'],
	},
};
