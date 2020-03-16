const merge = require('webpack-merge');
const configDefault = require('./webpack.config');

module.exports = merge(configDefault, {
  mode: 'development',
  devtool: 'inline-source-map'
});