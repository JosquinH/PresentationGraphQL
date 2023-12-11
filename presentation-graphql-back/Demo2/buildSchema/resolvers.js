const { v4: uuidv4 } = require('uuid')
const fs = require('fs')

// QUERY

const getUsers = (root,{},ctx) => {
    return JSON.parse(fs.readFileSync(ctx.userFilename,'utf8'))
}

const getMessages = (root,{},ctx) => {
    return JSON.parse(fs.readFileSync(ctx.messageFilename,'utf8'))
}
// MUTATION

const createUser = (root,{input},ctx) => {
    const data = getUsers(root,{},ctx)
    input.id = uuidv4()
    data.push(input)
    fs.writeFileSync(ctx.userFilename,JSON.stringify(data))
    return input
}

const createMessage = (root,{input},ctx) => {
    const data = getMessages(root,{},ctx)
    input.id = uuidv4()
    data.push(input)
    fs.writeFileSync(ctx.messageFilename,JSON.stringify(data))
    return input
}


const Query = {getUsers,getMessages}
const Mutation = {createUser,createMessage}

module.exports = {resolvers:{Query,Mutation}}