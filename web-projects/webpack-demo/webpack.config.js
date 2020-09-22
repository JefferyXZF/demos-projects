const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", 
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader", 
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          "less-loader"
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            // options: {
            //   presets: [
            //     [
            //       '@babel/preset-env',
            //       {
            //         useBuiltIns: 'usage'
            //       }
            //     ]
            //   ]
            // }
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./index.html",
      filename: "main.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}