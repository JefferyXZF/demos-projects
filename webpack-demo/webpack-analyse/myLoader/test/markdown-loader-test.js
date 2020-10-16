const {runLoaders} =  require('loader-runner')
const path = require('path')
const fs = require('fs')


runLoaders({
  resource: path.resolve(__dirname, './test.md'),
  loaders: [{
    loader: path.resolve(__dirname, '..', './markdown-loader.js'),
    options: {
      simplifiedAutoLink: true,
      tables: true
    }
  }],
  context: { minimize: true },
  readResource: fs.readFile.bind(fs)
}, function(err, result) {
  console.log(result)
})