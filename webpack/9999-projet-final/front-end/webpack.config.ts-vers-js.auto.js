const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// console.log(process.env.NODE_ENV);
// console.log(path.resolve(__dirname,'dist/index-genere.html'));

const params = {
    mode: 'production',
    entry: {
        main: [
            './src/main.ts'
        ]
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
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
            patterns: [{
                from: path.resolve(__dirname, 'assets/img'),
                to: path.resolve(__dirname, 'dist/assets/img')
            }]
        })
        // new HtmlWebpackTagsPlugin({ tags: ['./assets/css/styles.css'], append: true })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/, loader: 'ts-loader'
            }
        ]
    }
};

module.exports = params;

// https://webpack.js.org/plugins/

// http://www.cetait-quoi-le-contexte.fr/contexte/il-faut-que-tu-aies-le-reflexe-de-rapprocher-ta-bouche