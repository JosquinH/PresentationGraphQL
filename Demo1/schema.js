const fs = require('fs')

const typeDefs = `#graphql
  type Query {
    test: String
  }
`
const resolvers = {
    Query: {
      test: async (_1,_2,{data}) => {
        console.log(data)
        return 'Hello World !'
      }
    },
}

module.exports = {typeDefs,resolvers}