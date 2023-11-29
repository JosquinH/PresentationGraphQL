const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema');
const fs = require('fs')

 getApolloServer = async () => {
    const app = express()
    
    const data = await fs.readFileSync('Data/musee.json', 'utf8')

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        playground: 'true',
        context: (...params) => {
            return {...params, data : JSON.parse(data)}
        }
    })
    
    await server.start();

    server.applyMiddleware({ app });

    app.use((req, res) => {
        res.status(200)
        res.send('Hello!')
        res.end()
    });

    return app
}

module.exports = {
    getApolloServer
}