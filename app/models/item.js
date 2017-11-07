import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  detail: DS.attr(),
  list: DS.belongsTo('list')
});
