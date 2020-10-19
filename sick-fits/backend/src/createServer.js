// GraphQL Yoga is a server built on top of Express + Apollo Server
const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');

// Create GraphQl Yoga Server
function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query
    },
    // Random issue led to this option getting set to false - Wes Bos
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    // hook up the database access to the resolvers using context
    context: request => ({ ...request, db })
  })
}

module.exports = createServer

