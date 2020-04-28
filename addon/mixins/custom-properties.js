import Mixin from '@ember/object/mixin';
import CustomProperty from '../-private/custom-property';
import { dasherize } from '@ember/string';

const EMPTY_ARRAY = Object.freeze ([]);

export default Mixin.create ({
  concatProperties: ['customProperties', 'customPropertyBindings'],

  _customProperties: null,

  customProperties: EMPTY_ARRAY,
  customPropertyBindings: EMPTY_ARRAY,

  init () {
    this._super (...arguments);

    // Initialize the custom properties.
    this._initCustomProperties ();
  },

  _initCustomProperties () {
    let {
      customProperties,
      customPropertyBindings
    } = this;

    // Build an array of custom properties that we are observing.
    let bindings = customProperties.reduce ((bindings, prop) => {
      const name = `--${dasherize (prop)}`;
      bindings.push (CustomProperty.create ({ prop, name, component: this }));

      return bindings;
    }, []);

    bindings = customPropertyBindings.reduce ((bindings, mapping) => {
      let [prop, name] = mapping.split (':');
      bindings.push (CustomProperty.create ({prop, name, component: this }));

      return bindings;
    }, bindings);

    this._customProperties = bindings;
  },

  willDestroyElement () {
    this._super (...arguments);

    for (let i = 0, len = this._customProperties.length; i < len; ++ i) {
      this._customProperties[i].destroy ();
    }
  }
});
