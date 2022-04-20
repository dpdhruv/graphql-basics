const { RESTDataSource } = require('apollo-datasource-rest');
const TodoService = require('./TodoService');

class TodoDataSource extends RESTDataSource {
  constructor() {
    super();
    Object.assign(this, TodoService({ request: this }));
  }
}

module.exports = TodoDataSource;
