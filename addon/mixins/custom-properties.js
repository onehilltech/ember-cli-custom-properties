import Mixin from '@ember/object/mixin';
import { addObserver, removeObserver } from '@ember/object/observers';
import { once } from '@ember/runloop';
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
    this._initCustomProperties ();

    for (let i = 0, len = this._customProperties.length; i < len; ++ i) {
      addObserver (this, this._customProperties[i].prop, this, this._onCustomPropertyChange);
    }
  },

  _onCustomPropertyChange () {
    once(this, '_updateCustomProperties');
  },

  willDestroy () {
    this._super(...arguments);

    for (let i = 0, len = this._customProperties.length; i < len; ++ i) {
      removeObserver (this, this._customProperties[i].prop, this, this._onCustomPropertyChange);
    }
  },

  _updateCustomProperties () {
    for (let i = 0, len = this._customProperties.length; i < len; ++ i) {
      this._customProperties[i].apply ();
    }
  },

  _initCustomProperties () {
    let {
      customProperties,
      customPropertyBindings
    } = this.getProperties (['customProperties', 'customPropertyBindings']);

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

  didRender () {
    this._super (...arguments);

    this._updateCustomProperties();
  },
});
