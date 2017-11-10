import Component from '@ember/component';

export default Ember.TextField.extend({
  didInsertElement() {
    this.$().focus();
  }

});
