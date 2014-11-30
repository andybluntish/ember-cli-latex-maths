import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

module('Acceptance: LatexMaths', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('it renders components', function() {
  expect(1);
  visit('/');

  andThen(function() {
    ok(find('.latex-maths').length === 2);
  });
});

test('it renders LaTeX expressions', function() {
  expect(3);
  visit('/');

  andThen(function() {
    equal(find('.katex').length, 2);
  });

  andThen(function() {
    equal(find('#inline .katex .displaystyle').length, 0);
  });

  andThen(function() {
    ok(find('#block .katex .displaystyle').length > 0);
  });
});
