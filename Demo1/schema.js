const { gql } = require('apollo-server')

const typeDefs = gql`
  type Musee {
    id : String!
    nom : String!
  }

  type Query {
    getMusee(id: String!) : Musee! 
    getMusees : [Musee!]
  }
`

const resolvers = {
    Query: {
      getMusee: (_1,{id},{data}) => {
        return data.find(x => x.id === id)
      },
      getMusees: (_1,_2,{data}) => {
        return [data[1],data[2]]
      }
    },
}

module.exports = {typeDefs,resolvers}