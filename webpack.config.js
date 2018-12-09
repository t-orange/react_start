
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: "./src/index.html"
		})
	]
};