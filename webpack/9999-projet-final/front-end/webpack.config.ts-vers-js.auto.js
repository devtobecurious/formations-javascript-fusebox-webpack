const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");

// console.log(process.env.NODE_ENV);
// console.log(path.resolve(__dirname,'dist/index-genere.html'));

const params = {
    mode: 'production',
    entry: 
        './src/main.ts',  
    devtool: 'inline-source-map',
    output: {
        filename: 'monfichier.js',
        path: path.resolve(__dirname, 'dist/assets/js')
    },
    optimization: {
        minimize: true,
        noEmitOnErrors: true
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: path.resolve(__dirname,'dist/index-genere.html'),
            template: 'template/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/, loader: 'ts-loader'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
              }
        ]
    }
};

module.exports = params;

// https://webpack.js.org/plugins/

// http://www.cetait-quoi-le-contexte.fr/contexte/il-faut-que-tu-aies-le-reflexe-de-rapprocher-ta-bouche