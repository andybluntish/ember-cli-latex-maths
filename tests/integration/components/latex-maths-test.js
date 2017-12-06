import { moduleForComponent, test, skip } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('latex-maths', 'Integration | Component | latex maths', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

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

// TODO: assert.throws is not catching the error, need to investigate further
skip('it throws an error if there is an illegal latex directive', function(assert) {
  assert.expect(1);

  assert.throws(() => {
    this.render(hbs`{{latex-maths expr="\\illegal"}}`);
  });
});

test('it does not throw an error if there is an illegal latex directive when "throwOnError=false"', function(assert) {
  assert.expect(1);

  this.render(hbs`{{latex-maths expr="\\illegal" throwOnError=false}}`);

  assert.equal(this.$().find('.latex-maths > .katex').length, 1);
});

test('it displays illegal directive coloured when "throwOnError=false" if there is an illegal latex directive', function(assert) {
  assert.expect(1);

  this.render(hbs`{{latex-maths expr="\\illegal" throwOnError=false}}`);

  assert.notEqual(this.$().find('.latex-maths > .katex span[style^="color"]').length, 0);
});

test('it displays illegal directive coloured matching errorColor when "throwOnError=false" and "errorColor=#hexCode" if there is an illegal latex directive', function(assert) {
  assert.expect(1);

  this.render(hbs`{{latex-maths expr="\\illegal" throwOnError=false errorColor="#00ff00"}}`);

  assert.notEqual(this.$().find('.latex-maths > .katex span[style^="color: rgb(0, 255, 0)"]').length, 0);
});
