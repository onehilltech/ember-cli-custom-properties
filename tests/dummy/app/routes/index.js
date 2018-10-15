import Route from '@ember/routing/route';

export default Route.extend ({
  setupController (controller) {
    this._super (...arguments);

    controller.setProperties ({
      bar: 10,
      backgroundImage: 'url("https://images.freeimages.com/images/large-previews/a0d/autumn-tree-1382832.jpg")'
    });
  }
});
