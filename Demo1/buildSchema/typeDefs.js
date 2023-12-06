const { gql } = require('apollo-server')

const typeDefs = gql`
  type Movie {
    id : ID!
    name : String!
    director : Human!
    year: Int!
    seen: Boolean!
    actors: [Human!]
  }

  type Human {
    name : String!
    firstname : String!
    birthDate : String!
    sex : Sex!
  }

  enum Sex {
    MAN
    WOMAN
    NEUTRAL
  }

  type Query {
    getMovies: [Movie]
  }
`

module.exports= {typeDefs}


