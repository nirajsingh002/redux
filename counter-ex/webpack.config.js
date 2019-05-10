var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
module.exports = {
   entry: ['./src/main.js', './src/scss/main.scss'],

   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js'
   },

   devtool: '#inline-source-map',
   devServer: {
      inline: false,
      port: 8080,
   },

   module: {
      loaders: [
      /*
         rules for JavaScript transpiling go in here
      */
         { // regular css files
            test: /\.(css!sass|scss)$/,
            use: ExtractTextPlugin.extract({
               use: ['css-loader', 'sass-loader'],
            })

         },
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },
   plugins: [
      new ExtractTextPlugin({ // define where to save the file
         filename: 'css/[name].bundle.css',
         allChunks: true,
      })
   ]
}
