const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./schema')

 getApolloServer = async () => {
    const app = express()
    
    const data = []

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        playground: true,
        context: (...params) => {
            return {...params, data : data}
        }
    })
    
    await server.start()

    server.applyMiddleware({ app })

    return app
}

module.exports = {getApolloServer}