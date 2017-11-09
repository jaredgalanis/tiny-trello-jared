import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addItem(list) {
      this.store.createRecord('item', {title: 'New Item', list: list});
    },

    addList() {
      this.store.createRecord('list');
    }
  }
});
