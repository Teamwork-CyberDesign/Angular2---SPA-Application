const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    devtool: 'eval',
    output: {
        path: helpers.root('../dist'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    htmlLoader: {
        minimize: false // workaround for ng2
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
            mangle: {
                keep_fnames: true
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        })
    ]
});