const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const schema = require('./buildSchema').nexusSchema

const getApolloServer = async () => {
    const app = express()
    const server = new ApolloServer({
        schema,
        playground: true,
        tracing: true,
        cacheControl: true,
        context: (...params) => {
            return {...params, carsFilename : 'Data/Cars.json'}
        }
    })
    
    await server.start()

    server.applyMiddleware({ app })

    return app
}

module.exports = {getApolloServer}