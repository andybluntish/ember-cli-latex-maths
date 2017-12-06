/* eslint-env node */
'use strict';

var fs = require('fs');
var path = require('path');

module.exports = {
  name: 'ember-cli-latex-maths',

  included: function(app) {
    this._super.included(app);

    var libPath = path.join(app.bowerDirectory, 'KaTeX', 'dist');
    var fontPath = path.join(libPath, 'fonts');

    app.import(path.join(libPath, 'katex.min.css'));
    app.import(path.join(libPath, 'katex.min.js'));

    fs.readdirSync(fontPath).forEach(function(font) {
      app.import(path.join(fontPath, font), {
        destDir: path.join('assets', 'fonts')
      });
    });
  }
};
