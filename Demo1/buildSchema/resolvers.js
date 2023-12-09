const {removeElementFromArray, compareId} = require('./utils')
const { v4: uuidv4 } = require('uuid')

const getMovies = (root,{},ctx) => {
    return ctx.data
}

const getMovie = (root,{id},ctx) => {
    return ctx.data.find(movie => movie.id === id)
}

const createMovie = (root,{input},ctx) => {
    input.id = uuidv4()
    input.director.id = uuidv4()
    if (input.actors !== undefined) {
        input.actors = input.actors.map(actor => ({id : uuidv4(), ...actor}))
    }
    ctx.data.push(input)
    return input
}

const Query = {getMovies,getMovie}
const Mutation = {createMovie}

module.exports = {resolvers:{Query,Mutation}}