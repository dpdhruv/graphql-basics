const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const http = require('http');
const TodoDataSource = require('./DataSources/TodoDataSource/TodoDataSource');
const schema = require('./Schema');

const app = express();

const server = new ApolloServer({
  typeDefs: schema.typeDefs,
  resolvers: schema.resolvers,
  dataSources: () => ({
    todoService: new TodoDataSource(),
  }),
});

server.applyMiddleware({
  app,
  path: '/',
  cors: {
    origin: '*',
    credentials: true,
  },
});

const httpServer = http.createServer(app);

httpServer.listen(4000, () => {
  console.info(`Graphql server is ready at http://localhost:4000`);
});
