ember-cli-custom-properties
==============================================================================

Adds support for CSS custom properties (variables) to components


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
-------------

    ember install ember-cli-custom-properties


Features
----------

* Maps component attributes to CSS custom properties
* Fast, lightweight implementation
* Only updates CSS custom properties when its bound component value changes
* Zero configuration design
* Production ready

Usage
---------

There is no extra installation steps need to use this add-on. It will automatically
reopen the `Component` class an apply the `CustomProperties` mixin.

You just need to define the `customProperties` attribute on the target component to 
declare what properties on the component automatically map to CSS custom properties.

```javascript
import Component from "@ember/component";

export default Component.extend ({
  customProperties: ['foo', 'fooBar']
});
```

In the example above, `foo` is mapped to `--foo` and `fooBar` is mapped to `--foo-bar`.

> Custom property values are Promise aware. This is useful when the custom property's
> value must be computed in the background.

### Custom Property Bindings

The custom properties defined in `customProperties` are automatically mapped to CSS 
custom properties. If you need to control what component property maps to a CSS custom
property, define the property in `customPropertyBindings`.

```javascript
import Component from "@ember/component";

// ...

export default Component.extend ({
  customPropertyBindings: ['height:--my-component-height']
});
```

Now, when you set the `height` property on this component, it will map to the 
`--my-component-height` CSS custom property.

### Removing a Property

You remove a CSS custom property value by simply setting its bound component
property to `null` or `undefined`.

Happy Coding!
