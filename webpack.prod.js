const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'production',
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './index.js',
        /*action: './action.css',
        bootstrap: './bootstrap.css'*/
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                    loader: 'file-loader',
                    options: {
                        useRelativePath: true
                    }
                }

                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            title: 'Domonap Section Action',
            hash: true,
            template: './index.html'
        }),
        new webpack.HashedModuleIdsPlugin()
    ]
};