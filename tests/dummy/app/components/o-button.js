import Component from '@ember/component';
import layout from '../templates/components/o-button';

export default Component.extend ({
  layout,

  classNames: ['o-button'],

  tagName: 'button',

  customProperties: ['fooBar'],
  customPropertyBindings: ['bar:--custom-bar'],
});
