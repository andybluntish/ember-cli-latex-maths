import Ember from 'ember';

const {
  Component,
  on,
  observer,
  get,
  run: { once }
} = Ember;

export default Component.extend({
  tagName: 'span',
  classNames: 'latex-maths',

  expr: null,
  display: false,
  throwOnError: true,
  errorColor: "#cc0000",

  _initialTypeset: on('didInsertElement', function() {
    this.typeset();
  }),

  _observer: observer('expr', 'display', 'throwOnError', 'errorColor', function() {
    once(this, 'typeset');
  }),

  typeset() {
    const expr = get(this, 'expr');
    const el = get(this, 'element');
    const display = get(this, 'display');
    const throwOnError = get(this, 'throwOnError');
    const errorColor = get(this, 'errorColor');

    if (expr && el) {
      window.katex.render(expr, el, {
        displayMode: display,
        throwOnError: throwOnError,
        errorColor: errorColor,
      });
    }
  }
});
