const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const textWebpackPlugin = require("./src/plugin/fileWebpackPlugin")

const glob = require("glob")

// 多页面打包通用方案
const setMPA = () => {
  const entry = {}
  const htmlWebpackPlugins = []
  
  const entryFiles = glob.sync(path.join(__dirname, "./src/module/*/index.js"))

  Object.keys(entryFiles).map(item => {
    const entryFile = entryFiles[item]
    const match = entryFile.match(/src\/module\/(.*)\/index\.js$/)
    const pageName = match && match[1]

    entry[pageName] = entryFile
    htmlWebpackPlugins.push(
      new htmlWebpackPlugin({
        title: pageName,
        template: path.join(__dirname, `src/module/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName],
        inject: true
      })
    )
  })

  return {
    entry,
    htmlWebpackPlugins
  }
}
const { entry, htmlWebpackPlugins } = setMPA()


module.exports = {
  mode: "development",
  // entry: "./src/index.js",
  entry,
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: '[name][chunkhash:6].js'
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
    // new htmlWebpackPlugin({
    //   template: "./index.html",
    //   filename: "main.html"
    // }),
    ...htmlWebpackPlugins,
    new MiniCssExtractPlugin({
      filename: "[contenthash:6][name].css",
      chunkFilename: "[contenthash:6].css"
    }),
    new CleanWebpackPlugin(),
    // new textWebpackPlugin()
  ]
}