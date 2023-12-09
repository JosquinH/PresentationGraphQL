const { gql } = require('apollo-server')

const typeDefs = gql`
  type Movie {
    id : ID!
    title : String!
    director : Human!
    year: Int!
    releaseInFrance: Boolean!
    actors: [Human!]
  }

  type Human {
    id : ID!
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

  input CreateMovieInput {
    title : String!
    director : CreateHumanInput!
    year: Int!
    releaseInFrance: Boolean!
    actors: [CreateHumanInput!]
  }

  input CreateHumanInput {
    name : String!
    firstname : String!
    birthDate : String!
    sex : Sex!
  }

  type Query {
    getMovies: [Movie!]!
    getMovie(id:ID!) : Movie
  }

  type Mutation {
    createMovie(input:CreateMovieInput!) : Movie!
  }
`

module.exports= {typeDefs}


