
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const { entry, htmlWebpackPlugins } = require('./config/webpack.entry')




module.exports = {
  mode: "development",
  // entry: {
  //   main: './src/index.js'
  // },
  entry: entry,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].[chunkhash:8].js',
    // publicPath: '/images'
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    port: 9000,
    open: true,
    hot: true
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: [path.resolve(__dirname, 'src')], // 指定检查目录
      //   options: {
      //     formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
      //   }
      // },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            modules: true // 打开命名空间
          }
        }, 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'images/[name][hash:10].[ext]'
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    ...htmlWebpackPlugins,
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   template: './index.html',
    //   title: '你好，世界',
    //   filename: '[name].html'
    // }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ]
}