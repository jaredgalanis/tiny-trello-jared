import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    closeModal() {
      this.transitionToRoute('board');
    },

    deleteItem(item) {
      this.store.deleteRecord(item);
      this.transitionToRoute('board');
    }

  }
});
