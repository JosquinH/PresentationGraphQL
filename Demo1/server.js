const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./schema')
const fs = require('fs')

const data = fs.readFileSync('Data/Films.json', 'utf8')

const getApolloServer = async () => {
    const app = express()
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        playground: true,
        tracing: true,
        cacheControl: true,
        context: (...params) => {
            return {...params, data : JSON.parse(data)}
        }
    })
    
    await server.start()

    server.applyMiddleware({ app })

    return app
}

module.exports = {getApolloServer}