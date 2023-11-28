const typeDefs = `#graphql
  type Query {
    test: String
  }
`
const resolvers = {
    Query: {
      test: () => 'Hello World !',
    },
}

module.exports = {typeDefs,resolvers}