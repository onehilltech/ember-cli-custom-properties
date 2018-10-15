import Component from '@ember/component';
import layout from '../templates/components/o-button';

export default Component.extend ({
  layout,

  tagName: 'button',

  customProperties: ['fooBar'],
  customPropertyBindings: ['bar:--custom-bar'],
});
