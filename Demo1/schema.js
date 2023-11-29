const { gql } = require('apollo-server')

const typeDefs = gql`
  type Musee {
    id : String!
    nom : String!
  }

  type Query {
    getMusee : [Musee!]
  }
`;

module.exports = typeDefs;
const resolvers = {
    Query: {
      getMusee: (_1,_2,{data}) => {
        return [data[1],data[2]]
      }
    },
}

module.exports = {typeDefs,resolvers}