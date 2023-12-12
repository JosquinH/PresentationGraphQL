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

  enum Brand {
    TOYOTA
    SUZUKI
    NISSAN
    HONDA
  }

  type Car {
    id : ID!
    model : String!
    brand : Brand!
    year : Int!
    price : Float!
    manual : Boolean!
  }

  type PersonalCar {
    numberplate : ID!
    car : Car!
  }

  type Garage {
    id : ID!
    personalCars : [PersonalCar!]!
  }

  input CreateCarInput {
    model : String!
    brand : Brand!
    year : Int!
    price : Float!
    manual : Boolean!
  }

  input UpdateCarInput {
    model : String
    brand : Brand
    year : Int
    price : Float
    manual : Boolean
  }

  input CarFilterInput {
    model : String
    brand : Brand
    year : Int
    price : Float
    manual : Boolean
  }

  type Query {
    getCars(filter:CarFilterInput) : [Car!]!
    getGarage(id: ID!) : Garage
  }

  type Mutation {
    createCar(input: CreateCarInput!) : Car!
    updateCar(id: ID! input: UpdateCarInput!) : Car!
    deleteGarage(id: ID!) : Garage
  }



`

module.exports= {typeDefs}


