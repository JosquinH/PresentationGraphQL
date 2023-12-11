const { v4: uuidv4 } = require('uuid')
const fs = require('fs')

// QUERY

const getUsers = (root,{},ctx) => {
    const data = fs.readFileSync(ctx.filename,'utf8')
    return JSON.parse(fs.readFileSync(ctx.filename,'utf8'))
}



const Query = {getUsers}

module.exports = {resolvers:{Query}}