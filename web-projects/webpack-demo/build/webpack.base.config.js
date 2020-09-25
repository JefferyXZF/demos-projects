const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const resolve = (filepath) => {
  return path.resolve(__dirname, "../", filepath)
}

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: resolve('./dist'),
    filename: "[name][chunkhash:8].js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "production",
      // filename: "[name].html",
      // path: resolve("./src/index.html")
    })
  ]
}