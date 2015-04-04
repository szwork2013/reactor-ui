var webpack = require('webpack');


var plugins = [
    new webpack.DefinePlugin({
        '__DEV__': 'true'
    })
];

if (process.env.COMPRESS) {

    plugins.push(

        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    );
}

module.exports = {

    node: {
        buffer: false
    },

    plugins: plugins,

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }

};
