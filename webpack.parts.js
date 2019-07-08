exports.externals = () => ({
    externals: {
        commonjs: 'd3',
        amd: 'd3',
        root: 'd3'
    },
});

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
exports.istanbulLoader = () => ({
    module: {
        rules: [
            {
                test: /\.js?$/,
                include: /src/,
                exclude: /(node_modules|tests.webpack.js)/,
                use: [{
                    loader: 'istanbul-instrumenter-loader',
                    query: {
                        esModules: true
                    }
                }],
            }
        ]
    }
});
exports.babelLoader = () => ({
});