const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// move html index template into dist folder with main.js
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
})

/**
  * This plugin extracts CSS into separate files.
  * It creates a css file per JS file which contains CSS.
  * It supports On-Demand-Loading of CSS and SourceMaps.
 */

 const PluginMiniCssExtract = new MiniCssExtractPlugin({
   // Options similar to the same options in webpackOptions.output
   // both options are optional
   filename: "[name].css",
   chunkFilename: "[id].css"
 })

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js"
  },
  devServer: {
    historyApiFallback: true
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
           presets: ['es2015', 'stage-2', 'react']
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [htmlPlugin, PluginMiniCssExtract]
}
