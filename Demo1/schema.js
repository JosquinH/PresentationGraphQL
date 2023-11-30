const { gql } = require('apollo-server')
const {removeElementFromArray, compareId} = require('./utils')

const typeDefs = gql`
  type Musee {
    id : String!
    nom : String!
    ville : String!
  }

  input CreateMuseeInput {
    id : String!
    nom: String!
    ville : String!
  }

  input UpdateMuseeInput {
    nom: String
    ville: String
  }

  type Query {
    getMusee(id: String!) : Musee! 
    getMusees : [Musee!]
  }

  type Mutation {
    createMusee(input: CreateMuseeInput!) : Musee!
    updateMusee(id: String!, input: UpdateMuseeInput!) : Musee!
    deleteMusee(id: String!) : String!
  }

`

const resolvers = {
    Query: {
      getMusee: (root,{id},ctx) => {
        const res = ctx.data.find(x => x.id === id)
        return res
      },
      getMusees: (root,{},ctx) => {
        return ctx.data
      }
    },
    Mutation: {
      createMusee: (root,{input},ctx) => {
        ctx.data.push(input)
        return input
      },
      updateMusee: (root,{id, input}, ctx) => {
        const musee = ctx.data.find(x => x.id === id)
        if (musee !== undefined) {
          for (const props of Object.keys(input)) {
            musee[props] = input[props]
          }
        }
        return musee
      },
      deleteMusee: (root,{id}, ctx) => { 
        if (ctx.data.findIndex(x => x.id === id) !== -1) {
          removeElementFromArray(ctx.data,id,compareId)
        }
        return id
      }
    }
}

module.exports = {typeDefs,resolvers}