var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var htmlPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: './js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '.'
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new htmlPlugin({ template: './public/index.html' })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-react', '@babel/preset-env'] }
                }]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        // you can specify a publicPath here
                        // by default it uses publicPath in webpackOptions.output
                        publicPath: 'assets/'
                    }
                }, 'css-loader'
                ]

            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true
    },
    resolve: {
        extensions: ['.css', '.js', '.jsx']
    }
};
