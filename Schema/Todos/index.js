const todoById = require('./todoById');
const Todo = require('./Todo');

const typeDefs = [todoById.typeDefs, Todo.typeDefs].flat();
const resolvers = { ...todoById.resolvers };

module.exports = {
  typeDefs,
  resolvers,
};
