import path from 'path';
import webpack from 'webpack';

export default {
    devtool: 'source-map',
    entry: [
        "babel-polyfill",
        path.resolve(__dirname, 'src/docHelper')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'docHelper.js'
    },
    plugins:[
        //Minification
		new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders:[
            {test: /\.js$/, exclude: /node_modules/, loaders:['babel-loader']}
        ]
    }
}