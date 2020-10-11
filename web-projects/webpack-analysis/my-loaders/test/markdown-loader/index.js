

const path = require('path')
const fs = require('fs')

const { runLoaders } = require('loader-runner')

runLoaders({
  resource: path.resolve(__dirname, './activity-indicator.md'),
  loaders: [{
    loader: path.resolve(__dirname, '../../', './markdown-loader.js'),
    options: {
      simplifiedAutoLink: true,
      tables: true
    }
  }]
}, function(err, data) {
  if (err) return console.log(err)

  fs.writeFileSync(path.resolve(__dirname, './activity-indicator.html'), data.result, 'utf-8')
})



