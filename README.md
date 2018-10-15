ember-cli-custom-properties
==============================================================================

Adds support for CSS custom properties (variables) to components

Installation
-------------

    ember install ember-cli-custom-properties


Usage
---------

There is no extra installation steps need to use this add-on. It will automatically
reopen the `Component` class an apply the `CustomProperties` mixin.

You just need to define the `customProperties` attribute on the target component to 
declare what properties on the component automatically map to CSS custom properties.

```javascript
import Component from "@ember/component";

// ...

export default Component.extend ({
  customProperties: ['foo', 'fooBar']
});
```

In the example above, `foo` is mapped to `--foo` and `fooBar` is mapped to `--foo-bar`.

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
