import { findAll, visit } from '@ember/test-helpers'
import { module, test } from 'qunit'
import { setupApplicationTest } from 'ember-qunit'

module('Acceptance | latex maths', function(hooks) {
  setupApplicationTest(hooks)

  test('it renders components', async function(assert) {
    assert.expect(1)
    await visit('/')

    assert.ok(findAll('.latex-maths').length === 2)
  })

  test('it renders LaTeX expressions in the correct display mode', async function(assert) {
    assert.expect(2)
    await visit('/')

    assert.dom('.latex-maths > .katex').exists({ count: 1 })
    assert.dom('.latex-maths > .katex-display').exists({ count: 1 })
  })
})
