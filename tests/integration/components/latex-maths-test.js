import { module, skip, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile'

module('Integration | Component | latex maths', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1)

    await render(hbs`{{latex-maths expr="c = \\sqrt{a^2 + b^2}"}}`)

    assert.dom('.latex-maths').exists({ count: 1 })
  })

  test('it is a SPAN tag', async function(assert) {
    assert.expect(1)

    await render(hbs`{{latex-maths expr="c = \\sqrt{a^2 + b^2}"}}`)

    assert.equal(find('.latex-maths').tagName, 'SPAN')
  })

  test('it renders the expression using KaTeX', async function(assert) {
    assert.expect(1)

    await render(hbs`{{latex-maths expr="c = \\sqrt{a^2 + b^2}"}}`)

    assert.equal(this.$('.latex-maths').find('> .katex').length, 1)
  })

  test('it renders expressions in "inline style" by default', async function(assert) {
    assert.expect(2)

    await render(hbs`{{latex-maths expr="c = \\sqrt{a^2 + b^2}"}}`)

    assert.equal(this.$().find('.latex-maths > .katex').length, 1)
    assert.equal(this.$().find('.latex-maths > .katex-display').length, 0)
  })

  test('it renders "display=true" expressions in "display style"', async function(assert) {
    assert.expect(2)

    await render(hbs`{{latex-maths expr="c = \\sqrt{a^2 + b^2}" display=true}}`)

    assert.equal(this.$().find('.latex-maths > .katex').length, 0)
    assert.equal(this.$().find('.latex-maths > .katex-display').length, 1)
  })

  // TODO: assert.throws is not catching the error, need to investigate further
  skip('it throws an error if there is an illegal latex directive', function(assert) {
    assert.expect(1)

    assert.throws(() => {
      this.render(hbs`{{latex-maths expr="\\illegal"}}`)
    })
  })

  test('it does not throw an error if there is an illegal latex directive when "throwOnError=false"', async function(assert) {
    assert.expect(1)

    await render(hbs`{{latex-maths expr="\\illegal" throwOnError=false}}`)

    assert.equal(this.$().find('.latex-maths > .katex').length, 1)
  })

  test('it displays illegal directive coloured when "throwOnError=false" if there is an illegal latex directive', async function(assert) {
    assert.expect(1)

    await render(hbs`{{latex-maths expr="\\illegal" throwOnError=false}}`)

    assert.notEqual(this.$().find('.latex-maths > .katex span[style^="color"]').length, 0)
  })

  test('it displays illegal directive coloured matching errorColor when "throwOnError=false" and "errorColor=#hexCode" if there is an illegal latex directive', async function(assert) {
    assert.expect(1)

    await render(hbs`{{latex-maths expr="\\illegal" throwOnError=false errorColor="#00ff00"}}`)

    assert.notEqual(
      this.$().find('.latex-maths > .katex span[style^="color: rgb(0, 255, 0)"]').length,
      0,
    )
  })
});
