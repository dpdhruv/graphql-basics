const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    todoById(id: ID!): Todo!
  }
`;

const resolvers = {
  Query: {
    todoById: async (parent, args, context) =>
      context.dataSources.todoService.getTodoById({
        id: args.id,
      }),
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
