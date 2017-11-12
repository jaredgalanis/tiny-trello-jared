import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addItem(list, newItem) {
      this.store.createRecord('item', {title: newItem.title, list: list});
      newItem.title = '';
    },

    editItem(item) {
      this.transitionToRoute('board.edit-item', item);
    },

    addList() {
      this.store.createRecord('list');
    }
  }
});
