import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: 'latex-maths',

  expr: null,
  display: false,

  _initialTypeset: Ember.on('didInsertElement', function() {
    this.typeset();
  }),

  _observer: Ember.observer('expr', 'display', function() {
    Ember.run.once(this, 'typeset');
  }),

  typeset() {
    var expr = this.get('expr');
    var el = this.get('element');
    var display = this.get('display');

    if (expr && el) {
      window.katex.render(expr, el, {
        displayMode: display
      });
    }
  }
});
