const path = require('path')
const MiniCssWebpackPlugin = require('mini-css-extract-plugin')
const FileListPlugin = require('./myPlugin/file-list-plugin')
const PerfetchWebpackPlugin = require('./myPlugin/prefetch-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssWebpackPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'raw-loader',
            options: {
              esModule: false,
            }
          },
          {
          loader: 'markdown-loader',
          options: {
            simplifiedAutoLink: true,
            tables: true
          }
        }]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolveLoader: {
    modules: ['node_modules', 'myLoader']
  },
  plugins: [
    new MiniCssWebpackPlugin({
      filename: '[name].css'
    }),
    new FileListPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'app.html'
    }),
    new PerfetchWebpackPlugin()

  ]
}