const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// console.log(process.env.NODE_ENV);
// console.log(path.resolve(__dirname,'dist/index-genere.html'));

const PROD_URL = '/dist/';
const PROD_ASSETS_DIR = PROD_URL+'assets';

const params = {
    mode: 'development',
    entry: {
        main: [
            './src/main.ts'
        ]
    },
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/assets/js'),
        publicPath: './assets/js'
    },
    optimization: {
        minimize: true,
        noEmitOnErrors: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js' ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: path.resolve(__dirname,'dist/index-genere.html'),
            template: 'template/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'assets/img'),
                    to: path.resolve(__dirname, 'dist/assets/img')
                },
                // {
                //     from: path.resolve(__dirname, 'assets/css'),
                //     to: path.resolve(__dirname, 'dist/assets/css')
                // },
            ]
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/, loader: 'ts-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            },
            {
                test: /.(png|gif|jpg|jpeg|ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'dist/assets/',    // where the fonts will go
                    publicPath: PROD_ASSETS_DIR       // override the default path
                  }
                }]
              } 
        ]
    }
};

module.exports = params;
