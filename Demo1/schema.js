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
      getMusee: (root,{id},ctx) => {
        const res = ctx.data.find(x => x.id === id)
        return res
      },
      getMusees: (root,{},ctx) => {
        return [ctx.data[1],ctx.data[2]]
      }
    },
}

module.exports = {typeDefs,resolvers}