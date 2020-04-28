import { modifier } from 'ember-modifier';

export default modifier (function customProperty (element, [prop, value] /*, hash*/) {
  element.style.setProperty (prop, value);
});
