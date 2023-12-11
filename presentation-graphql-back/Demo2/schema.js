const { gql } = require('apollo-server')
const {typeDefs} = require('./buildSchema/typeDefs')
const {resolvers} = require('./buildSchema/resolvers')

module.exports = {typeDefs,resolvers}