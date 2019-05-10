let HTMLWebPackPlugin = require("html-webpack-plugin");
let path = require("path");

const htmlPlugin = new HTMLWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js"
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
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
            query: {
              modules: true,
              localIdentName: "[name]_[local]_[has:base64:5]"
            }
          }
        ]
      }
    ]
  },
  plugins: [htmlPlugin]
};
