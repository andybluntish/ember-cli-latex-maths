import Ember from 'ember';
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('latex-maths', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  const component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('it is a SPAN tag', function(assert) {
  assert.expect(1);

  assert.equal('SPAN', this.$().prop('tagName'));
});

test('it has a class name denoting it\'s type', function(assert) {
  assert.expect(1);

  const component = this.subject();
  this.append();

  assert.ok(component.get('element').classList.contains('latex-maths'));
});

test('it renders the expression using KaTeX', function(assert) {
  assert.expect(1);

  const component = this.subject();

  this.append();

  Ember.run(function() {
    component.set('expr', 'c = \\sqrt{a^2 + b^2}');
  });

  assert.equal($('.katex', component.get('element')).length, 1);
});

test('it renders "display=true" expressions in "display style"', function(assert) {
  assert.expect(4);

  const component = this.subject();

  this.append();

  Ember.run(function() {
    component.set('display', true);
    component.set('expr', 'c = \\sqrt{a^2 + b^2}');
  });

  assert.equal($('> .katex', component.get('element')).length, 0);
  assert.equal($('> .katex-display', component.get('element')).length, 1);

  Ember.run(function() {
    component.set('display', false);
  });

  assert.equal($('> .katex', component.get('element')).length, 1);
  assert.equal($('> .katex-display', component.get('element')).length, 0);
});
