ember-cli-custom-properties
==============================================================================

Adds support for CSS custom properties (variables) to your application

Installation
-------------

    ember install ember-cli-custom-properties

Features
----------

* Uses modifiers to apply custom properties
* Maps component attributes to CSS custom properties
* Fast, lightweight implementation
* Only updates CSS custom properties when its bound component value changes
* Zero configuration design
* Production ready

Usage: Ember 2.17 and above
-----------------------------

Starting with Ember 2.17 or later, we switched to using modifiers to set custom properties 
on an element. This design decision makes it a lot easier to apply a custom property at any
level of the application, including top-level templates.

Here is the new an improved way for setting a custom property. You just need to make sure 
the variables passed into the modifier is tracked.

```handlebars
<div {{custom-property "--background-image" backgroundImage}}></div>
```

The first parameter to the modifier is the custom property in from your CSS file. The second
parameter is the value of the custom property.

Usage: Ember 2.16 or earlier
-----------------------------

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
