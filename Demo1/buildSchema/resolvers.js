const { v4: uuidv4 } = require('uuid')
const fs = require('fs')

const getMovies = (root,{},ctx) => {
    return JSON.parse(fs.readFileSync(ctx.filename,'utf8'))
}

const getMovie = (root,{id},ctx) => {
    const data = getMovies(root,{},ctx)
    return data.find(movie => movie.id === id)
}

const createMovie = (root,{input},ctx) => {
    input.id = uuidv4()
    input.director.id = uuidv4()
    if (input.actors !== undefined) {
        input.actors = input.actors.map(actor => ({id : uuidv4(), ...actor}))
    }
    const data = JSON.parse(fs.readFileSync(ctx.filename,'utf8'))
    data.push(input)
    fs.writeFileSync(ctx.filename,JSON.stringify(data))
    return input
}

const updateMovie = (root,{id,input},ctx) => {
    const data = getMovies(root,{},ctx)
    const movieIdx = data.findIndex(movie => movie.id === id)
    const newMovie = Object.entries(input).reduce((movieAcc,[movieField,movieFieldValue]) => {
        if (movieField === 'director') {
            movieAcc['director'] = Object.entries(movieFieldValue).reduce((directorAcc,[directorField, directorFieldValue]) => {
                directorAcc[directorField] = directorFieldValue
                return directorAcc
            },data[movieIdx].director)
        } else {
            movieAcc[movieField] = movieFieldValue
        }
        return movieAcc
    },data[movieIdx])
    data[movieIdx] = newMovie
    fs.writeFileSync(ctx.filename,JSON.stringify(data))
    return newMovie
}

const deleteMovie = (root,{id},ctx) => {
    const data = getMovies(root,{},ctx)
    const movieToDelete = data.find(movie => movie.id === id)
    fs.writeFileSync(ctx.filename,JSON.stringify(data.filter(movie => movie.id !== id)))
    return movieToDelete
}    

const Query = {getMovies,getMovie}
const Mutation = {createMovie,updateMovie,deleteMovie}

module.exports = {resolvers:{Query,Mutation}}