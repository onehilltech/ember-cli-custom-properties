# ember-cli-custom-properties

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

Usage
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

### Removing a Property

You remove a CSS custom property value by simply setting its bound component
property to `null` or `undefined`.

Happy Coding!
