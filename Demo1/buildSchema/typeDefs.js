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

  input CreateMovieInput {
    title : String!
    director : CreateHumanInput!
    year: Int!
    releaseInFrance: Boolean!
    actors: [CreateHumanInput!]
  }

  input UpdateMovieInput {
    title: String
    director: UpdateHumanInput
    year: Int
    releaseInFrance: Boolean
  }

  input CreateHumanInput {
    name: String!
    firstname: String!
    birthDate: String!
    sex: Sex!
  }

  input UpdateHumanInput {
    name: String
    firstname: String
    birthDate: String
    sex: Sex
  }

  enum Sex {
    MAN
    WOMAN
    NEUTRAL
  }

  type Query {
    getMovies: [Movie!]!
    getMovie(id:ID!) : Movie
  }

  type Mutation {
    createMovie(input:CreateMovieInput!): Movie!
    updateMovie(id: ID!, input:UpdateMovieInput!): Movie!
    deleteMovie(id: ID!) : Movie!
    addActorToMovie(movieId: ID!, actorInput: CreateHumanInput!) : Movie!
    updateActorFromMovie(movieId: ID!, actorId: ID!, actorInput: UpdateHumanInput!) : Movie!
    deleteActorFromMovie(movieId: ID!, actorId: ID!) : Movie!
  }
`

module.exports= {typeDefs}


