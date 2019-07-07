exports.externals = () => ({
    externals: {
        commonjs: 'd3',
        amd: 'd3',
        root: 'd3'
    },
});

exports.aliases = () => ({});

// Loaders
exports.cssLoader = () => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
        ],
    },
});
exports.babelLoader = () => ({});