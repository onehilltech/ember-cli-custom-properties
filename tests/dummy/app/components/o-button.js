import Component from '@ember/component';
import layout from '../templates/components/o-button';

import { alias } from '@ember/object/computed';

export default Component.extend ({
  layout,

  classNames: ['o-button'],

  tagName: 'button',

  foo: alias ('fooBar'),

  customProperties: ['fooBar'],
  customPropertyBindings: ['bar:--custom-bar'],
});
