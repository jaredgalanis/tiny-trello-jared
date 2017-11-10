import Component from '@ember/component';

export default Component.extend({
  newItem: null,
  isAddingItem: false,

  didInsertElement() {
    this.set("newItem", Ember.Object.create({}));
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
    }
  }
});
