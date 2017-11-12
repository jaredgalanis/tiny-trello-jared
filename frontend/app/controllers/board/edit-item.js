import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    closeModal(item) {
      if(item.get('title')) {
        item.save().then(() => {
          this.transitionToRoute('board');
        });
      }
    },

    deleteItem(item) {
      item.destroyRecord();
      this.transitionToRoute('board');
    }
  }
});
