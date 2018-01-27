const Dotenv = require('dotenv-webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const extractSass = new ExtractTextPlugin({
	filename: "main.css",
	disable: process.env.NODE_ENV === "development"
});

module.exports = {
	context: __dirname,
	entry: './src/App.js',
	output: {
		path: path.join(__dirname, '/public'),
		filename: 'bundle.js',
		publicPath: '/public/'
	},
	resolve: {
		extensions: ['.js']
	},
	module: {
		rules: [
			{
				include: path.resolve(__dirname, 'src'),
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				loader: extractSass.extract({
					use: [{
						loader: "css-loader"
					}, {
						loader: "sass-loader"
					}],
					fallback: "style-loader"
				})
			}
		]
	},
	plugins: [
		extractSass,
		new Dotenv()
	]
};