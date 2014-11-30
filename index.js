'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-latex-maths',
  included: function(app) {
    this.app = app;

    var vendorPath = path.join('vendor', 'katex');

    app.import(path.join(vendorPath, 'katex.min.css'));
    app.import(path.join(vendorPath, 'katex.min.js'));

    ['eot', 'ttf', 'woff', 'woff2'].forEach(function(ext) {
      [
        'KaTeX_AMS-Regular',
        'KaTeX_Main-Bold',
        'KaTeX_Main-Italic',
        'KaTeX_Main-Regular',
        'KaTeX_Math-BoldItalic',
        'KaTeX_Math-Italic',
        'KaTeX_Math-Regular',
        'KaTeX_Size1-Regular',
        'KaTeX_Size2-Regular',
        'KaTeX_Size3-Regular',
        'KaTeX_Size4-Regular'
      ].forEach(function(filename) {
        app.import(path.join(vendorPath, 'fonts', filename + '.' + ext), { destDir: '/assets/fonts' });
      });
    });
  }
};
