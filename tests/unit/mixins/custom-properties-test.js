import EmberObject from '@ember/object';
import CustomPropertiesMixin from 'ember-cli-custom-properties/mixins/custom-properties';
import { module, test } from 'qunit';

module('Unit | Mixin | custom-properties', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let CustomPropertiesObject = EmberObject.extend(CustomPropertiesMixin);
    let subject = CustomPropertiesObject.create();
    assert.ok(subject);
  });
});
