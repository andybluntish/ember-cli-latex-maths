import Component from '@ember/component';
import { on } from '@ember/object/evented';
import { get, observer } from '@ember/object';
import { once } from '@ember/runloop';

export default Component.extend({
  tagName: 'span',
  classNames: 'latex-maths',

  expr: null,
  display: false,

  _initialTypeset: on('didInsertElement', function() {
    this.typeset();
  }),

  _observer: observer('expr', 'display', function() {
    once(this, 'typeset');
  }),

  typeset() {
    const expr = get(this, 'expr');
    const el = get(this, 'element');
    const display = get(this, 'display');

    if (expr && el) {
      window.katex.render(expr, el, {
        displayMode: display
      });
    }
  }
});
