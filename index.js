'use strict'

var fs = require('fs')
var path = require('path')

module.exports = {
  name: require('./package').name,

  included: function(app) {
    this._super.included.apply(this, arguments)

    const packagePath = path.dirname(require.resolve('katex/package.json'))
    const relativePath = path.relative('.', packagePath)
    const importPath = path.join(relativePath, 'dist')
    const stylesPath = path.join(importPath, 'katex.min.css')
    const fontsPath = path.join(importPath, 'fonts')

    app.import(stylesPath)

    fs.readdirSync(fontsPath).forEach(function(font) {
      app.import(path.join(fontsPath, font), {
        destDir: path.join('assets', 'fonts'),
      })
    })
  },
}
