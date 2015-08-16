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

test('it renders LaTeX expressions in the correct display mode', function(assert) {
  assert.expect(2);
  visit('/');

  andThen(function() {
    assert.equal(find('.latex-maths > .katex').length, 1);
    assert.equal(find('.latex-maths > .katex-display').length, 1);
  });
});
