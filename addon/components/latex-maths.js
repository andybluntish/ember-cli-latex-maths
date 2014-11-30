import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: 'latex-maths',

  expr: null,
  display: null,
  renderedExpr: null,

  _initialTypeset: Ember.on('didInsertElement', function() {
    this.typeset();
  }),

  _observer: Ember.observer('expr', 'display', function() {
    Ember.run.once(this, 'typeset');
  }),

  typeset: function() {
    var renderedExpr = this.get('expr') || '';

    // Set "display" style
    if (this.get('display')) {
      renderedExpr = '\\displaystyle {' + renderedExpr + '}';
    }

    this.set('renderedExpr', renderedExpr);

    window.katex.render(renderedExpr, this.get('element'));
  }
});
