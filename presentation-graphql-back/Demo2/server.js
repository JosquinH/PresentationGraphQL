const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./schema')

const getApolloServer = async () => {
    const app = express()
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        playground: true,
        tracing: true,
        cacheControl: true,
        context: (...params) => {
            return {...params, filename : 'Data/Utilisateurs.json'}
        }
    })
    
    await server.start()

    server.applyMiddleware({ app })

    return app
}

module.exports = {getApolloServer}