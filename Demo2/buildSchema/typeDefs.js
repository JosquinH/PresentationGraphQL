const { gql } = require('apollo-server')

const typeDefs = gql`
  type Message {
    id : ID!
    senderId : ID!
    recipientId : ID!
    date: String!
    body : String!
  }

  type User {
    id : ID!
    pseudo : String!
  }

  input CreateUserInput {
    pseudo : String!
  }

  input CreateMessageInput {
    senderId : ID!
    recipientId : ID!
    date: String!
    body : String!
  }

  type Query {
    getUsers: [User!]!
    getMessages : [Message!]!
  }

  type Mutation {
    createUser(input: CreateUserInput!) : User!
    createMessage(input: CreateMessageInput!) : Message!
  }

`

module.exports= {typeDefs}


