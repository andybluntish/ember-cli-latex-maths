import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from '../helpers/start-app';

var application;

module('Acceptance: LatexMaths', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('it renders components', function(assert) {
  assert.expect(1);
  visit('/');

  andThen(function() {
    assert.ok(find('.latex-maths').length === 2);
  });
});

test('it renders LaTeX expressions', function(assert) {
  assert.expect(3);
  visit('/');

  andThen(function() {
    assert.equal(find('.katex').length, 2);
  });

  andThen(function() {
    assert.equal(find('#inline .katex .displaystyle').length, 0);
  });

  andThen(function() {
    assert.ok(find('#block .katex .displaystyle').length > 0);
  });
});
