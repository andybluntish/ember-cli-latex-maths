import Component from '@ember/component';
import { get, computed } from '@ember/object';

export default Component.extend({
  tagName: 'span',
  classNames: 'latex-maths',
  attributeBindings: ['maths:data-maths'],

  expr: null,
  display: false,
  throwOnError: true,
  errorColor: '#cc0000',

  maths: computed('expr', 'display', 'throwOnError', 'errorColor', {
    get() {
      const expr = get(this, 'expr');
      const el = get(this, 'element');
      const displayMode = get(this, 'display');
      const throwOnError = get(this, 'throwOnError');
      const errorColor = get(this, 'errorColor');

      if (expr && el) {
        window.katex.render(expr, el, {
          displayMode,
          throwOnError,
          errorColor,
        });
      }

      return expr;
    },
  }),
});
