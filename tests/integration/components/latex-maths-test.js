import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('latex-maths', 'Integration | Component | latex maths', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{latex-maths expr="c = \\sqrt{a^2 + b^2}"}}`);

  assert.equal(this.$('.latex-maths').length, 1);
});

test('it is a SPAN tag', function(assert) {
  assert.expect(1);

  this.render(hbs`{{latex-maths expr="c = \\sqrt{a^2 + b^2}"}}`);

  assert.equal(this.$('.latex-maths').prop('tagName'), 'SPAN');
});

test('it renders the expression using KaTeX', function(assert) {
  assert.expect(1);

  this.render(hbs`{{latex-maths expr="c = \\sqrt{a^2 + b^2}"}}`);

  assert.equal(this.$('.latex-maths').find('> .katex').length, 1);
});

test('it renders expressions in "inline style" by default', function(assert) {
  assert.expect(2);

  this.render(hbs`{{latex-maths expr="c = \\sqrt{a^2 + b^2}"}}`);

  assert.equal(this.$().find('.latex-maths > .katex').length, 1);
  assert.equal(this.$().find('.latex-maths > .katex-display').length, 0);
});

test('it renders "display=true" expressions in "display style"', function(assert) {
  assert.expect(2);

  this.render(hbs`{{latex-maths expr="c = \\sqrt{a^2 + b^2}" display=true}}`);

  assert.equal(this.$().find('.latex-maths > .katex').length, 0);
  assert.equal(this.$().find('.latex-maths > .katex-display').length, 1);
});
