import Component from '@ember/component';
import EmberObject from '@ember/object';

export default Component.extend({
  newItem: null,
  isAddingItem: false,

  didInsertElement() {
    this.set("newItem", EmberObject.create({}));
  },

  actions: {
    addItem(list) {
      this.set('isAddingItem', false);
      this.get('addItem')(list, this.get('newItem'));
    },

    cancelAddItem(){
      this.set('newItem.title', '');
      this.set('isAddingItem', false);
    },

    editItem(item) {
      this.get('editItem')(item);
    },

    deleteList(list) {
      this.get('deleteList')(list);
    }

  }
});
