import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('contacts', function() {
    this.resource('contact', { path: '/:contact_id' });
  });
  this.resource('posts', function() {
    this.resource('post', { path: '/:post_id' });
  });
});
