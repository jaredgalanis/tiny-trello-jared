import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  actions: {
    addItem(list, newItem) {
      let item = this.store.createRecord('item', {title: newItem.title, list: list});
      list.save().then(() => {
        item.save().then(() => {
          newItem.title = '';
        });
      });
    },

    editItem(item) {
      this.transitionToRoute('board.edit-item', item);
    },

    addList() {
      this.store.createRecord('list');
    },

    deleteList(list) {
      swal({ // eslint-disable-line
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this list or its items!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          Ember.RSVP.allSettled(list.get('items').invoke('destroyRecord')).then(() => {
            list.destroyRecord();
          });
        } else {
          swal.close(); // eslint-disable-line
        }
      });
    }
  }
});
