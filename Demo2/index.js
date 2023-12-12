require('dotenv').config()

const {getApolloServer} = require('./server.js')
    
getApolloServer().then((app) => 
    app.listen(process.env.PORT2, () => {
        console.log(`🚀 Server ready running at http://localhost:${process.env.PORT2}  `)
        console.log(`🚀 Playground ready running at http://localhost:${process.env.PORT2}/graphql  `)
    })
)

