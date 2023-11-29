const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./schema')
const fs = require('fs')

 getApolloServer = async () => {
    const app = express()
    
    const data = await fs.readFileSync('Data/Musee.json', 'utf8')

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        tracing: true,
        cacheControl: true,
        playground: true,
        context: (...params) => {
            return {...params, data : JSON.parse(data)}
        }
    })
    
    await server.start()

    server.applyMiddleware({ app })

    return app
}

module.exports = {getApolloServer}