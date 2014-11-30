import {
  moduleForComponent,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('latex-maths', 'LatexMathsComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});

test('it is a SPAN tag', function() {
  expect(1);

  equal('SPAN', this.$().prop('tagName'));
});

test('it has a class name denoting it\'s type', function() {
  expect(1);

  var component = this.subject();
  this.append();

  ok(component.get('element').classList.contains('latex-maths'));
});

test('it stores the expression used to render output', function() {
  expect(2);

  var component = this.subject();

  this.append();

  Ember.run(function() {
    component.set('expr', 'c = \\sqrt{a^2 + b^2}');
  });
  equal(component.get('renderedExpr'), 'c = \\sqrt{a^2 + b^2}');

  Ember.run(function() {
    component.set('expr', 'a^2 + b^2 = c^2');
  });
  equal(component.get('renderedExpr'), 'a^2 + b^2 = c^2');
});

test('it wraps the "renderedExpr" in the "displaystyle" command', function() {
  expect(2);

  var component = this.subject();

  this.append();

  Ember.run(function() {
    component.set('display', true);
    component.set('expr', 'c = \\sqrt{a^2 + b^2}');
  });
  equal(component.get('renderedExpr'), '\\displaystyle {c = \\sqrt{a^2 + b^2}}');

  Ember.run(function() {
    component.set('display', false);
    component.set('expr', 'c = \\sqrt{a^2 + b^2}');
  });
  equal(component.get('renderedExpr'), 'c = \\sqrt{a^2 + b^2}');
});

test('it renders the expression using KaTeX', function() {
  expect(1);

  var component = this.subject();

  this.append();

  Ember.run(function() {
    component.set('expr', 'c = \\sqrt{a^2 + b^2}');
  });

  equal($('.katex', component.get('element')).length, 1);
});

test('it renders "display=true" expressions using "displaystyle"', function() {
  expect(2);

  var component = this.subject();

  this.append();

  Ember.run(function() {
    component.set('display', true);
    component.set('expr', 'c = \\sqrt{a^2 + b^2}');
  });
  ok($('.displaystyle', component.get('element')).length > 0);

  Ember.run(function() {
    component.set('display', false);
  });
  equal($('.displaystyle', component.get('element')).length, 0);
});
