import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('my-better-panel-content', 'Integration | Component | my better panel content', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{my-better-panel-content}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#my-better-panel-content}}
      template block text
    {{/my-better-panel-content}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
