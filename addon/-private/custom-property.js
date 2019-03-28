import CoreObject from '@ember/object/core';
import { isPresent } from '@ember/utils';
import { resolve } from 'rsvp';
import { addObserver, removeObserver } from '@ember/object/observers';

export default CoreObject.extend ({
  /// The component to apply the custom property.
  component: null,

  /// The property name in the component.
  prop: null,

  /// The target custom property name (i.e., css variable).
  name: null,

  init () {
    this._super (...arguments);

    // Observe changes to the components value.
    addObserver (this.component, this.prop, this, this.refresh);

    // Apply the initial value.
    this.refresh ();
  },

  destroy () {
    removeObserver (this.component, this.prop, this, this.refresh);
  },

  refresh () {
    const value = this.component.get (this.prop);

    resolve (value).then (value => {
      // The property value changed. We need to update the style property to reflect
      // the changes. Make sure to save the new value for the next change.
      const { element } = this.component;

      if (isPresent (value)) {
        element.style.setProperty (this.name, value);
      }
      else {
        element.style.removeProperty (this.name);
      }
    });
  }
});