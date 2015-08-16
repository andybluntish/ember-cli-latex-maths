/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-latex-maths',
  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/katex/dist/katex.min.css');
    app.import(app.bowerDirectory + '/katex/dist/katex.min.js');

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
        app.import(app.bowerDirectory + '/katex/dist/fonts/' + filename + '.' + ext, { destDir: '/assets/fonts' });
      });
    });
  }
};
