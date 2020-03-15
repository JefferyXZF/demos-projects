// 首先引入插件
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'
const config = require('./public/config')[isDev ? 'dev' : 'build']

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
    publicPath: '/' // 通常是CDN地址
  },
  devServer: {
    port: '3333',
    quiet: false, // 默认不开启 除了初始启动信息之外的任何内容都不会被打印到控制台
    inline: true, // 默认开启 inline 模式，如果设置为 false, 开启 iframe 模式
    stats: 'errors-only', // 终端仅打印 error
    overlay: false, // 默认不开启 当编译出错时，会在浏览器窗口全屏输出错误，默认是关闭的
    clientLogLevel: 'silent', // 日志等级
    compress: true // 是否启用 gzip 压缩
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [
                "@babel/plugin-transform-runtime",
                {
                  "corejs": 3
                }
              ]
            ]
          }
        },
        exclude: /node_modules/ //排除 node_modules 目录
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', {
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [
                require('autoprefixer')({
                  "overrideBrowserslist": [
                    ">0.25%",
                    "not dead"
                  ]
                })
              ]
            }
          }
        }, 'sass-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240, // 10k
              esModule: false,
              name: '[name]_[hash:6].[ext]',
              outpath: 'assets'
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    // 数组，放着所有的webpack插件
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html', // 打包后的文件名
      config: config.template,
      minify: {
        removeAttributeQuotes: false, // 是否删除属性的引号
        collapseWhitespace: false // 是否折叠空白
      },
      // hash: true // 是否加上 hash, 默认是 false
    }),
    //不需要传参数喔，它可以找到 outputPath
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns:['**/*', '!dll', '!dll/**'] //不删除dll目录下的文件
    }) 
  ]
}