const Todos = require('./Todos');

const typeDefs = [Todos.typeDefs].flat();
const resolvers = { ...Todos.resolvers };

module.exports = {
  typeDefs,
  resolvers,
};
