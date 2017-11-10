import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    this.$('#itemDetailModal').modal('show');
  },

  willDestroyElement() {
    this.$('#itemDetailModal').modal('hide');
  },

  actions: {
    closeModal(item) {
      this.get('closeModal')(item);
    },

    deleteItem(item) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this item!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          this.get('deleteItem')(item);
        } else {
          swal.close();
        }
      });
    }
  }

});
