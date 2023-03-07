const path = require('path');

module.exports = {
  entry: './src/services/database.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devtool: 'eval-source-map',
};