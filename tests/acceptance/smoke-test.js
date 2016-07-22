import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | smoke');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.test-my-better-panel').length, 1, 'My panel renders');
  });
});
