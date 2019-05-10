var path = require('path');
module.exports = {
  mode: 'development',
  entry: ['./src/main.js'],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },

  devServer: {
    inline: false,
    port: 8080,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        query: {
          presets: ['es2015', 'stage-2', 'react']
        }
      }
    ]
  }
}
