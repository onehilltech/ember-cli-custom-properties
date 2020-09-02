import { modifier } from 'ember-modifier';
import { isPresent } from '@ember/utils';

export default modifier (function customProperty (element, [prop, value] /*, hash*/) {
  if (isPresent (value)) {
    element.style.setProperty (prop, value);
  }
  else {
    element.style.removeProperty (prop, value);
  }
});
