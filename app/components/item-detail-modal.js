import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    this.$('#itemDetailModal').modal('show');
  },

  willDestroyElement() {
    this.$('#itemDetailModal').modal('hide');
  },

  actions: {
    closeModal() {
      this.get('closeModal')();
    }
  }

});
