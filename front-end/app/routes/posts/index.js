import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('post');
  },
  serialize: function(model, params) {
    return { post_id: model.get('slug') };
  }
});
