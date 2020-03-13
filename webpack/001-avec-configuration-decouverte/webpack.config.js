const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'maino.js',
    path: path.resolve(__dirname, 'disto'),
  },
};