import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.peekAll('list');
  },

  setupController(controller, model) {
    controller.set('lists', model);
    this.store.createRecord('list', {title: 'Default List'});
  }
});
