const path = require('path');
const AsyncChunkNames = require('../index');

module.exports = {
  entry: path.join(__dirname, 'entry.js'),
  output: {
    path: path.join(__dirname, 'output'),
    filename: 'output.js',
    chunkFilename: '[name].js'
  },
  resolve: {
    modules: ['node_modules', 'bower_components', __dirname],
    extensions: ['.js', '.json']
  },
  plugins: [new AsyncChunkNames()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-3', 'react'],
            plugins: ['syntax-dynamic-import']
          }
        }
      }
    ]
  }
};
