const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/assets/js'),
    publicPath: '/assets/js'
  },
  mode: 'development',
  optimization: {
    noEmitOnErrors: true
  },
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: [
      //     'babel-loader'
      //   ]
      // },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
};