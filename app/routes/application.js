/* global Ember */

import TodosController from '../controllers/todos';
var todosController = TodosController.create();

var todos = todosController.get('todos');
var todo = todos.objectAt(1);
todo.set('isDone', true);

todo = Ember.Object.create({ isDone: false });
todos.pushObject(todo);

todosController.get('remaining');

export default Ember.Route.extend({
  setupController: function(controller) {
    // `controller` is the instance of ApplicationController
    controller.set('title', todosController.get('remaining'));
  }
});
