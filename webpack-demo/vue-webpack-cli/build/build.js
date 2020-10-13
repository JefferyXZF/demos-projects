process.env.NODE_ENV = 'production'

const webpackConfig = require('./webpack.prod.conf')
const webpack = require('webpack')

const compiler = webpack(webpackConfig, (err, status) => {

})
