import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('board', { path: '/' }, function() {
    this.route('edit-item', { path: '/:title'});
  });
});

export default Router;
