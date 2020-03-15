const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devtool: 'eval-source-map',
  optimization: {
    noEmitOnErrors: true
  },
  watch: true,
  plugins: [
    new HtmlWebpackPlugin() // Generates default index.html
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'babel-loader'
        ]
      }
    ]
  }
};