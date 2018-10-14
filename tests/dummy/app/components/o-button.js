import Component from '@ember/component';
import layout from '../templates/components/o-button';

import CustomProperties from 'ember-cli-custom-properties/mixins/custom-properties';

export default Component.extend (CustomProperties, {
  layout,

  tagName: 'button',

  customProperties: ['fooBar'],
  customPropertyBindings: ['bar:--custom-bar'],
});
