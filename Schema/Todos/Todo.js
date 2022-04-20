const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Todo {
    title: String
    id: ID!
    completed: Boolean!
    userId: ID
  }
`;

module.exports = {
  typeDefs,
};
