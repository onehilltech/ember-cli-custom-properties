import CoreObject from '@ember/object/core';
import { isPresent } from '@ember/utils';

export default CoreObject.extend ({
  /// The property name in the component.
  prop: null,

  /// The target custom property name (i.e., css variable).
  name: null,

  /// The component to apply the custom property.
  component: null,

  apply () {
    const value = this.component.get (this.prop);

    if (this._value === value) {
      return;
    }

    // The property value changed. We need to update the style property to reflect
    // the changes. Make sure to save the new value for the next change.
    const { element } = this.component;

    if (isPresent (value)) {
      element.style.setProperty (this.name, value);
    }
    else {
      element.style.removeProperty (this.name);
    }

    this._value = value;
  }
});