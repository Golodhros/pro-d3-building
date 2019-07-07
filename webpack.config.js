const path = require('path');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');
const constants = require('./webpack.constants');

const prodBundleConfig = merge([
    {
        mode: 'production',
        devtool: 'source-map',
        entry: {
            proD3Building: constants.PATHS.bundleIndex
        },
        output: {
            path: path.resolve(__dirname, 'dist/'),
            filename: 'proD3Building.min.js',
            library: ['proD3Building'],
            libraryTarget: 'umd'
        },
    },
    parts.babelLoader(),
    parts.cssLoader(),
    parts.externals(),
]);

module.exports = (env) => {
    if (env === 'production') {
        return prodBundleConfig;
    }
};