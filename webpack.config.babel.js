export default {
	output: {
		filename: 'client-bundle.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: [/node-modules/]
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
