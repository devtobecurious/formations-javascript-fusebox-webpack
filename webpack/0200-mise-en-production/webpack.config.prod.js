const merge = require('webpack-merge');
const configDefault = require('./webpack.config');

module.exports = merge(configDefault, {
  mode: 'production',
  devtool: 'source-map'
});