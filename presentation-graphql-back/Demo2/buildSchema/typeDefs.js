const { gql } = require('apollo-server')

const typeDefs = gql`
  type Messages {
    id : ID!
    senderId : ID!
    recipientId : ID!
    body : String!
  }

  type User {
    id : ID!
    pseudo : String!
  }

  type Query {
    getUsers: [User!]!
  }

`

module.exports= {typeDefs}


