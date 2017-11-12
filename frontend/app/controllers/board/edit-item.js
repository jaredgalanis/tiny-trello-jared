import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    closeModal(item) {
      if(item.get('title')) {
        this.transitionToRoute('board');
      }
    },

    deleteItem(item) {
      this.store.deleteRecord(item);
      this.transitionToRoute('board');
    }
  }
});
