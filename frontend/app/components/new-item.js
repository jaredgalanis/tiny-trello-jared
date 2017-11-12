import Component from '@ember/component';

export default Component.extend({
  actions: {
    addItem(list) {
      if(this.get('newItem.title')) {
        this.get('addItem')(list);
      }
    },

    cancelAddItem() {
      this.get('cancelAddItem')();
    }
  }

});
